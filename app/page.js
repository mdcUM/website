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

      <section id="services" className="relative mx-auto max-w-6xl px-4 py-24">
        {/* Background Blob */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] opacity-20 blur-[100px]"
          style={{ backgroundImage: "radial-gradient(closest-side,#9080DB,transparent)" }} />

        <motion.div {...fadeInUp}>
          <SectionHeader>What we do</SectionHeader>
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
          <SectionHeader>Selected work</SectionHeader>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CaseCard tag="Data" title="Ford School" blurb="KPI analysis and analytics dashboarding." link="/work/ford" logo="/clients/ford.png" />
            <CaseCard tag="ML" title="Homestream" blurb="Developed RAG pipelines and chatbot for home buyers." link="/work/homestream" logo="/clients/homestream.png" />
            <CaseCard tag="Data" title="Nomad Science" blurb="Optimized archaeology data systems and documentation." link="/work/nomad" logo="/clients/nomad_science.png" />
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
