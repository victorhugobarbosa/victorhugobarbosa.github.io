import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Showroom } from "@/components/Showroom";
import { AgentSection } from "@/components/AgentSection";
import { MicroSaas } from "@/components/MicroSaas";
import { Integrations } from "@/components/Integrations";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-neon-green selection:text-black">
      <Header />

      <Hero />

      {/* Other sections placeholders */}
      <Showroom />

      <AgentSection />

      <MicroSaas />

      <Integrations />

      <Footer />
    </main>
  );
}
