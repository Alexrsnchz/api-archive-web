import type { SearchMenuProps } from '@customTypes/apis.types';
import { ExternalLinkIcon, MagnifierXIcon } from '@icons/Icons';

export default function SearchMenu({ query, results }: SearchMenuProps) {
  if (query === '') return null;
  if (query.length < 3) return null;

  return (
    <div className="mt-2">
      {results.length !== 0 ? (
        <ul className="max-h-[115px] md:max-h-[158px] lg:max-h-[178px] rounded-md overflow-y-scroll border border-neutral-800 bg-[#1B1B1B]">
          {results.map((item, index) => (
            <li
              key={index}
              className="first:rounded-t-md last:rounded-b-md hover:bg-neutral-800/60"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center pl-4.25 py-3 gap-3"
              >
                <ExternalLinkIcon className="size-4 text-neutral-400" />
                <span className="text-sm text-neutral-400">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center h-[115px] md:h-[158px] lg:h-[178px] rounded-md border border-neutral-800 bg-[#1B1B1B]">
          <div className="flex items-center gap-2">
            <MagnifierXIcon className="size-4 text-neutral-400" />
            <span className="text-sm text-neutral-400">No results found.</span>
          </div>
        </div>
      )}
    </div>
  );
}
