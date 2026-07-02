/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { KAKAKU_PROCESS_STEPS } from '../../types';

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-white border-b border-brand-stone/5" id="process">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section title header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-20">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-brand-teal-700"></div>
              <span className="font-mono text-[10px] tracking-widest text-brand-teal-700 uppercase font-semibold">
                Brew Philosophy
              </span>
            </div>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-brand-stone tracking-tight leading-tight">
              Our work process make<br />your cup perfect
            </h2>
          </div>
          <span className="font-mono text-[11px] tracking-widest text-brand-stone/50 uppercase max-w-xs leading-relaxed">
            * Every bean undergoes meticulous thermal profiling and sensory review before hitting our bar.
          </span>
        </div>

        {/* Horizontal Timeline Container for Desktop & Vertical for Mobile */}
        <div className="relative pt-12 pb-12">
          
          {/* Main Horizontal Timeline Connector Line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute top-[50%] left-0 right-0 h-[2px] bg-brand-teal-700/20 z-0">
            {/* Pulsing indicator running along the line */}
            <div className="absolute top-0 left-0 w-24 h-full bg-brand-teal-700 animate-[pulse_3s_infinite]"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {KAKAKU_PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 1; // Used to alternate top and bottom layout on desktop
              
              return (
                <div
                  key={step.id}
                  className={`flex flex-col justify-between relative ${
                    isEven ? 'lg:translate-y-12' : 'lg:-translate-y-12'
                  }`}
                  id={`process-step-${step.id}`}
                >
                  
                  {/* Decorative connecting line and anchor node (Desktop only) */}
                  <div className="hidden lg:flex flex-col items-center absolute left-6 w-[2px]"
                    style={{
                      height: '48px',
                      top: isEven ? '-48px' : 'auto',
                      bottom: isEven ? 'auto' : '-48px',
                    }}
                  >
                    {/* Thin connecting guide */}
                    <div className="w-[1px] h-full bg-brand-teal-700"></div>
                    {/* Anchor dot on the main line */}
                    <div className="w-2.5 h-2.5 bg-brand-teal-700 rounded-full border-2 border-white absolute"
                      style={{
                        top: isEven ? '0' : 'auto',
                        bottom: isEven ? 'auto' : '0'
                      }}
                    ></div>
                  </div>

                  {/* Step Card Content */}
                  <div className="bg-brand-sand border border-brand-stone/10 p-6 flex flex-col justify-between min-h-[180px] hover:border-brand-teal-700 hover:shadow-md transition-all duration-300 rounded-3xl">
                    
                    {/* Top Row: Title & Number */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-brand-stone mt-1">
                        {step.title}
                      </h3>
                      <span className="font-mono font-bold text-xl text-brand-teal-700/30 group-hover:text-brand-teal-700 transition-colors">
                        {step.stepNumber}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="w-10 h-[1px] bg-brand-teal-700/30 my-4"></div>

                    {/* Bottom Row: Details */}
                    <p className="text-xs text-brand-stone/70 leading-relaxed font-sans">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
