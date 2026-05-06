'use client';

import React from 'react';
import Link from 'next/link';
import StickyHeader from '../components/header';
import Footer from '../components/footer';
import CaseCard from '../components/case';
import {
    BarChart3,
    TrendingUp,
    Database,
    Code,
    LayoutDashboard,
    ShieldCheck,
    Users,
    Settings
} from 'lucide-react';

export default function ServicesPage() {
    return (
        <main className="relative min-h-dvh bg-[#0b0b11] text-white overflow-hidden">
            <StickyHeader />

            <div className="pointer-events-none absolute -top-24 -left-20 h-[36rem] w-[36rem] opacity-50 blur-3xl"
                style={{ backgroundImage: 'radial-gradient(closest-side,#E6DAFF,transparent)' }} />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-[32rem] w-[32rem] opacity-50 blur-3xl"
                style={{ backgroundImage: 'radial-gradient(closest-side,#9080DB,transparent)' }} />

            {/* Hero */}
            <section className="relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-32 text-center">
                <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
                    Turn Your Data Into <br />
                    <span className="bg-gradient-to-r from-[#E6DAFF] to-[#9080DB] bg-clip-text text-transparent">Strategic Advantage</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80 leading-relaxed font-sans">
                    Our team specializes in executing sophisticated data and technical solutions for a wide range of partners. From deploying advanced machine learning models and intuitive web applications to streamlining complex data workflows, we provide the analytical rigor and technical execution necessary to deliver exceptional outcomes for every client.
                </p>
                <div className="mt-10 flex justify-center">
                    <a href="mailto:mdc-eboard@umich.edu?subject=Consultation%20Request" className="rounded-full bg-gradient-to-r from-[#9080DB] to-[#E6DAFF] px-8 py-3 font-medium text-[#0b0b11] shadow-[0_10px_30px_rgba(144,128,219,0.18)] hover:shadow-[0_10px_40px_rgba(144,128,219,0.4)] transition-all text-lg">
                        Contact Us!
                    </a>
                </div>
            </section>

            {/* Services Overview & Core Services */}
            <section className="relative z-10 mx-auto max-w-6xl px-4 py-24 border-t border-white/5">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold font-display tracking-tight mb-4">Core Capabilities</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {/* Data Analytics */}
                    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] transition-all backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#E6DAFF] to-[#9080DB] mb-6 flex items-center justify-center text-[#0b0b11]">
                            <BarChart3 size={24} strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 font-display">Data Analytics</h3>
                        <p className="text-white/70 text-sm mb-6 flex-1">
                            Data cleaning, analysis, and manipulation to uncover and translate trends and patterns that lead to actionable insights.
                        </p>
                    </div>

                    {/* Machine Learning */}
                    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] transition-all backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#9080DB] to-[#5B3FA6] mb-6 flex items-center justify-center text-white">
                            <TrendingUp size={24} strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 font-display">Machine Learning</h3>
                        <p className="text-white/70 text-sm mb-6 flex-1">
                            Predictive modeling, NLP pipelines, and recommendation systems tailored to our client's data landscapes.
                        </p>
                    </div>

                    {/* Data Engineering */}
                    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] transition-all backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#E6DAFF] to-[#FFF] mb-6 flex items-center justify-center text-[#0b0b11]">
                            <Database size={24} strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 font-display">Data Engineering</h3>
                        <p className="text-white/70 text-sm mb-6 flex-1">
                            Robust ETL pipelines, data warehousing, and cloud infrastructure optimization on AWS/Azure/GCP.
                        </p>
                    </div>

                    {/* Web Development */}
                    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] transition-all backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#5B3FA6] to-[#9080DB] mb-6 flex items-center justify-center text-white">
                            <Code size={24} strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 font-display">Web Development</h3>
                        <p className="text-white/70 text-sm mb-6 flex-1">
                            End-to-end full-stack web development from database design and backend APIs to frontends and user interfacing.
                        </p>
                    </div>

                    {/* Visualization & BI */}
                    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] transition-all backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#9080DB] to-[#E6DAFF] mb-6 flex items-center justify-center text-[#0b0b11]">
                            <LayoutDashboard size={24} strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 font-display">Visualization & BI</h3>
                        <p className="text-white/70 text-sm mb-6 flex-1">
                            Interactive dashboards (Tableau, PowerBI, Looker) focused on data storytelling to drive data-based decision-making.
                        </p>
                    </div>
                </div>
            </section>

            {/* Case Studies / Impact */}
            <section className="relative z-10 mx-auto max-w-6xl px-4 py-24">
                <div className="mb-12 md:flex justify-between items-end border-b border-white/10 pb-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-semibold mb-4 font-display">Demonstrated Impact</h2>

                    </div>
                    <Link href="/work" className="hidden md:inline-flex items-center text-[#9080DB] hover:text-[#E6DAFF] font-medium transition whitespace-nowrap">
                        View All Cases <span className="ml-2">&rarr;</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <CaseCard tag="ML" title="Riot Games" blurb="Engineered full framework for video game NPC behaviors." link="/work/stanhope" logo="/clients/riot_adjacent.webp" />
                    <CaseCard tag="Data" title="Ballotpedia" blurb="Analyzed and visualized 6 years of data from the Ballotpedia Candidate Connections survey." link="/work/ballotpediaF25" logo="/clients/ballotpedia.webp" />
                    <CaseCard tag="Data" title="MCFN" blurb="Designed and implemented an automated email alerts system to scrape campaign finance data." link="/work/mcfn" logo="/clients/mcfn.webp" />
                </div>
                <div className="mt-8 text-center md:hidden">
                    <Link href="/work" className="inline-flex items-center text-[#9080DB] hover:text-[#E6DAFF] font-medium transition">
                        View All Cases &rarr;
                    </Link>
                </div>
            </section>


            {/* Engagement Process */}
            <section className="relative z-10 border-y border-white/5 bg-[#151630]/30 py-24">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold font-display tracking-tight mb-4">Our Engagement Process</h2>
                        <p className="text-white/70 max-w-2xl mx-auto">A systematic, transparent workflow designed to maximize ROI from day one.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#9080DB]/50 to-transparent z-0"></div>

                        {[
                            { step: '01', title: 'Consultation', desc: 'Initial discovery call to understand your business objectives and data landscape.' },
                            { step: '02', title: 'Problem Scoping', desc: 'Defining the precise analytical approach, required data, and project milestones.' },
                            { step: '03', title: 'Data Analysis', desc: 'Rigorous data cleaning, exploratory analysis, and modeling execution.' },
                            { step: '04', title: 'Insights Generation', desc: 'Translating complex models into clear, strategic recommendations.' },
                            { step: '05', title: 'Final Delivery', desc: 'Handover of comprehensive reports, functional dashboards, and codebases.' }
                        ].map((item, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center text-center p-4">
                                <div className="h-12 w-12 rounded-full border-2 border-[#9080DB] bg-[#0b0b11] flex items-center justify-center text-sm font-bold text-[#E6DAFF] mb-6 shadow-[0_0_15px_rgba(144,128,219,0.3)]">
                                    {item.step}
                                </div>
                                <h4 className="font-semibold text-lg mb-2 font-display">{item.title}</h4>
                                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative z-10 mx-auto max-w-4xl px-4 py-24">
                <h2 className="text-3xl font-semibold text-center mb-16 font-display">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-white/10 bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
                        <h4 className="font-semibold text-lg mb-3 flex items-start gap-3 font-display">
                            <ShieldCheck className="text-[#9080DB] flex-shrink-0 mt-1" size={20} />
                            How do you handle data confidentiality?
                        </h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                            We adhere to strict data security protocols. All project members sign Non-Disclosure Agreements (NDAs), and data is processed using secure, client-approved infrastructure.
                        </p>
                    </div>
                    <div className="border border-white/10 bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
                        <h4 className="font-semibold text-lg mb-3 flex items-start gap-3 font-display">
                            <Settings className="text-[#E6DAFF] flex-shrink-0 mt-1" size={20} />
                            What is the typical project timeline?
                        </h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Engagements usually run for 10-12 weeks, aligning with our organizational cycles. However, we employ agile sprints to ensure deliverables and insights are shared iteratively.
                        </p>
                    </div>
                    <div className="border border-white/10 bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
                        <h4 className="font-semibold text-lg mb-3 flex items-start gap-3 font-display">
                            <BarChart3 className="text-[#9080DB] flex-shrink-0 mt-1" size={20} />
                            How do we define the scope of work?
                        </h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                            During the initial consultation and scoping phase, we collaborate with you to outline precise deliverables, data dependencies, and key success metrics in a formal Statement of Work.
                        </p>
                    </div>
                    <div className="border border-white/10 bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
                        <h4 className="font-semibold text-lg mb-3 flex items-start gap-3 font-display">
                            <Users className="text-[#E6DAFF] flex-shrink-0 mt-1" size={20} />
                            What is the experience level of the team?
                        </h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Our teams are led by experienced technical project managers who have driven impactful work at top-tier tech and consulting firms. All members pass rigorous technical evaluations before deployment.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative z-10 mx-auto max-w-4xl px-4 pb-32 text-center">
                <div className="rounded-[2.5rem] border border-[#9080DB]/30 bg-gradient-to-b from-[#151630] to-[#0b0b11] p-12 md:p-20 shadow-[0_20px_60px_rgba(144,128,219,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#9080DB] opacity-20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <h2 className="text-3xl md:text-5xl font-semibold mb-6 font-display">Let&apos;s Work Together!</h2>
                    <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg font-sans">
                        We want to work with your organization! We are always looking for new clients to collaborate with, so if you have a future project in mind, we&apos;d love to hear from you.
                    </p>
                    <a href="mailto:mdc-eboard@umich.edu?subject=Partnership%20Inquiry" className="inline-flex items-center gap-2 rounded-full bg-white text-[#0b0b11] px-8 py-4 font-semibold hover:bg-[#E6DAFF] shadow-[0_10px_30px_rgba(255,255,255,0.2)] transition-all text-lg">
                        Contact Us!
                    </a>
                </div>
            </section>

            <Footer social={{ instagram: "https://instagram.com/umich_mdc", email: "mdc-eboard@umich.edu", linkedin: "https://www.linkedin.com/company/michigan-data-consulting" }} />
        </main>
    );
}
