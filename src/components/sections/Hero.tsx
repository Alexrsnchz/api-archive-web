import SearchBar from '@components/search/SearchBar';

export default function Hero() {
  return (
    <section className="py-12 md:py-20 lg:py-25">
      <div className="mb-8">
        <h1 className="mb-3 md:mb-4 lg:mb-6 text-center text-5xl lg:text-6xl font-bold text-neutral-50">
          Discover the Perfect API
        </h1>

        <p className="mx-auto max-w-sm md:max-w-xl lg:max-w-2xl text-center text-md md:text-lg lg:text-xl text-neutral-400">
          Your modern and simple resource for finding and exploring interesting APIs. Designed to
          make API discovery easy.
        </p>
      </div>

      <SearchBar />
    </section>
  );
}
