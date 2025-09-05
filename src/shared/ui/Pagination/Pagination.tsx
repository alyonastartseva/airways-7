import classes from './Pagination.module.scss';
import type { PaginationProps } from './Pagination.types';
import { PAGINATION_CONFIG } from '@shared/config/config';
import { useEffect, useState } from 'react';

const Pagination = ({
  totalItems = PAGINATION_CONFIG.DEFAULTS.total,
  itemsPerPage = PAGINATION_CONFIG.DEFAULTS.pageSize,
  currentPage = PAGINATION_CONFIG.DEFAULTS.page,
  onPageChange,
  maxVisiblePages = 5,
}: PaginationProps) => {
  const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);
  const [visiblePages, setVisiblePage] = useState<number[]>([]);

  useEffect(() => {
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }
    console.log(classes);

    setVisiblePage(Array.from({ length: end - start + 1 }, (_, i) => start + i));
  }, [currentPage, totalPages, maxVisiblePages]);

  if (totalPages <= 1) return null;

  return (
    <nav className={classes.pagination} aria-label="Pagination Navigation" role="navigation">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={classes.paginationButton}
        aria-label="Go to first page"
      >
        <div className={`${classes.paginationDoubleArrow} ${classes.paginationInvertArrow}`} />
      </button>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={classes.paginationButton}
        aria-label="Go to previous page"
      >
        <div className={`${classes.paginationArrow} ${classes.paginationInvertArrow}`} />
      </button>
      <div className={classes.paginationNumbers}>
        {visiblePages[0] > 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              aria-current={1 === currentPage ? 'page' : undefined}
              className={`${classes.paginationButton} ${1 === currentPage ? classes.active : ''}`}
            >
              1
            </button>

            {visiblePages[0] > 2 && <span className={classes.paginationEllipsis}>...</span>}
          </>
        )}

        {visiblePages.map((page) => (
          <button
            aria-label={`Go to page ${String(page)}`}
            aria-current={page === currentPage ? 'page' : undefined}
            key={page}
            onClick={() => onPageChange(page)}
            className={`${classes.paginationButton} ${page === currentPage ? classes.active : ''}`}
          >
            {page}
          </button>
        ))}

        {visiblePages[visiblePages.length - 1] < totalPages && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <span className={classes.paginationEllipsis}>...</span>
            )}
            <button
              aria-label={`Go to page ${totalPages}`}
              aria-current={totalPages === currentPage ? 'page' : undefined}
              onClick={() => onPageChange(totalPages)}
              className={`${classes.paginationButton} ${totalPages === currentPage ? classes.active : ''}`}
            >
              {totalPages}
            </button>
          </>
        )}
      </div>
      <button
        onClick={() => {
          onPageChange(Math.min(totalPages, currentPage + 1));
        }}
        disabled={currentPage === totalPages}
        className={classes.paginationButton}
        aria-label="Go to next page"
      >
        <div className={classes.paginationArrow} />
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={classes.paginationButton}
        aria-label="Go to last page"
      >
        <div className={classes.paginationDoubleArrow} />
      </button>
    </nav>
  );
};

export default Pagination;
