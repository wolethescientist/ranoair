'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Plane } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '#who-we-are',
  },
  {
    label: 'Destinations',
    href: '#destinations',
    dropdown: [
      { label: 'Lagos', href: '/destinations/lagos' },
      { label: 'Abuja', href: '/destinations/abuja' },
      { label: 'Kano', href: '/destinations/kano' },
      { label: 'Maiduguri', href: '/destinations/maiduguri' },
      { label: 'Sokoto', href: '/destinations/sokoto' },
      { label: 'Kaduna', href: '/destinations/kaduna' },
      { label: 'Katsina', href: '/destinations/katsina' },
      { label: 'Bauchi', href: '/destinations/bauchi' },
      { label: 'Osubi', href: '/destinations/osubi' },
    ],
  },
  { label: 'Contact', href: '#contact' },
];

const itemVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'shadow-2xl'
            : ''
        }`}
        style={{
          background: scrolled
            ? 'rgba(143, 1, 69, 0.92)'
            : 'rgba(143, 1, 69, 0.35)',
          backdropFilter: scrolled ? 'blur(16px)' : 'blur(8px)',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'blur(8px)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-200">
                  <Image src="/logo.jpg" alt="Rano Air Logo" fill className="object-contain" />
                </div>
                <div>
                  <div className="text-white font-bold text-xl tracking-wide leading-none">RANO AIR</div>
                  <div className="text-white/60 text-[10px] font-medium tracking-widest uppercase leading-none mt-0.5">Limited</div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="flex items-center gap-1 text-white/90 hover:text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 relative group"
                    >
                      {link.label}
                      {link.dropdown && <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />}
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-white/90 hover:text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 relative group"
                    >
                      {link.label}
                      {link.dropdown && <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />}
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute top-full left-0 mt-2 w-52 rounded-2xl shadow-2xl overflow-hidden z-50"
                        style={{
                          background: 'rgba(26, 0, 16, 0.97)',
                          border: '1px solid rgba(165, 0, 80, 0.3)',
                        }}
                      >
                        <div className="py-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-2.5 px-4 py-2.5 text-white/80 hover:text-white hover:bg-primary/30 text-sm font-medium transition-all duration-150"
                            >
                              <Plane className="w-3 h-3 rotate-45 text-primary/70" />
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden lg:flex items-center gap-3"
            >
              <Link
                href="#manage-booking"
                onClick={(e) => { e.preventDefault(); scrollToSection('#booking'); }}
                className="text-white/80 hover:text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Manage Booking
              </Link>
              <button
                onClick={() => scrollToSection('#booking')}
                className="btn-shimmer text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-200 active:scale-95"
              >
                Book a Flight
              </button>
            </motion.div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[min(320px,100vw)] z-50 lg:hidden flex flex-col"
              style={{ background: 'rgba(26, 0, 16, 0.98)', backdropFilter: 'blur(20px)' }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <div className="relative w-8 h-8">
                    <Image src="/logo.jpg" alt="Rano Air Logo" fill className="object-contain" />
                  </div>
                  <span className="text-white font-bold text-lg">RANO AIR</span>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex-1 overflow-y-auto p-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="w-full text-left text-white/80 hover:text-white font-semibold text-base py-3 px-4 rounded-xl hover:bg-primary/20 transition-all duration-200"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="block text-white/80 hover:text-white font-semibold text-base py-3 px-4 rounded-xl hover:bg-primary/20 transition-all duration-200"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                    {link.dropdown && (
                      <div className="pl-4 mt-1 space-y-0.5">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-2 text-white/50 hover:text-white/90 text-sm py-2 px-4 rounded-lg hover:bg-primary/15 transition-all duration-150"
                            onClick={() => setMobileOpen(false)}
                          >
                            <Plane className="w-3 h-3 rotate-45 text-primary/60" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="p-6 border-t border-white/10 space-y-3">
                <button
                  onClick={() => { scrollToSection('#booking'); setMobileOpen(false); }}
                  className="w-full btn-shimmer text-white font-bold py-3 rounded-full text-sm shadow-lg"
                >
                  Book a Flight
                </button>
                <button
                  onClick={() => { scrollToSection('#booking'); setMobileOpen(false); }}
                  className="w-full border border-white/20 text-white/80 font-semibold py-3 rounded-full text-sm hover:bg-white/5 transition-colors"
                >
                  Manage Booking
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
