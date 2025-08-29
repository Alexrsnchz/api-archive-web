import { useState } from 'react';
import CategoryList from '@components/explorer/CategoryList';
import ApiList from '@components/explorer/ApiList';
import type { CategoryProps } from '@customTypes/categories.types';

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
        <CategoryList onSelectCategory={handleSelect} />
      ) : (
        <ApiList
          categoryId={selectedCategory.id}
          /*categoryIcon={category.icon}*/
          categoryName={selectedCategory.name}
          onBack={handleBack}
        />
      )}
    </section>
  );
}
