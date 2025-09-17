export default function ApiSkeleton() {
  return (
    <article className="px-5 py-3 rounded-lg border border-neutral-800 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="h-5 w-32 rounded bg-neutral-700" />
        <div className="h-4 w-4 rounded bg-neutral-700" />
      </div>

      <div className="mt-2 h-5 w-16 rounded bg-neutral-700" />

      <div className="mt-3 mb-3 space-y-2">
        <div className="h-4 w-full rounded bg-neutral-700" />
        <div className="h-4 w-3/4 rounded bg-neutral-700" />
      </div>

      <div className="h-3 w-20 rounded bg-neutral-700" />
    </article>
  );
}
