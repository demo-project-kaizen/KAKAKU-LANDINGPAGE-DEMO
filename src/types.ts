/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  price: number; // in thousand IDR, e.g. 32
  category: 'drinks' | 'foods';
  subcategory: string;
  isPopular?: boolean;
  isSpecialty?: boolean;
}

export interface SpaceSpot {
  id: string;
  name: string;
  description: string;
  capacity: string;
  image: string;
  badge: string;
}

export interface TeamBarista {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  date: string;
}

export interface BlogArticle {
  id: string;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

// ==========================================
// AUTHENTIC KAKAKU COFFEE & PLACE DATA
// ==========================================

export const KAKAKU_SPACES: SpaceSpot[] = [
  {
    id: 'backyard',
    name: 'The Gravel Backyard',
    description: 'Cozy outdoor ground featuring neat timber picnic benches over fine local pebbles under a cool metal canopy.',
    capacity: '24 seats available',
    image: '/src/assets/images/kakaku_gravel.png',
    badge: 'Outdoor Patio'
  },
  {
    id: 'rooftop',
    name: 'The Sunset Rooftop',
    description: 'Breathtaking open-air counter overlooking the neighborhood horizon, fitted with steel high-stools and warm perimeter string lights.',
    capacity: '16 seats available',
    image: '/src/assets/images/kakaku_rooftop.png',
    badge: 'Rooftop Lounge'
  },
  {
    id: 'slowbar',
    name: 'The Slow Bar Room',
    description: 'Charming air-conditioned indoor zone lined with natural wood grains, raw plaster walls, and custom framed typographic poster collections.',
    capacity: '12 seats available',
    image: '/src/assets/images/kakaku_space.png',
    badge: 'Indoor Slow Bar'
  }
];

export const KAKAKU_BARISTAS: TeamBarista[] = [
  {
    id: 'b1',
    name: 'Kenji Sato',
    role: 'Head Coffee Roaster',
    quote: 'Roasting in small batches ensures every origin showcases its true sweetness and delicate complexity.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'b2',
    name: 'Hana Lestari',
    role: 'Lead Barista & Sensory Judge',
    quote: 'Coffee is a complete sensory journey. The temperature, the pour, and the ceramic vessel are all integral.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'b3',
    name: 'Rian Wijaya',
    role: 'Siphon & Pour Over Specialist',
    quote: 'The slow bar is where time pauses. Hand-dripping creates a ritual of warmth that we share with our guests.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500'
  }
];

export const KAKAKU_PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'p1',
    stepNumber: '01.',
    title: 'Sourcing',
    description: 'Sourcing premium green beans directly from single-estate Indonesian farmers in Toraja, Gayo, and Kintamani.'
  },
  {
    id: 'p2',
    stepNumber: '02.',
    title: 'Profile Roasting',
    description: 'Roasting in micro-batches using custom fluid-bed thermal curves to lock in aromatic organic compounds.'
  },
  {
    id: 'p3',
    stepNumber: '03.',
    title: 'Precision Cupping',
    description: 'Auditing every roasted batch through professional blind cupping to ensure consistent flavor profile notes.'
  },
  {
    id: 'p4',
    stepNumber: '04.',
    title: 'Craft Brewing',
    description: 'Calibrating grinders and utilizing precision hand-drips, cold extraction, or custom espresso extraction.'
  },
  {
    id: 'p5',
    stepNumber: '05.',
    title: 'The Experience',
    description: 'Serving hot or iced creations in our minimalist Cipinang space with genuine, warm hospitality.'
  }
];

export const KAKAKU_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Adinda Kirana',
    role: 'Brand Designer',
    review: 'Kakaku is Cipinang’s absolute hidden gem. The gravel backyard has a magical vibe at dusk, and their Nasi Goreng Kakaku paired with a Matcha Float is a weekly ritual for me.',
    rating: 5,
    date: 'Jul 21, 2026'
  },
  {
    id: 't2',
    name: 'Amelia Putri',
    role: 'Social Media Specialist',
    review: 'Working from the Sunset Rooftop is incredibly inspiring. The internet is fast, the concrete counters have power outlets, and their Tiramisu Whipped Cream coffee keeps me fueled.',
    rating: 5,
    date: 'Jun 15, 2026'
  },
  {
    id: 't3',
    name: 'Reza Pratama',
    role: 'Corporate Accountant',
    review: 'If you appreciate specialty hand-brews, sit at the indoor Slow Bar. The baristas are deeply knowledgeable and always willing to share the stories behind their seasonal single origins.',
    rating: 5,
    date: 'May 28, 2026'
  }
];

export const KAKAKU_BLOGS: BlogArticle[] = [
  {
    id: 'bl1',
    category: 'Coffee Craft',
    date: 'Jul 21, 2026',
    title: 'The Art of Micro-Batch Coffee Roasting',
    description: 'Understanding how quick thermal changes and airflow during roasting influence the structural acidity of local Indonesian beans.',
    image: '/src/assets/images/kakaku_coffee3.png'
  },
  {
    id: 'bl2',
    category: 'Interior Design',
    date: 'Jun 10, 2026',
    title: 'Creating Zen in a Concrete Neighborhood',
    description: 'A visual walkthrough of our architectural process: transforming a raw brick layout into a minimalist Japanese-style retreat.',
    image: '/src/assets/images/kakaku_night.png'
  },
  {
    id: 'bl3',
    category: 'Signature Recipes',
    date: 'May 04, 2026',
    title: 'Slow Bar Recipe: The Perfect Hand Brew',
    description: 'Discover Hana’s precise water ratio, pouring temperature, and grind calibration for bringing out tropical notes in Gayo beans.',
    image: '/src/assets/images/kakaku_food2.png'
  }
];

