import { type JSX } from "react";
import type { Column } from '../../../shared/model/Column.type'
import type { Pagination } from "./Pagination.type";

export type SortDirection = 'asc' | 'desc';

export interface ServerResponse<T> {
  data: T[];
  pagination: Pagination;
}

export interface TableProps<T> {
  title: string;
  columns: Column<T>[];
  fetchData: (
    params: {
      page: number;
      pageSize: number;
      sortField?: string;
      sortOrder?: SortDirection;
    }
  ) => Promise<ServerResponse<T>>;
  rowKey?: string;
  selectable?: boolean;
  onRowClick?: (row: T) => void;
  onSelectionChange?: (selectedRows: T[]) => void;
};

export interface Table { 
  <T>(props: TableProps<T>): JSX.Element;
  displayName?: string;
}