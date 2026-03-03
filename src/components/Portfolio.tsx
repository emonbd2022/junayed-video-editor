import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Scissors, Layers } from 'lucide-react';

type Category = 'YouTube' | 'Shorts' | 'Before-After';

const works = {
  YouTube: [
    { id: 1, title: "Vlog Edit", image: "https://picsum.photos/seed/yt1/600/400" },
    { id: 2, title: "Tech Review", image: "https://picsum.photos/seed/yt2/600/400" },
    { id: 3, title: "Tutorial", image: "https://picsum.photos/seed/yt3/600/400" },
  ],
  Shorts: [
    { id: 4, title: "Viral Short 1", image: "https://picsum.photos/seed/short1/300/500" },
    { id: 5, title: "Viral Short 2", image: "https://picsum.photos/seed/short2/300/500" },
    { id: 6, title: "Viral Short 3", image: "https://picsum.photos/seed/short3/300/500" },
  ],
  'Before-After': [
    { id: 7, title: "Color Grading", image: "https://picsum.photos/seed/ba1/600/400" },
    { id: 8, title: "Pacing Fix", image: "https://picsum.photos/seed/ba2/600/400" },
  ]
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('YouTube');

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Selected Works</h2>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {(['YouTube', 'Shorts', 'Before-After'] as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                activeCategory === category 
                  ? 'bg-white text-black font-bold' 
                  : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800'
              }`}
            >
              {category === 'YouTube' && <Play size={18} />}
              {category === 'Shorts' && <Scissors size={18} />}
              {category === 'Before-After' && <Layers size={18} />}
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`grid gap-6 ${
                activeCategory === 'Shorts' 
                  ? 'grid-cols-2 md:grid-cols-4' 
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {works[activeCategory].map((work) => (
                <div 
                  key={work.id} 
                  className={`group relative overflow-hidden rounded-xl bg-zinc-900 ${
                    activeCategory === 'Shorts' ? 'aspect-[9/16]' : 'aspect-video'
                  }`}
                >
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">{work.title}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
