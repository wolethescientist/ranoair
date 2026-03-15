'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plane, Star, Bell, CreditCard } from 'lucide-react';

const appFeatures = [
  { icon: Plane, text: 'Book flights in under 2 minutes' },
  { icon: Bell, text: 'Real-time flight status & alerts' },
  { icon: CreditCard, text: 'Manage and modify bookings' },
  { icon: Star, text: 'Exclusive app-only deals' },
];

export default function AppDownload() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: '-80px' });
  const rightInView = useInView(rightRef, { once: true, margin: '-80px' });

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #8F0145 0%, #A50050 40%, #B5005A 70%, #C40060 100%)',
      }}
    >
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Phone mockup */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -40 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div
              className="relative"
              style={{ animation: 'phoneFloat 4s ease-in-out infinite', willChange: 'transform' }}
            >
              <div
                className="relative w-52 sm:w-64 h-[420px] sm:h-[500px] rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl overflow-hidden"
                style={{
                  background: '#1A0010',
                  border: '2px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
                }}
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black z-20" />

                <div className="absolute inset-0 flex flex-col">
                  <div className="h-12 flex items-end justify-between px-6 pb-1.5">
                    <span className="text-white/40 text-[10px] font-bold">9:41</span>
                  </div>

                  <div
                    className="mx-3 rounded-2xl p-4 mb-3"
                    style={{ background: 'rgba(165,0,80,0.4)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center">
                        <Plane className="w-3.5 h-3.5 text-primary rotate-45" />
                      </div>
                      <span className="text-white font-bold text-sm">RANO AIR</span>
                    </div>
                    <div className="text-white/60 text-[10px] font-medium mb-1">Good morning, Traveller</div>
                    <div className="text-white font-bold text-sm">Where are you flying today?</div>
                  </div>

                  <div className="flex gap-2 px-3 mb-3">
                    {['ABV → LOS', 'KAN → ABV'].map((route) => (
                      <div
                        key={route}
                        className="flex-1 rounded-xl p-3 text-center"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        <div className="text-white font-bold text-xs">{route}</div>
                        <div className="text-white/40 text-[9px] mt-0.5 font-medium">From ₦45,000</div>
                      </div>
                    ))}
                  </div>

                  <div className="mx-3 rounded-2xl p-4 mb-3" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-white font-bold text-lg">ABV</div>
                        <div className="text-white/40 text-[10px] font-medium">Abuja</div>
                      </div>
                      <div className="flex flex-col items-center px-2">
                        <Plane className="w-4 h-4 text-primary rotate-90" />
                        <div className="text-white/30 text-[9px] mt-1">1h 10m</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold text-lg">LOS</div>
                        <div className="text-white/40 text-[10px] font-medium">Lagos</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/50 text-[10px] font-medium">08:00 — 09:10</span>
                      <span className="text-primary font-bold text-xs">₦48,500</span>
                    </div>
                  </div>

                  <div className="mx-3">
                    <div
                      className="rounded-xl py-3 text-center text-white font-bold text-xs"
                      style={{ background: 'linear-gradient(135deg, #A50050, #C40060)' }}
                    >
                      Book This Flight
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="absolute -top-4 -right-4 bg-green-400 text-green-900 font-bold text-xs px-3 py-1.5 rounded-full shadow-lg">
                ✓ On Time
              </div>
              <div
                className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 shadow-2xl"
                style={{ background: '#1A0010', border: '1px solid rgba(165,0,80,0.3)' }}
              >
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-primary" />
                  <div>
                    <div className="text-white text-[10px] font-bold">Flight RA 201</div>
                    <div className="text-white/50 text-[9px]">Now boarding · Gate 4</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 40 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-1 lg:order-2"
          >
            <p className="text-white/60 font-bold text-xs uppercase tracking-widest mb-4">
              Download the App
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Fly smarter with{' '}
              <span className="text-white/50">the</span>{' '}
              Rano Air app
            </h2>
            <p className="text-white/70 font-medium text-base leading-relaxed mb-8 max-w-sm">
              Book flights, manage your itinerary, and get real-time updates —
              all from your pocket. Available on iOS and Android.
            </p>

            <ul className="space-y-3 mb-10">
              {appFeatures.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <motion.li
                    key={feat.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={rightInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-white/80" />
                    </div>
                    <span className="text-white/80 font-medium text-sm">{feat.text}</span>
                  </motion.li>
                );
              })}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://apps.apple.com/ng/app/rano-air/id6446061219"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl hover:scale-105 transition-transform duration-200"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <div className="text-white/50 text-[10px] font-semibold uppercase tracking-widest">Download on the</div>
                  <div className="text-white font-bold text-base leading-tight">App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.rano.air"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl hover:scale-105 transition-transform duration-200"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                  <path d="M3 20.5v-17c0-.83 1-.92 1.37-.43l14 8.5c.36.22.36.64 0 .86l-14 8.5C3.57 21.42 3 21.33 3 20.5z" fill="white" opacity="0.9"/>
                </svg>
                <div>
                  <div className="text-white/50 text-[10px] font-semibold uppercase tracking-widest">Get it on</div>
                  <div className="text-white font-bold text-base leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
