'use client';

import React from 'react';
import StickyHeader from '../components/header';
import Footer from '../components/footer';
import Timeline from '../components/timeline';

// Mock data for general events since we only have recruiting events in data/recruiting.js
// Ideally this would come from a CMS or a shared data file.
const UPCOMING_EVENTS = [
    {
        title: 'Data Science Workshop: Intro to Pandas',
        start: '2026-02-10T18:00:00',
        end: '2026-02-10T19:30:00',
        location: '1010 Dow',
        description: 'Learn the basics of data manipulation with Python and Pandas. Open to all students!',
        link: '#'
    },
    {
        title: 'Guest Speaker: Jane Doe from Google',
        start: '2026-02-24T18:00:00',
        end: '2026-02-24T19:00:00',
        location: '1690 BBB',
        description: 'Hear from an industry expert about scaling ML models in production.',
        link: '#'
    },
    {
        title: 'End of Semester Showcase',
        start: '2026-04-20T17:00:00',
        end: '2026-04-20T20:00:00',
        location: 'Michigan Union, Rogel Ballroom',
        description: 'Come see what our project teams have been working on this semester! Food provided.',
        link: '#'
    }
];

export default function EventsPage() {
    return (
        <main className="relative min-h-dvh bg-[#0f1021] text-white overflow-hidden">
            <StickyHeader />

            <div className="pointer-events-none absolute -top-24 -left-20 h-[36rem] w-[36rem] opacity-50 blur-3xl"
                style={{ backgroundImage: 'radial-gradient(closest-side,#E6DAFF,transparent)' }} />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-[32rem] w-[32rem] opacity-50 blur-3xl"
                style={{ backgroundImage: 'radial-gradient(closest-side,#9080DB,transparent)' }} />

            <section className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-24">
                <header className="mb-12 text-center">
                    <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
                        Events
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-white/80">
                        Workshops, guest speakers, and community events open to the public.
                        Check back often for updates!
                    </p>
                </header>

                {/* Reusing Timeline component but passing generic events */}
                <Timeline season="Winter 2026" interestUrl="" applyUrl="" events={UPCOMING_EVENTS} />

                <div className="mt-16 text-center">
                    <p className="text-white/60 mb-4">Looking for recruiting events?</p>
                    <a href="/join" className="text-[#9080DB] hover:underline">
                        View Recruiting Timeline &rarr;
                    </a>
                </div>
            </section >

            <Footer social={{ instagram: "https://instagram.com/umich_mdc", email: "mdc-eboard@umich.edu", linkedin: "https://www.linkedin.com/company/michigan-data-consulting" }} />
        </main >
    );
}
