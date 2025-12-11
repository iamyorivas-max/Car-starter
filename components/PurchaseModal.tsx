import React, { useState, useEffect } from 'react';
import { X, CreditCard, CheckCircle, Loader2, Lock } from 'lucide-react';
import { Content } from '../types';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: Content['checkout'];
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose, content }) => {
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  
  // Reset state when opening
  useEffect(() => {
    if (isOpen) setStep('form');
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl w-full max-w-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#151515]">
          <h3 className="text-xl font-bold text-white">
            {step === 'success' ? content.success.title : content.title}
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {step === 'form' || step === 'processing' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Summary */}
              <div className="bg-blue-900/10 border border-blue-500/20 rounded-lg p-4 flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-gray-400">Product</p>
                  <p className="font-semibold text-white">{content.product}</p>
                </div>
                <div className="text-right">
                   <p className="text-sm text-gray-400">Total</p>
                   <p className="font-bold text-xl text-blue-400">{content.price}</p>
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-400 uppercase">{content.labels.name}</label>
                  <input required type="text" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-400 uppercase">{content.labels.email}</label>
                  <input required type="email" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>

              <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-400 uppercase">{content.labels.address}</label>
                  <input required type="text" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-400 uppercase">{content.labels.city}</label>
                    <input required type="text" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                 </div>
                 <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-400 uppercase">{content.labels.phone}</label>
                    <input required type="tel" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                 </div>
              </div>

              {/* Payment Mockup */}
              <div className="pt-4 border-t border-white/10 mt-4">
                <label className="text-xs font-medium text-gray-400 uppercase mb-2 block">{content.labels.card}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <CreditCard size={18} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white font-mono placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors" 
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-2">
                     <input type="text" placeholder="MM/YY" className="w-16 bg-transparent border-none text-white text-right text-sm focus:ring-0 placeholder-gray-600" />
                     <input type="text" placeholder="CVC" className="w-12 bg-transparent border-none text-white text-right text-sm focus:ring-0 placeholder-gray-600" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-green-500">
                  <Lock size={12} />
                  <span>128-bit SSL Encrypted Payment</span>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={step === 'processing'}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl mt-6 transition-all flex items-center justify-center gap-2"
              >
                {step === 'processing' ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Processing...
                  </>
                ) : (
                  <>
                    <span>{content.action}</span>
                    <span>- {content.price}</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-500">
                <CheckCircle size={48} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">{content.success.title}</h4>
              <p className="text-gray-400 max-w-xs mx-auto mb-8">
                {content.success.message}
              </p>
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors"
              >
                {content.success.close}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};