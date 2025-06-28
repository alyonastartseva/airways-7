import { useState, useEffect } from 'react';

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/categories')
      .then((resp) => resp.json())
      .then((data: Category[]) => setCategories(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
}
