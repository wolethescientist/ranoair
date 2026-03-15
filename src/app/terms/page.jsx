'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, ChevronDown } from 'lucide-react';

const sections = [
  {
    id: 'sales',
    title: 'Sales Policy',
    content: [
      { heading: '1. Booking & Payment', body: 'All flight bookings must be paid in full at the time of reservation. A booking is only confirmed upon receipt of complete payment and the issuance of a booking confirmation number or e-ticket. Rano Air Limited reserves the right to cancel any booking that has not been fully paid within the required timeframe.' },
      { heading: '2. Fare Conditions', body: 'All fares displayed are inclusive of applicable taxes and government-mandated charges unless otherwise stated. Fares are subject to availability and may change without prior notice. The applicable fare is the fare in effect at the time of confirmed purchase, not at the time of browsing or enquiry.' },
      { heading: '3. Ticket Accuracy', body: 'Passengers are solely responsible for ensuring the accuracy of all travel details — including passenger names, travel dates, routes, and contact information — at the time of booking. Name corrections or changes after ticket issuance may attract fees. Name changes that constitute a transfer of the ticket to a different individual are not permitted.' },
      { heading: '4. Pricing Errors', body: 'In the event of a manifest pricing error on the Rano Air booking platform, Rano Air reserves the right to cancel affected bookings and offer a full refund or the option to repurchase at the correct fare. We will notify affected passengers as promptly as possible.' },
      { heading: '5. Third-Party Agents', body: 'Bookings made through authorised travel agents are subject to the terms and conditions of both Rano Air and the respective agency. Rano Air is not responsible for errors, omissions, or additional charges levied by third-party agents.' },
    ],
  },
  {
    id: 'checkin',
    title: 'Check-In Policy',
    content: [
      { heading: '1. Check-In Times', body: 'Passengers are required to complete check-in at least 45 minutes before the scheduled departure time. Check-in counters close 30 minutes before departure. Passengers who arrive after check-in closure will be denied boarding and treated as a no-show, with no right to compensation.' },
      { heading: '2. Identification Requirements', body: 'All passengers must present a valid, original, government-issued photo identification document at check-in. Accepted forms of ID include: National Identity Card (NIN), Permanent Voter\'s Card, International Passport, or a valid Driver\'s License. Photocopies and expired documents are not accepted.' },
      { heading: '3. Boarding', body: 'Boarding commences 20 minutes before departure. Passengers must be at the designated gate before boarding closes. Rano Air reserves the right to deny boarding to any passenger who: (a) appears to be under the influence of alcohol or narcotics; (b) displays disruptive or threatening behaviour; (c) fails to comply with security or safety instructions; or (d) poses a risk to the health or safety of fellow passengers or crew.' },
      { heading: '4. Baggage', body: 'Each passenger is entitled to a free checked baggage allowance of 15 kg and cabin baggage of 7 kg (max dimensions: 55 cm × 35 cm × 25 cm). Passengers must ensure their baggage conforms to all permitted limits before arriving at the airport. Excess baggage charges apply at the point of check-in. Rano Air is not liable for items packed in checked baggage that are fragile, perishable, or otherwise unsuitable for hold carriage.' },
      { heading: '5. Unaccompanied Minors', body: 'Children between the ages of 5 and 11 may travel as unaccompanied minors subject to prior arrangement with Rano Air. A completed Unaccompanied Minor form, signed parental consent, and full guardian contact details at both origin and destination are required. Children under 5 must be accompanied by a responsible adult at all times.' },
    ],
  },
  {
    id: 'force',
    title: 'Force Majeure',
    content: [
      { heading: '1. Definition', body: 'Force Majeure refers to extraordinary circumstances beyond the reasonable control of Rano Air Limited that could not have been avoided even if all reasonable measures had been taken. These include but are not limited to: adverse weather conditions, air traffic control restrictions, acts of God (natural disasters, floods, earthquakes), security threats or alerts, acts of terrorism, industrial action, political instability, government directives or sanctions, pandemic or epidemic health emergencies, and technical problems caused by air traffic control failures.' },
      { heading: '2. Rano Air\'s Obligations Under Force Majeure', body: 'In circumstances of Force Majeure, Rano Air will endeavour to offer affected passengers the earliest available rebooking on Rano Air services at no additional cost, or a travel credit for future use. Rano Air will communicate promptly with affected passengers through available channels including SMS, email, and airport announcements.' },
      { heading: '3. Limitations of Liability', body: 'Rano Air shall not be liable for any delays, cancellations, or disruptions caused by Force Majeure events. No compensation for accommodation, meals, ground transport, consequential losses, missed connections, or other indirect expenses will be provided under Force Majeure circumstances. Passengers are encouraged to purchase comprehensive travel insurance to cover such eventualities.' },
      { heading: '4. Exclusion of Cash Refunds Under Force Majeure', body: 'Cash or card refunds are not automatically available for cancellations attributable solely to Force Majeure events. Rano Air\'s obligation is limited to re-routing or providing a travel credit. However, Rano Air will assess each case individually and may, at its sole discretion, offer alternative remedies where appropriate.' },
    ],
  },
  {
    id: 'refund',
    title: 'Refund Policy',
    content: [
      { heading: '1. Non-Refundable Tickets', body: 'Tickets purchased on Rano Air are non-refundable unless the flight is cancelled by Rano Air Limited (the carrier). Passenger-initiated cancellations, no-shows, and voluntary changes of travel plans do not entitle the passenger to a cash refund.' },
      { heading: '2. Refund Applications', body: 'Applications for refunds (in the event of carrier-initiated cancellations) must be submitted online, at any of our sales outlets, or at airport stations. The completed Refund Application Form — available for download on the Refund Policy page — must be submitted along with valid government-issued ID.' },
      { heading: '3. Third-Party Restrictions', body: 'Refunds will only be made to the original payment method and the original payee. Third-party refunds are not applicable. For company bookings, a letter of authorisation on company letterhead is required.' },
      { heading: '4. Refund Method', body: 'Rano Air reserves the right to make refunds in the same manner and currency used to purchase the original ticket. Card refunds will be processed back to the originating card. Bank transfer refunds require a valid account in the passenger\'s name.' },
      { heading: '5. Processing Time', body: 'All refund requests are subject to verification by Rano Air Ltd. Refund processing takes a minimum of one month (30 days) from the date of submission. Rano Air is not responsible for delays caused by banking institutions or card networks.' },
      { heading: '6. Non-Refundable Fees', body: 'Revalidation/date change fees, no-show fees, and administration charges are non-refundable under all circumstances, including in the event of flight cancellation by the carrier.' },
    ],
  },
];

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function SectionAccordion({ section, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="rounded-3xl overflow-hidden"
      style={{
        border: open ? '1px solid rgba(165,0,80,0.3)' : '1px solid rgba(0,0,0,0.08)',
        boxShadow: open ? '0 8px 32px rgba(165,0,80,0.08)' : 'none',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between gap-4 p-6 text-left transition-colors duration-200 ${
          open ? 'bg-bg-light' : 'bg-white hover:bg-bg-light/50'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{ background: open ? '#A50050' : 'rgba(165,0,80,0.1)', color: open ? 'white' : '#A50050' }}
          >
            {index + 1}
          </div>
          <span className={`font-bold text-lg transition-colors ${open ? 'text-primary' : 'text-text-dark'}`}>
            {section.title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${
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
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 bg-white">
              <div className="space-y-6 pt-4">
                {section.content.map((item) => (
                  <div key={item.heading}>
                    <h4 className="font-bold text-text-dark text-sm mb-2">{item.heading}</h4>
                    <p className="text-text-muted text-sm font-medium leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TermsPage() {
  return (
    <main>
      <Navbar />

      {/* Hero — stagger variants */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #8F0145 0%, #A50050 60%, #C40060 100%)' }}
      >
        <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="relative max-w-4xl mx-auto px-4 text-center"
        >
          <motion.div
            variants={heroItem}
            className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6"
          >
            <FileText className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1 variants={heroItem} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Terms & Conditions
          </motion.h1>
          <motion.p variants={heroItem} className="text-white/70 font-medium text-base max-w-xl mx-auto">
            Please read these terms carefully before booking a flight with Rano Air Limited.
            By making a booking, you agree to be bound by these terms.
          </motion.p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to bottom, transparent, #fff)' }} />
      </section>

      {/* Tab nav */}
      <section className="bg-white sticky top-16 z-30 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto hide-scrollbar">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="shrink-0 px-5 py-4 text-sm font-bold text-text-muted hover:text-primary hover:bg-bg-light transition-all duration-200 border-b-2 border-transparent hover:border-primary"
              >
                {sec.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-5">
            {sections.map((section, i) => (
              <div key={section.id} id={section.id}>
                <SectionAccordion section={section} index={i} />
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 p-6 rounded-3xl text-center"
            style={{ background: '#FFF5F8', border: '1px solid rgba(165,0,80,0.1)' }}
          >
            <p className="text-text-muted text-sm font-medium leading-relaxed">
              These Terms & Conditions were last updated in 2024. Rano Air Limited reserves the right
              to amend these terms at any time. Continued use of our services constitutes acceptance
              of the prevailing terms. For questions, contact{' '}
              <a href="mailto:customercare@ranoair.com" className="text-primary font-bold hover:underline">
                customercare@ranoair.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
