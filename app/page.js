'use client'

import { CLIENTS_HOME } from "./data/clients";
import FlowFieldTechBg from "./components/flowhero";
import StickyHeader from "./components/header";
import CaseCard from "./components/case";
import ServiceCard from "./components/service";
import WhoWeAreSimple from "./components/aboutus";
import Footer from "./components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-dvh bg-[#0f1021] text-white">
      <StickyHeader />

      <section id="home" className="relative overflow-hidden border-b border-white min-h-screen max-h-screen">
        <FlowFieldTechBg
          colorA="#E6DAFF"
          colorB="#9080DB"
          background="#0b0b11"
          density={0.00018}
          speed={0.9}
        />

        <div className="pointer-events-none z-10 absolute -top-20 -left-10 h-[42rem] w-[42rem] opacity-50 blur-3xl"
             aria-hidden="true"
             style={{backgroundImage: "radial-gradient(closest-side,#E6DAFF,transparent)"}} />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-[36rem] w-[36rem] opacity-50 blur-3xl"
             aria-hidden="true"
             style={{backgroundImage: "radial-gradient(closest-side,#9080DB,transparent)"}} />

        <div className="relative w-full z-20 h-screen flex items-center justify-center">
          <div className="mx-auto max-w-6xl px-4 py-24 justify-center text-center">
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
              Michigan
              <span className="bg-gradient-to-r from-[#E6DAFF] to-[#9080DB] bg-clip-text text-transparent"> Data Consulting</span>
            </h1>
            <p className="mt-4 max-w-2xl text-white/70">
              U-Ms Premier Data Consulting Club
            </p>
            <div className="mt-6 flex flex-wrap gap-3 items-center justify-center">
              <Link href="/join" className="rounded-full bg-gradient-to-r from-[#9080DB] to-[#E6DAFF] px-5 py-2.5 font-medium text-[#0b0b11] shadow-[0_10px_30px_rgba(144,128,219,0.18)]">Join Us!</Link>
              <Link href="/clients" className="rounded-full border border-white/15 px-5 py-2.5 font-medium text-white/90 hover:bg-white/5">See our work</Link>
            </div>
          </div>
        </div>
        
      </section>

      <section className="border-b border-white/10 bg-white/5/10">
        <div className="mx-auto max-w-6xl overflow-hidden px-4 py-4">
          <div className="flex min-w-[200%] animate-[marquee_28s_linear_infinite] items-center gap-8 text-sm text-white/60 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            {CLIENTS_HOME.map((n,i)=> (
              <span key={i} className="rounded-full border border-white/10 px-4 py-2 backdrop-blur">
                {n}
              </span>
            ))}
            {CLIENTS_HOME.map((n,i)=> (
              <span key={`dup-${i}`} className="rounded-full border border-white/10 px-4 py-2 backdrop-blur">
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      <WhoWeAreSimple />

      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold sm:text-3xl">What we do</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard title="Web & App" desc="Next.js sites, portals, and dashboards with great UX." />
          <ServiceCard title="Data & ML" desc="ETL, dashboards, quick ML prototypes to validate impact." />
          <ServiceCard title="Design" desc="Branding, UI kits, and component libraries." />
          <ServiceCard title="Cloud" desc="Deployments on Vercel/AWS with monitoring and CI/CD." />
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-semibold sm:text-3xl">Selected work</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <CaseCard tag="Web" title="Ascend" blurb="Streamlined onboarding and billing." link="/clients/ascend"/>
          <CaseCard tag="Data" title="Civic Lab" blurb="Live metrics for ops leaders." link="/clients/civic-lab" />
          <CaseCard tag="ML" title="Health AI" blurb="Prototype improved conversions." link="/clients/health-ai" />
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </main>
  );
}
