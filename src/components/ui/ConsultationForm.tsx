/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Calendar, ArrowRight } from 'lucide-react';

export default function ConsultationForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [guestCount, setGuestCount] = useState('2');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setPhoneNumber('');
    }
  };

  return (
    <section className="py-24 bg-white border-b border-brand-stone/5" id="reserve">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Form Block - Replicating exact headline and single-row alignment style */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-brand-teal-700"></div>
              <span className="font-mono text-[10px] tracking-widest text-brand-teal-700 uppercase font-semibold">
                Private Bookings
              </span>
            </div>
            
            <h2 className="font-display font-medium text-3xl md:text-4xl text-brand-stone tracking-tight leading-tight">
              Host a gathering. Just leave your request below
            </h2>
            
            <p className="text-xs text-brand-stone/70 leading-relaxed font-sans max-w-xl">
              Need to book the Sunset Rooftop for a birthday, host a community drip coffee workshop, or reserve our quiet indoor slow-bar table for a remote team work sprint? Tell us your number and group size. Our Cipinang crew will contact you directly to curate the details.
            </p>

            {/* Dynamic reservation input row from original design */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3 mt-6 max-w-xl" id="reservation-lead-form">
              <div className="relative grow">
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Your phone number (WhatsApp)"
                  className="w-full bg-brand-sand border border-brand-stone/15 py-4 pl-11 pr-4 rounded-full text-xs font-sans tracking-wide focus:outline-none focus:border-brand-teal-700 placeholder:text-brand-stone/40"
                />
                <Phone size={13} className="absolute left-4 top-4.5 text-brand-stone/40" />
              </div>

              {/* Guest Count selection */}
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="bg-brand-sand border border-brand-stone/15 px-6 py-4 rounded-full text-xs font-sans text-brand-stone/70 focus:outline-none focus:border-brand-teal-700 cursor-pointer sm:w-32"
              >
                <option value="1-2">1-2 Pax</option>
                <option value="3-5">3-5 Pax</option>
                <option value="6-10">6-10 Pax</option>
                <option value="10+">10+ Pax</option>
              </select>

              <button
                type="submit"
                className="bg-brand-teal-900 hover:bg-brand-teal-800 text-brand-sand text-xs font-mono uppercase tracking-widest px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0 font-bold shadow-md hover:shadow-lg"
              >
                <span>Book Spot</span>
                <ArrowRight size={14} />
              </button>
            </form>

            {submitted && (
              <div className="p-4 bg-brand-teal-900/5 border-l-2 border-brand-teal-700 rounded-r-2xl rounded-bl-2xl max-w-xl animate-fade-in">
                <p className="text-xs text-brand-teal-900 font-sans leading-relaxed">
                  ✓ <span className="font-semibold">Request received!</span> Our head barista will text you on WhatsApp within 15 minutes to confirm space slot availability.
                </p>
              </div>
            )}
            
            {/* Fine print warning to maintain portfolio awareness */}
            <p className="text-[10px] text-brand-stone/40 font-mono tracking-wider uppercase">
              *Formulir simulasi - tidak ada pemesanan meja riil.
            </p>
          </div>

          {/* Right Image Block - Asymmetric architectural layout */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden relative border border-brand-stone/5 rounded-3xl shadow-sm">
              <img
                src="/src/assets/images/kakaku_night.png"
                alt="Cozy interior wooden table of Kakaku"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700 ease-out"
              />
              
              {/* Subtle visual lighting accent mirroring neon light tubes in photo */}
              <div className="absolute top-[20%] right-6 w-[3px] h-24 bg-[#ffdf9e] shadow-[0_0_15px_#ffa834] rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute top-[45%] right-12 w-[3px] h-24 bg-[#ffdf9e] shadow-[0_0_15px_#ffa834] rounded-full opacity-80 animate-pulse"></div>
            </div>

            {/* Micro aesthetic overlay block */}
            <div className="absolute -bottom-6 -left-6 bg-brand-teal-900 text-brand-sand p-6 hidden sm:block max-w-[200px] rounded-2xl shadow-lg">
              <span className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold">
                Cipinang Vibe
              </span>
              <p className="text-[10px] font-sans text-brand-sand/70 leading-normal mt-2">
                "Where raw plaster wall textures meet the soothing sound of gravel footsteps."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
