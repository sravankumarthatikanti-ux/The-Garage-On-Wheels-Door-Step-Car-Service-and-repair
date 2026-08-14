import React from 'react';
import { Star, MessageSquare, UserCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/carServiceData';

export default function Testimonials({ onOpenBooking }) {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-surface-soft text-primary border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-500 text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Verified Car Owner Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary font-sans tracking-tight">
            Trusted by Car Owners Across <span className="text-brand-500">Secunderabad</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">
            Real feedback from verified car owners in Tirumalagiri, Sainikpuri, Bowenpally, and Alwal.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="premium-card p-6 flex flex-col justify-between"
            >
              <div>
                {/* Top: Star Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-metallic text-metallic" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <UserCheck className="w-3 h-3" /> Verified
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-secondary leading-relaxed italic">
                  "{review.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-border-soft">
                <h4 className="text-sm font-bold text-primary">{review.author}</h4>
                <p className="text-xs text-muted mt-0.5">{review.car} • {review.location}</p>
                <span className="text-[10px] font-medium text-brand-600 block mt-1">Service: {review.service}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
