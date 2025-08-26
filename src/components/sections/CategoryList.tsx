import { ArchiveIcon } from '@icons/Icons';

export default function CategoryList() {
  const categories = [
    { id: 1, name: 'Weather & Climate' },
    { id: 2, name: 'Geolocation' },
    { id: 3, name: 'News & Media' },
    { id: 4, name: 'Photography' },
    { id: 5, name: 'Mocks' },
    { id: 6, name: 'Translation' },
    { id: 7, name: 'Auth & Security' },
    { id: 8, name: 'Health & Fitness' },
  ];

  return (
    <section className="py-8 md:py-10 lg:py-25">
      <h2 className="text-3xl font-bold text-center text-gray-100">Browse by Category</h2>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {categories.map((category) => (
          <article
            key={category.id}
            className="flex flex-col justify-center items-center gap-3 py-10 rounded-lg border border-neutral-800 hover:bg-violet-600 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="p-3 rounded-lg bg-violet-500">
              <ArchiveIcon className="size-5 text-gray-200" />
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold text-lg text-neutral-200">{category.name}</span>
              <span className="px-2 py-0.5 mt-2 rounded-md border border-neutral-800 text-xs font-medium text-neutral-400">
                13 APIs
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