export const KAKAKU_MENU_ITEMS: MenuItem[] = [
  // Drinks - Treat Yourself
  { id: 'd1', name: 'Matcha float', price: 32, category: 'drinks', subcategory: 'Treat Yourself', isPopular: true },
  { id: 'd2', name: 'Tiramisu whipped cream', price: 32, category: 'drinks', subcategory: 'Treat Yourself', isSpecialty: true },
  { id: 'd3', name: 'Mocha float', price: 32, category: 'drinks', subcategory: 'Treat Yourself' },
  // Drinks - Tea Based
  { id: 'd4', name: 'Peach mint tea', price: 28, category: 'drinks', subcategory: 'Tea Based' },
  { id: 'd5', name: 'Lemon tea', price: 26, category: 'drinks', subcategory: 'Tea Based' },
  { id: 'd6', name: 'Lychee tea', price: 30, category: 'drinks', subcategory: 'Tea Based', isPopular: true },
  // Drinks - Non Coffee
  { id: 'd7', name: 'Matcha', price: 30, category: 'drinks', subcategory: 'Non Coffee' },
  { id: 'd8', name: 'Red Velvet', price: 30, category: 'drinks', subcategory: 'Non Coffee' },
  { id: 'd9', name: 'Baby blue', price: 28, category: 'drinks', subcategory: 'Non Coffee', isSpecialty: true },
  { id: 'd10', name: 'Charcoal', price: 30, category: 'drinks', subcategory: 'Non Coffee' },
  { id: 'd11', name: 'Premium choco', price: 28, category: 'drinks', subcategory: 'Non Coffee' },
  { id: 'd12', name: 'Choco hazelnut', price: 30, category: 'drinks', subcategory: 'Non Coffee' },
  { id: 'd13', name: 'Choco mint', price: 30, category: 'drinks', subcategory: 'Non Coffee' },

  // Foods - Main Course
  { id: 'f1', name: 'Beef teriyaki', price: 40, category: 'foods', subcategory: 'Main Course', isPopular: true },
  { id: 'f2', name: 'Chicken katsu curry', price: 40, category: 'foods', subcategory: 'Main Course', isSpecialty: true },
  { id: 'f3', name: 'Chicken katsu', price: 36, category: 'foods', subcategory: 'Main Course' },
  // Foods - Bowl Series
  { id: 'f4', name: 'Dori sambal matah', price: 36, category: 'foods', subcategory: 'Bowl Series' },
  { id: 'f5', name: 'Karage sambal matah', price: 36, category: 'foods', subcategory: 'Bowl Series', isPopular: true },
  { id: 'f6', name: 'Chicken nanban', price: 35, category: 'foods', subcategory: 'Bowl Series' },
  { id: 'f7', name: 'Oyakodon', price: 34, category: 'foods', subcategory: 'Bowl Series' },
  // Foods - Fried Rice Series
  { id: 'f8', name: 'Nasi goreng kakaku', price: 30, category: 'foods', subcategory: 'Fried Rice Series', isSpecialty: true },
  { id: 'f9', name: 'Nasi goreng katsu', price: 38, category: 'foods', subcategory: 'Fried Rice Series' },
  { id: 'f10', name: 'Nasi goreng karage', price: 36, category: 'foods', subcategory: 'Fried Rice Series' },
  { id: 'f11', name: 'Nasi goreng dori', price: 36, category: 'foods', subcategory: 'Fried Rice Series' },
  // Foods - Pasta
  { id: 'f12', name: 'Spaghetti bolognese', price: 40, category: 'foods', subcategory: 'Pasta' },
  { id: 'f13', name: 'Spaghetti carbonara', price: 38, category: 'foods', subcategory: 'Pasta', isPopular: true },
  { id: 'f14', name: 'Spaghetti aglio olio', price: 36, category: 'foods', subcategory: 'Pasta' },
  // Foods - Sweet
  { id: 'f15', name: 'Choco waffle', price: 28, category: 'foods', subcategory: 'Sweet' },
  { id: 'f16', name: 'Choco ice cream waffle', price: 30, category: 'foods', subcategory: 'Sweet', isPopular: true },
  { id: 'f17', name: 'Kakaku ice cream', price: 25, category: 'foods', subcategory: 'Sweet' },
  // Foods - Indonesian Snacks
  { id: 'f18', name: 'Tahu dimsum', price: 28, category: 'foods', subcategory: 'Indonesian Snacks' },
  { id: 'f19', name: 'Singkong goreng', price: 24, category: 'foods', subcategory: 'Indonesian Snacks' },
  { id: 'f20', name: 'Cireng sambal rujak', price: 22, category: 'foods', subcategory: 'Indonesian Snacks', isSpecialty: true },
  { id: 'f21', name: 'Pisang goreng', price: 26, category: 'foods', subcategory: 'Indonesian Snacks' },
  // Foods - Toast
  { id: 'f22', name: 'Choco toast', price: 26, category: 'foods', subcategory: 'Toast' },
  { id: 'f23', name: 'Choco cheese toast', price: 30, category: 'foods', subcategory: 'Toast' },
  { id: 'f24', name: 'Cheese toast', price: 28, category: 'foods', subcategory: 'Toast' }
];
