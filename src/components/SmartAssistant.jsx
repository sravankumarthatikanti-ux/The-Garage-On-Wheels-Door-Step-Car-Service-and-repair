import React, { useState } from 'react';
import { Sparkles, X, MessageSquare, ArrowRight, Wrench, BatteryCharging, Wind, AlertTriangle, Disc, Cog } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/carServiceData';

export default function SmartAssistant({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);

  const assistantOptions = [
    {
      id: 'service',
      title: 'Periodic Service',
      desc: 'Engine oil change, all filters & general check',
      icon: Wrench,
      action: () => {
        setIsOpen(false);
        onOpenBooking('', 'Periodic General Service');
      }
    },
    {
      id: 'repair',
      title: 'Mechanical Repair',
      desc: 'Brakes, suspension, clutch, noise diagnosis',
      icon: Cog,
      action: () => {
        setIsOpen(false);
        onOpenBooking('', 'Mechanical Repair & Inspection');
      }
    },
    {
      id: 'battery',
      title: 'Battery Issue',
      desc: 'Car won’t start, jumpstart, battery test',
      icon: BatteryCharging,
      action: () => {
        setIsOpen(false);
        onOpenBooking('', 'Battery Health Check & Jumpstart');
      }
    },
    {
      id: 'ac',
      title: 'AC Not Cooling',
      desc: 'AC gas refill, compressor & cooling coil check',
      icon: Wind,
      action: () => {
        setIsOpen(false);
        onOpenBooking('', 'AC Service & Gas Top-Up');
      }
    },
    {
      id: 'emergency',
      title: 'Emergency Breakdown',
      desc: 'Stranded on road or stalled car assistance',
      icon: AlertTriangle,
      action: () => {
        setIsOpen(false);
        const url = buildWhatsAppUrl({ serviceName: "URGENT Breakdown Assistance" });
        window.open(url, '_blank');
      }
    },
    {
      id: 'part',
      title: 'Find a Spare Part',
      desc: 'Check OEM genuine spare parts availability',
      icon: Disc,
      action: () => {
        setIsOpen(false);
        const element = document.getElementById('parts');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  ];

  return (
    <>
      {/* Floating Badge (Desktop & Tablet bottom right above footer) */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center bg-graphite hover:bg-charcoal text-white px-4 py-3 rounded-full shadow-2xl border border-titanium/25 hover:border-steel-400/50 transition-all duration-300 active:scale-95"
          aria-label="Open Smart Service Assistant"
        >
          <span className="text-base mr-2">🚗</span>
          <span className="text-xs font-bold font-mono tracking-wider text-titanium group-hover:text-white">
            NEED CAR HELP?
          </span>
          <span className="ml-2 w-2 h-2 rounded-full bg-steel-400 animate-pulse" />
        </button>
      </div>

      {/* Smart Service Assistant Modal / Drawer */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white text-primary rounded-t-2xl sm:rounded-modal max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-border space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border-soft pb-4">
              <div className="flex items-center space-x-2.5">
                <span className="text-xl">🚗</span>
                <div>
                  <h3 className="text-base font-black text-slate-900 font-mono">
                    SMART SERVICE ASSISTANT
                  </h3>
                  <p className="text-xs text-secondary">
                    What do you need help with today?
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full text-secondary hover:text-primary hover:bg-surface-soft transition-colors"
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
                    className="p-3 rounded-card bg-surface-soft hover:bg-graphite hover:text-white border border-border text-left transition-all group flex flex-col justify-between"
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon className="w-4 h-4 text-steel-700 group-hover:text-steel-300 shrink-0" />
                      <span className="text-xs font-bold font-mono">{opt.title}</span>
                    </div>
                    <p className="text-[11px] text-secondary group-hover:text-titanium leading-tight">
                      {opt.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-2 border-t border-border-soft flex items-center justify-between text-xs">
              <span className="text-muted font-mono">Need custom guidance?</span>
              <button
                onClick={() => {
                  setIsOpen(false);
                  const url = buildWhatsAppUrl({ serviceName: "Custom Assistance" });
                  window.open(url, '_blank');
                }}
                className="text-steel-700 hover:text-slate-900 font-bold flex items-center gap-1 font-mono uppercase"
              >
                <MessageSquare className="w-3.5 h-3.5 text-steel-500" />
                <span>Chat on WhatsApp →</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
