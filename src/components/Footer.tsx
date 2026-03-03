import { Instagram, Youtube, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Junayed Ahmed</h3>
            <p className="text-gray-500">Video Editor & Content Strategist</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="mailto:hello@junayed.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>

          <div className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Junayed Ahmed. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
