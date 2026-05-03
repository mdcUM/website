export default function ServiceCard({ index, title, desc }) {
  return (
    <article
      className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0a0814] transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
    >
      {/* animated accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c4b0ff] to-transparent opacity-60 transition group-hover:opacity-100" />

      {/* scan line effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-10 transition">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition duration-700" />
      </div>

      {/* top glow */}
      <div
        className="pointer-events-none absolute -top-6 left-1/2 h-[100px] w-[160px] -translate-x-1/2 opacity-60 transition group-hover:opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(180,160,255,0.35), transparent 70%)",
        }}
      />

      {/* bottom glow */}
      <div
        className="pointer-events-none absolute -bottom-6 left-1/2 h-[90px] w-[140px] -translate-x-1/2 opacity-50 transition group-hover:opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(200,190,255,0.3), transparent 70%)",
        }}
      />

      {/* subtle noise overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      {/* content */}
      <div className="relative flex flex-1 flex-col gap-2 p-6">

        {/* badge index (more premium than plain number) */}
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-[10px] text-white/40 group-hover:border-white/30 group-hover:text-white/70 transition">
            {index}
          </span>
        </div>

        {/* title */}
        <h2 className="text-base font-semibold text-white transition group-hover:translate-x-0.5">
          {title}
        </h2>

        {/* desc */}
        <p className="text-s leading-relaxed text-white/60 transition group-hover:text-white/80">
          {desc}
        </p>
      </div>
    </article>
  );
}