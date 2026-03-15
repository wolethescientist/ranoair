import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookingSection from '@/components/BookingSection';
import Destinations from '@/components/Destinations';
import WhoWeAre from '@/components/WhoWeAre';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import AppDownload from '@/components/AppDownload';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BookingSection />
      <Destinations />
      <WhoWeAre />
      <Features />
      <Stats />
      <AppDownload />
      <Contact />
      <Footer />
    </main>
  );
}
