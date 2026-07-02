/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, Coffee, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

// Layout Imports
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

// UI Module Imports
import BaristaGrid from './components/ui/BaristaGrid';
import ProcessTimeline from './components/ui/ProcessTimeline';
import SpacesGrid from './components/ui/SpacesGrid';
import MenuExplorer from './components/ui/MenuExplorer';
import TestimonialCarousel from './components/ui/TestimonialCarousel';
import ConsultationForm from './components/ui/ConsultationForm';
import BlogSection from './components/ui/BlogSection';
import GallerySection from './components/ui/GallerySection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle smooth scroll navigation
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Listen to scroll to highlight active navigation link
  useEffect(() => {
    const sections = ['home', 'about', 'process', 'spaces', 'gallery', 'menu', 'blog'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-brand-sand selection:bg-brand-teal-700 selection:text-white overflow-x-hidden">
      
      {/* Universal Floating Header */}
      <Header onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Main Single-View Segment */}
      <main className="flex-grow">
        
        {/* ==========================================
            SECTION 1: HERO CONTAINER (Strict Replicated)
            ========================================== */}
        <section className="relative pt-12 pb-24 md:py-24 bg-brand-sand border-b border-brand-stone/5" id="home">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column - Headline & Main CTA */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                
                {/* Title featuring exact accent block on letter 'o' */}
                <h2 className="font-display font-bold text-4xl md:text-[68px] text-brand-stone tracking-tight leading-[1.05] uppercase">
                  We Make <br />
                  Your <span className="relative inline-block text-brand-stone">
                    C
                    <span className="relative inline-flex items-center justify-center px-1 mx-0.5 bg-brand-teal-700 text-brand-sand font-bold">
                      o
                    </span>
                    ffee
                  </span> <br />
                  Better
                </h2>

                <p className="text-xs md:text-sm text-brand-stone/70 leading-relaxed font-sans max-w-lg">
                  We are tending to the thousands of minute roasting and extraction details it takes to curate a custom origin cup tailored specifically to your sensory lifestyle.
                </p>

                {/* Main solid Teal button with elegant rounded pill shape */}
                <div className="pt-2">
                  <button
                    onClick={() => handleNavClick('menu')}
                    className="group relative bg-brand-teal-900 hover:bg-brand-teal-800 text-brand-sand text-xs tracking-widest font-mono uppercase font-bold py-4 px-8 flex items-center justify-center gap-6 rounded-full transition-all duration-300 w-full sm:w-auto cursor-pointer shadow-md hover:shadow-lg"
                    id="hero-order-btn"
                  >
                    <span>To Order</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>

                {/* Bottom Two Highlights with soft rounded layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-brand-stone/10 mt-4">
                  
                  {/* Highlight 1 - Micro-Roasting */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-white border border-brand-stone/10 rounded-xl text-brand-teal-700 shrink-0">
                      <Coffee size={16} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xs text-brand-stone uppercase tracking-wider">
                        MICRO-BATCH ROAST
                      </h3>
                      <p className="text-[11px] text-brand-stone/60 leading-normal font-sans mt-1">
                        Sourced single-origins with custom fluid-bed thermal curves.
                      </p>
                    </div>
                  </div>

                  {/* Highlight 2 - Spaces */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-white border border-brand-stone/10 rounded-xl text-brand-teal-700 shrink-0">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xs text-brand-stone uppercase tracking-wider">
                        ROOFTOP & PICNIC
                      </h3>
                      <p className="text-[11px] text-brand-stone/60 leading-normal font-sans mt-1">
                        Enjoy sunset horizons over cozy local gravel gardens.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Right Column - Architectural Facade Frame Offset Layout */}
              <div className="lg:col-span-5 relative">
                {/* Large visual card with custom offset frames */}
                <div className="relative border border-brand-stone/10 p-4 bg-white/70 rounded-3xl shadow-sm">
                  <div className="aspect-[4/5] overflow-hidden relative rounded-2xl">
                    <img
                      src="/images/kakaku_front.png"
                      alt="Kakaku Coffee & Place front facade"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  {/* Small absolute graphic indicators on the bottom from reference image */}
                  <div className="absolute -bottom-4 right-6 flex items-center gap-1.5 bg-brand-sand border border-brand-stone/10 px-4 py-2 rounded-full text-[9px] font-mono tracking-widest text-brand-stone/60 uppercase">
                    <span>CIPINANG SPOT</span>
                    <span className="w-1.5 h-1.5 bg-brand-teal-700 rounded-full animate-pulse"></span>
                  </div>
                </div>

                {/* Decorative floating square accent */}
                <div className="absolute top-12 -left-6 w-12 h-12 border border-brand-teal-700/20 pointer-events-none hidden md:block rounded-xl"></div>
              </div>

            </div>
          </div>
        </section>


        {/* ==========================================
            SECTION 2: HISTORY OF CREATION (Replicated)
            ========================================== */}
        <section className="py-24 bg-white border-b border-brand-stone/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              
              {/* Left Column: Overlapping pictures with a video play track */}
              <div className="lg:col-span-6 relative">
                <div className="grid grid-cols-12 gap-4 items-end">
                                    {/* Photo 1 (Main portrait block) */}
                  <div className="col-span-7 border border-brand-stone/10 p-2.5 bg-brand-sand rounded-3xl">
                    <div className="aspect-[3/4] overflow-hidden relative rounded-2xl">
                      <img
                        src="/images/kakaku_coffee1.png"
                        alt="Authentic Coffee Poster frames at Kakaku"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Photo 2 (Smaller offset landscape block) */}
                  <div className="col-span-5 border border-brand-stone/10 p-2.5 bg-brand-sand -translate-y-12 rounded-3xl">
                    <div className="aspect-square overflow-hidden relative rounded-2xl">
                      <img
                        src="/images/kakaku_coffee2.png"
                        alt="Pristine latte art at Kakaku"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                </div>

                {/* Replicated play banner sitting over the image collage */}
                <div className="absolute bottom-6 left-6 right-6 sm:left-12 sm:right-12 bg-white/95 backdrop-blur-md p-5 border border-brand-stone/10 flex items-center justify-between gap-4 shadow-md rounded-2xl">
                  <div className="flex flex-col gap-1 max-w-[70%]">
                    <h4 className="font-display font-semibold text-xs text-brand-stone uppercase tracking-wide leading-tight">
                      Watch how we roast
                    </h4>
                    <p className="text-[10px] text-brand-stone/50 font-mono tracking-wider uppercase">
                      Play video • 1:45 mins
                    </p>
                  </div>
                  
                  {/* Play Button & Progress indicator */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-brand-teal-700 text-white hover:bg-brand-teal-800 rounded-full flex items-center justify-center shrink-0 transition-all cursor-pointer"
                    aria-label="Play video"
                  >
                    <Play size={14} className="fill-white ml-0.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Title with Accent Line & Narrative */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                
                {/* Horizontal Divider title */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-brand-teal-700"></div>
                  <h3 className="font-display font-medium text-xs tracking-widest text-brand-teal-700 uppercase font-semibold">
                    Our Origin Story
                  </h3>
                </div>

                <h2 className="font-display font-medium text-3xl md:text-4xl text-brand-stone tracking-tight leading-tight">
                  History of our creation
                </h2>

                <p className="text-xs text-brand-stone/70 leading-relaxed font-sans">
                  Since our humble beginnings, Kakaku has significantly expanded its collection of exclusive micro-lot coffee beans. Today, we are proud to present you our best Indonesian coffee designs.
                </p>
                <p className="text-xs text-brand-stone/70 leading-relaxed font-sans">
                  Our collections are updated every day with beautiful natural flavor notes, and we are glad that you, our customers, support us on this journey. Each bag represents hours of sourcing, profiling, and cupping with the utmost care.
                </p>

                {/* Read more action trigger */}
                <div className="pt-4">
                  <button
                    onClick={() => handleNavClick('process')}
                    className="flex items-center gap-2 font-mono text-xs tracking-widest text-brand-stone hover:text-brand-teal-700 transition-colors uppercase font-bold group cursor-pointer"
                  >
                    <span>Read more</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* ==========================================
            SECTION 3: TEAM / CRAFTSMEN (Grid)
            ========================================== */}
        <BaristaGrid />


        {/* ==========================================
            SECTION 4: WORK PROCESS (Timeline)
            ========================================== */}
        <ProcessTimeline />


        {/* ==========================================
            SECTION 5: SPACES / ATMOSPHERE (Slide grid)
            ========================================== */}
        <SpacesGrid />


        {/* ==========================================
            VISUAL GALLERY SECTION (Bento Grid)
            ========================================== */}
        <GallerySection />


        {/* ==========================================
            SECTION 6: INTERACTIVE MENU DIGITAL EXPLORER
            ========================================== */}
        <MenuExplorer />


        {/* ==========================================
            SECTION 7: GUEST REVIEWS (Carousel)
            ========================================== */}
        <TestimonialCarousel />


        {/* ==========================================
            SECTION 8: PRIVATE BOOKINGS FORM (Callback)
            ========================================== */}
        <ConsultationForm />


        {/* ==========================================
            SECTION 9: JOURNAL & BLOGS (Grid cards)
            ========================================== */}
        <BlogSection />

      </main>

      {/* Universal Footer */}
      <Footer onNavClick={handleNavClick} />

    </div>
  );
}
