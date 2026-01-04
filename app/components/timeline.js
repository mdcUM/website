'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

function clsx(...xs){ return xs.filter(Boolean).join(' '); }

function fmtDate(d){
  const dt = new Date(d);
  return new Intl.DateTimeFormat(undefined,{weekday:'short',month:'short',day:'numeric'}).format(dt);
}
function fmtTime(d){
  const dt = new Date(d);
  return new Intl.DateTimeFormat(undefined,{hour:'numeric',minute:'2-digit'}).format(dt);
}
function isNowBetween(start,end){
  const now = Date.now(), s = new Date(start).getTime(), e = end ? new Date(end).getTime() : s+3600e3;
  return now>=s && now<=e;
}
function isPast(endOrStart){
  const now = Date.now(), t = new Date(endOrStart).getTime();
  return t<now;
}

function msToParts(ms){
  const abs = Math.abs(ms);
  const d = Math.floor(abs/86400000);
  const h = Math.floor((abs%86400000)/3600000);
  const m = Math.floor((abs%3600000)/60000);
  if (d) return `${d}d ${h}h`;
  if (h) return `${h}h ${m}m`;
  return `${m}m`;
}
function getStatus(ev){
  const now = Date.now();
  const s = new Date(ev.start).getTime();
  const e = ev.end ? new Date(ev.end).getTime() : s + 3600e3;

  if (now >= s && now <= e) return {key:'now', label:'NOW', emoji:'🚀', tone:'from-[#E6DAFF] to-[#9080DB]'};
  if (now < s) {
    const soon = s - now < 48*3600e3;
    return soon
      ? {key:'soon', label:'SOON', emoji:'🛰️', tone:'from-[#E6DAFF] to-[#9AD0FF]'}
      : {key:'upcoming', label:'UPCOMING', emoji:'🌙', tone:'from-[#E6DAFF] to-[#B7A7FF]'};
  }
  return {key:'past', label:'PAST', emoji:'☄️', tone:'from-white/60 to-white/30'};
}
// gentle hue shift per index
function planetGradient(idx, active){
  const hues = [270, 255, 300, 230];
  const h = hues[idx % hues.length];
  return active
    ? `radial-gradient(circle at 30% 30%, hsl(${h} 100% 90%), hsl(${h} 55% 60%) 60%, hsl(${h-20} 35% 25%) 100%)`
    : `radial-gradient(circle at 30% 30%, hsl(${h} 100% 92% / .35), hsl(${h} 55% 65% / .35) 60%, hsl(${h-20} 35% 25% / .35) 100%)`;
}

