'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Where can I make bookings?',
    a: 'You can book flights through our website at ranoair.com, via the Rano Air mobile app (available on iOS and Android), at any of our airport stations, or through authorised travel agents. Our online booking portal is available 24/7 for your convenience.',
  },
  {
    q: 'How do I change my ticket?',
    a: 'Ticket changes can be made online through our "Manage Booking" portal on the website or app, at any of our sales outlets or airport stations, or by calling our customer support lines. A revalidation/date change fee applies. Changes must be made before the scheduled departure time. Please note that revalidation fees are non-refundable even in the event of flight cancellation.',
  },
  {
    q: 'How can I request a ticket refund?',
    a: 'Refund requests must be made online or at any of our sales outlets or airport stations. Please note that tickets are non-refundable unless the flight is cancelled by Rano Air. Download and complete our Refund Application Form (available on the Refund Policy page), and submit it along with a valid government-issued ID. Refunds take a minimum of one month from the date of submission to process.',
  },
  {
    q: 'Is my ticket transferable?',
    a: 'No. Rano Air tickets are strictly non-transferable. The name on the ticket must exactly match your valid government-issued ID presented at check-in. Third-party refunds are also not applicable — refunds are made only to the original payment method or account holder.',
  },
  {
    q: 'Do I have to pay full fare for an infant?',
    a: 'Infants under 2 years of age travelling on an adult\'s lap are charged a reduced infant fare. Each adult passenger may travel with only one infant. Infants requiring their own seat will be charged the applicable child fare. Please ensure you bring the infant\'s birth certificate or relevant documentation at check-in.',
  },
  {
    q: 'Which types of identification documents are accepted during check-in?',
    a: 'Passengers are required to present a valid, government-issued photo identification document at check-in. Accepted documents include: National Identity Card (NIN Slip), Permanent Voter\'s Card, International Passport, or a valid Driver\'s License. Expired documents will not be accepted.',
  },
  {
    q: 'Why do I have to pay a no-show fee?',
    a: 'A no-show fee is charged when a passenger fails to check in for their booked flight without cancelling or changing the booking in advance. This fee helps Rano Air manage seat inventory and cover operational costs associated with holding your reservation. Please note that no-show fees are non-refundable, even in the event of flight cancellation by the carrier.',
  },
  {
    q: 'What are the limitations on baggage?',
    a: 'Rano Air allows each passenger a free checked baggage allowance of up to 15 kg. Cabin (hand) baggage must not exceed 7 kg and must fit within dimensions of 55 cm × 35 cm × 25 cm. Items exceeding these limits must be checked in as cargo. Please check your ticket or contact us for the exact allowance applicable to your booking class.',
  },
  {
    q: 'What if my baggage exceeds the permitted limitations?',
    a: 'Excess baggage charges apply to any luggage exceeding your free allowance. You will be required to pay the applicable excess baggage fee at the check-in counter. To save money, we recommend pre-purchasing additional baggage allowance online before check-in, where a discounted rate may apply. Oversized or overweight items may be subject to additional handling fees.',
  },
  {
    q: 'What documents are required for the unaccompanied children service?',
    a: 'To use our unaccompanied children service, you must provide: (1) a completed Unaccompanied Minor (UM) form obtained from our ticketing office; (2) valid identification for both the child and the authorised adult dropping them off; (3) full contact details of the person receiving the child at the destination; and (4) a signed parental or guardian consent letter. Please contact us at least 48 hours before departure to arrange this service.',
  },
  {
    q: 'What is the age limit for the unaccompanied children service?',
    a: 'The unaccompanied children service is available for children aged between 5 and 11 years. Children aged 12 and above may travel as young adults and do not require this service, though we recommend notifying us at booking. Children under 5 years of age must be accompanied by a responsible adult at all times and cannot travel alone under any circumstances.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="border border-gray-100 rounded-2xl overflow-hidden hover:border-primary/20 transition-colors duration-200"
      style={{ boxShadow: open ? '0 8px 32px rgba(165,0,80,0.08)' : '0 2px 8px rgba(0,0,0,0.04)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-bg-light transition-colors duration-200"
      >
        <span className={`font-bold text-base transition-colors duration-200 ${open ? 'text-primary' : 'text-text-dark'}`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
            open ? 'bg-primary text-white' : 'bg-gray-100 text-text-muted'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-0">
              <div className="h-px bg-gray-100 mb-4" />
              <p className="text-text-muted text-sm font-medium leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
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
            <HelpCircle className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 font-medium text-base"
          >
            Everything you need to know about flying with Rano Air
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to bottom, transparent, #fff)' }} />
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-3xl text-center"
            style={{ background: 'linear-gradient(135deg, #FFF5F8, #FFE8F2)' }}
          >
            <h3 className="font-bold text-text-dark text-xl mb-2">Still have questions?</h3>
            <p className="text-text-muted text-sm font-medium mb-6">
              Our customer support team is ready to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:customercare@ranoair.com"
                className="btn-shimmer text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-primary/25 hover:scale-105 transition-transform duration-200"
              >
                Email Us
              </a>
              <a
                href="tel:09169844058"
                className="border-2 border-primary text-primary font-bold py-3 px-8 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
