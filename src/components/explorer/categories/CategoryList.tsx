import type { CategoryListProps } from '@customTypes/categories.types';
import { useCategories } from '@components/hooks/useCategories';
import CategorySkeleton from '@components/explorer/categories/CategorySkeleton';
import CategoryCard from '@components/explorer/categories/CategoryCard';

export default function CategoryList({ selectCategory }: CategoryListProps) {
  const { categories, loading } = useCategories();

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-100">Browse by Category</h2>

      <div className="grid grid-cols-4 gap-4 mt-8">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <CategorySkeleton key={i} />)
          : categories.map((item) => (
              <CategoryCard key={item.id} category={item} selectCategory={selectCategory} />
            ))}
      </div>
    </>
  );
}
