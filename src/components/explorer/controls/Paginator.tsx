import { ChevronLeftIcon, ChevronRightIcon } from '@icons/Icons';
import type { PaginationProps } from '@customTypes/pagination.types';

export default function Paginator({ page, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-start gap-2 mt-7">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="flex items-center gap-1 pl-2 pr-3 py-1.5 rounded-lg hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] cursor-pointer group border border-neutral-800  hover:bg-midnight-400/80"
      >
        <ChevronLeftIcon className="size-4 text-neutral-400 group-hover:text-neutral-100" />
        <span className="text-sm text-neutral-400 group-hover:text-neutral-100">Previous</span>
      </button>

      <div className="flex items-center gap-1">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`px-3 py-1 rounded-lg  cursor-pointer border border-neutral-800 ${
              p === page
                ? 'shadow-[0_0_10px_rgba(139,92,246,0.5)] bg-midnight-400/80'
                : 'hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:bg-midnight-400/80'
            }`}
          >
            <span
              className={
                p === page ? 'text-neutral-100' : 'text-neutral-400 hover:text-neutral-100'
              }
            >
              {p}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-lg hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] cursor-pointer group border border-neutral-800 hover:bg-midnight-400/80"
      >
        <span className="text-sm text-neutral-400 group-hover:text-neutral-100">Next</span>
        <ChevronRightIcon className="size-4 text-neutral-400 group-hover:text-neutral-100" />
      </button>
    </div>
  );
}
