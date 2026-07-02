/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, ChevronLeft, ChevronRight, Heart, Maximize2, Sparkles } from 'lucide-react';

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  description: string;
  category: 'space' | 'coffee' | 'food';
  categoryLabel: string;
  size: 'small' | 'medium' | 'large' | 'tall';
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    src: '/src/assets/images/kakaku_front.png',
    title: 'The Signature Front Facade',
    description: 'Our iconic Cipinang storefront where raw concrete walls, warm wooden frames, and an elegant vintage silver E34 BMW create a perfect nostalgic entry.',
    category: 'space',
    categoryLabel: 'Vibe & Space',
    size: 'large'
  },
  {
    id: 'g2',
    src: '/src/assets/images/kakaku_night.png',
    title: 'Twilight Sanctuary',
    description: 'As twilight falls, our custom lighting strings and concrete structures transform Kakaku into a serene, peaceful urban getaway.',
    category: 'space',
    categoryLabel: 'Vibe & Space',
    size: 'medium'
  },
  {
    id: 'g3',
    src: '/src/assets/images/kakaku_coffee1.png',
    title: 'A Cup of Comfort',
    description: 'Our signature slow bar hand brew coffee, meticulously extracted to highlight notes of tropical fruits and served in cozy glasses.',
    category: 'coffee',
    categoryLabel: 'Coffee Craft',
    size: 'medium'
  },
  {
    id: 'g4',
    src: '/src/assets/images/kakaku_coffee2.png',
    title: 'The Perfect Double Shot',
    description: 'A close look at our rich espresso base with flawless silky microfoam. Pure craftsmanship in every pour.',
    category: 'coffee',
    categoryLabel: 'Coffee Craft',
    size: 'small'
  },
  {
    id: 'g5',
    src: '/src/assets/images/kakaku_food.png',
    title: 'Signature Nasi Goreng Kakaku',
    description: 'Freshly wok-fried premium rice tossed in our legendary secret paste of aromatic local Indonesian spices, topped with perfect sunny-side ups.',
    category: 'food',
    categoryLabel: 'Signature Food',
    size: 'medium'
  },
  {
    id: 'g6',
    src: '/src/assets/images/kakaku_food2.png',
    title: 'Crispy Chicken Katsu Curry',
    description: 'Perfectly breaded golden-crisp chicken breast, paired with a rich, aromatic Japanese curry reduction over fluffy steamed rice.',
    category: 'food',
    categoryLabel: 'Signature Food',
    size: 'small'
  },
  {
    id: 'g7',
    src: '/src/assets/images/kakaku_space.png',
    title: 'Japanese Zen Aesthetics',
    description: 'Our indoor air-conditioned zone is decorated with clean wood panelling, concrete floors, and curated Japanese retro illustration frames.',
    category: 'space',
    categoryLabel: 'Vibe & Space',
    size: 'tall'
  },
  {
    id: 'g8',
    src: '/src/assets/images/kakaku_wall.png',
    title: 'The Typographic Poster Wall',
    description: 'A cozy corner lined with vibrant, curated retro posters, typography, and stickers celebrating the ultimate slow life and coffee lovers.',
    category: 'space',
    categoryLabel: 'Vibe & Space',
    size: 'medium'
  },
  {
    id: 'g9',
    src: '/src/assets/images/kakaku_coffee3.png',
    title: 'In-House Roasted Beans',
    description: 'Sourced directly from single-estate farms across Toraja, Gayo, and Kintamani, then roasted in micro-batches right here in our roastery.',
    category: 'coffee',
    categoryLabel: 'Coffee Craft',
    size: 'small'
  },
  {
    id: 'g10',
    src: '/src/assets/images/kakaku_drinks2.png',
    title: 'Double Treats',
    description: 'Beautifully layered Matcha Floats and mocktails crafted to accompany you during deep conversations or late-night creative study blocks.',
    category: 'coffee',
    categoryLabel: 'Coffee Craft',
    size: 'medium'
  },
  {
    id: 'g11',
    src: '/src/assets/images/kakaku_shop.png',
    title: 'Rustic Garden Corner',
    description: 'Our outdoor backyard features neat timber picnic benches over fine local pebbles under a cool, airy canopy.',
    category: 'space',
    categoryLabel: 'Vibe & Space',
    size: 'medium'
  },
  {
    id: 'g12',
    src: '/src/assets/images/cashier.png',
    title: 'The Warm Cashier & Bar Area',
    description: 'Our welcoming order point where you can browse our freshly baked treats, select your single-origin flavor profile, and chat with baristas.',
    category: 'space',
    categoryLabel: 'Vibe & Space',
    size: 'small'
  }
];

