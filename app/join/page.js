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

      {/* Timeline Section */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-5xl font-semibold text-center mb-12">F26 Recruitment</h2>
        <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
          Our Fall 2026 recruitment cycle is currently being finalized. Event details, workshops, and application deadlines will be posted soon.
          <br /><br />Fill out our interest form and check back for updates!
        </p>
        <Timeline season="Fall 2026" interestUrl={INTEREST_URL} applyUrl={APPLY_URL} events={EVENTS} big />
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
