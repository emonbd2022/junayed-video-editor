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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
            Clients speak through the <span className="text-accent">results</span> I deliver
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg p-10 rounded-3xl border border-charcoal/5 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover grayscale"
                />
                <div>
                  <h4 className="text-charcoal font-bold">{testimonial.name}</h4>
                  <p className="text-charcoal/40 text-sm font-medium uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-charcoal/70 leading-relaxed italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
