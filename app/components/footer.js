import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Globe, Mail, Twitter, Instagram } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  website: Globe,
  email: Mail,
  twitter: Twitter,
  instagram: Instagram,
};

function SocialIcons({ social = {} }) {
  const entries = Object.entries(social).filter(([, href]) => !!href);
  if (!entries.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {entries.map(([k, href]) => {
        const Icon = iconMap[k];
        const isEmail = k === 'email';
        const label = k === 'twitter' ? 'X / Twitter' : k[0].toUpperCase() + k.slice(1);
        if (!Icon) return null;
        return (
          <a
            key={k}
            href={isEmail ? `mailto:${href}` : href}
            target={isEmail ? undefined : '_blank'}
            rel={isEmail ? undefined : 'noopener noreferrer'}
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] backdrop-blur transition hover:bg-white/[0.08]"
          >
            <Icon className="h-4 w-4 text-white/90" />
          </a>
        );
      })}
    </div>
  );
}

export default function Footer({
  brand = { name: 'MDC', tagline: 'Michigan Data Consulting' },
  social = {
    github: '',
    linkedin: '',
    website: '',
    email: '',
    twitter: '',
  },
  backTo = '#home',
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 text-white/70">
      <div className="h-[1.5px] w-full [background:linear-gradient(90deg,#E6DAFF,#9080DB)] opacity-30" />

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
          <div>
            <div className="text-xl font-semibold">
              <span className="bg-gradient-to-r from-[#E6DAFF] to-[#9080DB] bg-clip-text text-transparent">
                {brand?.name ?? 'MDC'}
              </span>
            </div>
            {brand?.tagline ? (
              <p className="mt-2 max-w-sm text-sm text-white/65">{brand.tagline}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center">
          <span>© {year} {brand?.name ?? 'MDC'}</span>
          <a href={backTo} className="hover:text-white">
            Back to top ↑
          </a>
          <div className="md:ml-auto">
            <SocialIcons social={social} />
          </div>
        </div>
      </div>
    </footer>
  );
}
