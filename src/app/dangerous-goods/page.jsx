'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AlertTriangle, Flame, Zap, Droplets, Skull, Radiation, FlaskConical, Package } from 'lucide-react';

const categories = [
  {
    id: 1, icon: Zap, label: 'Explosives', color: '#DC2626', bg: 'rgba(220,38,38,0.08)', border: 'rgba(220,38,38,0.2)',
    items: ['Fireworks / Pyrotechnics', 'Flares', 'Blasting caps / Detonators', 'Fuse', 'Primers', 'Explosive charges (blasting, demolition etc.)', 'Detonating cord', 'Air bag inflators', 'Igniters', 'Rockets', 'TNT / TNT compositions', 'RDX / RDX compositions', 'PETN / PETN compositions'],
  },
  {
    id: 2, icon: Flame, label: 'Gases', color: '#EA580C', bg: 'rgba(234,88,12,0.08)', border: 'rgba(234,88,12,0.2)',
    items: ['Aerosols', 'Compressed air', 'Hydrocarbon gas-powered devices', 'Fire extinguishers', 'Gas cartridges', 'Fertilizer ammoniating solution', 'Insecticide gases', 'Refrigerant gases', 'Lighters', 'Acetylene / Oxyacetylene', 'Carbon dioxide', 'Helium / helium compounds', 'Hydrogen / hydrogen compounds', 'Oxygen / oxygen compounds', 'Nitrogen / nitrogen compounds', 'Natural gas', 'Oil gas', 'Petroleum gases', 'Butane', 'Propane', 'Ethane', 'Methane', 'Dimethyl ether', 'Propene / Propylene', 'Ethylene'],
  },
  {
    id: 3, icon: Droplets, label: 'Flammable Liquids & Solids', color: '#D97706', bg: 'rgba(217,119,6,0.08)', border: 'rgba(217,119,6,0.2)',
    items: ['Acetone / Acetone oils', 'Adhesives', 'Paints / Lacquers / Varnishes', 'Alcohols', 'Perfumery products', 'Gasoline / Petrol', 'Diesel fuel', 'Aviation fuel', 'Liquid bio-fuels', 'Coal tar / Coal tar distillates', 'Petroleum crude oil', 'Petroleum distillates', 'Gas oil', 'Shale oil', 'Heating oil', 'Kerosene', 'Resins', 'Tars', 'Turpentine', 'Carbamate insecticides', 'Organochlorine pesticides', 'Organophosphorus pesticides', 'Copper based pesticides', 'Esters', 'Ethers', 'Ethanol', 'Benzene', 'Butanols', 'Dichloropropenes', 'Diethyl ether', 'Isobutanols', 'Isopropyls', 'Firelighters', 'Matches'],
  },
  {
    id: 4, icon: FlaskConical, label: 'Oxidising Substances', color: '#059669', bg: 'rgba(5,150,105,0.08)', border: 'rgba(5,150,105,0.2)',
    items: ['Chemical oxygen generators', 'Ammonium nitrate fertilizers', 'Chlorates', 'Nitrates', 'Nitrites', 'Perchlorates', 'Permanganates', 'Persulphates', 'Aluminium nitrate', 'Ammonium dichromate', 'Ammonium persulphate', 'Calcium hypochlorite', 'Calcium nitrate', 'Calcium peroxide', 'Hydrogen peroxide', 'Magnesium peroxide', 'Lead nitrate', 'Lithium hypochlorite', 'Potassium permanganate', 'Sodium nitrate', 'Sodium persulphate'],
  },
  {
    id: 5, icon: Skull, label: 'Toxic & Infectious Substances', color: '#7C3AED', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.2)',
    items: ['Medical / Biomedical waste', 'Clinical waste', 'Biological cultures / samples / specimens', 'Medical cultures / samples / specimens', 'Tear gas substances', 'Motor fuel anti-knock mixture', 'Dyes', 'Carbamate pesticides', 'Alkaloids', 'Allyls', 'Acids', 'Arsenates', 'Arsenites', 'Cyanides', 'Thiols / Mercaptans', 'Cresols', 'Barium compounds', 'Arsenics / Arsenic compounds', 'Metavanadate', 'Adiponitrile', 'Chloroform', 'Dichloromethane', 'Hexachlorophene', 'Phenol', 'Resorcinol'],
  },
  {
    id: 6, icon: Radiation, label: 'Radioactive Materials', color: '#2563EB', bg: 'rgba(37,99,235,0.08)', border: 'rgba(37,99,235,0.2)',
    items: ['Radioactive ores', 'Medical isotopes', 'Yellowcake', 'Density gauges', 'Mixed fission products', 'Surface contaminated objects', 'Caesium radionuclides / isotopes', 'Iridium radionuclides / isotopes', 'Americium radionuclides / isotopes', 'Plutonium radionuclides / isotopes', 'Radium radionuclides / isotopes', 'Thorium radionuclides / isotopes', 'Uranium radionuclides / isotopes', 'Depleted uranium / depleted uranium products', 'Uranium hexafluoride', 'Enriched Uranium'],
  },
  {
    id: 7, icon: FlaskConical, label: 'Corrosives', color: '#0891B2', bg: 'rgba(8,145,178,0.08)', border: 'rgba(8,145,178,0.2)',
    items: ['Acids / Acid solutions', 'Batteries', 'Battery fluid', 'Fuel cell cartridges', 'Dyes', 'Fire extinguisher charges', 'Formaldehyde', 'Flux', 'Paints', 'Alkylphenols', 'Amines', 'Polyamines', 'Sulphides', 'Polysulphides', 'Chlorides', 'Chlorosilanes', 'Bromine', 'Cyclohexylamine', 'Phenol / Carbolic acid', 'Hydrofluoric acid', 'Hydrochloric acid', 'Sulfuric acid', 'Nitric acid', 'Sludge acid', 'Hydrogen fluoride', 'Iodine', 'Morpholine'],
  },
  {
    id: 8, icon: Package, label: 'Miscellaneous', color: '#A50050', bg: 'rgba(165,0,80,0.08)', border: 'rgba(165,0,80,0.2)',
    items: ['Pocket Knife', 'Scissors', 'Gun', 'Screw drivers', 'Dry ice / Cardice / Solid carbon dioxide', 'Expandable polymeric beads / Polystyrene beads', 'Ammonium nitrate fertilizers', 'Blue asbestos / Crocidolite', 'Battery powered equipment', 'Battery powered vehicles', 'Fuel cell engines', 'Internal combustion engines', 'Vehicles', 'Magnetized material', 'Dangerous goods in apparatus', 'Dangerous goods in machinery'],
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

function CategoryCard({ cat, index }) {
  const [open, setOpen] = useState(false);
  const Icon = cat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${cat.border}`, background: cat.bg }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:opacity-80 transition-opacity"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: cat.color + '20' }}>
            <Icon className="w-5 h-5" style={{ color: cat.color }} />
          </div>
          <div>
            <div className="text-text-dark font-bold text-sm">Category {cat.id}</div>
            <div className="font-bold text-base" style={{ color: cat.color }}>{cat.label}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-semibold text-text-muted">{cat.items.length} items</span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: cat.color + '15' }}
          >
            <svg className="w-4 h-4" style={{ color: cat.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </motion.div>
        </div>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="px-5 pb-5"
        >
          <div className="h-px mb-4" style={{ background: cat.border }} />
          <div className="flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <span
                key={item}
                className="text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ background: cat.color + '12', color: cat.color }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function DangerousGoodsPage() {
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
            <AlertTriangle className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1 variants={heroItem} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Dangerous Goods Policy
          </motion.h1>
          <motion.p variants={heroItem} className="text-white/70 font-medium text-base max-w-2xl mx-auto">
            Rano Air follows IATA Dangerous Goods Regulations. These items pose a risk to health, safety, property or the environment and are strictly prohibited or restricted.
          </motion.p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to bottom, transparent, #fff)' }} />
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Warning banner — whileInView since it's below the hero fold */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 p-5 rounded-2xl mb-10"
            style={{ background: 'rgba(165,0,80,0.06)', border: '1px solid rgba(165,0,80,0.2)' }}
          >
            <AlertTriangle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-text-dark mb-1">IATA Compliance Notice</div>
              <p className="text-text-muted text-sm font-medium leading-relaxed">
                Rano Air follows the same dangerous goods policy governed by the IATA Dangerous Goods Regulations.
                Dangerous goods are articles or substances which can pose a risk to health, safety, property or the
                environment. Special regulations are applicable for the transport of these goods. Carrying prohibited
                items may result in prosecution under Nigerian aviation law.
              </p>
            </div>
          </motion.div>

          <h2 className="text-2xl font-bold text-text-dark mb-6">Prohibited Categories</h2>
          <p className="text-text-muted text-sm font-medium mb-8 leading-relaxed">
            Click on any category below to view the full list of prohibited items. If you are unsure whether
            an item is permitted, please contact us before your flight.
          </p>

          <div className="space-y-4">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.id} cat={cat} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-text-muted text-sm font-medium">
              Unsure about an item?{' '}
              <a href="mailto:customercare@ranoair.com" className="text-primary font-bold hover:underline">
                Contact our team
              </a>{' '}
              before travelling.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
