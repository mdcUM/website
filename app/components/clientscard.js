'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { CLIENTS } from '../data/clients';
import StickyHeader from './header';

function initials(name){ const p=name.trim().split(/\s+/); return ((p[0]?.[0]||'')+(p[p.length-1]?.[0]||'')).toUpperCase(); }

const ALL_TAGS = Array.from(new Set(CLIENTS.flatMap(c=>c.tags))).sort();

function LogoTile({ name, logo, brand }) {
  const bg = `linear-gradient(135deg, ${brand}22, ${brand}11)`;
  return (
    <div className="relative grid place-items-center rounded-2xl ring-1 ring-white/10 bg-white/[0.02] overflow-hidden h-32 sm:h-36 md:h-44">
      <div className="absolute inset-0 opacity-80" style={{ background: bg }} />
      <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full blur-2xl opacity-40" style={{ backgroundColor: brand }} />
      {logo ? (
        <div className="relative h-[60%] w-[60%]">
          <Image src={logo} alt={`${name} logo`} fill className="object-contain" />
        </div>
      ) : (
        <div className="relative grid h-20 w-20 place-items-center rounded-2xl bg-white/90 text-[#0b0b11] font-bold text-xl">
          {initials(name)}
        </div>
      )}
    </div>
  );
}

function StatChip({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[15px] text-white/80">
      <span className="font-semibold text-white">{value}</span> <span className="text-white/80">{label}</span>
    </div>
  );
}

function TagPillStatic({ text }) {
  return <span className="rounded-full border border-white/15 px-2 py-0.5 text-xs text-white/80">{text}</span>;
}

function ClientModal({ open, onClose, client }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && client && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            key="wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
          >
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-3xl border border-white/15 bg-white/[0.07] p-6 md:p-7 text-white shadow-[0_20px_60px_rgba(0,0,0,.65)] backdrop-blur"
              role="dialog"
              aria-modal="true"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-16 -top-16 h-24 opacity-35 blur-3xl"
                style={{
                  background: `radial-gradient(60% 60% at 30% 20%, ${(client.brand || '#E6DAFF')}66, transparent 60%)`,
                }}
              />
              <div
                aria-hidden
                className="absolute inset-x-0 -top-px h-px rounded-t-3xl"
                style={{
                  background: `linear-gradient(90deg, ${client.brand || '#E6DAFF'}, #9080DB)`,
                  opacity: 0.7,
                }}
              />

              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                <div className="w-full md:w-56">
                  <LogoTile name={client.name} logo={client.logo} brand={client.brand} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-sm text-white/70">{client.year}</div>
                      <h3 className="mt-0.5 text-2xl md:text-3xl font-semibold leading-tight">
                        {client.name}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {client.tags.map((t) => (
                          <TagPillStatic key={t} text={t} />
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={onClose}
                      aria-label="Close"
                      className="rounded-full border border-white/20 p-2 hover:bg-white/10"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  {client.summary && (
                    <p className="mt-3 text-white/80">
                      {client.summary}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-white/90">What we did</h4>
                  <ul className="mt-2 grid gap-1.5 text-sm text-white/85">
                    {client.work.map((w, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: 'linear-gradient(90deg,#E6DAFF,#9080DB)' }}
                        />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white/90">Impact</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {client.impact?.map((s, i) => <StatChip key={i} {...s} />)}
                  </div>

                  {client.testimonial && (
                    <blockquote className="mt-4 rounded-xl border border-white/10 bg-white/[0.05] p-3 text-sm text-white/80">
                      “{client.testimonial.quote}”
                      <footer className="mt-1 text-xs text-white/60">— {client.testimonial.author}</footer>
                    </blockquote>
                  )}
                </div>
              </div>

              {(client.website || client.caseUrl) && (
                <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end border-t border-white/10 pt-4">
                  {client.caseUrl && (
                    <a
                      href={client.caseUrl}
                      className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
                    >
                      Read case
                    </a>
                  )}
                  {client.website && (
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#9080DB] to-[#E6DAFF] px-4 py-2 text-sm font-medium text-[#0b0b11] shadow-[0_10px_30px_rgba(144,128,219,0.18)]"
                    >
                      <ExternalLink className="mr-1.5 h-4 w-4" />
                      Visit site
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function ClientsView() {
  const [active, setActive] = useState(null);
  const counts = useMemo(()=>({
    clients: CLIENTS.length,
    domains: ALL_TAGS.length,
  }), []);

  return (
    <main className="relative min-h-dvh bg-[#0f1021] text-white overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-20 h-[36rem] w-[36rem] opacity-50 blur-3xl" style={{ backgroundImage: 'radial-gradient(closest-side,#E6DAFF,transparent)' }} />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-[32rem] w-[32rem] opacity-50 blur-3xl" style={{ backgroundImage: 'radial-gradient(closest-side,#9080DB,transparent)' }} />

      <section className="relative z-10 mx-auto max-w-6xl px-4 py-14 md:py-20">
        <header className="mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'linear-gradient(90deg,#E6DAFF,#9080DB)' }} />
            Clients & Projects
          </div>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight">Stuff</h1>
          <p className="mt-3 max-w-2xl text-white/80">If you want to work with us, please reach out to <a href="mailto:michigandataconsulting@umich.edu" className="text-blue-500 underline">michigandataconsulting@umich.edu</a></p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/70">
            <span className="rounded-full border border-white/15 px-3 py-1">{counts.clients} clients</span>
            <span className="rounded-full border border-white/15 px-3 py-1">{counts.domains} service areas</span>
          </div>
        </header>

        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {CLIENTS.map((c, i) => (
            <motion.button
              key={c.name}
              onClick={()=>setActive(c)}
              whileHover={{ y: -2, scale: 1.01 }}
              transition={{ duration: 0.22 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left"
            >
              <LogoTile name={c.name} logo={c.logo} brand={c.brand} />
              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold truncate">{c.name}</h3>
                    <span className="text-xs text-white/50">• {c.year}</span>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {c.tags.slice(0,3).map(t => <TagPillStatic key={t} text={t} />)}
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-white/15 px-3 py-1 text-xs text-white/85 group-hover:bg-white/10">Details</span>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition"
                   style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(230,218,255,0.06), transparent 40%)' }} />
            </motion.button>
          ))}
        </div>
      </section>

      <ClientModal open={!!active} onClose={()=>setActive(null)} client={active} />
    </main>
  );
}
