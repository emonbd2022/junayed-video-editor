import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-bg pt-16">
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal tracking-tight leading-tight mb-8">
            Get More Leads Using <br />
            <span className="text-accent">
              Quality Video Content
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-charcoal/60 max-w-2xl mx-auto font-medium"
          >
            Elevate your brand with professional editing that converts viewers into customers.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
