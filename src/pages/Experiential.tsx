import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Experiential() {
  return (
    <div className="bg-sage text-cream min-h-screen pt-40 pb-32 px-6">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold mb-6 block">Beyond Movement</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-10 font-light">Soulful <span className="italic">Restoration</span></h1>
          <p className="text-cream/80 font-light max-w-xl mx-auto leading-loose text-sm mb-16">
            Immersive experiences designed to recalibrate the nervous system and foster profound stillness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 text-left w-full">
          <div className="border border-cream/20 p-12 hover:bg-cream/5 transition-colors duration-500">
            <h3 className="text-2xl font-serif font-light mb-6">Sound Bath Resonance</h3>
            <p className="text-cream/70 font-light leading-loose text-sm mb-8">
              A meditative journey guided by crystal bowls and therapeutic frequencies. Release tension and enter a state of deep restorative relaxation.
            </p>
            <Link to="/book-online" className="text-[10px] uppercase tracking-[0.2em] border-b border-cream/30 pb-1 hover:text-gold hover:border-gold transition-colors">
              Explore Schedule
            </Link>
          </div>
          <div className="border border-cream/20 p-12 hover:bg-cream/5 transition-colors duration-500">
            <h3 className="text-2xl font-serif font-light mb-6">Breathwork Ceremonies</h3>
            <p className="text-cream/70 font-light leading-loose text-sm mb-8">
              Conscious breathing techniques to clear energetic blockages, process emotion, and elevate your baseline of well-being.
            </p>
            <Link to="/book-online" className="text-[10px] uppercase tracking-[0.2em] border-b border-cream/30 pb-1 hover:text-gold hover:border-gold transition-colors">
              Explore Schedule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
