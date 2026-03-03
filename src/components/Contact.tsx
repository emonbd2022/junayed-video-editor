import { motion } from 'motion/react';
import { Send, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-xl font-bold hover:bg-gray-100 transition-colors mb-12"
          >
            <Calendar className="w-6 h-6" />
            Book a Discovery Call
            <div className="absolute -inset-1 bg-white/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          <h2 className="text-3xl font-bold text-white mb-8">Or send me a message</h2>
        </div>

        <form className="space-y-6 bg-zinc-900/50 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-4 rounded-xl hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
