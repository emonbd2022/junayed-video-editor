import { motion } from 'motion/react';
import { CheckCircle2, Clock, TrendingUp, Zap } from 'lucide-react';

const reasons = [
  {
    icon: <Clock className="w-8 h-8 text-purple-400" />,
    title: "Fast Turnaround",
    description: "I deliver high-quality edits within 24-48 hours, ensuring you stay consistent with your posting schedule."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
    title: "Retention Focused",
    description: "My edits are designed to keep viewers watching. Higher retention means more algorithmic push and more views."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Engaging Visuals",
    description: "I use custom motion graphics and sound design to make your content stand out in a crowded feed."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-green-400" />,
    title: "Hassle-Free Process",
    description: "From raw footage to final polish, I handle everything. You focus on filming, I handle the rest."
  }
];

export default function WhyChooseMe() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Me?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I don't just cut video; I craft narratives that build brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="mb-4 bg-zinc-900 w-16 h-16 rounded-full flex items-center justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
