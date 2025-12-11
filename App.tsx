import React, { useState, useEffect } from 'react';
import { translations } from './content';
import { Language } from './types';
import { LanguageSwitch } from './components/LanguageSwitch';
import { 
  Hero, Benefits, Vehicles, Specs, Comparison, 
  Testimonials, FAQ, Footer 
} from './components/Sections';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  
  // Get current content based on state
  const content = translations[lang];

  // Update document direction and font based on language
  useEffect(() => {
    const root = document.documentElement;
    if (lang === 'ar') {
      root.dir = 'rtl';
      document.body.classList.remove('font-sans');
      document.body.classList.add('font-arabic');
    } else {
      root.dir = 'ltr';
      document.body.classList.remove('font-arabic');
      document.body.classList.add('font-sans');
    }
  }, [lang]);

  return (
    <div className={`min-h-screen bg-tech-black text-slate-200 selection:bg-blue-500 selection:text-white ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-tech-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-3">
              <span className="font-bold text-white text-lg">V</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">VoltStart<span className="text-blue-500">Pro</span></span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
               <a href="#features" className="hover:text-white transition-colors">{content.nav.features}</a>
               <a href="#specs" className="hover:text-white transition-colors">{content.nav.specs}</a>
               <a href="#reviews" className="hover:text-white transition-colors">{content.nav.reviews}</a>
            </div>
            <LanguageSwitch current={lang} onToggle={setLang} />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero content={content} />
        <Benefits content={content} />
        <Vehicles content={content} />
        <Comparison content={content} />
        <Specs content={content} />
        <Testimonials content={content} />
        <FAQ content={content} />
      </main>

      <Footer content={content} />
    </div>
  );
};

export default App;