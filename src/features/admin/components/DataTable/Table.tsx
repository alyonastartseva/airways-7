import styles from './Table.module.scss';
import type { TableProps } from '@features/admin-table/model/types';
import SkeletonTable from '@features/admin-table/ui/SkeletonTable/SkeletonTable';
import { PAGINATION_CONFIG } from '@shared/config/config';
import type { Column } from '@shared/model/Column.types';
import Pagination from '@shared/ui/Pagination';
import type { Pagination as PaginationType } from '@shared/ui/Pagination/Pagination.types';
import { SortIcon } from '@shared/ui/SortIcons/SortIcons';
import type { SortDirection } from '@shared/ui/SortIcons/SortIcons.types';
import { Alert } from 'antd';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { JSX } from 'react';

const getVal = <T,>(row: T, key: string): unknown => (row as Record<string, unknown>)[key];

const TableInner = <T,>({
  title,
  columns,
  data,
  isLoading,
  isError,
  rowKey = 'id' as unknown as keyof T & string,
  selectable = false,
  onRowClick,
  onSelectionChange,
  defaultSort,
  onError,
}: TableProps<T>) => {
  const dataAll: T[] = useMemo(() => (Array.isArray(data) ? data : []), [data]);
  const loading = !!isLoading;
  const error = !!isError;

  const [displayData, setDisplayData] = useState<T[]>([]);
  const [pagination, setPagination] = useState<PaginationType>({
    current: PAGINATION_CONFIG.DEFAULTS.page,
    pageSize: PAGINATION_CONFIG.DEFAULTS.pageSize,
    total: PAGINATION_CONFIG.DEFAULTS.total,
  });

  const [sortConfig, setSortConfig] = useState<{ key: string; direction: SortDirection } | null>(
    defaultSort || null,
  );
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const memoizedColumns = useMemo(() => columns, [columns]);

  useEffect(() => {
    if (!defaultSort) setSortConfig({ key: 'id', direction: 'asc' });
  }, [defaultSort]);

  const sortData = useCallback(
    (dataToSort: T[]) => {
      if (!sortConfig) return dataToSort;
      const { key, direction } = sortConfig;
      const dir = direction === 'asc' ? 1 : -1;

      return [...dataToSort].sort((a, b) => {
        const aValue = getVal(a, key);
        const bValue = getVal(b, key);

        if (aValue === bValue) return 0;
        if (aValue == null) return -1 * dir;
        if (bValue == null) return 1 * dir;

        const aType = typeof aValue;
        const bType = typeof bValue;

        if (aType === 'string' && bType === 'string') {
          return dir === 1
            ? (aValue as string).localeCompare(bValue as string)
            : (bValue as string).localeCompare(aValue as string);
        }

        if (aType === 'number' && bType === 'number') {
          return (aValue as number) > (bValue as number) ? 1 * dir : -1 * dir;
        }

        return String(aValue).localeCompare(String(bValue)) * dir;
      });
    },
    [sortConfig],
  );

  const sortedData = useMemo(() => sortData(dataAll), [dataAll, sortData]);

  const { current, pageSize } = pagination;
  useEffect(() => {
    if (loading || error) return;
    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setDisplayData(sortedData.slice(startIndex, endIndex));
  }, [sortedData, current, pageSize, loading, error]);

  useEffect(() => {
    if (!loading) {
      setPagination((prev) => ({ ...prev, total: dataAll.length }));
    }
  }, [dataAll.length, loading]);

  const handlePageChange = useCallback((page: number) => {
    setPagination((prev) => ({ ...prev, current: page }));
  }, []);

  const handleSort = useCallback(
    (key: string) => {
      const direction: SortDirection =
        sortConfig?.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
      setSortConfig({ key, direction });
      setPagination((prev) => ({ ...prev, current: 1 }));
    },
    [sortConfig],
  );

  const handleRowSelect = useCallback(
    (row: T, checked: boolean) => {
      const newSelected = checked
        ? [...selectedRows, row]
        : selectedRows.filter((r) => r[rowKey as keyof T] !== row[rowKey as keyof T]);
      setSelectedRows(newSelected);
      onSelectionChange?.(newSelected);
    },
    [onSelectionChange, rowKey, selectedRows],
  );

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      const newSelected = checked ? displayData : [];
      setSelectedRows(newSelected);
      onSelectionChange?.(newSelected);
    },
    [displayData, onSelectionChange],
  );

  if (loading)
    return (
      <SkeletonTable
        title={title}
        rowsCount={pageSize}
        columnsCount={memoizedColumns.length}
        columns={memoizedColumns}
        pagination={pagination}
        selectable={selectable}
      />
    );

  if (error)
    return (
      <Alert type="error" message="Error fetching data" onClose={() => onError?.()} closable />
    );

  return (
    <div className={styles.adminTable}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.tableContainer}>
        <table title={title}>
          <colgroup>
            {columns.map((col: Column<T>) => (
              <col key={col.key} style={{ width: col.width }} />
            ))}
          </colgroup>

          <thead>
            <tr>
              {columns.map((column: Column<T>) => (
                <th
                  key={column.key}
                  style={{ width: column.width }}
                  onClick={() => column.sortable && handleSort(column.key)}
                  className={column.sortable ? styles.sortable : ''}
                >
                  <div className={styles.headerCell}>
                    {column.title}
                    {column.sortable && (
                      <span className={styles.sortIcons}>
                        <SortIcon sortConfig={sortConfig} columnKey={column.key} />
                      </span>
                    )}
                  </div>
                </th>
              ))}

              {selectable && (
                <th className={styles.selector}>
                  <input
                    type="checkbox"
                    checked={selectedRows.length === displayData.length && displayData.length > 0}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                  />
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {displayData.map((row) => (
              <tr
                key={String(row[rowKey as keyof T])}
                onClick={() => onRowClick?.(row)}
                className={onRowClick ? styles.clickable : undefined}
              >
                {columns.map((column: Column<T>) => (
                  <td
                    key={column.key}
                    className={`${styles.tableCell} ${styles.ellipsisCell}`}
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

      <div className={styles.pagination}>
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

export const Table = React.memo(TableInner) as <T>(p: TableProps<T>) => JSX.Element;
export default Table;
