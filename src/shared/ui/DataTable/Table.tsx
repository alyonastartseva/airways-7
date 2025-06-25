import styles from './Table.module.scss';
import { useState, useMemo, useEffect } from 'react';

type SortDirection = 'asc' | 'desc';
type ColumnType = 'string' | 'number' | 'date';

export interface  Column<T> {
  key: string;
  title: string;
  type?: ColumnType;
  sortable?: boolean;
  width?: number;
  render?: (value: any, row: T) => React.ReactNode;
};

interface Pagination {
  current: number;
  pageSize: number;
  total: number;
}

interface ServerResponse<T> {
  data: T[];
  pagination: Pagination;
}

export interface TableProps<T> {
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

export const Table = <T,>({ 
  columns,
  fetchData, 
  rowKey = 'id', 
  selectable = false,
  onRowClick, 
  onSelectionChange 
}: TableProps<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Pagination>({
    current: 1,
    pageSize: 10,
    total: 0
  });
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: SortDirection;
  } | null>(null);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const loadData = async (page: number, pageSize: number) => {
    setLoading(true);
    try{
      const response = await fetchData({
        page,
        pageSize,
        sortField: sortConfig?.key,
        sortOrder: sortConfig?.direction,
      });

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
    loadData(pagination.current, pagination.pageSize);
  }, []);
  
  <table className={styles.table}>
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={String(col.key)} style={{ width: col.width }}>
            {col.title}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, idx) => (
        <tr key={idx} onClick={() => onRowClick?.(item)}>
          {columns.map((col) => (
            <td key={String(col.key)}>{String(item[col.key])}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
}