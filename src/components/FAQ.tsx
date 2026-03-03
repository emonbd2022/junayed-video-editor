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
    <section className="py-24 bg-zinc-950">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-black border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900/50 transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="text-purple-400 flex-shrink-0" />
                ) : (
                  <Plus className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
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
