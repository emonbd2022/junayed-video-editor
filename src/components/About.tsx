import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-24 bg-white border-y border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0 overflow-hidden rounded-3xl bg-bg border border-charcoal/10">
              <img 
                src="https://picsum.photos/seed/junayed/800/1000" 
                alt="Junayed Ahmed" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight mb-8">
              I help coaches and business owners use 
              <span className="text-accent"> YouTube content </span>
              to get real customers and build their 
              <span className="border-b-4 border-accent/20"> personal brand</span>.
            </h2>
            <p className="text-charcoal/60 text-lg leading-relaxed">
              With 2 years of experience working with international agencies, I understand the psychology behind retention and conversion.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
