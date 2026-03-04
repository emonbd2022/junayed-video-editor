import { motion } from 'motion/react';
import { Menu, X, Instagram, MessageCircle, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { 
      icon: <Instagram size={18} />, 
      href: "https://www.instagram.com/juna_yed13/", 
      label: "Instagram",
      color: "bg-accent"
    },
    { 
      icon: <MessageCircle size={18} />, 
      href: "https://wa.me/8801306253443", 
      label: "WhatsApp",
      color: "bg-emerald-500"
    },
    { 
      icon: <Mail size={18} />, 
      href: "mailto:ahmedju430@gmail.com", 
      label: "Email",
      color: "bg-charcoal"
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-charcoal text-xl font-bold tracking-tight">Junayed Ahmed</span>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-4 py-2 ${link.color} text-white rounded-full text-xs font-bold transition-all duration-300 shadow-lg shadow-charcoal/5`}
                title={link.label}
              >
                {link.icon}
                <span className={index === 0 ? "block" : "hidden lg:block"}>{link.label}</span>
              </motion.a>
            ))}
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
          <div className="px-4 pt-2 pb-6 space-y-3">
            <p className="text-[10px] font-black text-charcoal/30 uppercase tracking-[0.2em] px-2">Contact Me</p>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 w-full px-4 py-4 ${link.color} text-white rounded-2xl font-bold text-sm`}
              >
                {link.icon}
                Contact on {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
