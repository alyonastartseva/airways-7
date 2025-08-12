import type { SortDirection } from '@shared/ui/SortIcons/SortIcons.types';
import type { ReactNode } from 'react';

export interface TableProps<T> {
  title: string;
  columns: {
    key: string;
    width: number;
    sortable: boolean;
    title: string;
    render: (a: T[keyof T], b: T) => ReactNode;
  }[];
  useQuery: () => { data: T[]; isLoading: boolean; error: boolean };
  rowKey: string;
  selectable: boolean;
  onRowClick: (row: T) => boolean;
  onSelectionChange: (idk: T[]) => void;
  defaultSort: {
    key: string;
    direction: SortDirection;
  };
}

export interface Table {
  displayName?: string;
}
