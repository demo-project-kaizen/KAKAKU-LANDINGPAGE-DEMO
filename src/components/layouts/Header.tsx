/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavClick, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Roast Process', id: 'process' },
    { label: 'Our Spaces', id: 'spaces' },
    { label: 'Visual Gallery', id: 'gallery' },
    { label: 'Menu Explorer', id: 'menu' },
    { label: 'Blog & News', id: 'blog' },
  ];

  return (
    <>
      {/* Small Legal & Portfolio Disclaimer Top bar */}
      <div className="w-full bg-brand-stone text-brand-sand text-[10px] md:text-xs py-1.5 px-4 text-center tracking-wider uppercase font-mono flex items-center justify-between border-b border-white/5">
        <div className="hidden md:block">CIPINANG, JAKARTA TIMUR</div>
        <div className="mx-auto md:mx-0 font-medium text-brand-gold">
          ✨ PROYEK PORTOFOLIO UI/UX • BUKAN TOKO KOMERSIAL RESMI
        </div>
        <div className="hidden md:block font-mono text-[10px]">OPEN DAILY: 11:00 - 22:00</div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-sand/90 backdrop-blur-md shadow-sm border-b border-brand-stone/5 py-3'
            : 'bg-brand-sand py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo - Replicating structural logo with Umbrella Kanji */}
          <button
            onClick={() => onNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
            id="brand-logo-btn"
          >
            <div className="relative flex items-center justify-center w-10 h-10 border border-brand-stone/20 bg-white rounded-none group-hover:border-brand-teal-700 transition-colors">
              {/* Umbrella glyph (傘) styled like logo in image */}
              <span className="text-xl font-light text-brand-stone group-hover:text-brand-teal-700 transition-colors">
                傘
              </span>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand-teal-700"></div>
            </div>
            <div>
              <h1 className="font-display font-bold tracking-widest text-sm leading-tight text-brand-stone">
                KAKAKU
              </h1>
              <p className="font-mono text-[9px] tracking-wider text-brand-stone/60 uppercase">
                コーヒーロースター
              </p>
            </div>
          </button>

          {/* Desktop Navigation Link Cluster */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavClick(link.id)}
                className={`text-xs uppercase tracking-widest font-mono transition-all relative py-2 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-brand-teal-700 font-semibold'
                    : 'text-brand-stone/70 hover:text-brand-stone'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-teal-700"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Spacer */}
          <div className="hidden lg:block w-40"></div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-stone focus:outline-none p-1.5 border border-brand-stone/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-brand-sand border-b border-brand-stone/10 overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      onNavClick(link.id);
                      setIsOpen(false);
                    }}
                    className={`text-sm uppercase tracking-widest font-mono text-left py-2.5 border-b border-brand-stone/5 ${
                      activeSection === link.id
                        ? 'text-brand-teal-700 font-semibold'
                        : 'text-brand-stone/70'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                
                {/* Mobile Extra Utilities */}
                <div className="flex items-center justify-end pt-4 mt-2 border-t border-brand-stone/5">
                  <a
                    href="https://wa.me/6282123456789"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono uppercase tracking-widest font-semibold text-brand-teal-700 hover:text-brand-teal-800 transition-colors"
                  >
                    Chat WhatsApp →
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
