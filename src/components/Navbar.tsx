import { motion } from 'motion/react';
import { Menu, X, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-charcoal text-xl font-bold tracking-tight">Junayed Ahmed</span>
          </div>
          
          <div className="hidden md:block">
            <a 
              href="https://www.instagram.com/juna_yed13/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-charcoal text-bg rounded-full text-sm font-medium hover:bg-accent hover:text-charcoal transition-all duration-300"
            >
              <Instagram size={18} />
              Contact Me
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal/60 hover:text-charcoal p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-bg border-b border-charcoal/10"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-3 bg-charcoal text-bg rounded-lg font-medium"
            >
              Contact Me on Instagram
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
