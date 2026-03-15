'use client';
import { useRef } from 'react';
import { useReveal } from '@/hooks/useReveal';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { destinations } from '@/data/destinations';

function DestinationCard({ dest, index }) {
  return (
    <div
      className={`fade-up d${Math.min(index + 1, 9)} group relative flex-shrink-0 w-64 sm:w-72 h-96 rounded-3xl overflow-hidden cursor-pointer shadow-xl transition-shadow duration-300`}
      style={{ willChange: 'transform' }}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 256px, 288px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0010] via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 dest-card-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Region badge */}
      <div className="absolute top-4 left-4 z-10">
        <span
          className="text-[10px] font-bold text-white uppercase tracking-widest px-3 py-1.5 rounded-full"
          style={{ background: 'rgba(165,0,80,0.75)', backdropFilter: 'blur(8px)' }}
        >
          {dest.region}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        <h3 className="text-white font-bold text-2xl leading-tight">{dest.name}</h3>
        <div className="flex items-center gap-1.5 mt-1 mb-3">
          <MapPin className="w-3 h-3 text-white/60" />
          <span className="text-white/60 text-xs font-medium">{dest.state}</span>
        </div>

        <div className="flex items-center justify-between">
          <Link
            href={`/destinations/${dest.id}`}
            className="flex items-center gap-2 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:gap-3"
          >
            Explore <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#booking"
            onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="text-[11px] font-bold text-white uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/30 hover:bg-white hover:text-primary transition-all duration-200"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Destinations() {
  const carouselRef = useRef(null);
  const titleRef = useReveal();
  const cardsRef = useReveal();

  const scroll = (dir) => {
    carouselRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };

  return (
    <section id="destinations" className="py-24 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={titleRef} className="fade-up flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              Where We Fly
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark leading-tight">
              Our{' '}
              <span style={{
                background: 'linear-gradient(135deg, #A50050, #C40060)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Destinations
              </span>
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mt-3 line-reveal in-view" />
          </div>
          <p className="text-text-muted font-medium max-w-xs text-sm leading-relaxed">
            Connecting 9 cities across Nigeria with comfort, safety, and punctuality.
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-end gap-2 mb-5">
          <button
            onClick={() => scroll(-1)}
            className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={cardsRef}
          className="in-view"
        >
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto hide-scrollbar pb-6 -mx-4 px-4"
          >
            {destinations.map((dest, i) => (
              <DestinationCard key={dest.id} dest={dest} index={i} />
            ))}
          </div>
        </div>

        {/* Pills */}
        <div className="mt-10 flex flex-wrap gap-2.5 justify-center fade-up">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.id}`}
              className="px-4 py-2 rounded-full border border-primary/20 bg-white text-sm font-semibold text-text-muted hover:border-primary hover:text-primary hover:bg-bg-light transition-all duration-200 shadow-sm"
            >
              {dest.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
