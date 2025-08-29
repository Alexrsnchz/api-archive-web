import { useEffect, useState } from 'react';
import type { ApiListProps, ApiProps } from '@customTypes/apis.types';
import { ExternalLinkIcon, LeftArrowIcon } from '@icons/Icons';

export default function ApiList({
  categoryId,
  categoryIcon: Icon,
  categoryName,
  onBack,
}: ApiListProps) {
  const [apis, setApis] = useState<ApiProps[]>([]);

  useEffect(() => {
    const getApis = async () => {
      const response = await fetch(
        `http://localhost:3000/api/apis/explorer?categoryId=${categoryId}`,
      );
      const data = await response.json();

      setApis(data);
    };

    getApis();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center gap-3">
        <Icon className="size-6 text-gray-100" />
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

        <div className="grid grid-cols-3 gap-4 mt-5">
          {apis.map((item) => (
            <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
              <article className="px-5 py-3 rounded-lg border border-neutral-800">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-neutral-200">{item.name}</span>
                  <ExternalLinkIcon className="size-4 text-neutral-400" />
                </div>

                <span
                  className={`px-2 rounded-sm border font-medium text-xs ${(() => {
                    switch (item.pricing) {
                      case 'Free':
                        return 'border-emerald-600 bg-emerald-600/20 text-emerald-600';
                      case 'Free Tier':
                        return 'border-orange-300 bg-orange-300/20 text-orange-300';
                      case 'Paid':
                        return 'border-red-400 bg-red-400/20 text-red-400';
                      default:
                        return 'border-gray-400 bg-gray-400/20 text-gray-600';
                    }
                  })()}`}
                >
                  {item.pricing}
                </span>

                <p className="mt-3 mb-3 line-clamp-2 text-sm text-neutral-400">
                  {item.description}
                </p>

                <span className="text-xs font-medium text-neutral-400">By {item.author}</span>
              </article>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
