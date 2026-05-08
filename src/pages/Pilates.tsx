import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

export function Pilates() {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-[90rem] mx-auto">
        <motion.div {...fadeIn} className="text-center mb-24 md:mb-32">
          <span className="text-[10px] tracking-[0.4em] uppercase text-sage mb-6 block">Practices</span>
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-8">Kinetic <span className="italic text-rose">Flow</span></h1>
          <p className="text-charcoal/70 font-light max-w-xl mx-auto leading-loose text-sm">
            Our pilates and movement offerings are designed to challenge the body while nurturing the mind. 
            Small class sizes ensure personalized attention inside a serene environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="aspect-[4/5] w-full"
          >
            <img 
              src="/images/photo-1518611012118.jpg" 
              alt="Reformer Pilates" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-serif font-light">Reformer & Tower</h2>
            <p className="text-charcoal/80 font-light leading-loose text-sm">
              Discover the transformative power of apparatus-based Pilates. Our Reformer and Tower classes focus on dynamic resistance, deep core engagement, and precise alignment. Suitable for all levels, these sessions tone the body and improve posture.
            </p>
            <Link to="/book-online" className="mt-8 text-[10px] uppercase tracking-[0.2em] border-b border-charcoal/20 pb-1 self-start hover:border-sage hover:text-sage transition-colors">
              Book this Class
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
