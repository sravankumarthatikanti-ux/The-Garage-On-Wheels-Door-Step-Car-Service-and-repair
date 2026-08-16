import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  FileText, 
  ThumbsUp, 
  DollarSign,
  Building2,
  HeartHandshake
} from 'lucide-react';

const WHY_POINTS = [
  {
    icon: MapPin,
    title: "Doorstep & Workshop Care",
    desc: "Small and general services performed at your location; major or complex repairs handled at our specialized workshop.",
    accentColor: "#8EDDD0", // Aqua
    borderColor: "hover:border-[#8EDDD0]",
    glowColor: "hover:shadow-[0_0_25px_rgba(142,221,208,0.25)]",
  },
  {
    icon: ShieldCheck,
    title: "Genuine OEM Parts Only",
    desc: "100% sealed original spare parts with official barcode warranty and verified compatibility.",
    accentColor: "#8FD8FF", // Ice Blue
    borderColor: "hover:border-[#8FD8FF]",
    glowColor: "hover:shadow-[0_0_25px_rgba(143,216,255,0.25)]",
  },
  {
    icon: DollarSign,
    title: "Upfront Transparent Pricing",
    desc: "No hidden charges or inflated estimates. Receive a clear, customized estimate on WhatsApp before work begins.",
    accentColor: "#9DE7E5", // Cyan Mist
    borderColor: "hover:border-[#9DE7E5]",
    glowColor: "hover:shadow-[0_0_25px_rgba(157,231,229,0.25)]",
  },
  {
    icon: Award,
    title: "Certified Master Mechanics",
    desc: "Experienced technicians trained across Japanese, Korean, Indian, and German car systems.",
    accentColor: "#C7C0E8", // Soft Lavender
    borderColor: "hover:border-[#C7C0E8]",
    glowColor: "hover:shadow-[0_0_25px_rgba(199,192,232,0.25)]",
  },
  {
    icon: Clock,
    title: "Zero Travel Hassle",
    desc: "Save hours spent traveling to mechanic shops and waiting in traffic while we inspect your car on-site.",
    accentColor: "#C8E6B8", // Soft Lime
    borderColor: "hover:border-[#C8E6B8]",
    glowColor: "hover:shadow-[0_0_25px_rgba(200,230,184,0.25)]",
  },
  {
    icon: HeartHandshake,
    title: "Complete Follow-Up & Support",
    desc: "Once service or workshop repair is done, we return your car and follow up to ensure 100% driving satisfaction.",
    accentColor: "#DCC9A6", // Soft Champagne
    borderColor: "hover:border-[#DCC9A6]",
    glowColor: "hover:shadow-[0_0_25px_rgba(220,201,166,0.25)]",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#101419] text-white border-t border-[#252C33] relative overflow-hidden">
      
      {/* Background Color Blooms */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[700px] h-[400px] bg-cyan/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-lavender/10 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#181E24] border border-[#252C33] text-ice text-xs font-bold uppercase tracking-widest font-mono">
            <Award className="w-3.5 h-3.5 text-cyan" />
            <span>THE GARAGE ON WHEELS STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            MORE THAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-cyan to-lavender">A GARAGE.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7ADB4] leading-relaxed">
            Small &amp; general services at your doorstep. Major repairs handled at our workshop.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_POINTS.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className={`bg-[#181E24] border border-[#252C33] rounded-card p-6 sm:p-7 space-y-3.5 text-left transition-all duration-300 ${pt.borderColor} ${pt.glowColor} group relative overflow-hidden hover:-translate-y-1.5`}
              >
                {/* Top Accent Line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2.5px]"
                  style={{ backgroundColor: pt.accentColor }}
                />

                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#252C33] shadow-sm transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: `${pt.accentColor}18`,
                    color: pt.accentColor,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base sm:text-lg font-black text-white font-heading tracking-tight group-hover:text-ice transition-colors">
                  {pt.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed font-sans">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
