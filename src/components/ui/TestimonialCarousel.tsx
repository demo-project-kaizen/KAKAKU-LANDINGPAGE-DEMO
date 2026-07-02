/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { KAKAKU_TESTIMONIALS } from '../../types';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % KAKAKU_TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + KAKAKU_TESTIMONIALS.length) % KAKAKU_TESTIMONIALS.length);
  };

  return (
    <section className="py-24 bg-brand-sand border-b border-brand-stone/5" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Replicated layout header with pagination dots aligned on top-right */}
        <div className="flex flex-row items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-brand-teal-700"></div>
              <span className="font-mono text-[10px] tracking-widest text-brand-teal-700 uppercase font-semibold">
                Guest Reviews
              </span>
            </div>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-brand-stone tracking-tight leading-tight">
              Thanks for your sweet<br />words to us
            </h2>
          </div>

          {/* Indicator Dot Cluster on the Top-Right as in reference */}
          <div className="flex items-center gap-2">
            {KAKAKU_TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'bg-brand-teal-700 w-6' : 'bg-brand-stone/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Carousel Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* We show three testimonials. In mobile, we can slide, or on desktop we can highlight the active one with a border. Let's make it fully responsive! */}
          {KAKAKU_TESTIMONIALS.map((testimonial, index) => {
            const isActive = index === currentIndex;
            
            return (
              <div
                key={testimonial.id}
                className={`bg-white p-8 border transition-all duration-500 rounded-3xl ${
                  isActive ? 'block md:block' : 'hidden md:block'
                } ${
                  isActive
                    ? 'border-brand-teal-700 shadow-md md:translate-y-[-4px]'
                    : 'border-brand-stone/10 shadow-sm'
                }`}
                id={`testimonial-${testimonial.id}`}
              >
                {/* Guest Profile and Meta info Row */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 bg-brand-sand border border-brand-stone/10 overflow-hidden rounded-full">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        testimonial.id === 't1'
                          ? '1534528741775-53994a69daeb'
                          : testimonial.id === 't2'
                          ? '1517841905240-472988babdf9'
                          : '1539571696357-5a69c17a67c6'
                      }?auto=format&fit=crop&q=80&w=150`}
                      alt={testimonial.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-brand-stone uppercase tracking-wide">
                      {testimonial.name}
                    </h3>
                    <p className="text-[10px] text-brand-stone/50 font-mono tracking-wider uppercase mt-0.5">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs text-brand-stone/70 leading-relaxed font-sans mb-6 italic">
                  "{testimonial.review}"
                </p>

                {/* Stars and Date Row */}
                <div className="flex items-center justify-between border-t border-brand-stone/5 pt-5">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-brand-stone/40">
                    {testimonial.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Nav Buttons for Mobile Carousel Scrolling */}
        <div className="flex items-center justify-center gap-3 mt-12 md:hidden">
          <button
            onClick={prev}
            className="w-10 h-10 border border-brand-stone/15 flex items-center justify-center bg-white cursor-pointer rounded-full"
            aria-label="Previous review"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 border border-brand-stone/15 flex items-center justify-center bg-brand-teal-700 text-white cursor-pointer rounded-full"
            aria-label="Next review"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
