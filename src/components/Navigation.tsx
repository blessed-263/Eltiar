import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, ArrowRight, MapPin, Instagram, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // On non-home pages, we might want navigation to always be solid or adapting.
  // For simplicity, we just use the original logic but force solid if not on top.
  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-6 md:px-12 md:py-8 ${
    isScrolled || !isHomePage ? 'bg-cream/95 backdrop-blur-xl shadow-sm text-charcoal' : 'bg-transparent text-white'
  }`;
  
  const textColor = isScrolled || !isHomePage ? 'text-charcoal' : 'text-white';
  const borderColor = isScrolled || !isHomePage ? 'border-charcoal/30 text-charcoal hover:bg-sage hover:border-sage hover:text-cream' : 'border-white/50 text-white hover:bg-white hover:text-charcoal';

  return (
    <>
      <nav className={navClass}>
        <div className="max-w-[90rem] mx-auto flex justify-between items-center">
          <Link to="/" className={`font-serif text-2xl tracking-[0.2em] uppercase ${textColor}`}>
            Eltiar
          </Link>
          
          <div className="hidden md:flex gap-12 items-center text-[10px] tracking-[0.25em] uppercase font-light">
            <Link to="/about-us" className={`hover:opacity-50 transition-opacity duration-300 ${textColor}`}>The Ethos</Link>
            <div className="relative group">
               <span className={`cursor-pointer hover:opacity-50 transition-opacity duration-300 inline-block pb-1 ${textColor}`}>
                 Offerings
               </span>
               {/* pt-6 bridges gap from label → panel so hover isn't lost crossing margin */}
               <div className="absolute left-0 top-full z-50 hidden w-64 pt-6 group-hover:block">
                 <div className="flex flex-col gap-4 bg-cream/95 backdrop-blur-xl p-6 shadow-sm">
                   <Link to="/pilates" className="text-charcoal hover:text-sage transition-colors">Pilates</Link>
                   <Link to="/experiential-offerings" className="text-charcoal hover:text-sage transition-colors">Experiential Offerings</Link>
                   <Link to="/beyond-the-mat" className="text-charcoal hover:text-sage transition-colors">Beyond The Mat</Link>
                   <Link to="/private-wellness" className="text-charcoal hover:text-sage transition-colors">Private Wellness</Link>
                   <Link to="/retreats" className="text-charcoal hover:text-sage transition-colors">Retreats</Link>
                 </div>
               </div>
            </div>
            <Link to="/gallery" className={`hover:opacity-50 transition-opacity duration-300 ${textColor}`}>Gallery</Link>
            <Link to="/contact" className={`hover:opacity-50 transition-opacity duration-300 ${textColor}`}>Sanctuary</Link>
            <Link to="/book-online" className={`border px-8 py-3 transition-colors duration-500 ${borderColor}`}>
              Book a Session
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className={textColor} strokeWidth={1} size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-cream flex flex-col p-6 animate-in fade-in duration-500 overflow-y-auto">
          <div className="flex justify-between items-center mb-6 mt-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] uppercase text-charcoal">Eltiar</Link>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="text-charcoal" strokeWidth={1} size={32} />
            </button>
          </div>
          <div className="flex flex-col gap-6 text-3xl font-serif text-charcoal mt-8">
            <Link to="/about-us" className="hover:italic hover:text-sage transition-all block">About Us</Link>
            <div className="text-sm font-sans tracking-[0.2em] uppercase text-charcoal/50 mt-4 mb-2">Offerings</div>
            <div className="pl-4 border-l border-charcoal/10 flex flex-col gap-4">
              <Link to="/pilates" className="text-xl hover:italic hover:text-sage transition-all block">Pilates</Link>
              <Link to="/experiential-offerings" className="text-xl hover:italic hover:text-sage transition-all block">Experiential</Link>
              <Link to="/beyond-the-mat" className="text-xl hover:italic hover:text-sage transition-all block">Beyond The Mat</Link>
              <Link to="/private-wellness" className="text-xl hover:italic hover:text-sage transition-all block">Private Wellness</Link>
              <Link to="/retreats" className="text-xl hover:italic hover:text-sage transition-all block">Retreats</Link>
            </div>
            <Link to="/gallery" className="hover:italic hover:text-sage transition-all block mt-4">Gallery</Link>
            <Link to="/contact" className="hover:italic hover:text-sage transition-all block">Contact</Link>
          </div>
          <div className="mt-12 mb-12">
            <Link to="/book-online" className="block w-full text-center border border-charcoal text-charcoal py-5 text-[10px] uppercase tracking-[0.25em] hover:bg-sage hover:border-sage hover:text-cream transition-colors duration-500">
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
