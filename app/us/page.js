'use client'

import React from 'react';
import TeamSections from '../components/team';
import { MEMBERS } from '../data/team';
import StickyHeader from '../components/header';
import Footer from '../components/footer';

export default function TeamPage() {
  return (
    <main className="relative min-h-dvh bg-[#0f1021] text-white overflow-hidden">
        <StickyHeader />

      <div
        className="pointer-events-none absolute -top-24 -left-20 h-[36rem] w-[36rem] opacity-50 blur-3xl"
        aria-hidden="true"
        style={{ backgroundImage: 'radial-gradient(closest-side,#E6DAFF,transparent)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-20 h-[32rem] w-[32rem] opacity-50 blur-3xl"
        aria-hidden="true"
        style={{ backgroundImage: 'radial-gradient(closest-side,#9080DB,transparent)' }}
      />

      <div id="top" className="relative z-10 mx-auto max-w-6xl px-4 py-14 md:py-20">
        <header className="mb-12 md:mb-16">
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Us
          </h1>
          <p className="mt-3 max-w-2xl text-white/80">
            something about blah blah look at us and our photos
          </p>
        </header>

        <TeamSections sections={MEMBERS} />
      </div>

      <Footer backTo='#top'/>
    </main>
  );
}
