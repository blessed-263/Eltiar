import { motion } from 'motion/react';

const images = [
  { url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1200', aspect: 'aspect-[3/4]', caption: 'Stillness' },
  { url: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&q=80&w=1200', aspect: 'aspect-[4/5]', caption: 'Alignment' },
  { url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200', aspect: 'aspect-square', caption: 'Kinetic Energy' },
  { url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200', aspect: 'aspect-[2/3]', caption: 'Morning Light' },
  { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200', aspect: 'aspect-[16/9]', caption: 'The Atrium' },
  { url: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80&w=1200', aspect: 'aspect-[3/4]', caption: 'Fluidity' },
  { url: 'https://images.unsplash.com/photo-1599901860904-17e08c3d31b0?auto=format&fit=crop&q=80&w=1200', aspect: 'aspect-square', caption: 'Form & Space' },
  { url: 'https://images.unsplash.com/photo-1554244933-d876deb6b2ff?auto=format&fit=crop&q=80&w=1200', aspect: 'aspect-[4/5]', caption: 'Breathwork' },
  { url: 'https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?auto=format&fit=crop&q=80&w=1200', aspect: 'aspect-[3/5]', caption: 'Grounding' },
  { url: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&q=80&w=1200', aspect: 'aspect-[4/3]', caption: 'The Sanctuary' },
  { url: 'https://images.unsplash.com/photo-1499557406246-17b20464f1dc?auto=format&fit=crop&q=80&w=1200', aspect: 'aspect-square', caption: 'Texture' },
  { url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200', aspect: 'aspect-[3/4]', caption: 'Focus' }
];

export function Gallery() {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-[90rem] mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="text-center mb-20 md:mb-32 flex flex-col items-center"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-sage mb-6 block">Visual Archive</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-8">The <span className="italic text-rose">Library</span></h1>
          <p className="text-charcoal/70 font-light max-w-xl mx-auto leading-loose text-sm md:text-base">
            A curated visual collection of our sanctuary, movement practices, and the serene moments that define the Eltiar experience.
          </p>
        </motion.div>

        {/* Editorial Grid Form */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: (i % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="break-inside-avoid relative group cursor-pointer"
            >
              <div className={`w-full overflow-hidden bg-sage/5 ${img.aspect}`}>
                <div className="absolute inset-0 bg-charcoal/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-[0.16,1,0.3,1]"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                <span className="text-[9px] uppercase tracking-[0.3em] text-charcoal/60">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-xs font-serif italic text-sage">{img.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
