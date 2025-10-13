import type { ApiListProps } from '@customTypes/apis.types';
import { LeftArrowIcon, OpenBoxIcon } from '@components/ui/icons/Icons';
import { useApis } from '@components/hooks/useApis';
import { useBreakpoint } from '@components/hooks/useBreakpoint';
import ApiCard from '@components/ui/explorer/apis/ApiCard';
import ApiSkeleton from '@components/ui/explorer/apis/ApiSkeleton';
import { useState, useMemo } from 'react';
import Paginator from '@components/ui/explorer/navTools/Paginator';

export default function ApiList({
  categoryId,
  categoryIcon: Icon,
  categoryName,
  onBack,
}: ApiListProps) {
  const { apis, loading, error } = useApis(categoryId);
  const { isMobile, isTablet } = useBreakpoint();

  const itemsPerPage = isMobile ? 3 : isTablet ? 4 : 6;

  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = useMemo(() => {
    return apis.length > 0 ? Math.ceil(apis.length / itemsPerPage) : 0;
  }, [apis, itemsPerPage]);

  const currentItems = useMemo(() => {
    const offset = currentPage * itemsPerPage;
    return apis.slice(offset, offset + itemsPerPage);
  }, [apis, currentPage, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  if (error) {
    return (
      <div className="flex justify-center items-center mt-8 w-full h-[410.5px] rounded-lg border border-neutral-800">
        <div className="flex flex-col items-center gap-3">
          <OpenBoxIcon className="size-8 text-neutral-500" />
          <span className="text-xl font-medium text-neutral-500">Couldn't load APIs</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center items-center gap-3">
        <Icon className="size-7 text-gray-100" />
        <h2 className="text-3xl font-bold text-center text-gray-100">{categoryName}</h2>
      </div>

      <div className="mt-8">
        <button
          onClick={onBack}
          className="flex items-center gap-3 px-3 py-1 rounded-md cursor-pointer border border-neutral-800"
        >
          <LeftArrowIcon className="size-4 text-neutral-400" />
          <span className="text-sm font-medium text-neutral-400">Back to categories</span>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {loading
            ? Array.from({ length: itemsPerPage }).map((_, i) => <ApiSkeleton key={i} />)
            : currentItems.map((item) => <ApiCard key={item.id} api={item} />)}
        </div>

        {!loading && (
          <Paginator
            pageCount={pageCount}
            currentPage={currentPage}
            onPageChange={handlePageClick}
          />
        )}
      </div>
    </>
  );
}
