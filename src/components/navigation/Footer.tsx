import { ArchiveIcon } from '@icons/Icons';

export default function Footer() {
  return (
    <div className="border-t border-neutral-800 py-8 md:py-5">
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl justify-between items-center gap-12">
        <div className="hidden md:flex items-center gap-3">
          <ArchiveIcon className="size-11 text-midnight-400" />
          <div className="text-left">
            <h3 className="text-lg font-semibold text-neutral-100">API Archive</h3>
            <p className="text-sm text-neutral-500">An open resource of useful APIs</p>
          </div>
        </div>

        <div className="md:hidden flex flex-col items-center">
          <div className="flex gap-3">
            <ArchiveIcon className="size-7 text-midnight-400" />
            <span className="text-2xl font-semibold text-neutral-100">API Archive</span>
          </div>

          <p className="text-md text-neutral-500">An open resource of useful APIs</p>
        </div>

        <p className="text-md md:text-sm text-neutral-500">
          &copy; 2025 API Archive. Built by
          <span className="font-medium text-midnight-400"> Alexrsnchz</span>.
        </p>
      </div>
    </div>
  );
}
