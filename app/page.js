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
                See Our Work
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

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-10 md:py-16 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
          Welcome to <br />
          <span className="bg-gradient-to-r from-[#E6DAFF] to-[#9080DB] bg-clip-text text-transparent">Tech Consulting at MDC</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
          Work on impactful real-world projects. Build your skills in data science and tech. <br />Find a community of driven analysts from a diverse range of fields.

        </p>
      </section>

      {/*images*/}
      <section className="relative z-10 mx-auto max-w-6xl px-2 py-8 overflow-hidden">

        <div className="relative h-[220px] md:h-[280px] overflow-hidden">

          <div className="flex w-max gap-6 animate-[marquee_35s_linear_infinite] h-full items-center">

            {[...Array(2)].map((_, setIdx) =>
              [
                { src: "pic3.webp", caption: "Project Presentations" },
                { src: "pic5.webp", caption: "F25 Retreat" },
                { src: "pic2.webp", caption: "W26 Retreat" },
                { src: "pic4.webp", caption: "Team Picture" },
                { src: "pic1.webp", caption: "W26 Trek" },
                { src: "pic6.webp", caption: "Team Bonding" },
                { src: "pic7.webp", caption: "Hackathon" }
              ].map((imgData, i) => (
                <div
                  key={`${setIdx}-${i}`}
                  className="group relative h-[180px] md:h-[240px] w-[260px] md:w-[320px] flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:scale-[1.03] hover:z-10 cursor-pointer"
                >
                  <img
                    src={`/team/${imgData.src}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={imgData.caption}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1021]/90 via-[#0f1021]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-5">
                    <span className="text-white font-medium text-lg tracking-wide transform translate-y-4 transition-all duration-300 group-hover:translate-y-0">
                      {imgData.caption}
                    </span>
                  </div>
                </div>
              ))
            )}

          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="relative z-10 mx-auto max-w-6xl px-2 pt-2 py-12">
        <motion.div {...fadeInUp}>
        </motion.div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
            <h3 className="text-xl font-semibold text-white mb-3">Project Experience</h3>
            <p className="italic text-[#E6DAFF]">
              Hands-on experience w/ clients from local businesses + startups to international nonprofits + leading tech companies.
            </p>

            <p className="mt-3 text-white/80">
              Our members get real world experiences to apply their skills into the intersection of business and tech. Analysts work through the
              entire consulting process, from scoping and interfacing with the client to presenting final tech-based deliverables built on data-driven solutions.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
            <h3 className="text-xl font-semibold text-white mb-3">Education & Skill Development</h3>
            <p className="italic text-[#BFAEF0]">
              Technical and professional programming to build member skills in data science,  consulting, and tech & business as a whole.
            </p>

            <p className="mt-3 text-white/80">
              We invest significantly into our member tech + prof development, including creating weekly workshops in ML, data engineering, strategy
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
              every member is part of a supportive network where we can work together professionally and also connect socially.
            </p>
          </div>
        </div>
      </section>

      <WhoWeAreSimple />


      <section id="services" className="relative mx-auto max-w-6xl px-4 py-24">
        {/* Background Blob */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] opacity-20 blur-[100px]"
          style={{ backgroundImage: "radial-gradient(closest-side,#9080DB,transparent)" }} />

        <motion.div {...fadeInUp}>
          <SectionHeader>What we do</SectionHeader>

          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            <ServiceCard index={1} title="Data Analytics" desc="Data cleaning, analysis, and manipulation to uncover and translate trends and patterns that lead to actionable insights." />
            <ServiceCard index={2} title="Machine Learning" desc="Predictive modeling, NLP pipelines, and recommendation systems tailored to our client's data landscapes." />
            <ServiceCard index={3} title="Data Engineering" desc="Robust ETL pipelines, data warehousing, and cloud infrastructure optimization on AWS/Azure/GCP." />
            <ServiceCard index={4} title="Web Development" desc="End-to-end full-stack web development from database design and backend APIs to frontends and user interfacing." />
            <ServiceCard index={5} title="Visualization & BI" desc="Interactive dashboards (Tableau, PowerBI, Looker) focused on data storytelling to drive data-based decision-making." />
          </div>
        </motion.div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-4 pb-24">
        <motion.div {...fadeInUp}>
          <SectionHeader>Who we&apos;ve worked with</SectionHeader>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CaseCard tag="ML" title="Riot Games" blurb="Engineered full framework for video game NPC behaviors." link="/work/stanhope" logo="/clients/riot_adjacent.webp" />
            <CaseCard tag="Analytics" title="Ballotpedia" blurb="Analyzed and visualized 6 years of data from the Ballotpedia Candidate Connections survey." link="/work/ballotpediaF25" logo="/clients/ballotpedia.webp" />
            <CaseCard tag="Data Eng" title="MCFN" blurb="Designed and implemented an automated email alerts system to scrape campaign finance data." link="/work/mcfn" logo="/clients/mcfn.webp" />
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

            <div className="flex items-center justify-center h-20 md:h-24">
              <img
                src="/sponsors/lsa-barger.webp"
                alt="LSA Barger Leadership Institute"
                className="max-h-full w-auto object-contain"
              />
            </div>

            <div className="flex items-center justify-center h-20 md:h-24">
              <img
                src="/sponsors/esg.webp"
                alt="Engineering Student Government"
                className="max-h-full w-auto object-contain"
              />
            </div>

            <div className="flex items-center justify-center h-20 md:h-24">
              <img
                src="/sponsors/SOFC.webp"
                alt="Student Organization Funding Committee"
                className="max-h-full w-auto object-contain"
              />
            </div>

            <div className="flex items-center justify-center h-20 md:h-24">
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
