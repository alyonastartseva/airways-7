import type { Pagination } from '@shared/ui/Pagination/Pagination.types';

export function SkeletonTable({
  title,
  rowsCount,
  columnsCount,
  columns,
  pagination,
  selectable,
}: {
  title: string;
  rowsCount: number;
  columnsCount: number;
  columns: { key: string; width: number; sortable: boolean; title: string }[];
  pagination: Pagination;
  selectable: boolean;
}) {
  const a = { title, rowsCount, columnsCount, columns, pagination, selectable };
  return <div data-a={a}></div>;
}
