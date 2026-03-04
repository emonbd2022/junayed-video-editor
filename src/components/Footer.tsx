import { Instagram, Youtube, MessageCircle, Mail } from 'lucide-react';

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
            <a href="https://www.instagram.com/juna_yed13/" className="text-charcoal/40 hover:text-accent transition-all duration-300">
              <Instagram size={24} />
            </a>
            <a href="https://youtube.com/@juna_yed13?si=Mep17wPZrQlg7QHh" className="text-charcoal/40 hover:text-accent transition-all duration-300">
              <Youtube size={24} />
            </a>
            <a href="https://wa.me/8801306253443" target="_blank" rel="noopener noreferrer" className="text-charcoal/40 hover:text-accent transition-all duration-300">
              <MessageCircle size={24} />
            </a>
            <a href="mailto:ahmedju430@gmail.com" className="text-charcoal/40 hover:text-accent transition-all duration-300">
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
