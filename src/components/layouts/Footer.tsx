/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Instagram, MessageSquare, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-brand-teal-950 text-brand-sand pt-16 pb-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1 - Newsletter (Replicating exact input block) */}
        <div className="flex flex-col gap-6">
          <h2 className="font-display font-medium text-xs tracking-widest uppercase text-brand-gold">
            NEWSLETTER
          </h2>
          <p className="text-xs text-brand-sand/70 leading-relaxed font-sans max-w-xs">
            Sign up to receive custom coffee roasting profile releases, fresh beans arrivals, and private tasting session invitations.
          </p>
          <form onSubmit={handleSubmit} className="relative w-full max-w-xs mt-2" id="footer-newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-transparent border-b border-brand-sand/30 focus:border-brand-gold py-2 pr-10 text-xs tracking-wide focus:outline-none transition-colors placeholder:text-brand-sand/40"
              required
            />
            <button
              type="submit"
              className="absolute right-0 bottom-2 p-1 text-brand-sand/70 hover:text-brand-gold transition-colors"
              aria-label="Subscribe"
            >
              <ArrowRight size={14} />
            </button>
          </form>
          {submitted && (
            <p className="text-[10px] font-mono text-brand-gold animate-fade-in">
              ✓ Subscribed to brewing updates!
            </p>
          )}
          <span className="text-[10px] tracking-wider text-brand-sand/40 uppercase font-mono mt-2">
            Sign up to receive special offers!
          </span>

          {/* Social Links from image */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-none border border-brand-sand/20 hover:border-brand-gold hover:text-brand-gold flex items-center justify-center transition-colors text-brand-sand/60"
              aria-label="Instagram"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://wa.me/6282123456789"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-none border border-brand-sand/20 hover:border-brand-gold hover:text-brand-gold flex items-center justify-center transition-colors text-brand-sand/60"
              aria-label="WhatsApp"
            >
              <MessageSquare size={14} />
            </a>
          </div>
        </div>

        {/* Column 2 - Contact Us (Replicating details) */}
        <div className="flex flex-col gap-6">
          <h2 className="font-display font-medium text-xs tracking-widest uppercase text-brand-gold">
            CONTACT US
          </h2>
          <ul className="flex flex-col gap-4 text-xs font-sans text-brand-sand/70">
            <li className="flex items-start gap-2.5 leading-relaxed">
              <MapPin size={14} className="text-brand-gold shrink-0 mt-0.5" />
              <span>
                Jl. Cipinang Elok II No. 4,<br />
                Cipinang, Jatinegara,<br />
                Jakarta Timur, DKI Jakarta 13410
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={14} className="text-brand-gold" />
              <a href="tel:+6282123456789" className="hover:text-brand-gold transition-colors">
                +62 821 2345 6789
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={14} className="text-brand-gold" />
              <a href="mailto:hello@kakakucoffeeroaster.com" className="hover:text-brand-gold transition-colors">
                hello@kakakuroaster.com
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Category (Replicating exact links mapped to Coffee Shop context) */}
        <div className="flex flex-col gap-6">
          <h2 className="font-display font-medium text-xs tracking-widest uppercase text-brand-gold">
            CATEGORIES
          </h2>
          <ul className="flex flex-col gap-2.5 text-xs font-sans text-brand-sand/70">
            <li>
              <button onClick={() => onNavClick('menu')} className="hover:text-brand-gold transition-colors text-left">
                Treat Yourself Specials
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('menu')} className="hover:text-brand-gold transition-colors text-left">
                Non-Coffee Elixirs
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('menu')} className="hover:text-brand-gold transition-colors text-left">
                Authentic Indonesian Snacks
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('menu')} className="hover:text-brand-gold transition-colors text-left">
                Bowl & Toast Series
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('spaces')} className="hover:text-brand-gold transition-colors text-left">
                Space Reservation & Events
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('process')} className="hover:text-brand-gold transition-colors text-left">
                Micro-Batch Beans Store
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4 - Company */}
        <div className="flex flex-col gap-6">
          <h2 className="font-display font-medium text-xs tracking-widest uppercase text-brand-gold">
            COMPANY
          </h2>
          <ul className="flex flex-col gap-2.5 text-xs font-sans text-brand-sand/70">
            <li>
              <button onClick={() => onNavClick('about')} className="hover:text-brand-gold transition-colors text-left">
                About Us & Our Roastery
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('process')} className="hover:text-brand-gold transition-colors text-left">
                The Roasting Process
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('spaces')} className="hover:text-brand-gold transition-colors text-left">
                Our Spaces Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('menu')} className="hover:text-brand-gold transition-colors text-left">
                Explore Culinary Menu
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('blog')} className="hover:text-brand-gold transition-colors text-left">
                Roaster’s Journal & News
              </button>
            </li>
            <li>
              <a href="#contact" className="hover:text-brand-gold transition-colors text-left">
                Reserve or Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Under Footer Bar (Replicating footer bar) */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10">
        
        {/* Left Logo */}
        <div className="flex items-center gap-2">
          <span className="text-brand-gold font-light text-base">傘</span>
          <span className="font-display font-semibold text-xs tracking-widest text-brand-sand uppercase">
            KAKAKU.roaster
          </span>
        </div>

        {/* Center Copyright with a subtle Indonesian portfolio note */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-[10px] font-mono tracking-wider text-brand-sand/40">
            © 2026 Kakaku Coffee & Place Cipinang. All rights reserved.
          </p>
          <p className="text-[9px] font-mono tracking-wider text-brand-sand/30 italic">
            *Proyek demonstrasi konsep portofolio UI/UX.
          </p>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-6 text-[10px] font-mono tracking-wider text-brand-sand/40">
          <a href="#privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#terms" className="hover:text-brand-gold transition-colors">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
}
