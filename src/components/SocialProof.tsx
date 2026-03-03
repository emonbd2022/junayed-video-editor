import { motion } from 'motion/react';

const clients = [
  "https://picsum.photos/seed/agency1/100/100",
  "https://picsum.photos/seed/agency2/100/100",
  "https://picsum.photos/seed/agency3/100/100",
  "https://picsum.photos/seed/agency4/100/100",
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex -space-x-4">
            {clients.map((src, index) => (
              <div key={index} className="w-16 h-16 rounded-full border-4 border-bg overflow-hidden ring-1 ring-charcoal/10">
                <img src={src} alt={`Client ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <p className="text-xl font-medium text-charcoal/60">
            Trusted by <span className="text-charcoal font-bold">4+ agencies</span> and creators worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
