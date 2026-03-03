import { Instagram, Youtube, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-charcoal/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-charcoal mb-3">Junayed Ahmed</h3>
            <p className="text-charcoal/40 font-medium uppercase tracking-widest text-xs">Video Editor & Content Strategist</p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-charcoal/40 hover:text-accent transition-all duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-charcoal/40 hover:text-accent transition-all duration-300">
              <Youtube size={24} />
            </a>
            <a href="#" className="text-charcoal/40 hover:text-accent transition-all duration-300">
              <Twitter size={24} />
            </a>
            <a href="mailto:hello@junayed.com" className="text-charcoal/40 hover:text-accent transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>

          <div className="text-charcoal/30 text-sm font-medium">
            &copy; {new Date().getFullYear()} Junayed Ahmed.
          </div>
        </div>
      </div>
    </footer>
  );
}
