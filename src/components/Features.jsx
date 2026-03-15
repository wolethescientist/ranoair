'use client';
import { useReveal } from '@/hooks/useReveal';
import { Shield, Clock, BadgeDollarSign, Users, Star } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'All our EMB 145 aircraft undergo rigorous maintenance checks in compliance with NCAA and IATA safety standards. Your safety is our absolute top priority — always.',
    gradient: 'from-rose-500 to-primary',
  },
  {
    icon: Clock,
    title: 'On-Time Departure',
    description:
      'We understand your time is precious. Rano Air is committed to punctual departures and arrivals, connecting you to your destination on schedule, every time.',
    gradient: 'from-primary to-primary-dark',
  },
  {
    icon: BadgeDollarSign,
    title: 'Affordable Fares',
    description:
      'Premium air travel should not come at a premium price. Enjoy world-class flying experience at competitive fares that respect your wallet without compromising comfort.',
    gradient: 'from-primary-dark to-[#600030]',
  },
  {
    icon: Users,
    title: 'Friendly Crew',
    description:
      'Our cabin crew are trained to deliver warmth, professionalism, and genuine Nigerian hospitality on every flight. Feel at home 30,000 feet in the air.',
    gradient: 'from-[#600030] to-primary',
  },
];

export default function Features() {
  const titleRef = useReveal();
  const cardsRef = useReveal();

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: '#FFF5F8' }}>
      <div className="absolute top-0 left-0 right-0 h-32 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 0%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={titleRef} className="fade-up text-center mb-16">
          <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
            Why Fly With Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark">
            The Rano Air{' '}
            <span style={{
              background: 'linear-gradient(135deg, #A50050, #C40060)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Difference
            </span>
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full mt-4 mx-auto line-reveal in-view" />
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className={`fade-up d${i + 1} group bg-white rounded-3xl p-7 border border-gray-100 hover:border-primary/15 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden cursor-default`}
                style={{ boxShadow: '0 4px 24px rgba(165,0,80,0.07)', willChange: 'transform' }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feat.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3 h-3 text-primary/30 fill-primary/20" />
                  ))}
                </div>

                <h3 className="text-text-dark font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-200">
                  {feat.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-medium">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
