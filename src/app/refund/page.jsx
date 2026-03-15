'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { RefreshCw, Download, AlertCircle, CheckCircle, Info } from 'lucide-react';

const policies = [
  {
    icon: AlertCircle,
    type: 'warning',
    text: 'Tickets are non-refundable unless the flight is cancelled by the carrier (Rano Air Limited).',
  },
  {
    icon: CheckCircle,
    type: 'success',
    text: 'Applications for refunds must be made online or at any of our sales outlets or airport stations.',
  },
  {
    icon: Info,
    type: 'info',
    text: 'Passengers requesting a refund during flight cancellation must provide a valid government-issued Identification Card. Third-party refunds are not applicable.',
  },
  {
    icon: Info,
    type: 'info',
    text: 'We reserve the right to make a refund in the same manner and in the same currency used to pay for the ticket.',
  },
  {
    icon: AlertCircle,
    type: 'warning',
    text: 'Revalidation/date change and No-show fees are not refundable, even in the event of flight cancellation.',
  },
];

const typeStyles = {
  warning: {
    bg: 'rgba(165,0,80,0.06)',
    border: 'rgba(165,0,80,0.2)',
    iconColor: '#A50050',
    iconBg: 'rgba(165,0,80,0.12)',
  },
  success: {
    bg: 'rgba(16,185,129,0.05)',
    border: 'rgba(16,185,129,0.2)',
    iconColor: '#10B981',
    iconBg: 'rgba(16,185,129,0.12)',
  },
  info: {
    bg: 'rgba(59,130,246,0.05)',
    border: 'rgba(59,130,246,0.2)',
    iconColor: '#3B82F6',
    iconBg: 'rgba(59,130,246,0.12)',
  },
};

export default function RefundPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #8F0145 0%, #A50050 60%, #C40060 100%)' }}
      >
        <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6"
          >
            <RefreshCw className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Refund Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 font-medium text-base max-w-xl mx-auto"
          >
            We are committed to fair and transparent refund procedures for all our passengers.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to bottom, transparent, #fff)' }} />
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-text-dark mb-8"
          >
            Refund Policy Terms
          </motion.h2>

          <div className="space-y-4 mb-12">
            {policies.map((policy, i) => {
              const Icon = policy.icon;
              const style = typeStyles[policy.type];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{ background: style.bg, border: `1px solid ${style.border}` }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: style.iconBg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: style.iconColor }} />
                  </div>
                  <p className="text-text-dark font-medium text-sm leading-relaxed pt-1">{policy.text}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Additional notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-3xl mb-8"
            style={{ background: '#FFF5F8', border: '1px solid rgba(165,0,80,0.12)' }}
          >
            <h3 className="font-bold text-text-dark text-lg mb-4">Important Notes</h3>
            <ul className="space-y-3">
              {[
                'Rano Air Ltd always reserves the right to make a refund in the same manner and currency used to pay for the ticket.',
                'Refunds for credit/debit card purchases will be made only to the same card used for purchase when a ticket has not been issued.',
                'When a ticket has been issued, refunds may only be processed for the passenger whose name appears on the ticket.',
                'Refund processing may take up to one month from the date of submission.',
                'For company refunds, a letter of authorisation on company letterhead is required.',
                'All refund requests are subject to verification by Rano Air Ltd.',
              ].map((note, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-muted font-medium">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {note}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Download form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-3xl"
            style={{ background: 'linear-gradient(135deg, #8F0145, #A50050)' }}
          >
            <div className="flex-1 text-center sm:text-left">
              <div className="text-white font-bold text-lg mb-1">Refund Application Form</div>
              <div className="text-white/70 text-sm font-medium">
                Download, complete, and submit this form to initiate a refund request.
              </div>
            </div>
            <a
              href="https://ranoair.com/assets/refund.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-white text-primary font-bold py-3 px-6 rounded-2xl hover:bg-opacity-90 hover:scale-105 transition-all duration-200 shadow-lg whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              Download Form
            </a>
          </motion.div>

          {/* Contact for refunds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-text-muted text-sm font-medium mb-3">
              Questions about your refund? Contact our team:
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a href="mailto:customercare@ranoair.com" className="text-primary font-bold text-sm hover:underline">
                customercare@ranoair.com
              </a>
              <span className="text-text-muted hidden sm:inline">·</span>
              <a href="tel:09169844058" className="text-primary font-bold text-sm hover:underline">
                091-6984-4058
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
