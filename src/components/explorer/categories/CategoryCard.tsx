import { CategoryCardProps } from '@customTypes/categories.types';
import { IconMap } from '@icons/IconMap';
import { ArchiveIcon } from '@icons/Icons';

export default function CategoryCard({ category, selectCategory }: CategoryCardProps) {
  const Icon = IconMap[category.icon] ?? ArchiveIcon;

  return (
    <article
      onClick={() => selectCategory(category)}
      className="flex flex-col justify-center items-center gap-3 py-5 md:py-10 rounded-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] group cursor-pointer border border-neutral-800 hover:bg-midnight-400/80 hover:-translate-y-2 transition-all duration-300 ease-in-out"
    >
      <div className="p-3 rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-none bg-midnight-400 group-hover:bg-violet-100">
        <Icon className="size-5 text-neutral-200 group-hover:text-midnight-400" />
      </div>

      <div className="flex flex-col items-center">
        <span className="font-semibold text-sm md:text-lg text-neutral-200 group-hover:text-neutral-100">
          {category.name}
        </span>
        <span className="px-2 py-0.5 mt-2 rounded-md border border-neutral-800 group-hover:border-midnight-200 group-hover:bg-midnight-950/10 text-xs font-medium text-neutral-400 group-hover:text-neutral-100">
          {category._count.apis} APIs
        </span>
      </div>
    </article>
  );
}
