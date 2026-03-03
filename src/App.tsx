import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SocialProof from './components/SocialProof';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import WhyChooseMe from './components/WhyChooseMe';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-bg min-h-screen text-charcoal font-sans selection:bg-accent/30">
      <div className="fixed inset-0 minimal-grid pointer-events-none" />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <SocialProof />
        <Testimonials />
        <Portfolio />
        <WhyChooseMe />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
