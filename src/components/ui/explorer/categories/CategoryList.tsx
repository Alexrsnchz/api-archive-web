import type { CategoryListProps } from '@customTypes/categories.types';
import { useCategories } from '@components/hooks/useCategories';
import CategorySkeleton from '@components/ui/explorer/categories/CategorySkeleton';
import CategoryCard from '@components/ui/explorer/categories/CategoryCard';
import { OpenBoxIcon } from '@components/ui/icons/Icons';
import { useState, useMemo } from 'react';
import Paginator from '@components/ui/explorer/navTools/Paginator';
import { useBreakpoint } from '@components/hooks/useBreakpoint';

export default function CategoryList({ selectCategory }: CategoryListProps) {
  const { categories, loading, error } = useCategories();
  const { isMobile } = useBreakpoint();

  const itemsPerPage = isMobile ? 4 : 8;

  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = useMemo(() => {
    return categories.length > 0 ? Math.ceil(categories.length / itemsPerPage) : 0;
  }, [categories, itemsPerPage]);

  const currentItems = useMemo(() => {
    const offset = currentPage * itemsPerPage;
    return categories.slice(offset, offset + itemsPerPage);
  }, [categories, currentPage, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  if (error) {
    return (
      <div className="flex justify-center items-center mt-8 w-full h-[410.5px] rounded-lg border border-neutral-800">
        <div className="flex flex-col items-center gap-3">
          <OpenBoxIcon className="size-8 text-neutral-500" />
          <span className="text-xl font-medium text-neutral-500">Couldn't load categories</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-100">Browse by Category</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {loading
          ? Array.from({ length: itemsPerPage }).map((_, i) => <CategorySkeleton key={i} />)
          : currentItems.map((item) => (
              <CategoryCard key={item.id} category={item} selectCategory={selectCategory} />
            ))}
      </div>

      {!loading && (
        <Paginator pageCount={pageCount} currentPage={currentPage} onPageChange={handlePageClick} />
      )}
    </>
  );
}
