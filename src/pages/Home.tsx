import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

const staggerChildren = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.3 }
};

export function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], ['0%', '15%']);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center bg-sage">
        <motion.div 
          className="absolute inset-0 z-0 origin-bottom"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2600&auto=format&fit=crop" 
            alt="Eltiar Wellness Movement"
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 w-full flex flex-col justify-end pb-32 h-full">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/70 mb-8"
          >
            A Holistic Movement Brand
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[1] text-white flex flex-col items-center"
          >
            <span className="font-light">Embodied</span>
            <span className="italic">Living</span>
          </motion.h1>
        </div>
      </section>

      {/* Ethos Section */}
      <section id="about" className="py-32 md:py-48 px-6">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.h2 
            {...fadeIn}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-charcoal leading-[1.2] max-w-4xl"
          >
            <span className="font-light">Rooted in grace, strength, and </span>
            <span className="italic text-rose">soulful self-discovery.</span>
          </motion.h2>
          <motion.p 
            {...fadeIn}
            className="text-charcoal/80 text-sm md:text-base font-light max-w-xl mx-auto leading-loose mt-12 md:mt-16"
          >
            Every session is an invitation to rise. We bring together Movement, Community, and Lifestyle in a holistic environment designed to nourish both body and mind, stripping away the noise to leave only what matters.
          </motion.p>
        </div>
      </section>

      {/* Editorial Split Section */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-[90rem] mx-auto">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 md:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 1.5 }}
            className="relative aspect-[3/4] w-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop" 
              alt="Mindful movement practice" 
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </motion.div>
          
          <motion.div {...staggerChildren} className="flex flex-col gap-10">
            <motion.h3 variants={fadeIn} className="text-4xl md:text-6xl font-serif text-charcoal leading-[1.1] font-light">
              Movement. <br />
              <span className="italic text-gold">Community.</span> <br />
              Lifestyle.
            </motion.h3>
            <motion.p variants={fadeIn} className="text-charcoal/80 leading-loose font-light text-sm md:text-base max-w-md">
              Our space is designed to be a sanctuary from the rapid pace of daily life. Through highly intentional movement and a discerning community, we guide you back to your center—cultivating authentic resilience and inner calm.
            </motion.p>
            <motion.div variants={fadeIn}>
               <Link to="/about-us" className="inline-flex items-center gap-4 text-charcoal text-[10px] tracking-[0.25em] uppercase border-b border-charcoal/30 pb-2 hover:border-gold hover:text-gold transition-all mt-4 group">
                 Discover Our Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
               </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-32 md:py-48 px-6 bg-sage/5 mt-16 md:mt-32">
        <div className="max-w-[90rem] mx-auto">
          <motion.div {...fadeIn} className="text-center mb-24 md:mb-32">
            <span className="text-[10px] tracking-[0.3em] uppercase text-sage mb-6 block">Discover</span>
            <h2 className="text-4xl md:text-6xl font-serif text-charcoal font-light">Our <span className="italic text-rose">Offerings</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            {/* Offering 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-center text-center"
            >
              <Link to="/pilates" className="block w-full">
                <div className="aspect-[2/3] w-full overflow-hidden mb-12 relative cursor-pointer">
                  <div className="absolute inset-0 bg-sage/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-1000" />
                  <img 
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=2000" 
                    alt="Movement Offerings" 
                    className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-out"
                  />
                </div>
              </Link>
              <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-4 font-light">Pilates</h3>
              <p className="text-charcoal/80 font-light text-sm/loose max-w-sm mb-8">
                Dynamic flows, refined barre, and mindful strength conditioning designed to elevate your physical well-being.
              </p>
              <Link to="/pilates" className="text-[10px] tracking-[0.25em] uppercase text-sage flex items-center gap-3 border-b border-transparent group-hover:border-sage/40 pb-1 transition-all">
                Explore Classes
              </Link>
            </motion.div>

            {/* Offering 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-center text-center mt-0 md:mt-32"
            >
              <Link to="/experiential-offerings" className="block w-full">
                <div className="aspect-[2/3] w-full overflow-hidden mb-12 relative cursor-pointer">
                  <div className="absolute inset-0 bg-sage/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-1000" />
                  <img 
                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=2000" 
                    alt="Experiential Offerings" 
                    className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-out"
                  />
                </div>
              </Link>
              <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-4 font-light">Experiential <span className="italic text-rose">Offerings</span></h3>
              <p className="text-charcoal/80 font-light text-sm/loose max-w-sm mb-8">
                Immersive sound baths, breathwork ceremonies, and intimate workshops centered around connection.
              </p>
              <Link to="/experiential-offerings" className="text-[10px] tracking-[0.25em] uppercase text-sage flex items-center gap-3 border-b border-transparent group-hover:border-sage/40 pb-1 transition-all">
                View Schedule
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location / Studio */}
      <section id="studio" className="py-40 md:py-56 px-6 flex items-center justify-center relative overflow-hidden bg-sage text-cream">
        {/* Subtle texture/bg element */}
        <div className="absolute inset-0 opacity-[0.05]">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <motion.div {...fadeIn}>
            <span className="text-[9px] tracking-[0.4em] uppercase text-gold mb-6 block">Location</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-10 font-light"><span className="italic text-rose">The</span> Sanctuary</h2>
            <p className="text-[13px] md:text-sm font-light tracking-wide text-cream/90 leading-loose mb-16 uppercase">
              13 Baker Street, Rosebank<br/>Johannesburg, South Africa
            </p>
            <Link to="/contact" className="border border-cream/40 text-cream px-10 py-4 text-[10px] tracking-[0.2em] uppercase hover:bg-cream hover:text-sage transition-colors duration-500">
              Get Directions
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
