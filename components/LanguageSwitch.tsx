import React from 'react';
import { Language } from '../types';

interface LanguageSwitchProps {
  current: Language;
  onToggle: (lang: Language) => void;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ current, onToggle }) => {
  return (
    <button
      onClick={() => onToggle(current === 'fr' ? 'ar' : 'fr')}
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-all text-sm font-bold text-white backdrop-blur-sm"
    >
      <span className={current === 'fr' ? 'text-blue-400' : 'text-gray-400'}>FR</span>
      <span className="text-gray-500">|</span>
      <span className={current === 'ar' ? 'text-blue-400' : 'text-gray-400'}>AR</span>
    </button>
  );
};