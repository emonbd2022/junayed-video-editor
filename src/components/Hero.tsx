import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-bg pt-16">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 border-2 border-accent/10 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 border-2 border-accent/10 rounded-full animate-bounce duration-3000" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold uppercase tracking-widest mb-6"
          >
            Video Editor & Strategist
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-charcoal tracking-tighter leading-[0.9] mb-8">
            Get More Leads Using <br />
            <span className="text-accent relative">
              Quality Video Content
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-2 bg-accent/20 rounded-full"
              />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-charcoal/60 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Elevate your brand with professional editing that <span className="text-charcoal">converts viewers into customers</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-accent text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-accent/20"
            >
              View My Work
            </button>
            <a 
              href="https://calendly.com/ahmedju430/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-charcoal text-bg rounded-full font-bold text-lg hover:bg-charcoal/90 transition-colors"
            >
              Book a Call
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
