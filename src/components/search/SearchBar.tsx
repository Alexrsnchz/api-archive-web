import { MagnifierIcon } from '@icons/Icons';
import SearchMenu from '@components/search/SearchMenu';
import useSearch from '@components/hooks/useSearch';

export default function SearchBar() {
  const { query, setQuery, results, loading, hasSearched, error } = useSearch();

  return (
    <div className="relative mx-auto max-w-xs md:max-w-lg lg:max-w-2xl">
      <MagnifierIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />

      <input
        type="text"
        aria-label="Search bar"
        placeholder="Search the APIs name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-12 py-3.25 w-full rounded-md focus:outline-none focus:shadow-[0_0_10px_rgba(139,92,246,0.5)] focus:ring-1 focus:ring-midnight-400 border border-neutral-800 bg-neutral-800/30 text-neutral-400 text-sm transition-all duration-200"
      />

      <div className="absolute z-10 w-full">
        <SearchMenu loading={loading} results={results} hasSearched={hasSearched} error={error} />
      </div>
    </div>
  );
}
