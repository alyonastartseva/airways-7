import styles from './SortIcons.module.scss';
import type { SortDirection } from './SortIcons.types';
import { useEffect, useState } from 'react';

export const SortIcon = ({
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
        aria-labelledby="title asc"
        data-testid={'sort-icon-asc'}
        width="10"
        height="8"
        viewBox="0 0 8 6"
        fill="none"
        className={`${styles.sortIcon} ${
          sortConfig?.key === columnKey && isActiveAsc ? styles.active : ''
        }`}
      >
        <title id="title">Sort ascension</title>
        <desc id="asc">Sort ascension column</desc>
        <path
          d="M 4.11,0.18
           C 4.11,0.18 7.59,3.76 7.59,3.76
             7.59,3.76 6.40,4.92 6.40,4.92
             6.40,4.92 4.07,2.53 4.07,2.53
             4.07,2.53 1.69,4.86 1.69,4.86
             1.69,4.86 0.52,3.67 0.52,3.67
             0.52,3.67 4.11,0.18 4.11,0.18 Z"
          fill="currentColor"
        />
      </svg>

      <svg
        aria-labelledby="title desc"
        data-testid={'sort-icon-desc'}
        width="10"
        height="8"
        viewBox="0 0 8 6"
        fill="none"
        className={`${styles.sortIcon} ${
          sortConfig?.key === columnKey && isActiveDesc ? styles.active : ''
        }`}
      >
        <title id="title">Sort descension</title>
        <desc id="desc">Sort descension column</desc>
        <path
          d="M 3.87,5.32
           C 3.87,5.32 0.38,1.73 0.38,1.73
             0.38,1.73 1.58,0.57 1.58,0.57
             1.58,0.57 3.90,2.96 3.90,2.96
             3.90,2.96 6.29,0.63 6.29,0.63
             6.29,0.63 7.45,1.83 7.45,1.83
             7.45,1.83 3.87,5.32 3.87,5.32 Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};
