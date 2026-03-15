'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/* Single coordinated timeline — one parent drives all children */
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

/* Airplane — mounts after 800ms so Hero entrance finishes first */
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

  useEffect(() => {
    const t = setTimeout(() => setShowPlane(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #6B0032 0%, #8F0145 30%, #A50050 65%, #B8005A 100%)',
      }}
    >
      {/* Static background layers — no animation cost */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 600, height: 600, top: '-15%', left: '-10%', background: 'rgba(255,255,255,0.06)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 400, height: 400, bottom: '10%', right: '-8%', background: 'rgba(255,255,255,0.04)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 280, height: 280, top: '20%', right: '20%', background: 'rgba(196,0,96,0.1)', filter: 'blur(50px)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(196,0,96,0.2) 0%, transparent 70%)' }}
      />

      {/* Airplane — delayed so it doesn't compete with Hero entrance */}
      {showPlane && <AirplaneSVG />}

      {/* Hero Content — single stagger parent, all children inherit the timeline */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-28 pb-16"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-1.5 mb-8 px-3 sm:px-5 py-2 rounded-full max-w-full"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/80 text-[10px] sm:text-xs font-semibold tracking-wide sm:tracking-widest uppercase">
            NCAA Licensed · 5 Aircraft · 9 Destinations
          </span>
        </motion.div>

        {/* Headline — animated as one block, not word-by-word */}
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

        {/* Subheading */}
        <motion.p
          variants={item}
          className="text-white/70 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto mb-4"
        >
          Connecting Nigeria, one flight at a time.
        </motion.p>

        {/* Cities */}
        <motion.p
          variants={item}
          className="text-white/45 text-sm font-medium tracking-wide"
        >
          Abuja · Lagos · Kano · Maiduguri · Sokoto · Kaduna · Katsina · Bauchi · Osubi
        </motion.p>

        {/* Scroll indicator — CSS animation for infinite loop, no JS per frame */}
        <motion.div
          variants={item}
          className="mt-16 flex flex-col items-center gap-2"
        >
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

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(255,245,248,0.95) 100%)' }}
      />
    </section>
  );
}
