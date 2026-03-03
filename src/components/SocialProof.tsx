import { motion } from 'motion/react';

const clients = [
  "https://picsum.photos/seed/agency1/100/100",
  "https://picsum.photos/seed/agency2/100/100",
  "https://picsum.photos/seed/agency3/100/100",
  "https://picsum.photos/seed/agency4/100/100",
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex -space-x-4">
            {clients.map((src, index) => (
              <div key={index} className="w-16 h-16 rounded-full border-2 border-black overflow-hidden">
                <img src={src} alt={`Client ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <p className="text-xl font-medium text-gray-300">
            Trusted by <span className="text-white font-bold">4+ agencies</span> and creators worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
