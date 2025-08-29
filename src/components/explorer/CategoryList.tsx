import { useEffect, useState } from 'react';
import type { CategoryListProps, CategoryProps } from '@customTypes/categories.types';
import { IconMap } from '@icons/IconMap';

export default function CategoryList({ onSelectCategory }: CategoryListProps) {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const cats = await fetch('http://localhost:3000/api/categories');
      const data = await cats.json();
      setCategories(data);
    };

    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-100">Browse by Category</h2>

      <div className="grid grid-cols-4 gap-4 mt-8">
        {categories.map((item) => {
          const Icon = IconMap[item.icon];

          return (
            <article
              key={item.id}
              onClick={() => onSelectCategory(item)}
              className="flex flex-col justify-center items-center gap-3 py-10 rounded-lg cursor-pointer border border-neutral-800 hover:bg-violet-600 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="p-3 rounded-lg bg-violet-500">
                <Icon className="size-5 text-gray-200" />
              </div>

              <div className="flex flex-col items-center">
                <span className="font-semibold text-lg text-neutral-200">{item.name}</span>
                <span className="px-2 py-0.5 mt-2 rounded-md border border-neutral-800 text-xs font-medium text-neutral-400">
                  {item._count.apis} APIs
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
