import { GitHubIcon } from '@icons/Icons';

export default function Contribution() {
  return (
    <section className="pt-8 pb-16 md:pt-10 md:pb-20 lg:pt-25 lg:pb-50">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold text-neutral-100">Help Grow the Archive</h2>

        <p className="mt-3 md:mt-5 mx-auto max-w-xs md:max-w-lg lg:max-w-2xl text-center text-sm md:text-md lg:text-lg text-neutral-400">
          Missing an API? You can suggest new ones through our GitHub Issues. Every contribution
          helps make the archive more complete and useful.
        </p>

        <a
          href="https://github.com/Alexrsnchz/api-archive-web/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 mt-6 md:mt-8 rounded-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] border border-midnight-700 bg-midnight-400/80 hover:bg-midnight-300/80 transition-all duration-300 ease-in-out"
        >
          <GitHubIcon className="size-5 text-neutral-200" />
          <span className="text-sm font-medium text-neutral-200">Contribute on GitHub</span>
        </a>
      </div>
    </section>
  );
}
