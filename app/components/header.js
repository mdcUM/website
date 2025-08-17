'use client';

import { useEffect, useState } from 'react';

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? 'hidden' : original || '';
    return () => { document.body.style.overflow = original; };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      data-scrolled={scrolled ? 'true' : 'false'}
      className={[
        'fixed top-0 z-50 w-full border-b transition-colors duration-300',
        scrolled
          ? 'border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40 shadow-[0_10px_30px_rgba(0,0,0,0.25)]'
          : 'border-transparent bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" className="font-semibold tracking-tight">
          MDC
        </a>

        <nav className="hidden items-center gap-2 sm:flex">
          <a className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5" href="/">Home</a>
          <a className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5" href="/clients">Clients</a>
          <a className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5" href="/us">Us</a>
          <a className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5" href="/join">Join</a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        className={[
          'sm:hidden fixed inset-0 z-[60] transition-transform',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
      >
        <div
          onClick={() => setOpen(false)}
          className={[
            'absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity',
            open ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />

        <aside
          className={[
            'absolute right-0 top-0 h-full w-72 max-w-[80%] border-l border-white/10 bg-black/90 p-4 shadow-2xl transition-transform',
            open ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="font-semibold">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <nav className="mt-2 flex flex-col gap-1">
            <a onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10" href="#work">Work</a>
            <a onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10" href="#services">Services</a>
            <a onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10" href="#team">Team</a>
            <a
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#9080DB] to-[#E6DAFF] px-4 py-2 text-sm font-medium text-[#0b0b11] shadow-[0_10px_30px_rgba(144,128,219,0.18)] hover:opacity-95"
              href="#contact"
            >
              Start a project
            </a>
          </nav>

          <div className="mt-6 border-t border-white/10 pt-3 text-xs text-white/50">
            <p>Tech Consulting Club</p>
          </div>
        </aside>
      </div>
    </header>
  );
}
