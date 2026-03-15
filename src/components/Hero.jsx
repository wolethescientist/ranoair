'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/* Split text into word spans for stagger animation */
function SplitText({ text, className }) {
  return (
    <span className={className}>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + i * 0.12, duration: 0.6, ease: 'easeOut' }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* Animated airplane SVG */
function AirplaneSVG() {
  return (
    <motion.div
      initial={{ x: '-10vw', y: '20vh', opacity: 0 }}
      animate={{
        x: '110vw',
        y: '-5vh',
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 5,
        delay: 1.5,
        ease: 'easeInOut',
        opacity: { times: [0, 0.1, 0.85, 1], duration: 5, delay: 1.5 },
      }}
      className="fixed z-20 pointer-events-none"
      style={{ top: '30vh' }}
    >
      {/* Contrail */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: [0, 0.6, 0] }}
        transition={{ duration: 5, delay: 1.8, ease: 'linear' }}
        className="absolute right-full top-1/2 -translate-y-1/2 w-32 h-0.5 origin-right"
        style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.6), transparent)' }}
      />
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <g transform="rotate(45, 32, 32)">
          {/* Fuselage */}
          <path d="M32 8 L38 32 L32 38 L26 32 Z" fill="white" opacity="0.95" />
          {/* Wings */}
          <path d="M32 22 L56 34 L52 36 L32 28 L12 36 L8 34 Z" fill="white" opacity="0.9" />
          {/* Tail */}
          <path d="M30 34 L24 44 L26 44 L32 36 L38 44 L40 44 L34 34 Z" fill="white" opacity="0.8" />
          {/* Engine glows */}
          <circle cx="20" cy="35" r="2" fill="rgba(196,0,96,0.8)" />
          <circle cx="44" cy="35" r="2" fill="rgba(196,0,96,0.8)" />
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
      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      {/* Animated blob shapes (cloud-like atmosphere) */}
      <div
        className="cloud-shape w-[600px] h-[600px] top-[-15%] left-[-10%]"
        style={{ '--duration': '14s', background: 'rgba(255,255,255,0.07)' }}
      />
      <div
        className="cloud-shape w-[400px] h-[400px] bottom-[10%] right-[-8%]"
        style={{ '--duration': '18s', background: 'rgba(255,255,255,0.05)', animationDelay: '3s' }}
      />
      <div
        className="cloud-shape w-[300px] h-[300px] top-[40%] left-[60%]"
        style={{ '--duration': '22s', background: 'rgba(255,255,255,0.04)', animationDelay: '6s' }}
      />
      <div
        className="cloud-shape w-[250px] h-[250px] top-[20%] right-[25%]"
        style={{ '--duration': '16s', background: 'rgba(196,0,96,0.12)', animationDelay: '2s' }}
      />

      {/* Radial glow in center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(196,0,96,0.25) 0%, transparent 70%)',
        }}
      />

      {/* Airplane animation */}
      <AirplaneSVG />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-28 pb-16">
        {/* Pre-heading badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
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

        {/* Main Headline */}
        <h1 className="text-white font-bold leading-[1.05] mb-6">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <SplitText text="Fly the" className="" />
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
            <SplitText text="Rano Way." className="" />
          </div>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-white/70 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto mb-4"
        >
          Connecting Nigeria, one flight at a time.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-white/45 text-sm font-medium tracking-wide"
        >
          Abuja · Lagos · Kano · Maiduguri · Sokoto · Kaduna · Katsina · Bauchi · Osubi
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs font-semibold tracking-widest uppercase">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade into booking section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255,245,248,0.95) 100%)',
        }}
      />
    </section>
  );
}
