import Pagination from '../../../../shared/ui/Pagination';
import type { Pagination as PaginationType } from '../../../../shared/ui/Pagination/Pagination.types';
import type { SortDirection, TableProps, Table as TableType } from '../../model/Table.types';
import { SkeletonTable } from '../SkeletonTable/SkeletonTable';
import styles from './Table.module.scss';
import React, { useState, useEffect, useMemo } from 'react';

export const TableInner = <T,>({
  title,
  columns,
  fetchData,
  rowKey = 'id',
  selectable = false,
  onRowClick,
  onSelectionChange,
}: TableProps<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationType>({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: SortDirection;
  } | null>(null);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const memoizedColumns = useMemo(() => columns, [columns]);

  const loadData = async (page: number, pageSize: number) => {
    setLoading(true);
    try {
      const response = await fetchData({ page, pageSize });
      setData(response.data);
      setPagination(response.pagination);
      setError(null);
    } catch (error) {
      setError('Error fetching');
      console.error('Fetch error', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(1, 10);
  }, []);

  useEffect(() => {
    const sortedData = [...data];
    if (sortConfig) {
      sortedData.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof T];
        const bValue = b[sortConfig.key as keyof T];

        if (aValue === bValue) return 0;
        if (aValue == null) return sortConfig.direction === 'asc' ? -1 : 1;
        if (bValue == null) return sortConfig.direction === 'asc' ? 1 : -1;

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortConfig.direction === 'asc'
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        return sortConfig.direction === 'asc'
          ? aValue > bValue
            ? 1
            : -1
          : aValue < bValue
            ? 1
            : -1;
      });
    }
    setData(sortedData);
  }, [sortConfig]);

  const handlePageChange = (page: number) => {
    setPagination((prev) => ({
      ...prev,
      current: page,
    }));
    loadData(page, pagination.pageSize);
  };

  // const handlePageSizeChange = (size: number) => {
  //   setPagination(prev => ({
  //     ...prev,
  //     pageSize: size,
  //     current: 1
  //   }));
  //   loadData(1, size);
  // };

  const handleSort = (key: string) => {
    const direction: SortDirection =
      sortConfig?.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
  };

  const handleRowSelect = (row: T, checked: boolean) => {
    const newSelected = checked
      ? [...selectedRows, row]
      : selectedRows.filter((r) => r[rowKey as keyof T] !== row[rowKey as keyof T]);

    setSelectedRows(newSelected);
    onSelectionChange?.(newSelected);
  };

  const handleSelectAll = (checked: boolean) => {
    const newSelected = checked ? data : [];
    setSelectedRows(newSelected);
    onSelectionChange?.(newSelected);
  };

  if (loading)
    return (
      <SkeletonTable
        title={title}
        rowsCount={pagination.pageSize}
        columnsCount={memoizedColumns.length}
        columns={memoizedColumns}
        pagination={pagination}
      />
    );

  if (error) return <div>Error</div>;

  return (
    <div className={styles['admin-table']}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles['table-container']}>
        <table title={title}>
          <colgroup>
            {columns.map((col) => (
              <col key={col.key} style={{ width: col.width }} />
            ))}
          </colgroup>
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  style={{ width: column.width }}
                  onClick={() => column.sortable && handleSort(column.key)}
                  className={column.sortable ? styles.sortable : ''}
                >
                  <div className={styles['header-cell']}>
                    {column.title}
                    {column.sortable && (
                      <span className={styles['sort-icons']}>
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          className={`${styles['sort-icon']} ${
                            sortConfig?.key === column.key && sortConfig?.direction === 'asc'
                              ? styles.active
                              : ''
                          }`}
                        >
                          <path d="M5 0L9.33013 5.25H0.669873L5 0Z" fill="currentColor" />
                        </svg>
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          className={`${styles['sort-icon']} ${
                            sortConfig?.key === column.key && sortConfig?.direction === 'desc'
                              ? styles.active
                              : ''
                          }`}
                        >
                          <path d="M5 6L0.669873 0.75H9.33013L5 6Z" fill="currentColor" />
                        </svg>
                      </span>
                    )}
                  </div>
                </th>
              ))}
              {selectable && (
                <th className={styles.selector}>
                  <input
                    type="checkbox"
                    checked={selectedRows.length === data.length && data.length > 0}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                  />
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr
                key={String(row[rowKey as keyof T])}
                onClick={() => onRowClick?.(row)}
                className={onRowClick ? `${styles.clickable}` : ' '}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`${styles['table-cell']} ${styles['ellipsis-cell']}`}
                    style={{ width: column.width }}
                  >
                    {column.render
                      ? column.render(row[column.key as keyof T], row)
                      : String(row[column.key as keyof T])}
                  </td>
                ))}

                {selectable && (
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.some(
                        (r) => r[rowKey as keyof T] === row[rowKey as keyof T],
                      )}
                      onChange={(e) => handleRowSelect(row, e.target.checked)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ minHeight: '50px' }}>
        <Pagination
          totalItems={pagination.total}
          itemsPerPage={pagination.pageSize}
          currentPage={pagination.current}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export const Table = React.memo(TableInner) as TableType;
