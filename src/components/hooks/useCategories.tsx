import type { CategoryProps } from '@customTypes/categories.types';
import { useEffect, useState } from 'react';

export function useCategories() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const url = 'http://localhost:3000/api/categories';

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);

        if (!response.ok) console.error('Error fetching categories: ' + response.status);

        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}
