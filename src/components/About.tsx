import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl bg-zinc-800">
              <img 
                src="https://picsum.photos/seed/junayed/800/1000" 
                alt="Junayed Ahmed" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              I help coaches and business owners use 
              <span className="text-purple-400"> YouTube content </span>
              to get real customers and build their 
              <span className="text-blue-400"> personal brand</span>.
            </h2>
            <p className="text-gray-400 text-lg">
              With 2 years of experience working with international agencies, I understand the psychology behind retention and conversion.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
