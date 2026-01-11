import React from 'react';
import Timeline from '../components/timeline';
import StickyHeader from '../components/header';
import Footer from '../components/footer';
import { EVENTS, APPLY_URL, INTEREST_URL } from '../data/recruiting';
import Link from 'next/link';

export default function JoinPage() {
  return (
    <main className="relative min-h-dvh bg-[#0f1021] text-white overflow-hidden">
      <StickyHeader />

      <div className="pointer-events-none absolute -top-24 -left-20 h-[36rem] w-[36rem] opacity-50 blur-3xl"
        style={{ backgroundImage: 'radial-gradient(closest-side,#E6DAFF,transparent)' }} />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-[32rem] w-[32rem] opacity-50 blur-3xl"
        style={{ backgroundImage: 'radial-gradient(closest-side,#9080DB,transparent)' }} />

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-32 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
          Launch Your Career in <br />
          <span className="bg-gradient-to-r from-[#E6DAFF] to-[#9080DB] bg-clip-text text-transparent">Data Consulting</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
          Join Michigan&apos;s premier student-led data consulting club. Work with real clients, make real impact, and find your community.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-r from-[#9080DB] to-[#E6DAFF] px-8 py-3 font-medium text-[#0b0b11] shadow-[0_10px_30px_rgba(144,128,219,0.18)] hover:opacity-95 text-lg">
            Apply Now
          </a>
          <a href={INTEREST_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-8 py-3 font-medium text-white/90 hover:bg-white/5 text-lg">
            Interest Form
          </a>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
            <h3 className="text-xl font-semibold text-[#E6DAFF] mb-3">Professional Growth</h3>
            <p className="text-white/70">Hands-on experience with Fortune 500s and startups. Specialized workshops in ML, Data Engineering, and Strategy.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
            <h3 className="text-xl font-semibold text-[#9080DB] mb-3">Mentorship</h3>
            <p className="text-white/70">Direct access to upperclassmen at top firms like Roblox, Capital One, Amazon, and more.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
            <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
            <p className="text-white/70">A tight-knit group of driven peers. We host socials, semester retreats, and build lifelong friendships.</p>
          </div>
        </div>
      </section>


      {/* Alumni Section for once we have some*/}
      {/*
      <section className="relative z-10 border-y border-white/5 bg-white/[0.02] py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Where Our Alumni Go
          </h2>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition duration-500">
            {['Google', 'McKinsey & Company', 'Amazon', 'Microsoft', 'Bain & Company', 'Databricks', 'Capital One'].map(company => (
              <span
                key={company}
                className="text-xl font-semibold text-white/40 hover:text-white/90 transition-colors cursor-default"
              >
                {company}
              </span>
            ))}
          </div>

          <p className="mt-8 text-white/60 text-sm">
            Our members consistently secure internships and full-time offers at top tech and consulting firms.
          </p>
        </div>
      </section>
      */}



      {/* Timeline Section */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Recruiting Timeline</h2>
        <Timeline season="Winter 2026" interestUrl={INTEREST_URL} applyUrl={APPLY_URL} events={EVENTS} big />
      </section>

      {/* FAQ */}
      <section className="relative z-10 mx-auto max-w-4xl px-4 pb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group rounded-xl border border-white/10 bg-white/[0.02] open:bg-white/[0.05]">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-lg">
              Do I need prior data experience?
              <span className="ml-4 text-white/50 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-6 text-white/70 leading-relaxed">
              Not necessarily! We look for problem-solving skills, curiosity, and a willingness to learn. While technical skills are a plus, we have a robust training program for new analysts.
            </div>
          </details>
          <details className="group rounded-xl border border-white/10 bg-white/[0.02] open:bg-white/[0.05]">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-lg">
              What majors do you accept?
              <span className="ml-4 text-white/50 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-6 text-white/70 leading-relaxed">
              We accept all majors! Our team is diverse, including students from Computer Science, Data Science, Business, Economics, Information, and Engineering.
            </div>
          </details>
          <details className="group rounded-xl border border-white/10 bg-white/[0.02] open:bg-white/[0.05]">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-lg">
              What is the time commitment?
              <span className="ml-4 text-white/50 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-6 text-white/70 leading-relaxed">
              New analysts can expect to spend about 5-6 hours per week on club activities, including team meetings, workshops, and project work.
            </div>
          </details>
        </div>
      </section>

      <Footer social={{ instagram: "https://instagram.com/umich_mdc", email: "mdc-eboard@umich.edu", linkedin: "https://www.linkedin.com/company/michigan-data-consulting" }} />
    </main>
  );
}
