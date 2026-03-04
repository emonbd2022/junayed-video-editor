import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Calendar, CheckCircle, AlertCircle, X } from 'lucide-react';

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
        // Optional: Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
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

        <div className="relative">
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
                className="w-full bg-charcoal text-bg font-black py-5 rounded-2xl hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-xl shadow-xl shadow-charcoal/10 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden relative"
              >
                <AnimatePresence mode="wait">
                  {status === 'loading' ? (
                    <motion.div
                      key="loading"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send size={24} />
                      <span>Send Message</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </form>

          {/* Status Overlays */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, backdropFilter: 'blur(0px)' }}
                animate={{ opacity: 1, scale: 1, backdropFilter: 'blur(4px)' }}
                exit={{ opacity: 0, scale: 0.9, backdropFilter: 'blur(0px)' }}
                className="absolute inset-0 z-20 flex items-center justify-center p-10 bg-emerald-500/10 rounded-[3rem] border-4 border-emerald-500/20"
              >
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-12 rounded-[2rem] shadow-2xl text-center space-y-6 max-w-sm border-2 border-emerald-500/10"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={48} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-charcoal">Message Sent!</h3>
                    <p className="text-charcoal/60 font-medium">I'll get back to you as soon as possible.</p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-charcoal text-white rounded-xl font-bold hover:bg-accent transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="mt-6 p-6 bg-rose-50 border-2 border-rose-500/20 rounded-3xl flex items-center gap-4 text-rose-600"
              >
                <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center shrink-0">
                  <AlertCircle size={24} />
                </div>
                <div className="flex-1">
                  <p className="font-black uppercase text-[10px] tracking-widest opacity-50 mb-1">Error Occurred</p>
                  <p className="font-bold">{errorMessage}</p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="p-2 hover:bg-rose-100 rounded-xl transition-colors"
                >
                  <X size={20} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
