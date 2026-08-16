import React, { useState } from 'react';
import { 
  MessageSquare, 
  HelpCircle, 
  X, 
  Wrench, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Phone,
  Fuel,
  Compass
} from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/carServiceData';

export default function SmartAssistant({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);

  const assistantOptions = [
    {
      id: 'emergency',
      icon: Phone,
      title: 'Emergency Breakdown',
      desc: 'Immediate assistance for battery failure, flat tyre, or engine stalling.',
      action: () => {
        setIsOpen(false);
        const url = buildWhatsAppUrl({
          serviceName: "🚨 Emergency Breakdown Assistance",
          locality: "Tirumalagiri / Secunderabad"
        });
        window.open(url, '_blank');
      }
    },
    {
      id: 'quote',
      icon: Wrench,
      title: 'Get Service Quote',
      desc: 'Transparent WhatsApp estimate with 100% genuine OEM sealed parts.',
      action: () => {
        setIsOpen(false);
        if (onOpenBooking) onOpenBooking();
      }
    },
    {
      id: 'inspection',
      icon: ShieldCheck,
      title: '40-Point Inspection',
      desc: 'Full computerized scan, battery health, and mechanical inspection.',
      action: () => {
        setIsOpen(false);
        if (onOpenBooking) onOpenBooking('', 'Car Diagnostics');
      }
    },
    {
      id: 'direct',
      icon: MessageSquare,
      title: 'Chat with Mechanic',
      desc: 'Direct consultation on WhatsApp with a certified technical advisor.',
      action: () => {
        setIsOpen(false);
        const url = buildWhatsAppUrl({ serviceName: "Technical Consultation" });
        window.open(url, '_blank');
      }
    }
  ];

  return (
    <>
      {/* Floating Badge (Desktop & Tablet bottom right above footer) */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center bg-[#101419] hover:bg-[#181E24] text-white px-4 py-3 rounded-full shadow-2xl border border-[#252C33] hover:border-ice/50 transition-all duration-300 active:scale-95"
          aria-label="Open Smart Service Assistant"
        >
          <span className="text-base mr-2">🚗</span>
          <span className="text-xs font-bold font-mono tracking-wider text-[#A7ADB4] group-hover:text-white">
            NEED CAR HELP?
          </span>
          <span className="ml-2 w-2 h-2 rounded-full bg-cyan animate-pulse" />
        </button>
      </div>

      {/* Smart Service Assistant Modal / Drawer */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-[#181E24] text-white rounded-t-2xl sm:rounded-modal max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-[#252C33] space-y-5 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#252C33] pb-4">
              <div className="flex items-center space-x-2.5">
                <span className="text-xl">🚗</span>
                <div>
                  <h3 className="text-base font-black text-white font-mono">
                    SMART SERVICE ASSISTANT
                  </h3>
                  <p className="text-xs text-[#A7ADB4] font-sans">
                    What do you need help with today?
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full text-[#A7ADB4] hover:text-white hover:bg-[#101419] transition-colors"
                aria-label="Close Assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Option Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {assistantOptions.map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.id}
                    onClick={opt.action}
                    className="p-3.5 rounded-card bg-[#101419] hover:bg-[#181E24] hover:border-ice/50 text-white border border-[#252C33] text-left transition-all group flex flex-col justify-between"
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon className="w-4 h-4 text-ice group-hover:text-cyan shrink-0" />
                      <span className="text-xs font-bold font-mono text-white">{opt.title}</span>
                    </div>
                    <p className="text-[11px] text-[#A7ADB4] group-hover:text-white leading-tight font-sans">
                      {opt.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-2 border-t border-[#252C33] flex items-center justify-between text-xs">
              <span className="text-[#A7ADB4] font-mono">Need custom guidance?</span>
              <button
                onClick={() => {
                  setIsOpen(false);
                  const url = buildWhatsAppUrl({ serviceName: "Custom Assistance" });
                  window.open(url, '_blank');
                }}
                className="font-bold text-whatsapp hover:text-white transition-colors flex items-center gap-1 font-mono"
              >
                <span>WhatsApp Dispatch</span>
                <span>→</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
