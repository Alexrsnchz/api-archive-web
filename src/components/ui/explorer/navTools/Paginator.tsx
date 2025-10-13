import ReactPaginate from 'react-paginate';
import { ArrowLeftIcon, ArrowRightIcon } from '@components/ui/icons/Icons';

interface PaginatorProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

export default function Paginator({ pageCount, currentPage, onPageChange }: PaginatorProps) {
  if (pageCount <= 1) return null;

  return (
    <div className="flex justify-center md:justify-start mt-10">
      <ReactPaginate
        previousLabel={<ArrowLeftIcon className="size-4 text-gray-100" />}
        nextLabel={<ArrowRightIcon className="size-4 text-gray-100" />}
        breakLabel="..."
        pageCount={pageCount}
        forcePage={currentPage}
        onPageChange={onPageChange}
        containerClassName="flex items-center gap-2"
        pageClassName="group"
        pageLinkClassName="flex items-center justify-center size-7 md:size-9 rounded-md cursor-pointer group-[.selected]:shadow-[0_0_10px_rgba(139,92,246,0.5)] border border-neutral-700 hover:bg-neutral-700 group-[.selected]:bg-midnight-400 text-gray-300 group-[.selected]:text-white"
        activeLinkClassName="border-midnight-400 bg-midnight-400 text-white"
        previousLinkClassName="flex items-center justify-center mr-2 size-7 md:size-9 rounded-md cursor-pointer border border-neutral-700 hover:bg-neutral-700 text-gray-300 "
        nextLinkClassName="flex items-center justify-center ml-2 size-7 md:size-9 rounded-md cursor-pointer border border-neutral-700 hover:bg-neutral-700 text-gray-300"
        disabledLinkClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
}
