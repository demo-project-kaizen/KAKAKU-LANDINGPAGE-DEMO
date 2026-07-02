/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { KAKAKU_BARISTAS } from '../../types';

export default function BaristaGrid() {
  return (
    <section className="py-24 bg-brand-sand border-b border-brand-stone/5" id="about">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section title header from reference image */}
        <div className="flex flex-col gap-3 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-brand-teal-700"></div>
            <span className="font-mono text-[10px] tracking-widest text-brand-teal-700 uppercase font-semibold">
              The Craftsmen
            </span>
          </div>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-brand-stone tracking-tight leading-tight">
            A team United by coffee craftsmanship
          </h2>
        </div>

        {/* Bento grid layout replicating reference image density */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Main Solid Teal Feature Card (Slot 1) */}
          <div className="bg-brand-teal-900 text-brand-sand p-8 flex flex-col justify-between min-h-[340px] md:min-h-full relative overflow-hidden rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
            {/* Giant Graphic Digit (6 in original, 3 in our case) */}
            <div className="font-display font-bold text-[140px] leading-none text-brand-gold/20 select-none absolute -top-8 -right-4">
              3
            </div>

            <div className="relative z-10">
              <span className="font-mono text-[10px] tracking-widest text-brand-gold uppercase font-semibold">
                OUR PRIDE
              </span>
              <div className="w-10 h-[2px] bg-brand-gold mt-2 rounded-full"></div>
            </div>

            <div className="relative z-10 mt-24">
              <div className="font-display font-bold text-6xl text-brand-gold leading-none">
                3
              </div>
              <p className="font-display font-semibold text-lg uppercase tracking-wide text-brand-sand mt-4 leading-snug">
                Professional baristas & roasters in our crew
              </p>
              <p className="text-[11px] font-sans text-brand-sand/60 mt-3 max-w-xs leading-normal">
                Committed to delivering pristine cups daily. Sourcing, micro-batch profiling, and hand-brewing with absolute precision.
              </p>
            </div>
            
            {/* Tiny accent shape on bottom right */}
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-brand-teal-800 rounded-tl-2xl"></div>
          </div>

          {/* Individual Grayscale to Color Barista Cards (Slots 2, 3, 4) */}
          {KAKAKU_BARISTAS.map((barista) => (
            <div
              key={barista.id}
              className="bg-white border border-brand-stone/5 overflow-hidden group relative flex flex-col justify-end min-h-[380px] rounded-3xl shadow-sm hover:shadow-md transition-all duration-300"
              id={`barista-${barista.id}`}
            >
              {/* Grayscale container */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={barista.image}
                  alt={barista.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 ease-out"
                />
                {/* Visual shade overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-stone/90 via-brand-stone/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>

              {/* Overlaid details sitting on the bottom of the card */}
              <div className="relative z-10 p-6 flex flex-col gap-3">
                <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase font-semibold">
                  {barista.role}
                </span>
                
                <h3 className="font-display font-semibold text-base text-white tracking-wide uppercase">
                  {barista.name}
                </h3>

                {/* Separator line */}
                <div className="w-8 h-[1px] bg-white/30 group-hover:w-full transition-all duration-500"></div>

                {/* Barista quote that animates into view on hover */}
                <p className="text-[11px] font-sans text-brand-sand/80 italic leading-relaxed max-h-0 opacity-0 group-hover:max-h-[80px] group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  "{barista.quote}"
                </p>
              </div>

              {/* Accent marker dot mimicking custom branding style */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-brand-gold rounded-full group-hover:scale-150 transition-transform"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
