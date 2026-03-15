'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Plane, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { destinations } from '@/data/destinations';

/* Stagger variants for the hero (above fold) */
const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function DestinationClient({ dest }) {
  const others = destinations.filter((d) => d.id !== dest.id).slice(0, 4);

  return (
    <main>
      <Navbar />

      {/* Hero — above fold, use animate with stagger */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image src={dest.heroImage} alt={dest.name} fill className="object-cover" priority />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(26,0,16,0.3) 0%, rgba(143,1,69,0.7) 60%, rgba(26,0,16,0.95) 100%)' }}
        />

        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-4">
          <div className="max-w-4xl mx-auto w-full">
            <Link
              href="/#destinations"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold mb-6 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Destinations
            </Link>

            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-xs font-bold text-white uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(165,0,80,0.7)', backdropFilter: 'blur(8px)' }}
              >
                {dest.region}
              </span>
            </div>

            <motion.div variants={heroContainer} initial="hidden" animate="show">
              <motion.h1
                variants={heroItem}
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-3"
              >
                {dest.name}
              </motion.h1>
              <motion.div variants={heroItem} className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">{dest.state} · Nigeria</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content — below fold, use whileInView */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-text-muted text-base font-medium leading-relaxed mb-8"
              >
                {dest.description}
              </motion.p>

              <h3 className="font-bold text-text-dark text-xl mb-4">Must-See Attractions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {dest.highlights.map((h, i) => (
                  <motion.div
                    key={h}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3 p-4 rounded-2xl"
                    style={{ background: '#FFF5F8', border: '1px solid rgba(165,0,80,0.1)' }}
                  >
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-text-dark font-semibold text-sm">{h}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl p-6"
                style={{ background: 'linear-gradient(135deg, #8F0145, #A50050)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Plane className="w-5 h-5 text-white/70 rotate-45" />
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Fly to {dest.name}</span>
                </div>
                <p className="text-white text-sm font-medium leading-relaxed mb-5">
                  Book your flight to {dest.name} today and experience the best of {dest.state}.
                </p>
                <Link
                  href="/#booking"
                  onClick={(e) => { e.preventDefault(); window.location.href = '/#booking'; }}
                  className="flex items-center justify-center gap-2 w-full bg-white text-primary font-bold py-3 rounded-2xl hover:scale-105 transition-all duration-200 text-sm"
                >
                  <Plane className="w-4 h-4 rotate-45" />
                  Book a Flight
                </Link>
              </motion.div>

              <div
                className="rounded-3xl p-6"
                style={{ background: '#FFF5F8', border: '1px solid rgba(165,0,80,0.1)' }}
              >
                <h4 className="font-bold text-text-dark text-sm mb-4 uppercase tracking-widest">Route Info</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Operated by', value: 'Rano Air Limited' },
                    { label: 'Hub Airport', value: 'Nnamdi Azikiwe Int\'l, Abuja' },
                    { label: 'Aircraft', value: 'EMB 145 Regional Jet' },
                    { label: 'Cabin', value: 'Economy Class' },
                  ].map((info) => (
                    <div key={info.label} className="flex justify-between items-center text-sm">
                      <span className="text-text-muted font-medium">{info.label}</span>
                      <span className="text-text-dark font-bold text-right max-w-[55%]">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other destinations */}
      <section className="py-16" style={{ background: '#FFF5F8' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h3 className="font-bold text-text-dark text-2xl mb-8">Other Destinations</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((d) => (
              <Link key={d.id} href={`/destinations/${d.id}`} className="group relative h-40 rounded-2xl overflow-hidden">
                <Image src={d.image} alt={d.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0010] to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                  <span className="text-white font-bold text-base">{d.name}</span>
                  <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