export default function GallerySection() {
  const [filter, setFilter] = useState<'all' | 'space' | 'coffee' | 'food'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from local storage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kakaku_gallery_favorites');
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Failed to load favorites', e);
    }
  }, []);

  const toggleFavorite = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    const updated = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];
    setFavorites(updated);
    try {
      localStorage.setItem('kakaku_gallery_favorites', JSON.stringify(updated));
    } catch (err) {
      console.warn('Failed to save favorites', err);
    }
  };

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const getGridClasses = (size: 'small' | 'medium' | 'large' | 'tall') => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2 h-[340px] md:h-auto';
      case 'tall':
        return 'md:col-span-1 md:row-span-2 h-[340px] md:h-auto';
      case 'medium':
        return 'md:col-span-1 md:row-span-1 h-[250px] md:h-auto';
      case 'small':
        return 'md:col-span-1 md:row-span-1 h-[250px] md:h-auto';
      default:
        return 'h-[250px]';
    }
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filter]);

  return (
    <section className="py-24 bg-brand-sand/50 border-b border-brand-stone/5" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-brand-teal-700"></div>
              <span className="font-mono text-[10px] tracking-widest text-brand-teal-700 uppercase font-semibold flex items-center gap-1.5">
                <Camera size={12} />
                Kakaku Visual Diary
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-stone tracking-tight leading-tight uppercase">
              Through the Lens<br />of Cipinang
            </h2>
            <p className="text-xs text-brand-stone/60 max-w-md font-sans">
              Take a closer look at our physical space, real handcrafted signature recipes, and raw architectural details captured directly in our home.
            </p>
          </div>

          {/* Filter Pill Segment */}
          <div className="flex flex-wrap gap-2 md:self-end">
            {(['all', 'space', 'coffee', 'food'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2.5 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'bg-brand-teal-900 text-brand-sand shadow-sm'
                    : 'bg-white border border-brand-stone/10 text-brand-stone/70 hover:bg-brand-sand'
                }`}
              >
                {cat === 'all' ? 'Show All' : cat === 'space' ? 'Vibe & Space' : cat === 'coffee' ? 'Coffee Craft' : 'Signature Food'}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:auto-rows-[220px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const isLiked = favorites.includes(item.id);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative overflow-hidden rounded-3xl border border-brand-stone/10 bg-white p-2 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 ${getGridClasses(
                    item.size
                  )}`}
                >
                  {/* Image wrapper */}
                  <div className="w-full h-full overflow-hidden relative rounded-2xl">
                    <img
                      src={item.src}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                      <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-teal-800 text-brand-sand text-[8px] font-mono tracking-widest uppercase mb-2">
                          <Sparkles size={8} />
                          {item.categoryLabel}
                        </span>
                        <h3 className="font-display font-bold text-white text-sm tracking-wide uppercase">
                          {item.title}
                        </h3>
                        <p className="text-[10px] text-brand-sand/70 line-clamp-2 mt-1 leading-normal font-sans">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Top right indicator tags */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="bg-white/90 backdrop-blur-sm border border-brand-stone/10 text-brand-stone text-[9px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* Action buttons sitting on top */}
                    <div className="absolute top-3 right-3 flex gap-1.5">
                      <button
                        onClick={(e) => toggleFavorite(item.id, e)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all ${
                          isLiked
                            ? 'bg-red-500/90 border-transparent text-white'
                            : 'bg-white/80 border-brand-stone/10 text-brand-stone hover:bg-white hover:text-red-500'
                        }`}
                        aria-label="Favorite photo"
                      >
                        <Heart size={14} className={isLiked ? 'fill-current' : ''} />
                      </button>
                      
                      <div className="w-8 h-8 rounded-full bg-white/80 border border-brand-stone/10 flex items-center justify-center text-brand-stone opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Maximize2 size={13} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Immersive Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/85"
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 text-brand-sand hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer z-50"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>

              {/* Navigation Left */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 text-brand-sand hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer z-50"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Navigation Right */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 text-brand-sand hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer z-50"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>

              {/* Centered Polaroid/Minimal Frame */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="bg-brand-sand max-w-3xl w-full rounded-3xl p-3 md:p-4 border border-brand-stone/15 flex flex-col gap-4 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Active photo */}
                <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl relative bg-black/5">
                  <img
                    src={filteredItems[lightboxIndex].src}
                    alt={filteredItems[lightboxIndex].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Category label indicator */}
                  <span className="absolute top-4 left-4 bg-brand-teal-900 text-brand-sand text-[9px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border border-white/10">
                    {filteredItems[lightboxIndex].categoryLabel}
                  </span>
                </div>

                {/* Info and action line */}
                <div className="px-2 pb-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-lg md:text-xl text-brand-stone uppercase tracking-wide">
                        {filteredItems[lightboxIndex].title}
                      </h3>
                      <p className="text-xs text-brand-stone/70 leading-relaxed font-sans mt-2">
                        {filteredItems[lightboxIndex].description}
                      </p>
                    </div>

                    <button
                      onClick={(e) => toggleFavorite(filteredItems[lightboxIndex].id, e)}
                      className={`p-3 rounded-full border shrink-0 transition-all ${
                        favorites.includes(filteredItems[lightboxIndex].id)
                          ? 'bg-red-500/90 border-transparent text-white'
                          : 'bg-white border-brand-stone/10 text-brand-stone hover:bg-brand-sand'
                      }`}
                    >
                      <Heart size={16} className={favorites.includes(filteredItems[lightboxIndex].id) ? 'fill-current' : ''} />
                    </button>
                  </div>

                  {/* Metadata line */}
                  <div className="mt-4 pt-4 border-t border-brand-stone/10 flex items-center justify-between text-[10px] font-mono text-brand-stone/40">
                    <span className="flex items-center gap-1.5">
                      <Camera size={11} />
                      ESTABLISHED 2024
                    </span>
                    <span>CIPINANG, EAST JAKARTA</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
