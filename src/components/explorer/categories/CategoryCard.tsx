import { CategoryCardProps } from '@customTypes/categories.types';
import { IconMap } from '@icons/IconMap';

export default function CategoryCard({ category, selectCategory }: CategoryCardProps) {
  const Icon = IconMap[category.icon];

  return (
    <article
      onClick={() => selectCategory(category)}
      className="flex flex-col justify-center items-center gap-3 py-8 md:py-10 rounded-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] cursor-pointer border border-neutral-800 hover:bg-midnight-400/80 hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <div className="p-3 rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-none bg-midnight-400">
        <Icon className="size-5 text-gray-200" />
      </div>

      <div className="flex flex-col items-center">
        <span className="font-semibold text-lg text-neutral-200">{category.name}</span>
        <span className="px-2 py-0.5 mt-2 rounded-md border border-neutral-800 text-xs font-medium text-neutral-400">
          {category._count.apis} APIs
        </span>
      </div>
    </article>
  );
}
