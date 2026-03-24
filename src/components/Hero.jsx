'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const SLIDES = [
  { src: '/images/destinations/abuja.jpg', city: 'Abuja' },
  { src: '/images/destinations/lagos.jpg', city: 'Lagos' },
  { src: '/images/destinations/kano.jpg', city: 'Kano' },
  { src: '/images/destinations/maiduguri.jpg', city: 'Maiduguri' },
  { src: '/images/destinations/sokoto.jpg', city: 'Sokoto' },
  { src: '/images/destinations/kaduna.jpg', city: 'Kaduna' },
  { src: '/images/destinations/katsina.jpg', city: 'Katsina' },
  { src: '/images/destinations/bauchi.jpg', city: 'Bauchi' },
  { src: '/images/destinations/osubi.jpg', city: 'Osubi' },
];

const SLIDE_DURATION = 5000; // ms each slide stays

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

function AirplaneSVG() {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100px', y: 30 }}
      animate={{ opacity: [0, 1, 1, 0], x: '110vw', y: -20 }}
      transition={{ duration: 4, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: '32vh',
        left: 0,
        zIndex: 20,
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    >
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        <g transform="rotate(45, 32, 32)">
          <path d="M32 8 L38 32 L32 38 L26 32 Z" fill="white" opacity="0.95" />
          <path d="M32 22 L56 34 L52 36 L32 28 L12 36 L8 34 Z" fill="white" opacity="0.9" />
          <path d="M30 34 L24 44 L26 44 L32 36 L38 44 L40 44 L34 34 Z" fill="white" opacity="0.8" />
        </g>
      </svg>
    </motion.div>
  );
}

export default function Hero() {
  const [showPlane, setShowPlane] = useState(false);
  const [current, setCurrent] = useState(0);

  // Show airplane once on mount
  useEffect(() => {
    const t = setTimeout(() => setShowPlane(true), 800);
    return () => clearTimeout(t);
  }, []);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Slideshow background ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[current].src}
              alt={SLIDES[current].city}
              fill
              priority={current === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay so text stays legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(80,0,30,0.55) 0%, rgba(107,0,50,0.68) 50%, rgba(80,0,30,0.75) 100%)',
          }}
        />

        {/* Subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 50% 40%, transparent 40%, rgba(30,0,15,0.45) 100%)',
          }}
        />
      </div>

      {/* ── Decorative blobs (kept, blend on top of image) ── */}
      <div
        className="absolute rounded-full pointer-events-none hidden sm:block z-[1]"
        style={{ width: 600, height: 600, top: '-15%', left: '-10%', background: 'rgba(255,255,255,0.04)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute rounded-full pointer-events-none hidden sm:block z-[1]"
        style={{ width: 400, height: 400, bottom: '10%', right: '-8%', background: 'rgba(255,255,255,0.03)', filter: 'blur(60px)' }}
      />

      {/* ── Airplane easter-egg ── */}
      {showPlane && <AirplaneSVG />}

      {/* ── Hero content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-28 pb-16"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-1.5 mb-8 px-3 sm:px-5 py-2 rounded-full max-w-full"
          style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/80 text-[10px] sm:text-xs font-semibold tracking-wide sm:tracking-widest uppercase">
            NCAA Licensed · 5 Aircraft · 9 Destinations
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-white font-bold leading-[1.05] mb-6"
        >
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Fly the
          </div>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span style={{
              background: 'linear-gradient(90deg, #FFE5EF 0%, #FFFFFF 50%, #FFD6EA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Rano Way.
            </span>
          </div>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-white/80 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto mb-4"
        >
          Connecting Nigeria, one flight at a time.
        </motion.p>

        {/* ── City indicator dots ── */}
        <motion.div variants={item} className="mt-8 flex items-center justify-center gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.city}
              onClick={() => setCurrent(i)}
              aria-label={`Go to ${slide.city}`}
              className="transition-all duration-300 rounded-full focus:outline-none"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? '#fff' : 'rgba(255,255,255,0.35)',
              }}
            />
          ))}
        </motion.div>

        {/* ── Current city name label ── */}
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
            className="mt-3 text-white text-xs font-bold tracking-widest uppercase"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.7), 0 1px 6px rgba(0,0,0,0.5)' }}
          >
            {SLIDES[current].city}
          </motion.p>
        </AnimatePresence>

        <motion.div variants={item} className="mt-10 flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs font-semibold tracking-widest uppercase">
            Scroll to explore
          </span>
          <div
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
            style={{ animation: 'scrollBob 1.8s ease-in-out infinite' }}
          >
            <div className="w-1 h-2 rounded-full bg-white/40" />
          </div>
        </motion.div>
      </motion.div>

      {/* ── Bottom fade into page ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(255,245,248,0.95) 100%)' }}
      />
    </section>
  );
}
