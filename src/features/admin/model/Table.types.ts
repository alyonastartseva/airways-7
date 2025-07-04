import type { Column } from '../../../shared/model/Column.types';
import type { Pagination } from '../../../shared/ui/Pagination/Pagination.types';
import type { SortDirection } from '../../../shared/ui/SortIcons/SortIcons.types';
import { type JSX } from 'react';

export interface ServerResponse<T> {
  data: T[];
  pagination: Pagination;
}

export interface TableProps<T> {
  title: string;
  columns: Column<T>[];
  fetchData: (params?: {
    page: number;
    pageSize: number;
    sortField?: string;
    sortOrder?: SortDirection;
  }) => Promise<ServerResponse<T>>;
  rowKey?: string;
  selectable?: boolean;
  onRowClick?: (row: T) => void;
  onSelectionChange?: (selectedRows: T[]) => void;
  defaultSort: {
    key: string;
    direction: SortDirection;
  };
}

export interface Table {
  <T>(props: TableProps<T>): JSX.Element;
  displayName?: string;
}
