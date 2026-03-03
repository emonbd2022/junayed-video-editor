import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Pradeep",
    role: "Video Editor",
    image: "https://picsum.photos/seed/pradeep/200/200",
    text: "I enrolled in the EditingSkool Masterclass a few weeks ago, and I can say that it was one of the best decisions in my video editing learning journey. I have tried some other courses available on the internet but all of them just explain the use and features of tools and software."
  },
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    image: "https://picsum.photos/seed/sarah/200/200",
    text: "Junayed transformed my raw footage into engaging content that actually converts. My leads doubled in just two months. His understanding of storytelling is unmatched in the industry."
  },
  {
    name: "Mark Davis",
    role: "Agency Owner",
    image: "https://picsum.photos/seed/mark/200/200",
    text: "Professional, fast, and creative. He knows exactly what works on YouTube right now. We've seen a 40% increase in average view duration since he took over our editing."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Clients speak through the <span className="text-accent">results</span> I deliver
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#FFF9F2] rounded-[2rem] border border-[#FF94001A] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Card Header with Gradient */}
              <div className="testimonial-card-gradient p-8 pb-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                    </div>
                    <div>
                      <h4 className="text-charcoal text-xl font-bold leading-tight">{testimonial.name}</h4>
                      <p className="text-charcoal/60 text-sm font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="bg-[#25D366] p-1.5 rounded-full">
                    <MessageCircle size={18} className="text-white fill-current" />
                  </div>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="px-8 pb-10">
                <p className="text-charcoal/80 leading-relaxed text-[1.05rem] font-medium">
                  {testimonial.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
