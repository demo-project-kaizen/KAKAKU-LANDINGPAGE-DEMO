/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { KAKAKU_SPACES } from '../../types';

export default function SpacesGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % KAKAKU_SPACES.length);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 300;
      scrollContainerRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + KAKAKU_SPACES.length) % KAKAKU_SPACES.length);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 300;
      scrollContainerRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden border-b border-brand-stone/5" id="spaces">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block - Exact Replicated Column Design */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:pr-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-brand-teal-700"></div>
              <span className="font-mono text-[10px] tracking-widest text-brand-teal-700 uppercase font-semibold">
                Atmosphere & Space
              </span>
            </div>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-brand-stone tracking-tight leading-tight uppercase">
              Our spots<br />to unwind
            </h2>
            <p className="text-xs text-brand-stone/70 leading-relaxed font-sans">
              This is why we are proud to offer a diverse range of thoughtfully curated settings. From raw concrete bars and open skies, to textured indoor slow bars lined with inspirational framed quotes. Our space is updated with greenery and warm ambient fixtures to ensure a serene sanctuary in Cipinang.
            </p>
            
            {/* Action link and Custom Carousel Controls Side-by-side */}
            <div className="flex items-center justify-between lg:justify-start lg:gap-12 pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById('gallery');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="flex items-center gap-2 font-mono text-xs tracking-widest text-brand-stone hover:text-brand-teal-700 transition-colors uppercase font-semibold group cursor-pointer bg-transparent border-none p-0 text-left"
              >
                <span>View gallery</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Precise slider controls representing the reference image */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-brand-stone/10 bg-brand-sand hover:bg-brand-teal-700 hover:text-white flex items-center justify-center transition-all cursor-pointer text-brand-stone/80"
                  aria-label="Previous spot"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-brand-stone/10 bg-brand-teal-700 text-white hover:bg-brand-teal-800 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next spot"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Slide Container - Replicated Card Design with floating labels */}
          <div className="lg:col-span-8 overflow-hidden -mx-6 px-6 lg:mx-0 lg:px-0">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory touch-pan-x"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {KAKAKU_SPACES.map((space) => (
                <div
                  key={space.id}
                  className="w-[280px] sm:w-[320px] md:w-[350px] snap-start shrink-0 relative group overflow-hidden rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-brand-stone/5"
                  id={`space-card-${space.id}`}
                >
                  {/* Photo with subtle zoom-out filter and overlay */}
                  <div className="h-[380px] sm:h-[420px] w-full overflow-hidden relative rounded-3xl bg-brand-stone/5">
                    <img
                      src={space.image}
                      alt={space.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity"></div>
                  </div>

                  {/* Top Spot Tag */}
                  <div className="absolute top-4 left-4 bg-brand-teal-800/95 text-brand-sand text-[9px] font-mono tracking-widest uppercase px-3 py-1 rounded-full shadow-sm border border-white/5">
                    {space.badge}
                  </div>

                  {/* Bottom Overlaid Label matching 'Living room / 59 projects' in reference */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-sm p-4 sm:p-5 border-l-4 border-brand-teal-700 rounded-r-2xl rounded-bl-2xl transform translate-y-0 group-hover:-translate-y-1 transition-all duration-300 shadow-md">
                    <h3 className="font-display font-semibold text-xs sm:text-sm uppercase tracking-wider text-brand-stone">
                      {space.name}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] text-brand-teal-800 font-mono tracking-wider uppercase mt-0.5 font-semibold">
                      {space.capacity}
                    </p>
                    <p className="text-[10px] sm:text-xs text-brand-stone/75 leading-relaxed font-sans mt-2">
                      {space.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
