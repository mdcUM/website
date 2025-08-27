'use client'
import { useParams } from "next/navigation";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import { CLIENTS } from "@/app/data/clients";
import StickyHeader from "@/app/components/header";
import Footer from "@/app/components/footer";

function initials(name) { 
  const p = name.trim().split(/\s+/); 
  return ((p[0]?.[0] || '') + (p[p.length - 1]?.[0] || '')).toUpperCase(); 
}

function LogoHero({ name, logo, brand }) {
  const bg = `linear-gradient(135deg, ${brand}33, ${brand}15)`;
  return (
    <div className="relative grid place-items-center rounded-3xl ring-1 ring-white/15 bg-white/[0.03] overflow-hidden h-48 w-full max-w-sm mx-auto">
      <div className="absolute inset-0 opacity-90" style={{ background: bg }} />
      <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full blur-3xl opacity-50" style={{ backgroundColor: brand }} />
      <div className="absolute -right-12 -bottom-12 h-24 w-24 rounded-full blur-2xl opacity-30" style={{ backgroundColor: brand }} />
      {logo ? (
        <div className="relative h-[50%] w-[50%] z-10">
          <Image src={logo} alt={`${name} logo`} fill className="object-contain" />
        </div>
      ) : (
        <div className="relative grid h-24 w-24 place-items-center rounded-3xl bg-white/95 text-[#0b0b11] font-bold text-2xl z-10">
          {initials(name)}
        </div>
      )}
    </div>
  );
}

function TagPill({ text }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.05] px-3 py-1.5 text-sm text-white/85 backdrop-blur">
      <Tag className="mr-1.5 h-3 w-3" />
      {text}
    </span>
  );
}

function StatChip({ label, value }) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-center backdrop-blur">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-white/70 mt-1">{label}</div>
    </div>
  );
}

function Section({ title, children, className = "" }) {
  return (
    <section className={`${className}`}>
      <h2 className="text-xl font-semibold text-white/95 mb-4 flex items-center">
        <span className="h-1.5 w-1.5 rounded-full mr-3" 
              style={{ background: 'linear-gradient(90deg,#E6DAFF,#9080DB)' }} />
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function ClientPage() {
  const { clientId } = useParams();
  const client = CLIENTS.find((c) => c.name.toLowerCase().replace(/\s+/g, '-') === clientId);

  if (!client) {
    return (
      <main className="relative min-h-dvh bg-[#0f1021] text-white">
        <div className="pointer-events-none absolute -top-24 -left-20 h-[36rem] w-[36rem] opacity-50 blur-3xl" 
             style={{ backgroundImage: 'radial-gradient(closest-side,#E6DAFF,transparent)' }} />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20">
          <div className="text-center">
            <h1 className="font-display text-4xl font-semibold mb-4">Client Not Found</h1>
            <p className="text-white/70 mb-6">The requested client {clientId} does not exist.</p>
            <Link href="/clients" 
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-[#9080DB] to-[#E6DAFF] px-6 py-3 text-sm font-medium text-[#0b0b11] shadow-[0_10px_30px_rgba(144,128,219,0.18)]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Clients
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-dvh bg-[#0f1021] text-white overflow-hidden">
        <StickyHeader />
      <div className="pointer-events-none absolute -top-24 -left-20 h-[36rem] w-[36rem] opacity-50 blur-3xl" 
           style={{ backgroundImage: 'radial-gradient(closest-side,#E6DAFF,transparent)' }} />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-[32rem] w-[32rem] opacity-50 blur-3xl" 
           style={{ backgroundImage: 'radial-gradient(closest-side,#9080DB,transparent)' }} />
      
      <div className="absolute inset-x-0 top-0 h-px" 
           style={{ background: `linear-gradient(90deg, ${client.brand || '#E6DAFF'}, #9080DB)`, opacity: 0.7 }} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/clients" 
                className="inline-flex items-center text-sm text-white/70 hover:text-white/90 transition-colors mt-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all clients
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <LogoHero name={client.name} logo={client.logo} brand={client.brand} />
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 mb-4">
                <Calendar className="h-3 w-3" />
                {client.year}
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                {client.name}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {client.tags.map((tag) => (
                  <TagPill key={tag} text={tag} />
                ))}
              </div>

              {client.description && (
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  {client.description}
                </p>
              )}

              <div className="flex gap-3">
                {client.website && (
                  <a href={client.website}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center rounded-full bg-gradient-to-r from-[#9080DB] to-[#E6DAFF] px-6 py-3 text-sm font-medium text-[#0b0b11] shadow-[0_10px_30px_rgba(144,128,219,0.18)] hover:shadow-[0_15px_40px_rgba(144,128,219,0.25)] transition-shadow">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
            >
              <Section title="What We Did" className="mb-6">
                {client.whatwedid ? (
                  <div className="space-y-6">
                    <p className="text-base text-white/90 leading-relaxed">
                      {client.whatwedid}
                    </p>
                    
                    {client.work && client.work.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wide">
                          Key Deliverables
                        </h4>
                        <div className="space-y-3">
                          {client.work.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-mds">
                              <span className="h-1.5 w-1.5 rounded-full mt-2 flex-shrink-0"
                                    style={{ background: 'linear-gradient(90deg,#E6DAFF,#9080DB)' }} />
                              <span className="text-white/85">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  // Fallback to work items if whatwedid doesn't exist
                  <div className="space-y-3">
                    {client.work?.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="h-1.5 w-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ background: 'linear-gradient(90deg,#E6DAFF,#9080DB)' }} />
                        <span className="text-white/85">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Section>
            </motion.div>

            {client.services && client.services.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
              >
                <Section title="Services Provided">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {client.services.map((service, idx) => (
                      <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                        <span className="text-sm text-white/85">{service}</span>
                      </div>
                    ))}
                  </div>
                </Section>
              </motion.div>
            )}

            {client.technologies && client.technologies.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
              >
                <Section title="Technologies Used">
                  <div className="flex flex-wrap gap-2">
                    {client.technologies.map((tech, idx) => (
                      <span key={idx} 
                            className="rounded-full border border-white/20 bg-white/[0.05] px-3 py-1 text-sm text-white/85">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Section>
              </motion.div>
            )}
          </div>

          <div className="space-y-6">
            {client.impact && client.impact.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
              >
                <Section title="Impact">
                  <div className="grid gap-3">
                    {client.impact.map((stat, idx) => (
                      <StatChip key={idx} {...stat} />
                    ))}
                  </div>
                </Section>
              </motion.div>
            )}

            {client.testimonial && (
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
              >
                <Section title="Client Feedback">
                  <blockquote className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                    <p className="text-md text-white/85 italic mb-3">
                      {client.testimonial.quote}
                    </p>
                    <footer className="text-sm text-white/60">
                      — {client.testimonial.author}
                    </footer>
                  </blockquote>
                </Section>
              </motion.div>
            )}

            {client.results && (
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
              >
                <Section title="Results">
                  <p className="text-sm text-white/85 leading-relaxed">
                    {client.results}
                  </p>
                </Section>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <Footer social={{instagram: "https://instagram.com/umich_mdc", email: "mdc-eboard@umich.edu", linkedin: "https://www.linkedin.com/company/michigan-data-consulting"}}/>
    </main>
  );
}