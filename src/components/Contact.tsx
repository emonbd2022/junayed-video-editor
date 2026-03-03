import { motion } from 'motion/react';
import { Send, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-charcoal text-bg rounded-full text-xl font-bold hover:bg-accent hover:text-charcoal transition-all duration-300 mb-16 shadow-xl shadow-charcoal/10"
          >
            <Calendar className="w-6 h-6" />
            Book a Discovery Call
          </motion.button>

          <h2 className="text-3xl font-bold text-charcoal mb-8">Or send me a message</h2>
        </div>

        <form className="space-y-8 bg-white p-10 rounded-[40px] border border-charcoal/5 shadow-2xl shadow-charcoal/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label htmlFor="name" className="text-sm font-bold text-charcoal/40 uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-bg border border-charcoal/5 rounded-2xl px-5 py-4 text-charcoal focus:outline-none focus:border-accent transition-all duration-300 font-medium"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="email" className="text-sm font-bold text-charcoal/40 uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-bg border border-charcoal/5 rounded-2xl px-5 py-4 text-charcoal focus:outline-none focus:border-accent transition-all duration-300 font-medium"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <label htmlFor="message" className="text-sm font-bold text-charcoal/40 uppercase tracking-widest">Message</label>
            <textarea 
              id="message" 
              rows={5}
              className="w-full bg-bg border border-charcoal/5 rounded-2xl px-5 py-4 text-charcoal focus:outline-none focus:border-accent transition-all duration-300 font-medium resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-charcoal text-bg font-bold py-5 rounded-2xl hover:bg-accent hover:text-charcoal transition-all duration-300 flex items-center justify-center gap-2 text-lg"
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
