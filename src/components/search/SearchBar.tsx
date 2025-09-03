import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { MagnifierIcon } from '@icons/Icons';
import SearchMenu from '@components/search/SearchMenu';
import useSearch from '@components/hooks/useSearch';

export default function SearchBar() {
  const { query, setQuery, results, loading, hasSearched, error } = useSearch();
  const [showMenu, setShowMenu] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  const shouldShowMenu = showMenu && (loading || error || results.length > 0 || hasSearched);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    if (e.target.value.trim()) {
      setShowMenu(true);
    }
  };

  const handleInputFocus = () => {
    if (loading || error || results.length > 0 || hasSearched) {
      setShowMenu(true);
    }
  };

  return (
    <div ref={searchBarRef} className="relative mx-auto max-w-xs md:max-w-lg lg:max-w-2xl">
      <MagnifierIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />

      <input
        type="text"
        aria-label="Search bar"
        placeholder="Search the APIs name..."
        value={query}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        className="pl-12 py-3.25 w-full rounded-lg focus:outline-none focus:shadow-[0_0_10px_rgba(139,92,246,0.5)] focus:ring-1 focus:ring-midnight-400 border border-neutral-800 bg-neutral-800/30 text-neutral-400 text-sm transition-all duration-200"
      />

      <div className="absolute z-10 w-full">
        {shouldShowMenu && (
          <SearchMenu loading={loading} results={results} hasSearched={hasSearched} error={error} />
        )}
      </div>
    </div>
  );
}
