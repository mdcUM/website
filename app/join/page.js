import React from 'react';
import Timeline from '../components/timeline';
import StickyHeader from '../components/header';
import Footer from '../components/footer';
import { EVENTS, APPLY_URL, INTEREST_URL } from '../data/recruiting';

export default function JoinPage(){
  return (
    <main className="relative min-h-dvh bg-[#0f1021] text-white overflow-hidden">
      <StickyHeader />

      <div className="pointer-events-none absolute -top-24 -left-20 h-[36rem] w-[36rem] opacity-50 blur-3xl"
           style={{ backgroundImage: 'radial-gradient(closest-side,#E6DAFF,transparent)' }} />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-[32rem] w-[32rem] opacity-50 blur-3xl"
           style={{ backgroundImage: 'radial-gradient(closest-side,#9080DB,transparent)' }} />

      <section className="relative z-10 mx-auto max-w-none px-0 py-12 md:py-16">
        <div id="top" className="relative z-10 mx-auto max-w-6xl px-4 py-14 md:py-20">
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Join Us
          </h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Come join us at our events to get to know more about the club, our members, and other students who share similar interestes as you!  
          </p>
      </div>
        <div>
          <Timeline season="Fall 2025" interestUrl={INTEREST_URL} applyUrl={APPLY_URL} events={EVENTS} big />
        </div>
      </section>

      <Footer social={{instagram: "https://instagram.com/umich_mdc", email: "michigandataconsulting@umich.edu", linkedin: "https://www.linkedin.com/company/michigan-data-consulting"}}/>
    </main>
  );
}