export default function Timeline({ season='Winter 2026', interestUrl='', applyUrl='', events=[] }) {
  const sorted = [...events].sort((a,b)=>new Date(a.start)-new Date(b.start));

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 -left-20 h-1 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[2px] animate-comet" />

        <div className="absolute top-110 -left-30 h-1 w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[2px] animate-comet" />

         <div className="absolute top-210 -left-50 h-1 -rotate-12 w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[2px] animate-comet" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full [background:linear-gradient(90deg,#E6DAFF,#9080DB)]" />
              Recruiting Timeline — {season}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {interestUrl ? (
            <a
              href={interestUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-l from-[#9080DB] to-[#E6DAFF] px-5 py-2.5 font-medium text-[#0b0b11] shadow-[0_10px_30px_rgba(144,128,219,0.18)]"
            >
              Interest Form
            </a>
          ) : (
            <a
              href={interestUrl}
              target="_blank"
              rel="noopener noreferrer"
              disabled={true}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-l from-[#5B3FA6] to-[#1F1B50] px-5 py-2.5 font-medium text-white shadow-[0_10px_30px_rgba(144,128,219,0.18)]"
            >
              Interest Form Closed
            </a>
          )}

          {applyUrl ? (
            <a
              href={applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#9080DB] to-[#E6DAFF] px-5 py-2.5 font-medium text-[#0b0b11] shadow-[0_10px_30px_rgba(144,128,219,0.18)]"
            >
              Apply now
            </a>
          ) : (
            <a
              href={applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              disabled={true}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#5B3FA6] to-[#1F1B50] px-5 py-2.5 font-medium text-white shadow-[0_10px_30px_rgba(144,128,219,0.18)]"
            >
              Application Not Open
            </a>
          )}
          </div>

          
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-6xl px-4">
        <svg className="absolute -z-10 left-0 right-0 mx-auto w-full h-full pointer-events-none" viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true">
          <path d="M50,100 C400,0 800,200 1150,100" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
          <path d="M50,320 C400,220 800,420 1150,320" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
          <path d="M50,540 C400,440 800,640 1150,540" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
        </svg>

        <div className="grid gap-8 md:gap-10">
          {sorted.map((ev, idx) => {
            const past = ev.end ? isPast(ev.end) : isPast(ev.start);
            const active = isNowBetween(ev.start, ev.end);
            const lane = idx % 3;
            const stat = getStatus(ev);
            const now = Date.now();
            const s = new Date(ev.start).getTime();
            const e = ev.end ? new Date(ev.end).getTime() : s + 3600e3;
            const relText =
              now < s ? `in ${msToParts(s - now)}` :
              now <= e ? `${msToParts(e - now)} left` :
              `${msToParts(now - (ev.end ? e : s))} ago`;

            return (
              <motion.article
                key={`${ev.title}-${idx}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className={clsx(
                  'relative rounded-3xl border p-4 sm:p-5 backdrop-blur overflow-hidden',
                  active ? 'border-white/20 bg-white/[0.07] shadow-md' : 'border-white/10 bg-white/[0.035]'
                )}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-x-8 -top-12 h-24 blur-3xl opacity-40"
                  style={{ backgroundImage: 'linear-gradient(90deg, rgba(230,218,255,.25), rgba(144,128,219,.18))' }}
                />

                <div className="absolute -left-5 -top-5">
                  <div
                    className={clsx('relative rounded-full ring-2', active ? 'ring-[#E6DAFF66]' : 'ring-white/20')}
                    style={{ width: 48, height: 48, background: planetGradient(idx, active) }}
                  >
                    <span
                      className="absolute -inset-[6px] rounded-full border-2 border-dashed border-white/25 animate-spin-slower"
                      aria-hidden
                    />
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{ boxShadow: 'inset 0 0 22px rgba(230,218,255,0.25), 0 0 10px rgba(144,128,219,0.25)' }}
                      aria-hidden
                    />
                  </div>
                </div>

                <div className="pl-6 sm:pl-2 md:pl-0">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-base font-semibold sm:text-lg">
                      <span className={clsx(active && 'bg-gradient-to-r from-[#E6DAFF] to-[#9080DB] bg-clip-text text-transparent')}>
                        {ev.title}
                      </span>
                    </h3>

                    <div className="flex items-center gap-2">
                      <span className={clsx(
                        'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-white/15',
                        'bg-gradient-to-r', stat.tone
                      )}>
                        <span>{stat.emoji}</span>
                        <span className="uppercase tracking-wide">{stat.label}</span>
                      </span>
                      <span className="text-xs text-white/70">{relText}</span>
                    </div>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-white/75">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4" />
                      <span>{fmtDate(ev.start)}{ev.end && ` — ${fmtDate(ev.end)}`}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      <span>{fmtTime(ev.start)}{ev.end && `–${fmtTime(ev.end)}`}</span>
                    </span>
                    {ev.location && (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        <span className="truncate max-w-[14rem]">{ev.location}</span>
                      </span>
                    )}
                  </div>

                  {ev.description && (
                    <p className="mt-2 text-sm text-white/75">{ev.description}</p>
                  )}

                  <div className="mt-3 flex flex-wrap gap-2">
                    {ev.link && (
                      <a href={ev.link} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/85 hover:bg-white/5">
                        Learn more
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle { 0%,100% { opacity:.4 } 50% { opacity:.8 } }
        @keyframes twinkle-slow { 0%,100% { opacity:.3 } 50% { opacity:.6 } }
        @keyframes comet {
          0% { transform: translateX(0) translateY(0) rotate(12deg); opacity: 0; }
          10% { opacity: .9; }
          50% { transform: translateX(50vw) translateY(10vh) rotate(12deg); opacity: .7; }
          100% { transform: translateX(100vw) translateY(20vh) rotate(12deg); opacity: 0; }
        }
        .animate-twinkle { animation: twinkle 4s ease-in-out infinite; }
        .animate-twinkle-slow { animation: twinkle-slow 7s ease-in-out infinite; }
        .animate-comet { animation: comet 9s linear infinite; }
        @keyframes spin-slower { to { transform: rotate(360deg); } }
        .animate-spin-slower { animation: spin-slower 12s linear infinite; }
      `}</style>
    </section>
  );
}
