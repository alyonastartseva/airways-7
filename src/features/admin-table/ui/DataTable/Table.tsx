import type { Column } from '../../../../shared/model/Column.types';
import Pagination from '../../../../shared/ui/Pagination';
import { useTablePagination } from '../../lib/useTablePagination';
import { useTableSelection } from '../../lib/useTableSelections';
import { useTableSort } from '../../lib/useTableSort';
import type { TableProps, Table as TableType, RowAction } from '../../model/types';
import { SkeletonTable } from '../SkeletonTable/SkeletonTable';
import { TableBody } from '../TableBody/TableBody';
import { TableHeader } from '../TableHeader/TableHeader';
import styles from './Table.module.scss';
import { MoreOutlined } from '@ant-design/icons';
import { Dropdown, Button, Modal } from 'antd';
import type { MenuProps } from 'antd';
import Alert from 'antd/es/alert';
import { memo, useMemo } from 'react';

export const TableInner = <T,>({
  title,
  columns,
  data = [],
  isLoading = false,
  isError = false,
  rowKey,
  selectable = false,
  onRowClick,
  onSelectionChange,
  onError,
  defaultSort,

  rowActions,
  actionColumn,
}: TableProps<T>) => {
  const safeRowKey = useMemo(
    () =>
      rowKey ||
      (Object.keys(data[0] || {}).includes('id')
        ? ('id' as keyof T & string)
        : (Object.keys(data[0] || {})[0] as keyof T & string)),
    [rowKey, data],
  );

  const { sortedData, sortConfig, handleSort } = useTableSort<T>(data, defaultSort);
  const { pagination, displayData, handlePageChange, resetToFirstPage } =
    useTablePagination<T>(sortedData);
  const { selectedRows, handleRowSelect, handleSelectAll } = useTableSelection<T>(
    safeRowKey,
    onSelectionChange,
  );

  const handleSortWithReset = (key: keyof T & string) => {
    handleSort(key);
    resetToFirstPage();
  };

  const [hookModal, modalCtx] = Modal.useModal();

  const finalColumns = useMemo<Column<T>[]>(() => {
    if (!rowActions) return columns as Column<T>[];

    const actionsCol: Column<T> = {
      key: '__actions' as keyof T & string,
      title: actionColumn?.title ?? '',
      width: actionColumn?.width ?? 44,
      render: (_: unknown, row: T) => {
        const list: RowAction<T>[] =
          typeof rowActions === 'function' ? rowActions(row) : rowActions;
        const available = list.filter((a) => (a.visible ? a.visible(row) : true));

        const items: MenuProps['items'] = available.map((a) => ({
          key: a.id,
          label: a.label,
          icon: a.icon,
          danger: a.danger,
          disabled: a.disabled ? a.disabled(row) : false,
        }));

        const onMenuClick: NonNullable<MenuProps['onClick']> = ({ key }) => {
          const action = available.find((a) => a.id === key);
          if (!action) return;

          if (action.confirm) {
            hookModal.confirm({
              title: action.confirm,
              okButtonProps: action.danger ? { danger: true } : undefined,
              onOk: () => action.onClick(row),
            });
          } else {
            action.onClick(row);
          }
        };

        return (
          <Dropdown
            menu={{ items, onClick: onMenuClick }}
            trigger={['click']}
            getPopupContainer={() => document.body}
          >
            <Button
              type="text"
              size="small"
              aria-label="Действия"
              className="moreBtn"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreOutlined rotate={90} />
            </Button>
          </Dropdown>
        );
      },
    };

    return [...(columns as Column<T>[]), actionsCol];
  }, [columns, rowActions, actionColumn, hookModal]);

  if (isLoading)
    return (
      <SkeletonTable
        title={title}
        rowsCount={pagination.pageSize}
        columnsCount={finalColumns.length}
        columns={finalColumns}
        pagination={pagination}
        selectable
      />
    );

  if (isError)
    return (
      <Alert
        data-testid="error"
        type="error"
        message="Error fetching data"
        onClose={onError}
        closable={true}
        showIcon
      />
    );

  if (!isLoading && data.length === 0)
    return (
      <Alert
        data-testid="no-data"
        type="info"
        message="No data available"
        onClose={onError}
        closable={true}
        showIcon
      />
    );

  return (
    <div className={styles.adminTable}>
      {modalCtx}

      <h1 className={styles.title} data-testid="table-title">
        {title}
      </h1>

      <div className={`${styles.tableContainer} BaseTable`}>
        <table
          role="table"
          aria-label={title}
          aria-rowcount={pagination.total}
          aria-colcount={finalColumns.length + (selectable ? 1 : 0)}
        >
          <colgroup>
            {finalColumns.map((col) => (
              <col key={col.key as string} style={{ width: col.width as number | undefined }} />
            ))}
          </colgroup>

          <TableHeader
            columns={finalColumns}
            sortConfig={sortConfig}
            selectable={selectable}
            selectedCount={selectedRows.length}
            totalCount={displayData.length}
            onSort={handleSortWithReset}
            onSelectAll={(args) => handleSelectAll(args.checked, displayData)}
          />

          <TableBody
            data={displayData}
            columns={finalColumns}
            rowKey={safeRowKey}
            selectable={selectable}
            selectedRows={selectedRows}
            onRowClick={onRowClick}
            onRowSelect={handleRowSelect}
          />
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

export const Table = memo(TableInner, (prevProps, nextProps) => {
  return (
    prevProps.data === nextProps.data &&
    prevProps.isLoading === nextProps.isLoading &&
    prevProps.isError === nextProps.isError &&
    prevProps.rowKey === nextProps.rowKey &&
    prevProps.selectable === nextProps.selectable &&
    prevProps.onRowClick === nextProps.onRowClick &&
    prevProps.onSelectionChange === nextProps.onSelectionChange &&
    prevProps.defaultSort === nextProps.defaultSort
  );
}) as TableType;
