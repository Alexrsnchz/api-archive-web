import SearchBar from '@components/search/SearchBar';

export default function Hero() {
  return (
    <section className="py-15">
      <div className="mb-8">
        <h1 className="mb-6 text-center text-6xl font-bold text-gray-50">
          Discover the Perfect API
        </h1>
        <p className="mx-auto max-w-2xl text-center text-xl text-neutral-400">
          Your comprehensive resource for finding, exploring, and integrating APIs. Trusted by
          developers worldwide.
        </p>
      </div>
      <div className="mx-auto max-w-2xl">
        <SearchBar />
      </div>
    </section>
  );
}
