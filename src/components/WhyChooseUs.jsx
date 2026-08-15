import React from 'react';
import { 
  ShieldCheck, Clock, Award, CheckCircle2, 
  MapPin, MessageSquare, Wrench, Sparkles, UserCheck, CalendarCheck
} from 'lucide-react';

const TRUST_PILLARS = [
  {
    title: "Doorstep Service",
    desc: "Complete vehicle maintenance and repairs brought directly to your home, office, or apartment driveway.",
    icon: MapPin,
    badge: "100% Mobile"
  },
  {
    title: "Professional Technicians",
    desc: "Certified, background-verified master mechanics equipped with modern OBD-II diagnostic scanners and OEM tools.",
    icon: UserCheck,
    badge: "Certified Experts"
  },
  {
    title: "Convenient Booking",
    desc: "Frictionless WhatsApp scheduling with zero waiting lines. Pick your convenient time slot in under 60 seconds.",
    icon: CalendarCheck,
    badge: "Zero Friction"
  },
  {
    title: "Reliable Car Care",
    desc: "100% Genuine OEM & OES spare parts backed by up to 1000 KMs / 1-month written service warranty.",
    icon: ShieldCheck,
    badge: "100% Genuine Parts"
  },
  {
    title: "Transparent Communication",
    desc: "Upfront itemized quotes with live photo & video updates sent directly on WhatsApp throughout the service.",
    icon: MessageSquare,
    badge: "No Hidden Costs"
  },
  {
    title: "Service At Your Location",
    desc: "No wasting 4+ hours driving to crowded workshops. We service your car while you spend time with family or work.",
    icon: Clock,
    badge: "Zero Downtime"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-surface-soft text-primary border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-500 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>TRUSTED AUTOMOTIVE STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans tracking-tight">
            WHY CHOOSE <span className="text-brand-500">THE GARAGE ON WHEELS?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We eliminate traditional garage delays, inflated repair bills, and counterfeit spare parts with transparent doorstep care.
          </p>
        </div>

        {/* 6 Trust Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_PILLARS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="premium-card p-6 flex flex-col justify-between hover:border-brand-500/40 transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Top: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-card bg-brand-50 text-brand-500 border border-brand-100 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-brand-500 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border-soft flex items-center justify-between text-xs font-semibold text-brand-500">
                  <span className="text-[11px] text-slate-500 font-medium">The Garage On Wheels Standard</span>
                  <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
