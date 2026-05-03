'use client'

import { CLIENTS_HOME } from "./data/clients";
import FlowFieldTechBg from "./components/flowhero";
import StickyHeader from "./components/header";
import CaseCard from "./components/case";
import ServiceCard from "./components/service";
import WhoWeAreSimple from "./components/aboutus";
import Footer from "./components/footer";
import Link from "next/link";
import { motion } from "framer-motion";

function SectionHeader({ children }) {
  return (
    <h2 className="text-3xl font-semibold sm:text-4xl text-center mb-12">
      <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
        {children}
      </span>
    </h2>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function Home() {
  return (
    <main className="relative min-h-dvh bg-[#0f1021] text-white overflow-hidden">
      <StickyHeader />

      <section id="home" className="relative overflow-hidden border-b border-white/5 min-h-screen max-h-screen">
        <FlowFieldTechBg
          colorA="#E6DAFF"
          colorB="#9080DB"
          background="#0b0b11"
          density={0.00018}
          speed={0.9}
        />

        <div className="pointer-events-none z-10 absolute -top-20 -left-10 h-[42rem] w-[42rem] opacity-50 blur-3xl"
          aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(closest-side,#E6DAFF,transparent)" }} />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-[36rem] w-[36rem] opacity-50 blur-3xl"
          aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(closest-side,#9080DB,transparent)" }} />

        <div className="relative w-full z-20 h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-6xl px-4 py-24 flex flex-col items-center justify-center text-center"
          >
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl tracking-tight">
              Michigan
              <span className="bg-gradient-to-r from-[#E6DAFF] to-[#9080DB] bg-clip-text text-transparent"> Data Consulting</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed font-light">
              UM&apos;s Premier Data Science Consulting Club
            </p>
            <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
              <Link href="/join" className="group relative rounded-full bg-gradient-to-r from-[#9080DB] to-[#E6DAFF] px-8 py-3 font-medium text-[#0b0b11] shadow-[0_10px_30px_rgba(144,128,219,0.2)] hover:shadow-[0_10px_40px_rgba(144,128,219,0.4)] transition-all transform hover:-translate-y-0.5">
                Join Us!
              </Link>
              <Link href="/work" className="rounded-full border border-white/10 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                See our work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl overflow-hidden px-4 py-6">
          <div className="flex min-w-[200%] animate-[marquee_40s_linear_infinite] items-center gap-12 text-sm font-medium text-white/40 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            {[...CLIENTS_HOME, ...CLIENTS_HOME, ...CLIENTS_HOME].map((n, i) => (
              <span key={i} className="whitespace-nowrap flex items-center gap-4">
                {n}
                <span className="h-1 w-1 rounded-full bg-white/20"></span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <WhoWeAreSimple />
      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-12 md:py-20 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
          Welcome to... <br />
          <span className="bg-gradient-to-r from-[#E6DAFF] to-[#9080DB] bg-clip-text text-transparent">Tech Consulting at MDC</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
          Join Michigan&apos;s premier student-led data consulting club. Work on real impactful projects, develop your skills, and find a community
          of driven analysts.
        </p>
      </section>

      {/*images*/}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-10">
        <div className="flex justify-center gap-6 overflow-x-auto snap-x snap-mandatory">

          <div className="min-w-[260px] md:min-w-[320px] snap-center rounded-2xl overflow-hidden border border-white/10">
            <img src="/team/pic3.webp" className="h-full w-full object-cover" />
          </div>

          <div className="min-w-[260px] md:min-w-[320px] snap-center rounded-2xl overflow-hidden border border-white/10">
            <img src="/team/pic1.webp" className="h-full w-full object-cover" />
          </div>

          <div className="min-w-[260px] md:min-w-[320px] snap-center rounded-2xl overflow-hidden border border-white/10">
            <img src="/team/pic2.webp" className="h-full w-full object-cover" />
          </div>

        </div>
      </section>

      {/* Value Pillars */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
            <h3 className="text-xl font-semibold text-white mb-3">Project Experience</h3>
            <p className="italic text-[#E6DAFF]">
              Hands-on experience w/ clients from startups + leading tech companies to local businesses + international nonprofits.
            </p>

            <p className="mt-3 text-white/80">
              Our members get real world experiences to apply their skills into the intersection of business and tech. Analysts work through the
              entire consulting process, from scoping and interfacing with the client, to presenting final tech-based deliverables built on data-driven insights.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
            <h3 className="text-xl font-semibold text-white mb-3">Education & Skill Development</h3>
            <p className="italic text-[#BFAEF0]">
              Technical and professional programming to build member skills in data science and consulting.
            </p>

            <p className="mt-3 text-white/80">
              We invest significantly into our member tech + prof development, including creating weekly workshops in ML, data engineering, strategy,
              and curating a comprehensive MDC-specific resource hub offering tracks in data science, consulting, SWE, and more.

            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
            <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
            <p className="italic text-[#9080DB]">
              A tight-knit group of driven peers. We host socials, semester retreats, and build lifelong friendships.
            </p>

            <p className="mt-3 text-white/80">
              From arb sunsets to ice skating socials, our team and community go beyond just project work. Community is why MDC was originally created—
              every member is part of a supportive network where we not only work together professionally but also connect socially.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="relative mx-auto max-w-6xl px-4 py-24">
        {/* Background Blob */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] opacity-20 blur-[100px]"
          style={{ backgroundImage: "radial-gradient(closest-side,#9080DB,transparent)" }} />

        <motion.div {...fadeInUp}>
          <SectionHeader>What we do</SectionHeader> {/*add more here*/}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Machine Learning"
              desc="Predictive modeling, NLP pipelines, and recommendation systems tailored to your unique data landscape."
            />
            <ServiceCard
              title="Data Engineering"
              desc="Robust ETL pipelines, data warehousing, and cloud infrastructure optimization on AWS/Azure/GCP."
            />
            <ServiceCard
              title="Visualization & BI"
              desc="Interactive dashboards (Tableau, PowerBI, Looker) and custom web applications to drive decision making."
            />
          </div>
        </motion.div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-4 pb-24">
        <motion.div {...fadeInUp}>
          <SectionHeader>Who we&apos;ve worked with</SectionHeader>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CaseCard tag="Data" title="Ford School" blurb="KPI analysis and analytics dashboarding." link="/work/ford" logo="/clients/ford.webp" />
            <CaseCard tag="ML" title="Homestream" blurb="Developed RAG pipelines and chatbot for home buyers." link="/work/homestream" logo="/clients/homestream.webp" />
            <CaseCard tag="Data" title="Nomad Science" blurb="Optimized archaeology data systems and documentation." link="/work/nomad" logo="/clients/nomad_science.webp" />
          </div>
        </motion.div>
      </section>

      <section id="companies" className="mx-auto max-w-6xl px-4 pb-24">
  <motion.div {...fadeInUp}>
    <SectionHeader>Where we&apos;ve been</SectionHeader>

    <div className="mt-6 flex justify-center">
      <img
        src="/team/companies.webp"
        alt="Where we have been"
        className="w-full max-w-5xl rounded-xl object-cover"
      />
    </div>
  </motion.div>
</section>

  
      

      <section id="sponsors" className="mx-auto max-w-6xl px-4 pb-24">
  <motion.div {...fadeInUp}>
    <SectionHeader>Our Sponsors</SectionHeader>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-10 items-center justify-items-center">
      
      <div className="transition-transform duration-300 hover:scale-105 flex items-center justify-center h-20 md:h-24">
        <img
          src="/sponsors/lsa-barger.webp"
          alt="LSA Barger Leadership Institute"
          className="max-h-full w-auto object-contain"
        />
      </div>

      <div className="transition-transform duration-300 hover:scale-105 flex items-center justify-center h-20 md:h-24">
        <img
          src="/sponsors/esg.webp"
          alt="Engineering Student Government"
          className="max-h-full w-auto object-contain"
        />
      </div>

      <div className="transition-transform duration-300 hover:scale-105 flex items-center justify-center h-20 md:h-24">
        <img
          src="/sponsors/SOFC.webp"
          alt="Student Organization Funding Committee"
          className="max-h-full w-auto object-contain"
        />
      </div>

      <div className="transition-transform duration-300 hover:scale-105 flex items-center justify-center h-20 md:h-24">
        <img
          src="/sponsors/LSA-SG.webp"
          alt="LSA Student Government"
          className="max-h-full w-auto object-contain"
        />
      </div>

    </div>
  </motion.div>
</section>

      <Footer social={{ instagram: "https://instagram.com/umich_mdc", email: "mdc-eboard@umich.edu", linkedin: "https://www.linkedin.com/company/michigan-data-consulting" }} />

      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
      `}</style>
    </main>
  );
}
