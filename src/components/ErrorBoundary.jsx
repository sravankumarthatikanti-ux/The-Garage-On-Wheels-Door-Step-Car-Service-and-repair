import React from 'react';
import { RefreshCw, Phone, MessageSquare, Wrench } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("The Garage On Wheels Caught Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#080A0D] text-white flex items-center justify-center p-6 text-center font-sans">
          <div className="max-w-md w-full bg-[#181E24] border border-[#252C33] p-8 rounded-2xl shadow-2xl space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-[#080A0D] border border-ice/40 flex items-center justify-center mx-auto text-ice shadow-[0_0_20px_rgba(143,216,255,0.3)]">
              <Wrench className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h1 className="text-xl font-black font-heading text-white">
                THE GARAGE ON WHEELS
              </h1>
              <p className="text-xs text-[#A7ADB4]">
                Doorstep Car Service &amp; Repair • Tirumalagiri, Secunderabad
              </p>
            </div>

            <p className="text-sm text-[#C9D1D6] leading-relaxed">
              We encountered a temporary interface hiccup. You can refresh or reach out directly on WhatsApp for immediate service dispatch.
            </p>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full py-3.5 btn-sport-gradient font-black text-xs uppercase tracking-widest rounded-xl shadow-md flex items-center justify-center space-x-2 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4 text-graphite" />
                <span>RELOAD APPLICATION</span>
              </button>

              <a
                href="https://wa.me/918121404113?text=Hello%20The%20Garage%20On%20Wheels!%20I%20would%20like%20to%20book%20a%20doorstep%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 btn-whatsapp font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-whatsapp" />
                <span>CHAT ON WHATSAPP (+91 81214 04113)</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
