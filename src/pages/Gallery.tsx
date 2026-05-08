import { motion } from 'motion/react';

const images = [
  { url: '/images/photo-1545205597.jpg', aspect: 'aspect-[3/4]', caption: 'Stillness' },
  { url: '/images/photo-1600618528240.jpg', aspect: 'aspect-[4/5]', caption: 'Alignment' },
  { url: '/images/photo-1518611012118.jpg', aspect: 'aspect-square', caption: 'Kinetic Energy' },
  { url: '/images/photo-1506126613408.jpg', aspect: 'aspect-[2/3]', caption: 'Morning Light' },
  { url: '/images/photo-1544367567.jpg', aspect: 'aspect-[16/9]', caption: 'The Atrium' },
  { url: '/images/photo-1603988363607.jpg', aspect: 'aspect-[3/4]', caption: 'Fluidity' },
  { url: '/images/photo-1599901860904.jpg', aspect: 'aspect-square', caption: 'Form & Space' },
  { url: '/images/photo-1554244933.jpg', aspect: 'aspect-[4/5]', caption: 'Breathwork' },
  { url: '/images/photo-1536623975707.jpg', aspect: 'aspect-[3/5]', caption: 'Grounding' },
  { url: '/images/photo-1524863479829.jpg', aspect: 'aspect-[4/3]', caption: 'The Sanctuary' },
  { url: '/images/photo-1499557406246.jpg', aspect: 'aspect-square', caption: 'Texture' },
  { url: '/images/photo-1512290923902.jpg', aspect: 'aspect-[3/4]', caption: 'Focus' },
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
