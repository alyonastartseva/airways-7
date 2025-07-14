import { sanitazeHtml } from '../../../../shared/lib/utils/sanitize';
import type { TableBodyProps } from '../../model/types';
import styles from '../DataTable/Table.module.scss';

export const TableBody = <T,>({
  data,
  columns,
  rowKey,
  selectable,
  selectedRows,
  onRowClick,
  onRowSelect,
}: TableBodyProps<T>) => {
  const handleRowKeyDown = (e: React.KeyboardEvent, row: T) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (selectable) {
        const isSelected = selectedRows.some(
          (r) => r[rowKey as keyof T] === row[rowKey as keyof T],
        );
        onRowSelect?.(row, !isSelected);
      } else {
        onRowClick?.(row);
      }
    }
  };

  return (
    <tbody>
      {data.map((row) => (
        <tr
          role="row"
          tabIndex={onRowClick ? 0 : -1}
          onKeyDown={(e) => handleRowKeyDown(e, row)}
          key={String(row[rowKey as keyof T])}
          onClick={() => onRowClick?.(row)}
          className={onRowClick ? `${styles.clickable}` : ' '}
        >
          {columns.map((column) => (
            <td
              role="cell"
              data-testid={`${column.key === 'id' ? 'test-id' : ''}`}
              key={column.key}
              className={`${styles.tableCell} ${styles.ellipsisCell}`}
              style={{ width: column.width }}
            >
              {column.render ? (
                column.render(row[column.key as keyof T], row)
              ) : (
                <span
                  dangerouslySetInnerHTML={{
                    __html: sanitazeHtml(String(row[column.key as keyof T])),
                  }}
                />
              )}
            </td>
          ))}

          {selectable && (
            <td role="cell">
              <input
                type="checkbox"
                aria-label={`Select row ${String(row[rowKey as keyof T])}`}
                checked={selectedRows.some((r) => r[rowKey as keyof T] === row[rowKey as keyof T])}
                onChange={(e) => onRowSelect?.(row, e.target.checked)}
                onClick={(e) => e.stopPropagation()}
              />
            </td>
          )}
        </tr>
      ))}
    </tbody>
  );
};
