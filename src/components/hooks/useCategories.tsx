import type { CategoryProps } from '@customTypes/categories.types';
import { useEffect, useState } from 'react';
import type { Pagination } from '@customTypes/pagination.types';

export function useCategories(page = 1, limit = 8) {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const url = import.meta.env.VITE_REACT_API_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url}/categories?page=${page}&limit=${limit}`);

        if (!response.ok) console.error('Error fetching categories: ' + response.status);

        const data = await response.json();
        setCategories(data.data);
        setPagination(data.pagination);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [page, limit]);

  return { categories, pagination, loading, error };
}
