import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Coach",
    image: "https://picsum.photos/seed/sarah/200/200",
    text: "Junayed transformed my raw footage into engaging content that actually converts. My leads doubled in just two months."
  },
  {
    name: "Mark Davis",
    role: "Agency Owner",
    image: "https://picsum.photos/seed/mark/200/200",
    text: "Professional, fast, and creative. He knows exactly what works on YouTube right now."
  },
  {
    name: "Elena Rodriguez",
    role: "Content Creator",
    image: "https://picsum.photos/seed/elena/200/200",
    text: "The best editor I've worked with. He understands pacing and storytelling perfectly."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Clients speak through the <span className="text-purple-400">results</span> I deliver
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
