import { motion } from 'motion/react';
import { TrendingUp, Zap, Youtube, Layers } from 'lucide-react';

const reasons = [
  {
    icon: <TrendingUp className="w-8 h-8 text-accent" />,
    title: "Fast, Reliable & Retention-Focused",
    description: "I deliver clean, high-quality edits on time. Every video is structured to keep viewers watching and stay consistent with your posting schedule. From smooth visuals to clear sound — everything is handled professionally so you don’t have to worry."
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Hassle-Free Process",
    description: "You record. I handle the rest. From raw footage to final delivery, I manage the editing and polish so you can focus on your business."
  },
  {
    icon: <Youtube className="w-8 h-8 text-accent" />,
    title: "Not Just an Editor — I Understand YouTube",
    description: "Most editors just cut videos. I study your brand and audience before I edit. I understand how YouTube works — hooks, retention, titles, and structure. I edit with growth in mind, not just visuals."
  },
  {
    icon: <Layers className="w-8 h-8 text-accent" />,
    title: "Specialized in YouTube Content",
    description: "I focus on YouTube video content and continuously improve by learning and working alongside experienced YouTube producers. This helps me stay updated and bring better structure and strategy to every project."
  }
];

export default function WhyChooseMe() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Why Me?
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Why Choose Me?</h2>
          <p className="text-charcoal/50 max-w-2xl mx-auto text-lg font-medium">
            I don't just cut video; I craft narratives that build brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#FFF9F2] rounded-[2rem] border border-[#FF94001A] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="testimonial-card-gradient p-8 pb-4">
                <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-[#FF94001A]">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4">{reason.title}</h3>
              </div>
              <div className="px-8 pb-10">
                <p className="text-charcoal/70 text-sm leading-relaxed font-medium">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
