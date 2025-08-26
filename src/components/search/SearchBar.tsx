import { useEffect, useState } from 'react';
import { MagnifierIcon } from '@icons/Icons';
import type { ApiResult } from '@customTypes/apiResults.types';
import SearchMenu from '@components/search/SearchMenu';

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
      if (query.length >= 3) getSearch();
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="relative mx-auto max-w-xs md:max-w-lg lg:max-w-2xl">
      <MagnifierIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />

      <input
        type="text"
        aria-label="Search bar"
        placeholder="Search APIs, categories, or providers..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-12 py-3.25 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500 border border-neutral-800 bg-neutral-800/30 text-neutral-400 text-sm transition-all duration-200"
      />

      <div className="absolute z-10 w-full">
        <SearchMenu query={query} results={results} />
      </div>
    </div>
  );
}
