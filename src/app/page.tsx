import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import EmailCapture from '@/components/EmailCapture';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Benefits />
      <EmailCapture />
      <Footer />
    </main>
  );
}
