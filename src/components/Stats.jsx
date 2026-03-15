'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Plane, MapPin, Calendar, Award } from 'lucide-react';

const stats = [
  { icon: Plane, value: 5, suffix: '', label: 'Aircraft in Fleet', sublabel: 'EMB 145 Regional Jets' },
  { icon: MapPin, value: 9, suffix: '+', label: 'Destinations', sublabel: 'Across Nigeria' },
  { icon: Calendar, value: 2023, suffix: '', label: 'Year Operations Began', sublabel: 'Proudly Nigerian' },
  { icon: Award, value: 100, suffix: '%', label: 'NCAA Licensed', sublabel: 'Fully Certified & Compliant' },
];

function AnimatedCounter({ value, suffix, inView }) {
  const [display, setDisplay] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (inView && !hasRun.current) {
      hasRun.current = true;
      const controls = animate(0, value, {
        duration: value > 999 ? 2 : 1.4,
        ease: 'easeOut',
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return <span>{display.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1A0010 0%, #2A0018 50%, #1A0010 100%)' }}
    >
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(165,0,80,0.2) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(143,1,69,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xs uppercase tracking-widest mb-4"
            style={{ color: 'rgba(165,0,80,0.8)' }}
          >
            By the Numbers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            Rano Air at a Glance
          </motion.h2>
        </div>

        {/* Stats grid — inView also triggers the counter */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
                className="relative p-7 rounded-3xl text-center group transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(165,0,80,0.2)',
                  backdropFilter: 'blur(8px)',
                  willChange: 'transform',
                }}
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'rgba(165,0,80,0.08)' }}
                />

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(165,0,80,0.2)', border: '1px solid rgba(165,0,80,0.3)' }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                </div>

                <div className="text-sm font-bold text-white/70 mb-1">{stat.label}</div>
                <div className="text-xs font-medium text-white/35 uppercase tracking-widest">
                  {stat.sublabel}
                </div>

                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: '#A50050' }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
