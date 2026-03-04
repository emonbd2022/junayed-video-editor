import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, Palette, Target, Youtube, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Brandon",
    role: "Owner, Soundspired Media (Video-First Podcast Agency)",
    image: "https://res.cloudinary.com/ddmp5ahkc/image/upload/v1772650719/client_2_rylqyy.jpg",
    icon: <Mic className="text-white" />,
    iconBg: "bg-[#FF4B4B]",
    text: "“We create content people actually keep watching. Junayed’s editing helped us make videos that connect with the right audience. The quality and understanding of storytelling is excellent.”"
  },
  {
    name: "Alannah",
    role: "Branding & Creative Direction, AlfiCreative",
    image: "https://res.cloudinary.com/ddmp5ahkc/image/upload/v1772650718/client_4_y8bxhh.jpg",
    icon: <Palette className="text-white" />,
    iconBg: "bg-[#7C3AED]",
    text: "“Junayed helped transform our raw footage into content that supports our clients’ brands. His work is clean, strategic, and focused on real business results. Highly recommended.”"
  },
  {
    name: "Chanelle Le Roux",
    role: "Marketing Coach",
    image: "https://res.cloudinary.com/ddmp5ahkc/image/upload/v1772650718/client_3_fjphzb.jpg",
    icon: <Target className="text-white" />,
    iconBg: "bg-[#3B82F6]",
    text: "“Great communication, fast delivery, and high-quality editing. The videos helped support our content marketing goals. I’m very satisfied with the result.”"
  },
  {
    name: "Victoria",
    role: "YouTube Producer",
    image: "https://res.cloudinary.com/ddmp5ahkc/image/upload/v1772650718/client_5_thokum.jpg",
    icon: <Youtube className="text-white" />,
    iconBg: "bg-[#FF0000]",
    text: "“Working with Junayed makes content production easier. He understands brand context and client audience, so I don’t need to worry about the editing process.”"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    })
  };

  const nextStep = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextStep, 6000); // 6 seconds for reading time
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextStep]);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative h-[400px] md:h-[350px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute w-full"
              >
                <div className="bg-[#FFF9F2] rounded-[2.5rem] border border-[#FF94001A] overflow-hidden shadow-xl flex flex-col md:flex-row h-full min-h-[300px]">
                  {/* Left Side: Profile & Role */}
                  <div className="testimonial-card-gradient p-8 md:w-1/3 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-[#FF94001A]">
                    <div className="relative p-1.5 rounded-full bg-white shadow-md border border-charcoal/5 mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div className={`absolute -right-1 -bottom-1 ${testimonial.iconBg} p-2 rounded-full shadow-lg border-2 border-white`}>
                        {Object.assign({}, testimonial.icon, { 
                          props: { ...testimonial.icon.props, size: 18, strokeWidth: 2.5 } 
                        })}
                      </div>
                    </div>
                    <h4 className="text-charcoal text-xl font-black mb-1">{testimonial.name}</h4>
                    <p className="text-charcoal/60 text-[10px] font-black uppercase tracking-wider leading-tight">
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Right Side: Quote */}
                  <div className="p-8 md:p-12 md:w-2/3 flex items-center">
                    <div className="relative">
                      <span className="absolute -top-6 -left-4 text-accent/10 text-8xl font-serif leading-none select-none">“</span>
                      <p className="text-charcoal/80 leading-relaxed text-lg md:text-xl font-medium italic relative z-10">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <button
              onClick={prevStep}
              className="p-3 rounded-full bg-white border border-charcoal/10 text-charcoal/40 hover:text-accent hover:border-accent hover:shadow-lg transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-charcoal/10 hover:bg-charcoal/20'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextStep}
              className="p-3 rounded-full bg-white border border-charcoal/10 text-charcoal/40 hover:text-accent hover:border-accent hover:shadow-lg transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
