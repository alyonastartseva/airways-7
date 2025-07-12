import { PAGINATION_CONFIG } from '../../../../shared/config/config';
import { sanitazeHtml } from '../../../../shared/lib/utils/sanitize';
import type { Column } from '../../../../shared/model/Column.types';
import Pagination from '../../../../shared/ui/Pagination';
import type { Pagination as PaginationType } from '../../../../shared/ui/Pagination/Pagination.types';
import { SortIconAsc } from '../../../../shared/ui/SortIcons/SortIcons';
import type { SortDirection } from '../../../../shared/ui/SortIcons/SortIcons.types';
import type { TableProps, Table as TableType } from '../../model/Table.types';
import { SkeletonTable } from '../SkeletonTable/SkeletonTable';
import styles from './Table.module.scss';
import Alert from 'antd/es/alert';
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const TableInner = <T,>({
  title,
  columns,
  useQuery,
  rowKey = 'id' as keyof T & string,
  selectable = false,
  onRowClick,
  onSelectionChange,
  defaultSort,
}: TableProps<T>) => {
  const { data: dataAll = [], isLoading: loading, error } = useQuery();

  const [pagination, setPagination] = useState<PaginationType>({
    current: PAGINATION_CONFIG.DEFAULTS.page,
    pageSize: PAGINATION_CONFIG.DEFAULTS.pageSize,
    total: PAGINATION_CONFIG.DEFAULTS.total,
  });
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T & string;
    direction: SortDirection;
  } | null>(defaultSort || null);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const navigate = useNavigate();

  const sortedData = useMemo(() => {
    if (!sortConfig) return dataAll;

    return [...dataAll].sort((a, b) => {
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

      return sortConfig.direction === 'asc' ? (aValue > bValue ? 1 : -1) : aValue < bValue ? 1 : -1;
    });
  }, [dataAll, sortConfig]);

  const displayData = useMemo(() => {
    const startIndex = (pagination.current - 1) * pagination.pageSize;
    return sortedData.slice(startIndex, startIndex + pagination.pageSize);
  }, [pagination, sortedData]);

  useEffect(() => {
    setPagination((prev) => ({ ...prev, total: dataAll.length }));
  }, [dataAll.length]);

  const handlePageChange = useCallback((page: number) => {
    setPagination((prev) => ({
      ...prev,
      current: page,
    }));
  }, []);

  const handleSort = useCallback(
    (key: keyof T & string) => {
      const direction: SortDirection =
        sortConfig?.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
      setSortConfig({ key, direction });
      setPagination((prev) => ({ ...prev, current: 1 }));
    },
    [sortConfig],
  );

  const handleHeaderKeyDown = (e: React.KeyboardEvent, column: Column<T>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (column.sortable) handleSort(column.key);
    }
  };

  const handleRowSelect = (row: T, checked: boolean) => {
    const newSelected = checked
      ? [...selectedRows, row]
      : selectedRows.filter((r) => r[rowKey as keyof T] !== row[rowKey as keyof T]);

    setSelectedRows(newSelected);
    onSelectionChange?.(newSelected);
  };

  const handleRowKeyDown = (e: React.KeyboardEvent, row: T) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (selectable) {
        const isSelected = selectedRows.some(
          (r) => r[rowKey as keyof T] === row[rowKey as keyof T],
        );
        handleRowSelect(row, !isSelected);
      } else {
        onRowClick?.(row);
      }
    }
  };

  const handleSelectAll = (checked: boolean) => {
    const newSelected = checked ? displayData : [];
    setSelectedRows(newSelected);
    onSelectionChange?.(newSelected);
  };

  if (loading)
    return (
      <SkeletonTable
        title={title}
        rowsCount={pagination.pageSize}
        columnsCount={columns.length}
        columns={columns}
        pagination={pagination}
      />
    );

  if (error)
    return (
      <Alert
        data-testid="error"
        type="error"
        message="Error fetching data"
        onClose={() => navigate('/')}
        closable={true}
        showIcon
      />
    );
  if (!loading && dataAll.length === 0)
    return (
      <Alert
        data-testid="no-data"
        type="info"
        message="No data available"
        onClose={() => navigate('/')}
        closable={true}
        showIcon
      />
    );

  return (
    <div className={styles.adminTable}>
      <h1 className={styles.title} data-testid="table-title">
        {title}
      </h1>
      <div className={styles.tableContainer}>
        <table
          role="table"
          aria-label={title}
          aria-rowcount={pagination.total}
          aria-colcount={columns.length + (selectable ? 1 : 0)}
        >
          <colgroup>
            {columns.map((col) => (
              <col key={col.key} style={{ width: col.width }} />
            ))}
          </colgroup>
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
                  onClick={() => column.sortable && handleSort(column.key)}
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

export const Table = React.memo(TableInner) as TableType;
