'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StickyHeader from '../components/header';
import Footer from '../components/footer';
import CaseCard from '../components/case';
// Re-using CaseCard, but might need adjustment if I want a different look. 
// For now, consistent look is good.

export default function ServicesPage() {
    return (
        <main className="relative min-h-dvh bg-[#0f1021] text-white overflow-hidden">
            <StickyHeader />

            <div className="pointer-events-none absolute -top-24 -left-20 h-[36rem] w-[36rem] opacity-50 blur-3xl"
                style={{ backgroundImage: 'radial-gradient(closest-side,#E6DAFF,transparent)' }} />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-[32rem] w-[32rem] opacity-50 blur-3xl"
                style={{ backgroundImage: 'radial-gradient(closest-side,#9080DB,transparent)' }} />

            {/* Hero */}
            <section className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-32 text-center">
                <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
                    Data-Driven Solutions for <br />
                    <span className="bg-gradient-to-r from-[#E6DAFF] to-[#9080DB] bg-clip-text text-transparent">Your Toughest Challenges</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
                    We partner with organizations to deliver professional-grade data engineering, machine learning, and visualization solutions.
                </p>
                <div className="mt-8 flex justify-center">
                    <a href="mailto:mdc-eboard@umich.edu" className="rounded-full bg-gradient-to-r from-[#9080DB] to-[#E6DAFF] px-8 py-3 font-medium text-[#0b0b11] shadow-[0_10px_30px_rgba(144,128,219,0.18)] hover:opacity-95 text-lg">
                        Start a Project
                    </a>
                </div>
            </section>

            {/* Service Offerings */}
            <section className="relative z-10 mx-auto max-w-6xl px-4 py-16">
                <h2 className="text-3xl font-semibold text-center mb-12">Our Expertise</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] transition">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#E6DAFF] to-[#9080DB] mb-6 flex items-center justify-center text-black font-bold text-xl">ML</div>
                        <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
                        <p className="text-white/70">Predictive modeling, NLP pipelines, and recommendation systems tailored to your unique data landscape.</p>
                    </div>
                    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] transition">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#9080DB] to-[#5B3FA6] mb-6 flex items-center justify-center text-white font-bold text-xl">DE</div>
                        <h3 className="text-xl font-semibold mb-3">Data Engineering</h3>
                        <p className="text-white/70">Robust ETL pipelines, data warehousing, and cloud infrastructure optimization on AWS/Azure/GCP.</p>
                    </div>
                    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] transition">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#E6DAFF] to-[#FFF] mb-6 flex items-center justify-center text-black font-bold text-xl">Viz</div>
                        <h3 className="text-xl font-semibold mb-3">Visualization & BI</h3>
                        <p className="text-white/70">Interactive dashboards (Tableau, PowerBI, Looker) and custom web applications to drive decision making.</p>
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="relative z-10 border-y border-white/5 bg-white/[0.02] py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="md:flex items-center gap-12">
                        <div className="flex-1 mb-10 md:mb-0">
                            <h2 className="text-3xl font-semibold mb-6">Why Partner With MDC?</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="h-6 w-6 rounded-full bg-[#9080DB] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-lg">Top Tier Talent</h4>
                                        <p className="text-white/70">Our analysts are selected from the top 5% of applicants at U-M, undergoing rigorous technical training.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-6 w-6 rounded-full bg-[#E6DAFF] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-lg">Professional Oversight</h4>
                                        <p className="text-white/70">Projects are managed by experienced upperclassmen with internships at major tech and consulting firms.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-6 w-6 rounded-full bg-white/50 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-lg">Cost Effective Impact</h4>
                                        <p className="text-white/70">Get high-quality consulting deliverables at a fraction of the cost of traditional firms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative h-80 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                            {/* Placeholder for a "Team working" image or similar abstract visual */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#9080DB]/20 to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display text-4xl font-bold">
                                MDC x PARTNERS
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Selected Work (Reuse Case Cards) */}
            <section className="relative z-10 mx-auto max-w-6xl px-4 py-20">
                <h2 className="text-3xl font-semibold text-center mb-12">Success Stories</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <CaseCard tag="Data" title="Ford School" blurb="KPI analysis and analytics dashboarding." link="/work/ford" logo="/clients/ford.png" />
                    <CaseCard tag="ML" title="Homestream" blurb="Developed RAG pipelines and chatbot for home buyers." link="/work/homestream" logo="/clients/homestream.png" />
                    <CaseCard tag="Data" title="Nomad Science" blurb="Optimized archaeology data systems and documentation." link="/work/nomad" logo="/clients/nomad_science.png" />
                </div>
                <div className="mt-12 text-center">
                    <Link href="/work" className="inline-flex items-center text-[#9080DB] hover:text-[#E6DAFF] font-medium transition">
                        View Full Portfolio &rarr;
                    </Link>
                </div>
            </section>

            {/* Intake / Contact */}
            <section className="relative z-10 mx-auto max-w-4xl px-4 pb-24 text-center">
                <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-10 md:p-16">
                    <h2 className="text-3xl font-semibold mb-4">Ready to Innovate?</h2>
                    <p className="text-white/70 mb-8 max-w-xl mx-auto">
                        We accept new project proposals on a rolling basis, with initiatives typically starting at the beginning of each semester (September & January).
                    </p>
                    <a href="mailto:mdc-eboard@umich.edu?subject=Project%20Partnership%20Inquiry" className="rounded-full bg-white text-[#0b0b11] px-8 py-3 font-medium hover:bg-gray-100 shadow-xl transition">
                        Contact Us
                    </a>
                </div>
            </section>

            <Footer social={{ instagram: "https://instagram.com/umich_mdc", email: "mdc-eboard@umich.edu", linkedin: "https://www.linkedin.com/company/michigan-data-consulting" }} />
        </main>
    );
}
