import { motion } from 'motion/react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

export function About() {
  return (
    <div className="pt-40 pb-32 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
      <motion.div {...fadeIn}>
        <span className="text-[10px] tracking-[0.4em] uppercase text-gold mb-6 block">Our Ethos</span>
        <h1 className="text-5xl md:text-7xl font-serif mb-16 font-light">Rooted in <span className="italic text-rose">Grace</span></h1>
        
        <p className="text-charcoal/80 text-sm md:text-base font-light max-w-2xl mx-auto leading-loose mb-12">
          Eltiar Wellness was born from a desire to create a sanctuary where movement is not just a physical practice, but a holistic journey towards self-discovery and inner peace. We believe that true well-being comes from harmony between body, mind, and spirit.
        </p>
        
        <p className="text-charcoal/80 text-sm md:text-base font-light max-w-2xl mx-auto leading-loose mb-24">
          Through curated movement classes, intimate community experiences, and a mindful approach to modern living, we guide our members to find their center in the middle of a bustling world.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="w-full aspect-video overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2600&auto=format&fit=crop" 
          alt="Eltiar Ethos" 
          className="w-full h-full object-cover grayscale-[10%]"
        />
      </motion.div>
    </div>
  );
}
