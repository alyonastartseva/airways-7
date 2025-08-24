import type { Column } from '../../../shared/model/Column.types';
import type { SortDirection } from '../../../shared/ui/SortIcons/SortIcons.types';
import type { JSX, ReactNode } from 'react';

export interface TableApiConfig<T> {
  useQuery: () => {
    data?: T[];
    isLoading: boolean;
    error?: unknown;
  };
}

export interface SortConfig<T> {
  key: keyof T & string;
  direction: SortDirection;
}

export interface TableHeaderProps<T> {
  columns: Column<T>[];
  sortConfig: SortConfig<T> | null;
  selectable?: boolean;
  selectedCount: number;
  totalCount: number;
  onSort: (key: keyof T & string) => void;
  onSelectAll: (args: { row?: T; checked: boolean }) => void;
}

export interface TableBodyProps<T> {
  data: T[];
  columns: Column<T>[];
  rowKey: keyof T & string;
  selectable?: boolean;
  selectedRows: T[];
  onRowClick?: (row: T) => void;
  onRowSelect?: (args: { row?: T; checked: boolean }) => void;
}

/** Описание одной кнопки/действия в колонке "Действия" */
export type RowAction<T> = {
  id: string;
  label?: string;
  icon?: ReactNode;
  onClick: (row: T) => void | Promise<void>;
  visible?: (row: T) => boolean;
  disabled?: (row: T) => boolean;
  danger?: boolean;
  confirm?: string;
};

/** Опции колонки "Действия" */
export type ActionColumnOptions = {
  width?: number;
  title?: string; // оставляем string, т.к. Column.title — string
};

export interface TableProps<T> {
  title: string;
  columns: Column<T>[];
  data?: T[];
  isLoading?: boolean;
  isError?: boolean;
  rowKey?: keyof T & string;
  selectable?: boolean;
  onRowClick?: (row: T) => void;
  onSelectionChange?: (selectedRows: T[]) => void;
  onError?: () => void;
  defaultSort?: {
    key: keyof T & string;
    direction: SortDirection;
  };
  rowActions?: RowAction<T>[] | ((row: T) => RowAction<T>[]);
  actionColumn?: ActionColumnOptions;
}

export interface Table {
  <T>(props: TableProps<T>): JSX.Element;
  displayName?: string;
}
