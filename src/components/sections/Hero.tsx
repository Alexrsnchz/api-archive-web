import SearchBar from '@components/search/SearchBar';

export default function Hero() {
  return (
    <section className="py-8 md:py-10 lg:py-15">
      <div className="mb-8">
        <h1 className="mb-3 md:mb-4 lg:mb-6 text-center text-3xl md:text-5xl lg:text-6xl font-bold text-gray-50">
          Discover the Perfect API
        </h1>
        <p className="mx-auto max-w-sm md:max-w-xl lg:max-w-2xl text-center text-sm md:text-lg lg:text-xl text-neutral-400">
          Your comprehensive resource for finding, exploring, and integrating APIs. Trusted by
          developers worldwide.
        </p>
      </div>

      <SearchBar />
    </section>
  );
}
