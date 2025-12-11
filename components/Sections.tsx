import React, { useState } from 'react';
import { Content } from '../types';
import { 
  Zap, Shield, Battery, Cpu, Smartphone, CheckCircle, 
  Car, Bike, Truck, Activity, Thermometer, Box, Star,
  Minus, Plus, ChevronDown, ChevronUp, AlertTriangle
} from 'lucide-react';

interface SectionProps {
  content: Content;
}

interface InteractiveProps extends SectionProps {
  onBuy: () => void;
}

// --- HERO SECTION ---
export const Hero: React.FC<InteractiveProps> = ({ content, onBuy }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-6 tracking-wide animate-fade-in-up">
          {content.hero.badge}
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
          {content.hero.title}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {content.hero.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={onBuy}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            {content.hero.ctaPrimary}
          </button>
          <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white rounded-full font-semibold transition-all hover:bg-white/5">
            {content.hero.ctaSecondary}
          </a>
        </div>

        {/* Product Image Placeholder */}
        <div className="relative mx-auto max-w-4xl mt-8 group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-t from-tech-black via-transparent to-transparent z-20 h-full w-full pointer-events-none"></div>
          <img 
            src="https://picsum.photos/id/111/1200/800" 
            alt="VoltStart Pro Device" 
            className="rounded-2xl shadow-2xl border border-white/10 mx-auto transform transition-transform duration-700 hover:scale-[1.01] hover:rotate-x-1"
            style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)' }}
          />
          {/* Overlay Tech UI Graphic */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

// --- BENEFITS SECTION ---
export const Benefits: React.FC<SectionProps> = ({ content }) => {
  const icons = [Zap, Shield, Battery, CheckCircle, Box, Smartphone];
  
  return (
    <section id="features" className="py-20 bg-tech-dark relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          {content.benefits.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.benefits.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-transform">
                  <Icon size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- VEHICLES SECTION ---
export const Vehicles: React.FC<SectionProps> = ({ content }) => {
  const vehicleIcons = [Car, Bike, Shield, Box, Zap, Truck, CheckCircle]; // Mapped loosely
  
  return (
    <section className="py-20 bg-tech-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 opacity-90">
          {content.vehicles.title}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {content.vehicles.types.map((type, i) => {
             // Basic icon mapping logic
             let Icon = Car;
             if(i===1) Icon = Bike;
             if(i===2) Icon = Shield; // SUV approx
             if(i===3) Icon = Box; // Van approx
             if(i===4) Icon = Zap; // Electric
             if(i===5) Icon = Truck; // Commercial
             if(i===6) Icon = Activity; // Pickup

             return (
              <div key={i} className="flex flex-col items-center gap-3 min-w-[100px] opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300">
                  <Icon size={28} />
                </div>
                <span className="text-sm font-medium text-gray-400 text-center">{type}</span>
              </div>
             );
          })}
        </div>
      </div>
    </section>
  );
};

// --- SPECS SECTION ---
export const Specs: React.FC<SectionProps> = ({ content }) => {
  const entries = Object.entries(content.specs.labels);
  
  return (
    <section id="specs" className="py-20 bg-gradient-to-b from-tech-dark to-tech-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          {content.specs.title}
        </h2>
        
        <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
          {entries.map(([key, label], idx) => {
            const value = content.specs.values[key as keyof typeof content.specs.values];
            return (
              <div key={key} className={`flex flex-col sm:flex-row justify-between items-center p-6 ${idx !== entries.length -1 ? 'border-b border-white/10' : ''} hover:bg-white/5 transition-colors`}>
                <span className="text-gray-400 font-medium mb-2 sm:mb-0">{label}</span>
                <span className="text-white font-bold text-lg text-center sm:text-right">{value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- COMPARISON SECTION ---
export const Comparison: React.FC<SectionProps> = ({ content }) => {
  return (
    <section className="py-20 bg-tech-black relative overflow-hidden">
       {/* Decorative */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/5 skew-x-12 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          {content.comparison.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* OLD WAY */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 flex flex-col items-center text-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 text-red-500">
              <AlertTriangle size={32} />
            </div>
            <h3 className="text-xl font-bold text-red-400 mb-4">{content.comparison.traditional}</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
               <li className="flex items-center justify-center gap-2"><Minus size={14} className="text-red-500" /> {content.comparison.weak}</li>
               <li className="flex items-center justify-center gap-2"><Minus size={14} className="text-red-500" /> Slow & Heavy</li>
            </ul>
          </div>

          {/* NEW WAY */}
          <div className="bg-blue-500/10 border border-blue-500/40 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_0_30px_rgba(59,130,246,0.15)] transform md:-translate-y-4">
            <div className="absolute -top-3 px-4 py-1 bg-blue-600 text-white text-xs font-bold uppercase rounded-full tracking-wider">
              {content.comparison.vs}
            </div>
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 text-blue-400">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{content.comparison.smart}</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
               <li className="flex items-center justify-center gap-2"><CheckCircle size={14} className="text-blue-500" /> {content.comparison.instant}</li>
               <li className="flex items-center justify-center gap-2"><CheckCircle size={14} className="text-blue-500" /> Safe & Portable</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- TESTIMONIALS SECTION ---
export const Testimonials: React.FC<SectionProps> = ({ content }) => {
  return (
    <section id="reviews" className="py-20 bg-tech-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          {content.testimonials.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.testimonials.reviews.map((review, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/5 relative">
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, s) => (
                  <Star key={s} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <span className="text-white font-semibold text-sm">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- FAQ SECTION ---
export const FAQ: React.FC<SectionProps> = ({ content }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-tech-black">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {content.faq.title}
        </h2>
        
        <div className="space-y-4">
          {content.faq.questions.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border border-white/10 rounded-xl bg-white/5 overflow-hidden">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left text-white hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold">{item.q}</span>
                  {isOpen ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-gray-500" />}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- FOOTER ---
export const Footer: React.FC<InteractiveProps> = ({ content, onBuy }) => {
  return (
    <footer className="bg-tech-dark pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl font-bold text-white mb-6">{content.hero.title}</h2>
           <button 
             onClick={onBuy}
             className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-xl shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105 mb-4"
           >
             {content.footer.cta}
           </button>
           <p className="text-gray-500 text-sm">{content.footer.subtext}</p>
        </div>
        
        <div className="border-t border-white/10 pt-10 text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
           <span>{content.footer.copyright}</span>
           <div className="flex gap-4">
             <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center"><CreditCardIcon /></div>
             <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center"><LockIcon /></div>
           </div>
        </div>
      </div>
    </footer>
  );
};

// Simple icons for footer
const CreditCardIcon = () => <div className="w-4 h-3 border border-gray-500 rounded bg-gray-700"></div>
const LockIcon = () => <div className="w-3 h-3 border border-gray-500 rounded-full bg-gray-700"></div>