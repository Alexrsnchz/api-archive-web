import type { ApiListProps } from '@customTypes/apis.types';
import { LeftArrowIcon } from '@icons/Icons';
import { useApis } from '@components/hooks/useApis';
import ApiCard from '@components/explorer/apis/ApiCard';
import ApiSkeleton from '@components/explorer/apis/ApiSkeleton';

export default function ApiList({
  categoryId,
  categoryIcon: Icon,
  categoryName,
  onBack,
}: ApiListProps) {
  const { apis, loading, error } = useApis(categoryId);

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

        {!error ? (
          <div className="grid grid-cols-3 gap-4 mt-5">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => <ApiSkeleton key={i} />)
              : apis.map((item) => <ApiCard key={item.id} api={item} />)}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
