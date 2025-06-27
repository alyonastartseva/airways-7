import { useState, useCallback, useRef, useEffect } from 'react';

export interface Destination {
  id: number;
  city: string;
}

export function useDestinations() {
  const [list, setList] = useState<Destination[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef(false);

  const loadNext = useCallback(() => {
    if (loadingRef.current || !hasMore) return;
    loadingRef.current = true;
    fetch(`/api/destinations?page=${page}`)
      .then((r) => r.json())
      .then((data: Destination[]) => {
        if (data.length === 0) setHasMore(false);
        else {
          setList((prev) => [...prev, ...data]);
          setPage((p) => p + 1);
        }
      })
      .catch(console.error)
      .finally(() => {
        loadingRef.current = false;
      });
  }, [page, hasMore]);

  useEffect(() => {
    loadNext();
  }, []);

  return { list, loadNext, hasMore };
}
