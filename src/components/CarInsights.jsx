import React, { useState } from 'react';
import { 
  BookOpen, ShieldCheck, CheckCircle2, XCircle, 
  Sparkles, ArrowRight, MessageSquare, Car, Wrench, AlertTriangle, 
  Lightbulb, ExternalLink, Eye, Sun
} from 'lucide-react';

const INSIGHTS_TABS = [
  { id: 'expert-vs-diy', label: 'Expert vs DIY Repair', icon: Wrench },
  { id: 'luxury-care', label: 'Luxury & Modern Car Care', icon: Car },
  { id: 'lighting-efficiency', label: 'Lighting & Optical Precision', icon: Lightbulb },
  { id: 'doorstep-vs-garage', label: 'Doorstep vs Traditional Garage', icon: Sparkles },
];

export default function CarInsights({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('expert-vs-diy');

  return (
    <section id="insights" className="py-20 md:py-28 bg-charcoal-deep text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-400 text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Automotive Masterclass &amp; Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
              Car Insights &amp; <span className="text-brand-400">Repair Standards</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Understand your vehicle's mechanical, electronic, and precision inspection standards with transparent guidance from our master technicians.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center gap-2 bg-charcoal p-1.5 rounded-card border border-white/10 self-start lg:self-auto shadow-2xl">
            {INSIGHTS_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-btn text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-500 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: Expert vs DIY Repair */}
        {activeTab === 'expert-vs-diy' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Professional Mechanic Care */}
            <div className="dark-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-card bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Recommended</span>
                    <h3 className="text-lg font-bold text-white">Professional Master Mechanic Care</h3>
                  </div>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Accurate OBD-II ECU Diagnostics:</strong> Pinpoints complex sensor errors without trial-and-error guesswork.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Manufacturer Torque Tolerances:</strong> Critical parts like brake calipers and cylinder heads are torqued precisely to OEM spec.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>1000 KM Written Warranty:</strong> All parts, fluids, and labor carry a documented warranty coverage.</span>
                </li>
              </ul>
            </div>

            {/* Right: Risks of DIY Repairs */}
            <div className="dark-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-card bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Caution</span>
                    <h3 className="text-lg font-bold text-white">Risks of Untrained DIY Fixes</h3>
                  </div>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-start space-x-3">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Air Trapping in Brake Lines:</strong> Improper brake bleeding can lead to sudden brake failure under emergency braking.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Cross-Threading &amp; Sump Stripping:</strong> Overtightening oil drain plugs can crack engine oil pans resulting in costly rebuilds.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Warranty Invalidation:</strong> Uncertified DIY tampering voids insurance claims and factory vehicle warranties.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: Luxury & Modern Car Care */}
        {activeTab === 'luxury-care' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="dark-card p-6 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400">German &amp; Luxury Engineering</span>
              <h3 className="text-base font-bold text-white">BMW, Mercedes &amp; Audi Specifics</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                European engines operate at higher compression and strict tolerances requiring fully synthetic ACEA-certified oils (5W-40 / 0W-30) and specialized scan tools.
              </p>
            </div>
            <div className="dark-card p-6 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Electronic Caliper Reset</span>
              <h3 className="text-base font-bold text-white">EPB &amp; Service Mode Retraction</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Modern cars with electronic parking brakes require diagnostic software retraction before brake pad fitment to prevent servo-motor damage.
              </p>
            </div>
            <div className="dark-card p-6 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Hybrid &amp; EV Auxiliaries</span>
              <h3 className="text-base font-bold text-white">12V AGM &amp; High Voltage Care</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hybrids and modern start-stop engines demand AGM/EFB battery chemistry and non-conductive coolant testing to protect onboard battery packs.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Precision Lighting & Optical Standards (PacLights Innovation) */}
        {activeTab === 'lighting-efficiency' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Card 1: 5000K Daylight Spectrum */}
              <div className="dark-card p-6 space-y-3">
                <div className="w-10 h-10 rounded-card bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-4">
                  <Sun className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400">5000K+ Daylight Spectrum</span>
                <h3 className="text-base font-bold text-white">Micro-Leak &amp; Crack Detection</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High-efficiency 5000K daylight-balanced illumination eliminates optical shadows under the hood, allowing technicians to spot hairline coolant leaks, oil weeping, and chassis micro-fractures instantly.
                </p>
              </div>

              {/* Card 2: High CRI (>85+) Color Accuracy */}
              <div className="dark-card p-6 space-y-3">
                <div className="w-10 h-10 rounded-card bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400">High CRI (&gt;85) Optical Fidelity</span>
                <h3 className="text-base font-bold text-white">Wiring Harness &amp; Fluid Diagnostics</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High Color Rendering Index (CRI) task lighting ensures precise color fidelity when tracing multi-colored CAN-bus wiring harnesses and accurately evaluating brake fluid or transmission oil degradation.
                </p>
              </div>

              {/* Card 3: Anti-Glare Task Lighting */}
              <div className="dark-card p-6 space-y-3">
                <div className="w-10 h-10 rounded-card bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-4">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Glare-Free &amp; Shadow Reduction</span>
                <h3 className="text-base font-bold text-white">Mobile Van Optical Rigging</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our mobile service vans carry low-glare magnetic LED task lamps and high-lumen flood arrays, ensuring complete inspection visibility in shaded driveways or dark basement parking slots.
                </p>
              </div>
            </div>

            {/* Reference Source Link Card */}
            <div className="p-5 rounded-card bg-charcoal border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3 text-left">
                <div className="p-2.5 rounded-card bg-white/5 text-brand-400 border border-white/10">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Workshop Lighting Science &amp; Efficiency Standards
                  </h4>
                  <p className="text-xs text-slate-400">
                    Industry analysis on mechanic shop lighting efficiency, lumens, and precision visibility.
                  </p>
                </div>
              </div>

              <a
                href="https://www.paclights.com/explore/mechanic-shop-lights-the-overlooked-factor-in-lighting-efficiency/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 hover:bg-brand-500 text-white font-bold text-xs rounded-btn transition-colors flex items-center space-x-1.5 shrink-0 border border-white/15"
              >
                <span>Read PacLights Research</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Tab 4: Doorstep vs Traditional Garage */}
        {activeTab === 'doorstep-vs-garage' && (
          <div className="dark-card p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Zero Downtime</span>
              <h3 className="text-xl font-bold text-white">Save 4+ Hours of Garage Travel</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our technicians service your vehicle in your parking slot while you work from home or relax with family.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400">100% Transparency</span>
              <h3 className="text-xl font-bold text-white">Watch Every Part Unboxed</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                No closed workshops. Watch oil bottles unsealed and inspect old parts right in front of your eyes.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Real-Time Updates</span>
              <h3 className="text-xl font-bold text-white">Live WhatsApp Job Card</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Receive photos, test results, and final invoices directly on WhatsApp before any work begins.
              </p>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenBooking()}
            className="px-7 py-3.5 bg-brand-500 hover:bg-brand-700 text-white font-bold text-xs rounded-btn shadow-premium transition-all inline-flex items-center space-x-2 active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consult Our Master Technician on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
