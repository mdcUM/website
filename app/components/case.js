
export default function CaseCard({ tag, title, blurb, link }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#151630]">
      <div className="h-40 bg-[radial-gradient(120%_120%_at_0%_0%,#E6DAFF,transparent),radial-gradient(120%_120%_at_100%_100%,#9080DB,transparent)]" />
      <div className="p-4">
        <span className="mr-2 rounded-full border border-white/15 px-2 py-1 text-xs text-white/80">{tag}</span>
        <span className="font-semibold">{title}</span>
        <p className="mt-1 text-sm text-white/70">{blurb}</p>
        {link && (
          <a href={link} className="mt-3 inline-block text-sm font-medium text-[#9080DB] hover:underline">
            Learn more &rarr;
          </a>
        )}
      </div>
    </article>
  );
}