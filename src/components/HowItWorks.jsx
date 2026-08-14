import React from 'react';
import { MessageSquare, Car, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/carServiceData';

export default function HowItWorks({ onOpenBooking }) {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-surface text-primary border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-500 text-xs font-semibold uppercase tracking-wider">
            <Car className="w-3.5 h-3.5" />
            <span>Frictionless Doorstep Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary font-sans tracking-tight">
            How Doorstep Service <span className="text-brand-500">Works</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">
            No garage visits, no tow trucks, and no long waiting queues. Professional car maintenance at your doorstep in four simple steps.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="premium-card p-6 relative flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-full bg-brand-500 text-white font-black text-sm flex items-center justify-center shadow-sm">
                    0{step.step}
                  </div>
                  <span className="text-xs font-bold text-muted font-mono">
                    Step {step.step}/4
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step Key Benefit */}
              <div className="mt-6 pt-3 border-t border-border-soft flex items-center space-x-2 text-xs font-semibold text-brand-500">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>Verified &amp; Transparent</span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Service Van Highlight Banner */}
        <div className="rounded-card-lg bg-white border border-border p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-premium">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-500">
              Fully Equipped Mobile Workshop
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-primary">
              We Bring the Garage Directly to Your Driveway
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              Our customized mobile service vans carry pneumatic lifts, OBD-II scanner tablets, genuine synthetic oil drums, spark plugs, high-pressure foam injectors, and battery test equipment.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3 bg-brand-500 hover:bg-brand-700 text-white font-bold text-xs rounded-btn shadow-premium transition-all flex items-center space-x-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book Service Van Visit</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-card-lg border border-border shadow-sm">
            <img 
              src="/images/gallery/mobile_van.jpg" 
              alt="Mobile Service Van and Mechanic at Work" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
