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
        pageLinkClassName="flex items-center justify-center w-7 h-7 md:w-9 md:h-9 border border-neutral-700 rounded-md cursor-pointer text-gray-300 hover:bg-neutral-700 group-[.selected]:bg-midnight-400 group-[.selected]:shadow-[0_0_10px_rgba(139,92,246,0.5)] group-[.selected]:text-white"
        activeLinkClassName="bg-blue-500 text-white border-blue-500"
        previousLinkClassName="flex items-center justify-center mr-2 w-7 h-7 md:w-9 md:h-9 border border-neutral-700 rounded-md cursor-pointer text-gray-300 hover:bg-neutral-700"
        nextLinkClassName="flex items-center justify-center ml-2 w-7 h-7 md:w-9 md:h-9 border border-neutral-700 rounded-md cursor-pointer text-gray-300 hover:bg-neutral-700"
        disabledLinkClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
}
