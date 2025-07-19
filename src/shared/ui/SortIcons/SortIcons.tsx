import styles from './SortIcons.module.scss';
import type { SortDirection } from './SortIcons.types';
import { useEffect, useState } from 'react';

export const SortIconAsc = ({
  sortConfig,
  columnKey,
}: {
  sortConfig: { key: string; direction: SortDirection } | null;
  columnKey: string;
}) => {
  const [isActiveAsc, setIsActive] = useState(false);
  const [isActiveDesc, setIsDective] = useState(false);

  useEffect(() => {
    if (sortConfig?.direction === 'asc') {
      setIsActive(true);
      setIsDective(false);
    }
    if (sortConfig?.direction === 'desc') {
      setIsDective(true);
      setIsActive(false);
    }
  }, [sortConfig?.direction, columnKey]);

  return (
    <>
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        className={`${styles.sortIcon} ${
          sortConfig?.key === columnKey && isActiveAsc ? styles.active : ''
        }`}
      >
        <path d="M5 0L9.33013 5.25H0.669873L5 0Z" fill="currentColor" />
      </svg>

      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        className={`${styles.sortIcon} ${
          sortConfig?.key === columnKey && isActiveDesc ? styles.active : ''
        }`}
      >
        <path d="M5 6L0.669873 0.75H9.33013L5 6Z" fill="currentColor" />
      </svg>
    </>
  );
};
