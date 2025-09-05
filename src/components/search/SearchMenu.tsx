import type { SearchListProps, SearchMenuProps } from '@customTypes/search.types';
import { ExternalLinkIcon, LoaderIcon, OpenBoxIcon, ServerOffIcon } from '@icons/Icons';

function MenuLoad() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex items-center gap-2">
        <LoaderIcon className="size-5 md:size-6 text-neutral-400" />
        <span className="text-sm md:text-md text-neutral-400">Searching...</span>
      </div>
    </div>
  );
}

function MenuError() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center gap-1">
        <ServerOffIcon className="size-5 md:size-6 text-neutral-400" />
        <span className="text-sm md:text-md text-neutral-400">An error has occurred</span>
      </div>
    </div>
  );
}

function MenuList({ results }: SearchListProps) {
  return (
    <ul>
      {results.map((item, index) => (
        <li key={index} className="first:rounded-t-md last:rounded-b-md group hover:bg-neutral-800">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center pl-4.25 py-3 gap-3"
          >
            <ExternalLinkIcon className="size-4 text-neutral-400 group-hover:text-neutral-200" />
            <span className="text-sm text-neutral-400 group-hover:text-neutral-200">
              {item.name}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function MenuNoResults() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center gap-1">
        <OpenBoxIcon className="size-5 md:size-6 text-neutral-400" />
        <span className="text-sm md:text-md text-neutral-400">No results</span>
      </div>
    </div>
  );
}

export default function SearchMenu({ loading, results, hasSearched, error }: SearchMenuProps) {
  const shouldShowContent = loading || error || results.length > 0 || hasSearched;

  if (!shouldShowContent) return null;

  return (
    <div
      className={`mt-2 h-[115px] max-h-[115px] md:h-[158px] md:max-h-[158px] lg:h-[178px] lg:max-h-[178px] rounded-lg ${results.length > 0 ? 'overflow-y-scroll' : ''} border border-neutral-800 bg-neutral-900`}
    >
      {loading ? (
        <MenuLoad />
      ) : error ? (
        <MenuError />
      ) : (
        <>
          {results.length > 0 ? <MenuList results={results} /> : hasSearched && <MenuNoResults />}
        </>
      )}
    </div>
  );
}
