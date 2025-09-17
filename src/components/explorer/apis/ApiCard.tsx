import { ExternalLinkIcon } from '@icons/Icons';
import type { ApiCardProps } from '@customTypes/apis.types';

export default function ApiCard({ api }: ApiCardProps) {
  return (
    <a href={api.url} target="_blank" rel="noopener noreferrer">
      <article className="px-5 py-3 rounded-lg border border-neutral-800">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-neutral-200">{api.name}</span>
          <ExternalLinkIcon className="size-4 text-neutral-400" />
        </div>

        <span
          className={`px-2 rounded-sm border font-medium text-xs ${(() => {
            switch (api.pricing) {
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
          {api.pricing}
        </span>

        <p className="mt-3 mb-3 line-clamp-2 text-sm text-neutral-400">{api.description}</p>

        <span className="text-xs font-medium text-neutral-400">By {api.author}</span>
      </article>
    </a>
  );
}
