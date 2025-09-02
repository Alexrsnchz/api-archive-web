import { useEffect, useState } from 'react';
import type { ApiProps } from '@customTypes/apis.types';

export default function useSearch() {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<ApiProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const url = import.meta.env.VITE_REACT_API_URL;

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url}/apis/search?query=${encodeURIComponent(query)}`);

        if (!response.ok) console.error('Error fetching search results: ' + response.status);

        const data = await response.json();
        setResults(data);
        setHasSearched(true);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    if (query === '' || query.length < 3) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    const timer = setTimeout(fetchSearch, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return { query, setQuery, results, loading, hasSearched, error };
}
