import type { Column } from '../../../../shared/model/Column.types';
import { SortIconAsc } from '../../../../shared/ui/SortIcons/SortIcons';
import type { TableHeaderProps } from '../../model/types';
import styles from '../DataTable/Table.module.scss';

export const TableHeader = <T,>({
  columns,
  sortConfig,
  selectable,
  selectedCount,
  totalCount,
  onSort,
  onSelectAll,
}: TableHeaderProps<T>) => {
  const handleHeaderKeyDown = (e: React.KeyboardEvent, column: Column<T>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (column.sortable) onSort(column.key);
    }
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            role="columnheader"
            tabIndex={column.sortable ? 0 : -1}
            onKeyDown={(e) => handleHeaderKeyDown(e, column)}
            aria-sort={
              sortConfig?.key === column.key
                ? sortConfig.direction === 'asc'
                  ? 'ascending'
                  : 'descending'
                : column.sortable
                  ? 'none'
                  : undefined
            }
            data-testid={column.key === 'id' ? 'sort-id' : ''}
            key={column.key}
            style={{ width: column.width }}
            onClick={() => column.sortable && onSort(column.key)}
            className={column.sortable ? styles.sortable : ''}
          >
            <div className={styles.headerCell}>
              {column.title}
              {column.sortable && (
                <span className={styles.sortIcons}>
                  <SortIconAsc sortConfig={sortConfig} columnKey={column.key} />
                </span>
              )}
            </div>
          </th>
        ))}
        {selectable && (
          <th role="columnheader" aria-label="Select all" className={styles.selector}>
            <input
              type="checkbox"
              aria-label="Select all"
              checked={selectedCount === totalCount && totalCount > 0}
              onChange={(e) => onSelectAll(e.target.checked)}
            />
          </th>
        )}
      </tr>
    </thead>
  );
};
