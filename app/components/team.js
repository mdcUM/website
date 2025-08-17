'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, Mail, Twitter } from 'lucide-react';
import React from 'react';

function initials(name) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] ?? '' : '';
  return (first + last).toUpperCase();
}

const linkIconMap = {
  github: Github,
  linkedin: Linkedin,
  website: Globe,
  email: Mail,
  twitter: Twitter,
};

function IconLink({ type, href }) {
  const Icon = linkIconMap[type];
  if (!Icon) return null;

  const isEmail = type === 'email';
  const label = type === 'twitter' ? 'X / Twitter' : type[0].toUpperCase() + type.slice(1);

  return (
    <a
      href={isEmail ? `mailto:${href}` : href}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] backdrop-blur transition
                 hover:bg-white/[0.08] focus:outline-none"
    >
      <Icon className="h-4 w-4 text-white/90" />
    </a>
  );
}

function TeamCard({ member }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative rounded-3xl border border-white/10 bg-white/[0.02] shadow-sm backdrop-blur
                 ring-1 ring-white/5 hover:shadow-md transition overflow-hidden shadow-lg shadow-white/20"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(600px 200px at 10% -10%, rgba(230,218,255,.12), transparent 40%)' }}
      />

      <div className="p-6">
        <div className="mx-auto relative h-64 w-48 md:h-80 md:w-60 rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-lg shadow-white/20">
          {member.image ? (
            <Image
              src={member.image}
              alt={`${member.name} headshot`}
              fill
              sizes="(min-width: 768px) 12rem, 9rem"
              quality={90}
              className="object-cover"
              priority={false}
            />
          ) : (
            <div className="h-full w-full grid place-items-center bg-gradient-to-br from-white/10 to-white/5 text-white/80 font-semibold">
              {initials(member.name)}
            </div>
          )}
        </div>

        <div className="mt-4 text-center">
          <h3 className="font-display text-lg md:text-xl font-semibold tracking-tight">{member.name}</h3>
          <p className="mt-1 text-sm text-white/75">
            {member.title}{member.grade ? ` • ${member.grade}` : ''}
          </p>

          {member.links && (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
              {Object.entries(member.links)
                .filter(([, v]) => Boolean(v))
                .map(([k, v]) =>
                  linkIconMap[k] ? <IconLink key={k} type={k} href={v} /> : null
                )}
            </div>
          )}
        </div>
      </div>

      <div className="h-1 w-full [background:linear-gradient(90deg,#E6DAFF,#9080DB)]" />
    </motion.article>
  );
}

export default function TeamSections({ sections }) {
  return (
    <div className="space-y-14 md:space-y-20">
      {sections.map((s) => (
        <section key={s.key} className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full [background:linear-gradient(90deg,#E6DAFF,#9080DB)]" />
            <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">{s.title}</h2>
          </div>

          <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            {s.members.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
