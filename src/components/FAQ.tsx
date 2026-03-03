import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is your typical turnaround time?",
    answer: "For most YouTube videos (8-12 mins), I deliver the first draft within 48 hours. Shorts and Reels are typically delivered within 24 hours."
  },
  {
    question: "Do you provide thumbnail design?",
    answer: "Yes! I can include high-CTR thumbnail designs as part of a monthly package or as an add-on service."
  },
  {
    question: "How do we transfer large video files?",
    answer: "I use Google Drive or Frame.io for seamless file transfer and review. Frame.io allows you to leave time-stamped comments directly on the video."
  },
  {
    question: "Do you offer revisions?",
    answer: "Absolutely. I offer unlimited revisions until you are 100% satisfied with the final product. My goal is to match your vision perfectly."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-bg border border-charcoal/5 rounded-[32px] overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left hover:bg-white transition-colors"
              >
                <span className="text-lg font-bold text-charcoal pr-8">{faq.question}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-charcoal text-bg rotate-180' : 'bg-white text-charcoal shadow-sm'}`}>
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
                    <div className="px-8 pb-8 text-charcoal/60 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
