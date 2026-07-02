/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Search, Sparkles, Star, ChevronRight, BookOpen } from 'lucide-react';
import { KAKAKU_MENU_ITEMS, MenuItem } from '../../types';

export default function MenuExplorer() {
  const [activeTab, setActiveTab] = useState<'all' | 'drinks' | 'foods'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Group items by category and subcategory
  const filteredItems = KAKAKU_MENU_ITEMS.filter((item) => {
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Get unique subcategories based on current tab
  const subcategories = Array.from(
    new Set(
      KAKAKU_MENU_ITEMS.filter((i) => activeTab === 'all' || i.category === activeTab).map(
        (i) => i.subcategory
      )
    )
  );

  return (
    <section className="py-24 bg-brand-sand border-b border-brand-stone/5" id="menu">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-brand-teal-700"></div>
              <span className="font-mono text-[10px] tracking-widest text-brand-teal-700 uppercase font-semibold">
                Taste & Craft
              </span>
            </div>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-brand-stone tracking-tight leading-tight">
              Explore our micro-roast &<br />culinary collection
            </h2>
          </div>
          <div className="flex flex-col md:items-end gap-2 text-left md:text-right">
            <span className="font-mono text-[10px] tracking-widest text-brand-stone/50 uppercase">
              AUTHENTIC FLAVORS
            </span>
            <p className="text-xs text-brand-stone/70 max-w-xs leading-relaxed">
              We serve hand-crafted drinks and rich Indonesian fusion mains prepared daily with locally sourced ingredients.
            </p>
          </div>
        </div>

        {/* Search and Navigation filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Tabs */}
          <div className="flex items-center gap-2 border border-brand-stone/15 p-1.5 bg-white/50 self-start rounded-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2.5 font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer rounded-full ${
                activeTab === 'all'
                  ? 'bg-brand-teal-900 text-brand-sand font-bold shadow-sm'
                  : 'text-brand-stone/70 hover:text-brand-stone'
              }`}
            >
              All Menu
            </button>
            <button
              onClick={() => setActiveTab('drinks')}
              className={`px-6 py-2.5 font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer rounded-full ${
                activeTab === 'drinks'
                  ? 'bg-brand-teal-900 text-brand-sand font-bold shadow-sm'
                  : 'text-brand-stone/70 hover:text-brand-stone'
              }`}
            >
              Drinks
            </button>
            <button
              onClick={() => setActiveTab('foods')}
              className={`px-6 py-2.5 font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer rounded-full ${
                activeTab === 'foods'
                  ? 'bg-brand-teal-900 text-brand-sand font-bold shadow-sm'
                  : 'text-brand-stone/70 hover:text-brand-stone'
              }`}
            >
              Foods
            </button>
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes or drinks..."
              className="w-full bg-white border border-brand-stone/15 py-3 pl-11 pr-5 rounded-full text-xs font-sans tracking-wide focus:outline-none focus:border-brand-teal-700 placeholder:text-brand-stone/40"
            />
            <Search size={14} className="absolute left-4 top-3.5 text-brand-stone/40" />
          </div>

        </div>

        {/* Realistic Interactive Menu Booklet Layout (Replicating Paper texture & Style) */}
        <div className="bg-[#f5f2eb] border border-[#e0dacd] p-8 md:p-12 relative shadow-md rounded-3xl">
          {/* Subtle paper line accents & logo watermark */}
          <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-[#e0dacd] hidden lg:block"></div>
          <div className="absolute top-6 right-6 font-display text-[9px] tracking-widest text-[#9d937e] uppercase">
            Kakaku Coffee & Place • Jakarta
          </div>

          {/* Grid columns - 2 pages look on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
            
            {subcategories.map((sub, sIndex) => {
              // Filter items in this page column that match the subcategory
              const subItems = filteredItems.filter((i) => i.subcategory === sub);
              if (subItems.length === 0) return null;

              return (
                <div key={sub} className="flex flex-col gap-6" id={`menu-sub-${sub.toLowerCase().replace(/\s+/g, '-')}`}>
                  
                  {/* Subcategory title */}
                  <div className="border-b border-[#ded7c4] pb-2 flex items-center justify-between">
                    <h3 className="font-display font-bold text-sm tracking-widest uppercase text-brand-teal-900 flex items-center gap-2">
                      <ChevronRight size={14} className="text-[#9d937e]" />
                      {sub}
                    </h3>
                    <span className="font-mono text-[9px] text-[#9d937e] uppercase tracking-wider">
                      {subItems.length} choices
                    </span>
                  </div>

                  {/* Items List */}
                  <div className="flex flex-col gap-4">
                    {subItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start justify-between gap-4 group"
                        id={`menu-item-${item.id}`}
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5">
                            <span className="font-sans font-medium text-xs text-brand-stone group-hover:text-brand-teal-700 transition-colors uppercase tracking-wide">
                              {item.name}
                            </span>
                            
                            {/* Accent indicators mapping menu sheet */}
                            {item.isPopular && (
                              <span className="bg-brand-teal-800 text-brand-sand text-[8px] font-mono tracking-widest px-1.5 py-0.5" title="Popular Item">
                                ★ Popular
                              </span>
                            )}
                            {item.isSpecialty && (
                              <span className="bg-brand-gold text-brand-stone text-[8px] font-mono tracking-widest px-1.5 py-0.5 font-bold" title="Chef Specialty">
                                ✦ Specialty
                              </span>
                            )}
                          </div>
                          
                          {/* Fine print detail placeholder to enrich layout */}
                          <span className="text-[10px] text-brand-stone/50 italic font-sans mt-0.5">
                            {item.category === 'drinks' ? 'Iced / Hot customized serving' : 'Freshly cooked upon order'}
                          </span>
                        </div>

                        {/* Leader dots for alignment */}
                        <div className="grow border-b border-dotted border-[#ded7c4] mx-2 h-3.5 hidden sm:block"></div>

                        {/* Price formatted matching photo menu */}
                        <span className="font-mono text-xs font-semibold text-brand-teal-900 whitespace-nowrap shrink-0">
                          {item.price}k
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="col-span-full py-12 text-center">
                <p className="font-mono text-xs text-brand-stone/50 uppercase tracking-widest">
                  No items match your search filter.
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                  className="mt-4 px-4 py-2 bg-brand-teal-900 text-brand-sand text-[10px] tracking-wider uppercase font-mono hover:bg-brand-teal-800 transition-colors cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}

          </div>

          {/* Simple Flower/Branch Sketch Art on bottom right corner (referencing paper menu graphics) */}
          <div className="absolute bottom-4 right-4 text-[#ded7c4] pointer-events-none hidden md:block">
            <span className="font-serif italic text-3xl font-light opacity-40">𓆸 Kakaku</span>
          </div>
        </div>

        {/* Quick Bottom CTA to Order */}
        <div className="mt-12 bg-brand-teal-900 text-brand-sand p-6 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-2xl">
              <BookOpen size={20} className="text-brand-gold" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm tracking-wide uppercase">
                Want a printed or PDF booklet?
              </h4>
              <p className="text-xs text-brand-sand/70 font-sans mt-0.5">
                Download the complete coffee extraction profiles and food catalog in high resolution.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/6282123456789"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-white text-brand-stone hover:bg-brand-gold hover:text-brand-stone font-mono text-xs uppercase tracking-wider font-semibold shrink-0 transition-colors rounded-full shadow-sm"
          >
            Download PDF Menu (WA)
          </a>
        </div>

      </div>
    </section>
  );
}
