import type { CategoryProps } from '@customTypes/categories.types';
import { useEffect, useState } from 'react';

export function useCategories() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const url = import.meta.env.VITE_REACT_API_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url}/categories`);

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
