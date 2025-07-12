export type ColumnType = 'string' | 'number' | 'date';

export interface Column<T> {
  key: string;
  title: string;
  type?: ColumnType;
  sortable?: boolean;
  width?: number;
  render?: (value: unknown, row: T) => React.ReactNode;
}
