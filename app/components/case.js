
import Image from 'next/image';

export default function CaseCard({ tag, title, blurb, link, logo }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#151630]">
      <div className="h-40 bg-[radial-gradient(120%_120%_at_0%_0%,#E6DAFF,transparent),radial-gradient(120%_120%_at_100%_100%,#9080DB,transparent)] flex items-center justify-center">
        {logo ? (
          <div className="relative h-32 w-32">
            <Image 
              src={logo} 
              alt={`${title} logo`} 
              fill 
              className="object-contain" 
            />
          </div>
        ) : (
          <div className="h-32 w-32 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-white/60 font-bold text-2xl">
              {title.split(' ').map(word => word[0]).join('').slice(0, 2)}
            </span>
          </div>
        )}
      </div>
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