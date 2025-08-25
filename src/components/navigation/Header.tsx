import { ArchiveIcon } from '@icons/Icons';

export default function Header() {
  return (
    <nav className="flex justify-center py-4 md:py-6 lg:py-5 bg-transparent border-b border-neutral-700">
      <div className="flex items-center gap-4">
        <ArchiveIcon className="size-7 md:size-10 lg:size-9 text-violet-500" />
        <span className="text-2xl md:text-4xl lg:text-3xl font-bold text-gray-200">
          API Archive
        </span>
      </div>
    </nav>
  );
}
