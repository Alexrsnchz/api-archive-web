import { useState } from 'react';
import CategoryList from '@components/explorer/categories/CategoryList';
import ApiList from '@components/explorer/apis/ApiList';
import type { CategoryProps } from '@customTypes/categories.types';
import { IconMap } from '@icons/IconMap';

export default function Explorer() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryProps | null>(null);

  const handleSelect = (category: CategoryProps) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
    <section className="py-8 md:py-10 lg:py-25">
      {!selectedCategory ? (
        <CategoryList selectCategory={handleSelect} />
      ) : (
        <ApiList
          categoryId={selectedCategory.id}
          categoryIcon={IconMap[selectedCategory.icon]}
          categoryName={selectedCategory.name}
          onBack={handleBack}
        />
      )}
    </section>
  );
}
