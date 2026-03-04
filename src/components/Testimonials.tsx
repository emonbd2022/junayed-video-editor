import { motion } from 'motion/react';
import { Mic, Palette, Target, Youtube } from 'lucide-react';

const testimonials = [
  {
    name: "Brandon",
    role: "Owner, Soundspired Media (Video-First Podcast Agency)",
    image: "https://picsum.photos/seed/brandon/200/200",
    icon: <Mic size={18} className="text-white fill-current" />,
    iconBg: "bg-[#FF4B4B]",
    text: "“We create content people actually keep watching. Junayed’s editing helped us make videos that connect with the right audience. The quality and understanding of storytelling is excellent.”"
  },
  {
    name: "Alannah",
    role: "Branding & Creative Direction, AlfiCreative",
    image: "https://picsum.photos/seed/alannah/200/200",
    icon: <Palette size={18} className="text-white fill-current" />,
    iconBg: "bg-[#7C3AED]",
    text: "“Junayed helped transform our raw footage into content that supports our clients’ brands. His work is clean, strategic, and focused on real business results. Highly recommended.”"
  },
  {
    name: "Chanelle Le Roux",
    role: "Marketing Coach",
    image: "https://picsum.photos/seed/chanelle/200/200",
    icon: <Target size={18} className="text-white fill-current" />,
    iconBg: "bg-[#3B82F6]",
    text: "“Great communication, fast delivery, and high-quality editing. The videos helped support our content marketing goals. I’m very satisfied with the result.”"
  },
  {
    name: "Victoria",
    role: "YouTube Producer",
    image: "https://picsum.photos/seed/victoria/200/200",
    icon: <Youtube size={18} className="text-white fill-current" />,
    iconBg: "bg-[#FF0000]",
    text: "“Working with Junayed makes content production easier. He understands brand context and client audience, so I don’t need to worry about the editing process.”"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#FFF9F2] rounded-[2rem] border border-[#FF94001A] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
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
                    </div>
                  </div>
                  <div className={`${testimonial.iconBg} p-1.5 rounded-full`}>
                    {testimonial.icon}
                  </div>
                </div>
                <p className="text-charcoal/60 text-sm font-medium mb-4">{testimonial.role}</p>
              </div>
              
              {/* Card Body */}
              <div className="px-8 pb-10 flex-grow">
                <p className="text-charcoal/80 leading-relaxed text-[1.05rem] font-medium italic">
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
