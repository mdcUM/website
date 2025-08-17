export default function ServiceCard({ title, desc }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-4 shadow-[0_10px_30px_rgba(144,128,219,0.18)] transition-transform hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-tr from-[#E6DAFF]/20 to-[#9080DB]/20 text-white/80">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-90">
            <path d="M12 3l9 6-9 6-9-6 9-6z"/>
            <path d="M3 12l9 6 9-6"/>
          </svg>
        </div>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </article>
  );
}