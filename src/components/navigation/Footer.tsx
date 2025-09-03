import { ArchiveIcon } from '@icons/Icons';

export default function Footer() {
  return (
    <div className="border-t border-neutral-800 py-8 md:py-5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mx-auto max-w-2xl lg:max-w-5xl">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex md:items-center gap-3 md:gap-2">
            <ArchiveIcon className="size-7 md:size-6 text-midnight-400" />
            <span className="text-2xl lg:text-xl font-semibold text-neutral-200">API Archive</span>
          </div>

          <p className="text-md md:text-lg lg:text-sm text-neutral-500">
            An open resource of useful APIs
          </p>
        </div>

        <p className="text-md md:text-lg lg:text-sm text-neutral-500">
          &copy; 2025 API Archive. Built by
          <span className="font-medium text-midnight-400"> Alexrsnchz</span>.
        </p>
      </div>
    </div>
  );
}
