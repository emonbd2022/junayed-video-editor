import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.a
            href="https://calendly.com/ahmedju430/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-accent text-white rounded-full text-xl font-black hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 mb-16"
          >
            <Calendar className="w-6 h-6" />
            Book a Discovery Call
          </motion.a>

          <h2 className="text-4xl font-black text-charcoal mb-8 tracking-tight">Or send me a message</h2>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="space-y-8 bg-white p-10 rounded-[3rem] border border-charcoal/5 shadow-2xl shadow-charcoal/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label htmlFor="name" className="text-xs font-black text-charcoal/40 uppercase tracking-[0.2em] ml-2">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-bg border-2 border-transparent rounded-2xl px-6 py-4 text-charcoal focus:outline-none focus:border-accent focus:bg-white transition-all duration-300 font-bold"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="email" className="text-xs font-black text-charcoal/40 uppercase tracking-[0.2em] ml-2">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-bg border-2 border-transparent rounded-2xl px-6 py-4 text-charcoal focus:outline-none focus:border-accent focus:bg-white transition-all duration-300 font-bold resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="space-y-4">
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-charcoal text-bg font-black py-5 rounded-2xl hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-xl shadow-xl shadow-charcoal/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Send size={24} />
              )}
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-emerald-600 font-bold justify-center bg-emerald-50 py-3 rounded-xl"
              >
                <CheckCircle size={20} />
                Message sent successfully!
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-rose-600 font-bold justify-center bg-rose-50 py-3 rounded-xl"
              >
                <AlertCircle size={20} />
                {errorMessage}
              </motion.div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
