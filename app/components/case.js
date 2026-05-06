import Image from 'next/image';
import Link from 'next/link';

const SERVICE_COLORS = {
  'Analytics':  { bg: 'rgba(180,140,220,0.31)', border: 'rgba(210,180,240,0.38)', text: '#e8d9fd' },
  'ML':         { bg: 'rgba(47,23,145,0.44)',   border: 'rgba(125,103,203,0.55)', text: '#beadf2' },
  'Data Eng':   { bg: 'rgba(132,74,202,0.37)',  border: 'rgba(141,84,227,0.49)',  text: '#d4bcfb' },
  'Web Dev':    { bg: 'rgba(180,80,160,0.3)',   border: 'rgba(210,110,190,0.45)', text: '#f0aadf' },
  'Viz & BI':   { bg: 'rgba(100,60,180,0.32)',  border: 'rgba(160,120,230,0.48)', text: '#c9b8fa' },
};

export default function CaseCard({ tag, title, blurb, link, logo }) {
  const c = SERVICE_COLORS[tag] || SERVICE_COLORS['Analytics'];

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#151630]">
      <div className="h-40 bg-[radial-gradient(120%_120%_at_0%_0%,#E6DAFF,transparent),radial-gradient(120%_120%_at_100%_100%,#9080DB,transparent)] flex items-center justify-center">
        {logo ? (
          <div className="relative h-32 w-32">
            <Image src={logo} alt={`${title} logo`} fill className="object-contain" />
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
        <span className="font-semibold">{title}</span>
        <span
          className="ml-2 rounded-full px-2 py-1 text-xs font-semibold"
          style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
        >
          {tag}
        </span>
        <p className="mt-1 text-sm text-white/70">{blurb}</p>
        {link && (
          <Link href={link} className="mt-3 inline-block text-sm font-medium text-[#9080DB] hover:underline">
            Learn more &rarr;
          </Link>
        )}
      </div>
    </article>
  );
}