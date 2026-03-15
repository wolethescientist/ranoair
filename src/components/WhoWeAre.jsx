'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';

const values = [
  'Safety', 'Professionalism', 'Efficiency',
  'Punctuality', 'Team Work', 'Innovation',
];

const pillars = [
  {
    icon: Eye,
    label: 'Our Vision',
    text: 'To be the leading airline in Nigeria delivering world class service to our people.',
  },
  {
    icon: Target,
    label: 'Our Mission',
    text: 'To connect our people to the world through the most efficient, safe and reliable air transport services.',
  },
  {
    icon: Heart,
    label: 'Our Values',
    values: true,
  },
];

export default function WhoWeAre() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: '-80px' });
  const rightInView = useInView(rightRef, { once: true, margin: '-80px' });

  return (
    <section id="who-we-are" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -40 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
              Who We Are
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark leading-tight mb-6">
              Nigeria's Premium{' '}
              <span style={{
                background: 'linear-gradient(135deg, #A50050, #C40060)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Regional Airline
              </span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={leftInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="h-1 w-16 bg-primary rounded-full mb-8 origin-left"
            />

            <p className="text-text-muted text-base leading-relaxed mb-4 font-medium">
              Rano Air is a licensed airline, incorporated in 2019, operating under the regulations,
              guidelines and procedures of the Nigerian Civil Aviation Authority (NCAA).
            </p>
            <p className="text-text-muted text-base leading-relaxed mb-8 font-medium">
              We focus on delivering exceptional inflight services, on-time departure and arrival,
              and other world-class aviation services to our esteemed customers. The airline currently
              operates with a fleet of five (5) EMB 145 aircraft, with its operational base in Abuja.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
              {[
                { num: '5', label: 'EMB 145\nAircraft' },
                { num: '9', label: 'Active\nDestinations' },
                { num: '100%', label: 'NCAA\nLicensed' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={leftInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="text-center p-4 rounded-2xl"
                  style={{ background: 'linear-gradient(135deg, #FFF5F8, #FFE8F2)' }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-primary mb-1">{stat.num}</div>
                  <div className="text-[10px] sm:text-xs font-semibold text-text-muted leading-tight whitespace-pre-line">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 40 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-4"
          >
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={rightInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group p-6 rounded-3xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 bg-white"
                  style={{ boxShadow: '0 2px 20px rgba(165,0,80,0.05)', willChange: 'transform' }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: 'linear-gradient(135deg, #A50050, #8F0145)' }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-text-dark text-lg mb-2">{pillar.label}</h3>
                      {pillar.values ? (
                        <div className="flex flex-wrap gap-2">
                          {values.map((v) => (
                            <span
                              key={v}
                              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                              style={{ background: '#FFF5F8', color: '#A50050' }}
                            >
                              <CheckCircle className="w-3 h-3" />
                              {v}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-text-muted text-sm leading-relaxed font-medium">{pillar.text}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* NCAA badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 p-5 rounded-3xl"
              style={{ background: 'linear-gradient(135deg, #8F0145, #A50050)' }}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-sm">
                NCAA
              </div>
              <div>
                <div className="text-white font-bold text-sm">Fully Licensed & Certified</div>
                <div className="text-white/60 text-xs font-medium mt-0.5">
                  Nigerian Civil Aviation Authority — RC: 1618851
                </div>
              </div>
              <div className="ml-auto">
                <div className="w-8 h-8 rounded-full bg-green-400/20 border border-green-400/40 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
