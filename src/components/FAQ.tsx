import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How does your workflow work?",
    answer: "You record the video and send me the files (Google Drive or any platform you prefer). I study your brand and audience, edit with strategy in mind, and deliver the final version. You don’t have to stress about the technical side — just focus on recording. I handle the rest."
  },
  {
    question: "Do you provide any additional YouTube support?",
    answer: "Yes. Along with editing, I can help with: CTR-focused thumbnail design, Title suggestions, Basic SEO, Uploading and publishing (if you’re busy), and Content structure guidance if needed. I support growth — not just editing."
  },
  {
    question: "What is your typical turnaround time?",
    answer: "Most videos are delivered within 48–72 hours, depending on the project."
  },
  {
    question: "How do we transfer large video files?",
    answer: "I use Google Drive or Frame.io for smooth file sharing and review. With Frame.io, you can leave comments directly on specific moments in the video."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes. I offer up to 2 revisions per video. This keeps the process clear and efficient. Most clients are fully satisfied within the first or second round."
  },
  {
    question: "Do you provide podcast video editing support?",
    answer: "Yes, I do. I edit long-form podcast episodes for YouTube and also create short clips for social media if needed. From clean cuts to audience-focused structure — I make sure your podcast content is engaging and optimized for growth."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Support
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Questions You May Ask</h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#FFF9F2] border border-[#FF94001A] rounded-[2rem] overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`w-full flex items-center justify-between p-8 text-left transition-colors ${activeIndex === index ? 'testimonial-card-gradient' : 'hover:bg-accent/5'}`}
              >
                <span className="text-lg font-bold text-charcoal pr-8">{faq.question}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-accent text-white rotate-180' : 'bg-white text-charcoal shadow-sm'}`}>
                  {activeIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  >
                    <div className="px-8 pb-8 text-charcoal/70 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
