import { useEffect, useState } from 'react';
import { MagnifierIcon } from '@icons/Icons';
import type { ApiResult } from '@customTypes/apiResults.types';

export default function SearchBar() {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<ApiResult[]>([]);

  useEffect(() => {
    const getSearch = async () => {
      const response = await fetch(
        `http://localhost:3000/api/apis/search?query=${encodeURIComponent(query)}`,
      );
      const data = await response.json();

      setResults(data);
    };

    const timer = setTimeout(() => {
      getSearch();
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      <div className="relative">
        <MagnifierIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />

        <input
          type="text"
          aria-label="Search bar"
          placeholder="Search APIs, categories, or providers..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 py-3.25 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500 border border-neutral-800 bg-neutral-800/30 text-neutral-400 text-sm transition-all duration-200"
        />
      </div>

      {results.length > 0 && (
        <ul className="w-full rounded-md border border-neutral-800 bg-neutral-800/30">
          {results.map((result, index) => (
            <li key={index} className="py-2 px-12 rounded-md border border-neutral-800">
              <a
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-400"
              >
                {result.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
