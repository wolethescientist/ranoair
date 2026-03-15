'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Plane, Twitter, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const footerDestinations = [
  { label: 'Lagos', href: '/destinations/lagos' },
  { label: 'Abuja', href: '/destinations/abuja' },
  { label: 'Kano', href: '/destinations/kano' },
  { label: 'Kaduna', href: '/destinations/kaduna' },
  { label: 'Sokoto', href: '/destinations/sokoto' },
  { label: 'Bauchi', href: '/destinations/bauchi' },
  { label: 'Maiduguri', href: '/destinations/maiduguri' },
  { label: 'Katsina', href: '/destinations/katsina' },
  { label: 'Osubi', href: '/destinations/osubi' },
];

const quickLinks = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Dangerous Goods', href: '/dangerous-goods' },
  { label: 'Refund Policy', href: '/refund' },
  { label: 'Terms & Conditions', href: '/terms' },
];

const socials = [
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com/ranoair',
    color: '#1DA1F2',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://facebook.com/RanoAir',
    color: '#1877F2',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/ranoair',
    color: '#E1306C',
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#1A0010' }}>
      {/* Top border accent */}
      <div className="h-1" style={{ background: 'linear-gradient(90deg, transparent, #A50050, #C40060, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 py-12 sm:py-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="relative w-10 h-10 group-hover:scale-105 transition-transform">
                <Image src="/logo.jpg" alt="Rano Air Logo" fill className="object-contain" />
              </div>
              <div>
                <div className="text-white font-bold text-xl tracking-wide">RANO AIR</div>
                <div className="text-white/30 text-[10px] font-medium uppercase tracking-widest">Limited</div>
              </div>
            </Link>

            <p className="text-white/50 text-sm font-medium leading-relaxed mb-6">
              Connecting Nigeria, one flight at a time. Premium regional airline service
              operating 9 destinations across Nigeria.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = social.color + '22';
                      e.currentTarget.style.borderColor = social.color + '66';
                      e.currentTarget.querySelector('svg').style.color = social.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.querySelector('svg').style.color = 'rgba(255,255,255,0.5)';
                    }}
                  >
                    <Icon className="w-4 h-4 transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.5)' }} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Destinations</h4>
            <ul className="space-y-2.5">
              {footerDestinations.map((dest) => (
                <li key={dest.label}>
                  <Link
                    href={dest.href}
                    className="flex items-center gap-2 text-white/45 hover:text-white text-sm font-medium transition-colors duration-150 group"
                  >
                    <Plane className="w-3 h-3 rotate-45 text-primary/50 group-hover:text-primary transition-colors" />
                    {dest.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/45 hover:text-white text-sm font-medium transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-white/45 text-sm font-medium leading-relaxed">
                  Plot 1497, Cadastral Zone B06,<br />Mabushi District, Abuja FCT
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <a href="mailto:customercare@ranoair.com" className="text-white/45 hover:text-white text-sm font-medium transition-colors block">
                    customercare@ranoair.com
                  </a>
                  <a href="mailto:info@ranoair.com" className="text-white/45 hover:text-white text-sm font-medium transition-colors block">
                    info@ranoair.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  {['091-6984-4058', '091-6984-4061', '091-6834-0356'].map((num) => (
                    <a key={num} href={`tel:${num.replace(/-/g, '')}`} className="text-white/45 hover:text-white text-sm font-medium transition-colors block">
                      {num}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-white/25 text-xs font-medium">
            © 2026 Rano Air Limited. All rights reserved. RC: 1618851
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-white/25 hover:text-white/60 text-xs font-medium transition-colors">
              Terms
            </Link>
            <Link href="/refund" className="text-white/25 hover:text-white/60 text-xs font-medium transition-colors">
              Refund Policy
            </Link>
            <Link href="/faq" className="text-white/25 hover:text-white/60 text-xs font-medium transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
