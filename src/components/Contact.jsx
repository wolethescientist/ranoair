'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Mail, Phone, MessageCircle, Send } from 'lucide-react';

const contactItems = [
  {
    icon: MapPin,
    label: 'Head Office',
    lines: ['Plot 1497, Cadastral Zone B06', 'Mabushi District, Abuja FCT'],
    href: null,
  },
  {
    icon: Phone,
    label: 'Call Support',
    lines: ['091-6984-4058', '091-6984-4061', '091-6834-0356'],
    href: 'tel:09169844058',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    lines: ['091-6984-4060', '091-6984-4059'],
    href: 'https://wa.me/2349169844060',
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['customercare@ranoair.com', 'info@ranoair.com'],
    href: 'mailto:customercare@ranoair.com',
  },
];

export default function Contact() {
  const titleRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });
  const leftInView = useInView(leftRef, { once: true, margin: '-60px' });
  const rightInView = useInView(rightRef, { once: true, margin: '-60px' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! Our team will respond within 24 hours.');
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-bold text-xs uppercase tracking-widest mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark"
          >
            We're Here to{' '}
            <span style={{
              background: 'linear-gradient(135deg, #A50050, #C40060)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Help
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="h-1 w-16 bg-primary rounded-full mt-4 mx-auto origin-left"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact cards */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -40 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-4"
          >
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: 'linear-gradient(135deg, #A50050, #8F0145)' }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-text-dark text-sm mb-1.5">{item.label}</div>
                    {item.lines.map((line) => (
                      <div key={line} className="text-text-muted text-sm font-medium">{line}</div>
                    ))}
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={leftInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-5 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                  style={{ boxShadow: '0 2px 12px rgba(165,0,80,0.04)', willChange: 'transform' }}
                >
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      {inner}
                    </a>
                  ) : inner}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 40 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-5 sm:p-8 rounded-3xl"
              style={{ background: '#FFF5F8', border: '1px solid rgba(165,0,80,0.1)' }}
            >
              <h3 className="font-bold text-text-dark text-xl mb-6">Send Us a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-text-muted uppercase tracking-widest mb-1.5">Full Name</label>
                  <input
                    type="text"
                    placeholder="Musa Ibrahim"
                    required
                    className="w-full bg-white border-2 border-gray-100 hover:border-primary/30 focus:border-primary rounded-xl px-4 py-3 text-sm font-medium text-text-dark outline-none transition-colors duration-200 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-muted uppercase tracking-widest mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full bg-white border-2 border-gray-100 hover:border-primary/30 focus:border-primary rounded-xl px-4 py-3 text-sm font-medium text-text-dark outline-none transition-colors duration-200 placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-text-muted uppercase tracking-widest mb-1.5">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help you?"
                  required
                  className="w-full bg-white border-2 border-gray-100 hover:border-primary/30 focus:border-primary rounded-xl px-4 py-3 text-sm font-medium text-text-dark outline-none transition-colors duration-200 placeholder:text-gray-400"
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-semibold text-text-muted uppercase tracking-widest mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us more about your enquiry..."
                  required
                  className="w-full bg-white border-2 border-gray-100 hover:border-primary/30 focus:border-primary rounded-xl px-4 py-3 text-sm font-medium text-text-dark outline-none transition-colors duration-200 resize-none placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-shimmer text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-primary/25 active:scale-95 transition-transform duration-150"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
