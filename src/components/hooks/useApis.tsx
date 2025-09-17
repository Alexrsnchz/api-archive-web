import { useEffect, useState } from 'react';
import type { ApiProps } from '@customTypes/apis.types';

export function useApis(categoryId: number) {
  const [apis, setApis] = useState<ApiProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const url = import.meta.env.VITE_REACT_API_URL;

  useEffect(() => {
    const fetchApis = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url}/apis/explorer?categoryId=${categoryId}`);

        if (!response.ok) console.error('Error fetching apis: ' + response.status);

        const data = await response.json();
        setApis(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchApis();
  }, []);

  return { apis, loading, error };
}
