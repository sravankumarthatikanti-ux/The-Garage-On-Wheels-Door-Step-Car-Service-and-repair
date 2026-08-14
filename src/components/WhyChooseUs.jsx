import React from 'react';
import { 
  ShieldCheck, Clock, Award, DollarSign, 
  Sparkles, MessageSquare, CheckCircle2 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/carServiceData';

const ICON_MAP = {
  Clock: Clock,
  ShieldCheck: ShieldCheck,
  DollarSign: DollarSign,
  Award: Award,
  Sparkles: Sparkles,
  MessageSquare: MessageSquare,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-surface-soft text-primary border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-500 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>The Garage On Wheels Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary font-sans tracking-tight">
            Why Choose <span className="text-brand-500">The Garage On Wheels?</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">
            We eliminate garage delays, inflated repair quotes, and counterfeit parts by delivering transparent service right at your doorstep.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="premium-card p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-card bg-brand-50 text-brand-500 border border-brand-100 flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border-soft flex items-center space-x-2 text-xs font-semibold text-brand-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Guaranteed Quality Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
