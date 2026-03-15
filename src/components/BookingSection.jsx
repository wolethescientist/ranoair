'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plane, Calendar, Users, ArrowLeftRight, Search,
  BookOpen, UserCog, ChevronDown, Plus, Minus, Lock, Eye, EyeOff
} from 'lucide-react';

const CITIES = [
  'Abuja', 'Lagos', 'Kano', 'Maiduguri', 'Sokoto',
  'Kaduna', 'Katsina', 'Bauchi', 'Osubi',
];

const TABS = [
  { id: 'book', label: 'Book a Flight', icon: Plane },
  { id: 'manage', label: 'Manage Booking', icon: BookOpen },
  { id: 'agent', label: 'Agent Login', icon: UserCog },
];

/* ── Reusable city dropdown ── */
function CitySelect({ label, value, onChange, exclude }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const filtered = CITIES.filter((c) => c !== exclude);

  return (
    <div className="relative" ref={ref}>
      <label className="block text-xs font-semibold text-text-muted uppercase tracking-widest mb-1.5">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-2 bg-white border-2 border-gray-100 hover:border-primary/40 focus:border-primary rounded-xl px-4 py-3.5 text-left transition-all duration-200 shadow-sm group"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <Plane className="w-4 h-4 text-primary rotate-45 shrink-0" />
          <span className={`font-semibold text-sm truncate ${value ? 'text-text-dark' : 'text-gray-400'}`}>
            {value || 'Select city'}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-text-muted shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
            style={{ border: '1px solid rgba(165,0,80,0.12)' }}
          >
            {filtered.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => { onChange(city); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-bg-light transition-colors ${
                  value === city ? 'text-primary bg-bg-light' : 'text-text-dark'
                }`}
              >
                <Plane className="w-3 h-3 rotate-45 text-primary/50" />
                {city}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Passenger counter ── */
function PassengerCounter({ label, sublabel, value, onChange, min = 0, max = 9 }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <div>
        <div className="text-sm font-semibold text-text-dark">{label}</div>
        <div className="text-xs text-text-muted">{sublabel}</div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="count-btn"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
        >
          <Minus className="w-3 h-3" />
        </button>
        <span className="w-6 text-center text-base font-bold text-text-dark">{value}</span>
        <button
          type="button"
          className="count-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

/* ── Book Flight Tab ── */
function BookFlightTab() {
  const [tripType, setTripType] = useState('return');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departure, setDeparture] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [cabinClass, setCabinClass] = useState('Economy');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [passengerOpen, setPassengerOpen] = useState(false);
  const [classOpen, setClassOpen] = useState(false);

  const totalPassengers = adults + children + infants;

  const swapCities = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle flight search
    alert(`Searching flights: ${from} → ${to} | ${departure} | ${adults} Adult(s), ${children} Child(ren), ${infants} Infant(s) | ${cabinClass}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Trip type toggle */}
      <div className="flex gap-2 mb-6">
        {['one-way', 'return'].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setTripType(type)}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold capitalize transition-all duration-200 ${
              tripType === type
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'bg-gray-100 text-text-muted hover:bg-gray-200'
            }`}
          >
            {type === 'one-way' ? 'One Way' : 'Round Trip'}
          </button>
        ))}
      </div>

      {/* From / Swap / To */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 items-end mb-4">
        <CitySelect label="From" value={from} onChange={setFrom} exclude={to} />

        <div className="flex justify-center sm:pb-1">
          <motion.button
            type="button"
            onClick={swapCities}
            whileTap={{ rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="w-11 h-11 rounded-full bg-bg-light border-2 border-gray-100 hover:border-primary/30 hover:bg-primary/5 flex items-center justify-center transition-all duration-200 shadow-sm"
            aria-label="Swap cities"
          >
            <ArrowLeftRight className="w-4 h-4 text-primary" />
          </motion.button>
        </div>

        <CitySelect label="To" value={to} onChange={setTo} exclude={from} />
      </div>

      {/* Dates row */}
      <div className={`grid gap-3 mb-4 ${tripType === 'return' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
        <div>
          <label className="block text-xs font-semibold text-text-muted uppercase tracking-widest mb-1.5">
            Departure
          </label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60 pointer-events-none" />
            <input
              type="date"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full pl-10 pr-4 py-3.5 bg-white border-2 border-gray-100 hover:border-primary/40 focus:border-primary rounded-xl text-sm font-semibold text-text-dark outline-none transition-all duration-200 shadow-sm cursor-pointer"
            />
          </div>
        </div>

        {tripType === 'return' && (
          <div>
            <label className="block text-xs font-semibold text-text-muted uppercase tracking-widest mb-1.5">
              Return
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60 pointer-events-none" />
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                min={departure || new Date().toISOString().split('T')[0]}
                className="w-full pl-10 pr-4 py-3.5 bg-white border-2 border-gray-100 hover:border-primary/40 focus:border-primary rounded-xl text-sm font-semibold text-text-dark outline-none transition-all duration-200 shadow-sm cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>

      {/* Passengers + Class row */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {/* Passengers dropdown */}
        <div className="relative">
          <label className="block text-xs font-semibold text-text-muted uppercase tracking-widest mb-1.5">
            Passengers
          </label>
          <button
            type="button"
            onClick={() => { setPassengerOpen(!passengerOpen); setClassOpen(false); }}
            className="w-full flex items-center justify-between gap-2 bg-white border-2 border-gray-100 hover:border-primary/40 rounded-xl px-4 py-3.5 text-left transition-all duration-200 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary/70" />
              <span className="text-sm font-semibold text-text-dark">{totalPassengers} Passenger{totalPassengers !== 1 ? 's' : ''}</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-text-muted transition-transform duration-200 ${passengerOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {passengerOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl shadow-2xl z-50 px-4 py-2"
                style={{ border: '1px solid rgba(165,0,80,0.12)' }}
              >
                <PassengerCounter
                  label="Adults" sublabel="12+ years"
                  value={adults} onChange={setAdults} min={1}
                />
                <PassengerCounter
                  label="Children" sublabel="2–11 years"
                  value={children} onChange={setChildren}
                />
                <PassengerCounter
                  label="Infants" sublabel="Under 2 years"
                  value={infants} onChange={setInfants} max={adults}
                />
                <button
                  type="button"
                  onClick={() => setPassengerOpen(false)}
                  className="w-full mt-3 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-dark transition-colors"
                >
                  Done
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Class dropdown */}
        <div className="relative">
          <label className="block text-xs font-semibold text-text-muted uppercase tracking-widest mb-1.5">
            Cabin Class
          </label>
          <button
            type="button"
            onClick={() => { setClassOpen(!classOpen); setPassengerOpen(false); }}
            className="w-full flex items-center justify-between gap-2 bg-white border-2 border-gray-100 hover:border-primary/40 rounded-xl px-4 py-3.5 text-left transition-all duration-200 shadow-sm"
          >
            <span className="text-sm font-semibold text-text-dark">{cabinClass}</span>
            <ChevronDown className={`w-4 h-4 text-text-muted transition-transform duration-200 ${classOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {classOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
                style={{ border: '1px solid rgba(165,0,80,0.12)' }}
              >
                {['Economy', 'Business'].map((cls) => (
                  <button
                    key={cls}
                    type="button"
                    onClick={() => { setCabinClass(cls); setClassOpen(false); }}
                    className={`w-full px-4 py-3 text-sm font-semibold text-left hover:bg-bg-light transition-colors ${
                      cabinClass === cls ? 'text-primary bg-bg-light' : 'text-text-dark'
                    }`}
                  >
                    {cls}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Search Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full btn-shimmer text-white font-bold py-4 rounded-2xl text-base flex items-center justify-center gap-3 shadow-lg shadow-primary/30 transition-all duration-200"
      >
        <Search className="w-5 h-5" />
        Search Flights
      </motion.button>
    </form>
  );
}

/* ── Manage Booking Tab ── */
function ManageBookingTab() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Retrieving booking...');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-text-muted uppercase tracking-widest mb-1.5">
          Booking Reference / PNR
        </label>
        <input
          type="text"
          placeholder="e.g. AB1234"
          maxLength={8}
          required
          className="w-full bg-white border-2 border-gray-100 hover:border-primary/40 focus:border-primary rounded-xl px-4 py-3.5 text-sm font-semibold text-text-dark outline-none transition-all duration-200 shadow-sm uppercase tracking-widest placeholder:normal-case placeholder:tracking-normal placeholder:font-normal placeholder:text-gray-400"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-text-muted uppercase tracking-widest mb-1.5">
          Last Name
        </label>
        <input
          type="text"
          placeholder="As on your ticket"
          required
          className="w-full bg-white border-2 border-gray-100 hover:border-primary/40 focus:border-primary rounded-xl px-4 py-3.5 text-sm font-semibold text-text-dark outline-none transition-all duration-200 shadow-sm placeholder:font-normal placeholder:text-gray-400"
        />
      </div>

      <div className="bg-bg-light rounded-xl p-4 border border-primary/10">
        <p className="text-xs text-text-muted leading-relaxed">
          Enter your booking reference and last name to view, change, or cancel your reservation.
          Your PNR can be found in your booking confirmation email.
        </p>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full btn-shimmer text-white font-bold py-4 rounded-2xl text-base flex items-center justify-center gap-3 shadow-lg shadow-primary/30"
      >
        <BookOpen className="w-5 h-5" />
        Retrieve Booking
      </motion.button>
    </form>
  );
}

/* ── Agent Login Tab ── */
function AgentLoginTab() {
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Logging in...');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-text-muted uppercase tracking-widest mb-1.5">
          Agent ID / Username
        </label>
        <input
          type="text"
          placeholder="Enter your agent ID"
          required
          className="w-full bg-white border-2 border-gray-100 hover:border-primary/40 focus:border-primary rounded-xl px-4 py-3.5 text-sm font-semibold text-text-dark outline-none transition-all duration-200 shadow-sm placeholder:font-normal placeholder:text-gray-400"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-text-muted uppercase tracking-widest mb-1.5">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60 pointer-events-none" />
          <input
            type={showPass ? 'text' : 'password'}
            placeholder="••••••••"
            required
            className="w-full pl-10 pr-12 py-3.5 bg-white border-2 border-gray-100 hover:border-primary/40 focus:border-primary rounded-xl text-sm font-semibold text-text-dark outline-none transition-all duration-200 shadow-sm placeholder:font-normal placeholder:text-gray-400"
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary transition-colors"
          >
            {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 accent-primary" />
          <span className="text-xs font-medium text-text-muted">Remember me</span>
        </label>
        <button type="button" className="text-xs font-semibold text-primary hover:underline">
          Forgot password?
        </button>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full btn-shimmer text-white font-bold py-4 rounded-2xl text-base flex items-center justify-center gap-3 shadow-lg shadow-primary/30"
      >
        <UserCog className="w-5 h-5" />
        Agent Login
      </motion.button>
    </form>
  );
}

/* ── Main BookingSection ── */
export default function BookingSection() {
  const [activeTab, setActiveTab] = useState('book');

  return (
    <section id="booking" className="relative bg-bg-light py-0">
      {/* Section pulls up into hero using negative margin */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.7, ease: 'easeOut' }}
          className="bg-white rounded-3xl shadow-2xl overflow-visible"
          style={{ boxShadow: '0 32px 80px rgba(165,0,80,0.15), 0 8px 32px rgba(0,0,0,0.08)' }}
        >
          {/* Tab Headers */}
          <div className="flex border-b border-gray-100 px-2 pt-2">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-4 text-sm font-bold transition-all duration-200 rounded-t-xl flex-1 justify-center ${
                    isActive
                      ? 'text-primary'
                      : 'text-text-muted hover:text-text-dark'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : ''}`} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'book' && <BookFlightTab />}
                {activeTab === 'manage' && <ManageBookingTab />}
                {activeTab === 'agent' && <AgentLoginTab />}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Spacing below */}
      <div className="h-16" />
    </section>
  );
}
