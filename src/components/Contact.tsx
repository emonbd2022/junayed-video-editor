import { motion } from 'motion/react';
import { Send, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-accent text-white rounded-full text-xl font-black hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 mb-16"
          >
            <Calendar className="w-6 h-6" />
            Book a Discovery Call
          </motion.button>

          <h2 className="text-4xl font-black text-charcoal mb-8 tracking-tight">Or send me a message</h2>
        </div>

        <form className="space-y-8 bg-white p-10 rounded-[3rem] border border-charcoal/5 shadow-2xl shadow-charcoal/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label htmlFor="name" className="text-xs font-black text-charcoal/40 uppercase tracking-[0.2em] ml-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-bg border-2 border-transparent rounded-2xl px-6 py-4 text-charcoal focus:outline-none focus:border-accent focus:bg-white transition-all duration-300 font-bold"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="email" className="text-xs font-black text-charcoal/40 uppercase tracking-[0.2em] ml-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-bg border-2 border-transparent rounded-2xl px-6 py-4 text-charcoal focus:outline-none focus:border-accent focus:bg-white transition-all duration-300 font-bold"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <label htmlFor="message" className="text-xs font-black text-charcoal/40 uppercase tracking-[0.2em] ml-2">Message</label>
            <textarea 
              id="message" 
              rows={5}
              className="w-full bg-bg border-2 border-transparent rounded-2xl px-6 py-4 text-charcoal focus:outline-none focus:border-accent focus:bg-white transition-all duration-300 font-bold resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-charcoal text-bg font-black py-5 rounded-2xl hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-xl shadow-xl shadow-charcoal/10"
          >
            <Send size={24} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
