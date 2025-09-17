export default function CategorySkeleton() {
  return (
    <article className="flex flex-col justify-center items-center gap-3 py-10 rounded-lg border border-neutral-800 animate-pulse">
      <div className="p-3 rounded-lg bg-neutral-800">
        <div className="size-5"></div>
      </div>

      <div className="flex flex-col items-center">
        <span className="px-15 py-2.5 mt-2 rounded bg-neutral-700"></span>
        <span className="px-6 py-2.5 mt-2.5 rounded bg-neutral-800"></span>
      </div>
    </article>
  );
}
