'use client';
import { motion } from 'framer-motion';

/* Split text into word spans — GPU-safe: only opacity + translateY */
function SplitText({ text }) {
  return (
    <span>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
          style={{ display: 'inline-block', marginRight: '0.25em', willChange: 'transform' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* Airplane — only uses translateX/translateY (compositor only, no layout) */
function AirplaneSVG() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100, y: 0 }}
      animate={{ opacity: [0, 1, 1, 0], x: ['−100px', '110vw'], y: [30, -20] }}
      transition={{ duration: 4, delay: 1.2, ease: 'easeInOut' }}
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
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #6B0032 0%, #8F0145 30%, #A50050 65%, #B8005A 100%)',
      }}
    >
      {/* Dot grid — static, no animation */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      {/* Static decorative orbs — NO animation, filter:blur is fine when static */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600, height: 600,
          top: '-15%', left: '-10%',
          background: 'rgba(255,255,255,0.06)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400, height: 400,
          bottom: '10%', right: '-8%',
          background: 'rgba(255,255,255,0.04)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 280, height: 280,
          top: '20%', right: '20%',
          background: 'rgba(196,0,96,0.1)',
          filter: 'blur(50px)',
        }}
      />

      {/* Radial glow — static */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(196,0,96,0.2) 0%, transparent 70%)',
        }}
      />

      {/* Airplane */}
      <AirplaneSVG />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-28 pb-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-1.5 mb-8 px-3 sm:px-5 py-2 rounded-full max-w-full"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
            willChange: 'transform',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/80 text-[10px] sm:text-xs font-semibold tracking-wide sm:tracking-widest uppercase">
            NCAA Licensed · 5 Aircraft · 9 Destinations
          </span>
        </motion.div>

        {/* Main Headline */}
        <h1 className="text-white font-bold leading-[1.05] mb-6">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <SplitText text="Fly the" />
          </div>
          <div
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            style={{
              background: 'linear-gradient(90deg, #FFE5EF 0%, #FFFFFF 40%, #FFD6EA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            <SplitText text="Rano Way." />
          </div>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="text-white/70 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto mb-4"
        >
          Connecting Nigeria, one flight at a time.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-white/45 text-sm font-medium tracking-wide"
        >
          Abuja · Lagos · Kano · Maiduguri · Sokoto · Kaduna · Katsina · Bauchi · Osubi
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs font-semibold tracking-widest uppercase">
            Scroll to explore
          </span>
          {/* CSS animation — no JS on the main thread */}
          <div
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
            style={{ animation: 'scrollBob 1.8s ease-in-out infinite' }}
          >
            <div className="w-1 h-2 rounded-full bg-white/40" />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255,245,248,0.95) 100%)',
        }}
      />
    </section>
  );
}
