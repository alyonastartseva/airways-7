import type { Column } from '../../../../shared/model/Column.types';
import Pagination from '../../../../shared/ui/Pagination';
import type { Pagination as PaginationType } from '../../../../shared/ui/Pagination/Pagination.types';
import styles from './SkeletonTable.module.scss';

export const SkeletonTable = <T,>({
  title,
  rowsCount = 10,
  columnsCount,
  columns,
  pagination,
}: {
  title: string;
  rowsCount?: number;
  columnsCount: number;
  columns: Column<T>[];
  pagination: PaginationType;
}) => {
  return (
    <div className={styles['skeleton-container']}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles['skeleton-wrapper']}>
        <div className={styles['skeleton-header']}>
          {Array.from({ length: columnsCount }).map((_, i) => (
            <div
              key={`header-${i}`}
              className={styles['skeleton-th']}
              style={{ width: columns[i]?.width }}
            />
          ))}
        </div>

        <div className={styles['skeleton-body']}>
          {Array.from({ length: rowsCount }).map((_, rowIndex) => (
            <div key={`row-${rowIndex}`} className={styles['skeleton-row']}>
              {Array.from({ length: columnsCount }).map((_, colIndex) => (
                <div
                  key={`cell-${rowIndex}-${colIndex}`}
                  className={styles['skeleton-td']}
                  style={{ width: columns[colIndex]?.width }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ minHeight: '50px' }}>
        <Pagination
          totalItems={pagination.total}
          itemsPerPage={pagination.pageSize}
          currentPage={pagination.current}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
};
