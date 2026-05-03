'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function WhoWeAreSimple({
  title = 'Who we are',
  text1 = 'We are a student-led tech consulting club building data-driven solutions for partners in industry, academia, and more. ',
  text2 = 'Our mission is to provide innovative data-driven consulting services that deliver high-impact solutions to our clients. We aim to equip students with the analytical skills needed to solve complex business problems and drive meaningful impact across industries.' ,
  images = [
    { src: '/team/smiling.webp', alt: 'Group Photo' },
    { src: '/team/laughing.webp', alt: 'Group Talking Photo 1' },
    { src: '/team/laughing2.webp', alt: 'Group Talking Photo 2' }
  ],
  auto = true,
  interval = 3000,
}) {
  const [i, setI] = useState(0);
  const n = images.length;

  useEffect(() => {
    if (!auto || n <= 1) return;
    const id = setInterval(() => setI((v) => (v + 1) % n), interval);
    return () => clearInterval(id);
  }, [auto, interval, n]);

  const prev = () => setI((v) => (v - 1 + n) % n);
  const next = () => setI((v) => (v + 1) % n);

  return (
    <section className="border-b border-white/10 bg-transparent">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <div className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            About us
          </div>

          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>

          <p className="mt-3 text-white/70">{text1}
            <br /><br />
            {text2}</p>

          <ul className="mt-6 space-y-2 text-sm text-white/75">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#E6DAFF] to-[#9080DB]" />
              Project Experience
            </li>

            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#E6DAFF] to-[#9080DB]" />
              Technical + Professional Education
            </li>

            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#E6DAFF] to-[#9080DB]" />
              Community
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            {images.map((img, idx) => (
              <Image
                key={idx}
                src={img.src}
                alt={img.alt || ''}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${idx === i ? 'opacity-100' : 'opacity-0'
                  }`}
                draggable={false}
                width={600} height={450}
              />
            ))}

            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-2 backdrop-blur hover:bg-black/60 focus:outline-none"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/90">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-2 backdrop-blur hover:bg-black/60 focus:outline-none"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/90">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          <div className="mt-3 flex justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 w-1.5 rounded-full transition-all ${i === idx ? 'w-4 bg-white' : 'bg-white/40 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
