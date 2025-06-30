import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PainPoints />
      <Features />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
