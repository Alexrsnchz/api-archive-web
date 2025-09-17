import { useState } from 'react';
import type { CategoryListProps } from '@customTypes/categories.types';
import { useCategories } from '@components/hooks/useCategories';
import CategorySkeleton from '@components/explorer/categories/CategorySkeleton';
import CategoryCard from '@components/explorer/categories/CategoryCard';
import { OpenBoxIcon } from '@icons/Icons';
import Paginator from '@components/explorer/controls/Paginator';

export default function CategoryList({ selectCategory }: CategoryListProps) {
  const [page, setPage] = useState(1);
  const limit = 8;
  const { categories, pagination, loading, error } = useCategories(page, limit);

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-100">Browse by Category</h2>

      {!error ? (
        <>
          <div className="grid grid-cols-4 gap-4 mt-8">
            {loading
              ? Array.from({ length: limit }).map((_, i) => <CategorySkeleton key={i} />)
              : categories.map((item) => (
                  <CategoryCard key={item.id} category={item} selectCategory={selectCategory} />
                ))}
          </div>

          {pagination && (
            <Paginator
              page={pagination.page}
              totalPages={pagination.totalPages}
              onPageChange={setPage}
            />
          )}
        </>
      ) : (
        <div className="flex justify-center items-center mt-8 w-full h-[410.5px] rounded-lg border border-neutral-800">
          <div className="flex flex-col items-center gap-3">
            <OpenBoxIcon className="size-8 text-neutral-500" />
            <span className="text-xl font-medium text-neutral-500">Couldn't load categories</span>
          </div>
        </div>
      )}
    </>
  );
}
