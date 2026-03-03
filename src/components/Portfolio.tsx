import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Scissors, Layers, X } from 'lucide-react';

type Category = 'YouTube' | 'Shorts' | 'Before-After';

interface WorkItem {
  id: number;
  title: string;
  image: string;
  videoUrl: string;
}

const works: Record<Category, WorkItem[]> = {
  YouTube: [
    { id: 1, title: "Vlog Edit", image: "https://img.youtube.com/vi/6c5Krkeu1VY/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/6c5Krkeu1VY" },
    { id: 2, title: "Tech Review", image: "https://picsum.photos/seed/yt2/600/400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 3, title: "Tutorial", image: "https://picsum.photos/seed/yt3/600/400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ],
  Shorts: [
    { id: 4, title: "Viral Short 1", image: "https://picsum.photos/seed/short1/300/500", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 5, title: "Viral Short 2", image: "https://picsum.photos/seed/short2/300/500", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 6, title: "Viral Short 3", image: "https://picsum.photos/seed/short3/300/500", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { id: 4, title: "Viral Short 1", image: "https://picsum.photos/seed/short1/300/500", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 5, title: "Viral Short 2", image: "https://picsum.photos/seed/short2/300/500", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 6, title: "Viral Short 3", image: "https://picsum.photos/seed/short3/300/500", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ],
  'Before-After': [
    { id: 7, title: "Color Grading", image: "https://picsum.photos/seed/ba1/600/400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 8, title: "Pacing Fix", image: "https://picsum.photos/seed/ba2/600/400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ]
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('YouTube');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal text-center mb-16">Selected Works</h2>

        {/* Category Buttons */}
        <div className="flex justify-center gap-6 mb-16 flex-wrap">
          {(['YouTube', 'Shorts', 'Before-After'] as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 font-black tracking-tight ${
                activeCategory === category 
                  ? 'bg-accent text-white scale-105 shadow-lg shadow-accent/20' 
                  : 'bg-white text-charcoal/40 hover:text-charcoal border border-charcoal/5'
              }`}
            >
              {category === 'YouTube' && <Play size={18} className="fill-current" />}
              {category === 'Shorts' && <Scissors size={18} />}
              {category === 'Before-After' && <Layers size={18} />}
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`grid gap-10 ${
                activeCategory === 'Shorts' 
                  ? 'grid-cols-2 md:grid-cols-4' 
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {works[activeCategory].map((work) => (
                <div 
                  key={work.id} 
                  onClick={() => setSelectedVideo(work.videoUrl)}
                  className={`group relative overflow-hidden rounded-3xl bg-white border border-charcoal/5 cursor-pointer ${
                    activeCategory === 'Shorts' ? 'aspect-[9/16]' : 'aspect-video'
                  }`}
                >
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 scale-0 group-hover:scale-100 transition-transform duration-500">
                      <Play size={32} className="text-white fill-current ml-1" />
                    </div>
                    <span className="text-bg font-bold text-lg">{work.title}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/90 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X size={24} />
              </button>
              <iframe
                src={`${selectedVideo}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
