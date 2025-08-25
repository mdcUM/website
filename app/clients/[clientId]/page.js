import ClientPageClient from "@/app/components/ClientPageClient";
import StickyHeader from "@/app/components/header";
import Footer from "@/app/components/footer";
import { CLIENTS } from "@/app/data/clients";

export function generateStaticParams() {
  return CLIENTS.map((c) => ({
    clientId: c.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function ClientPage({ params }) {
  const { clientId } = await params;

  return (
    <main className="relative min-h-dvh bg-[#0f1021] text-white overflow-hidden">
      <StickyHeader />
      <div
        className="pointer-events-none absolute -top-24 -left-20 h-[36rem] w-[36rem] opacity-50 blur-3xl"
        style={{ backgroundImage: "radial-gradient(closest-side,#E6DAFF,transparent)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-20 h-[32rem] w-[32rem] opacity-50 blur-3xl"
        style={{ backgroundImage: "radial-gradient(closest-side,#9080DB,transparent)" }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, #E6DAFF, #9080DB)`, opacity: 0.7 }}
      />

      {/* Render the client component content */}
      <ClientPageClient clientId={clientId} />

      <Footer />
    </main>
  );
}
