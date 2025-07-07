import type { Column } from '../../../shared/model/Column.types';
import type { SortDirection } from '../../../shared/ui/SortIcons/SortIcons.types';
import { type JSX } from 'react';

type UseQueryType<T> = () => {
  data?: T[];
  isLoading: boolean;
  error?: unknown;
};

export interface TableProps<T> {
  title: string;
  columns: Column<T>[];
  useQuery: UseQueryType<T>;
  rowKey?: string;
  selectable?: boolean;
  onRowClick?: (row: T) => void;
  onSelectionChange?: (selectedRows: T[]) => void;
  defaultSort?: {
    key: string;
    direction: SortDirection;
  };
}

export interface Table {
  <T>(props: TableProps<T>): JSX.Element;
  displayName?: string;
}
