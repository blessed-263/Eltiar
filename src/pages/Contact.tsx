import { motion } from 'motion/react';
import { Mail, MapPin, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-[90rem] mx-auto grid md:grid-cols-2 gap-16 md:gap-32">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-sage mb-6 block">The Sanctuary</span>
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-16">Get in <span className="italic text-rose">Touch</span></h1>
          
          <div className="flex flex-col gap-12 text-sm font-light text-charcoal/80">
            <div className="flex items-start gap-6">
              <MapPin size={20} className="text-sage mt-1" strokeWidth={1} />
              <div>
                <h4 className="text-xs tracking-[0.2em] font-medium uppercase text-charcoal mb-4">Location</h4>
                <p className="leading-loose">
                  13 Baker Street, Rosebank<br />
                  Johannesburg, South Africa
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <Mail size={20} className="text-sage mt-1" strokeWidth={1} />
              <div>
                <h4 className="text-xs tracking-[0.2em] font-medium uppercase text-charcoal mb-4">Email Us</h4>
                <a href="mailto:info@eltiarwellness.com" className="hover:text-sage transition-colors">info@eltiarwellness.com</a>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <Instagram size={20} className="text-sage mt-1" strokeWidth={1} />
              <div>
                <h4 className="text-xs tracking-[0.2em] font-medium uppercase text-charcoal mb-4">Social</h4>
                <a href="https://www.instagram.com/eltiar.wellness" target="_blank" rel="noreferrer" className="hover:text-sage transition-colors">@eltiar.wellness</a>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="bg-cream/50 p-8 md:p-12 border border-charcoal/10"
        >
          <form className="flex flex-col gap-8">
            <h3 className="text-2xl font-serif font-light mb-4">Send an Inquiry</h3>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-charcoal/70">Name</label>
              <input type="text" className="border-b border-charcoal/20 bg-transparent py-2 focus:outline-none focus:border-sage transition-colors text-sm" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-charcoal/70">Email</label>
              <input type="email" className="border-b border-charcoal/20 bg-transparent py-2 focus:outline-none focus:border-sage transition-colors text-sm" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-charcoal/70">Message</label>
              <textarea rows={4} className="border-b border-charcoal/20 bg-transparent py-2 focus:outline-none focus:border-sage transition-colors text-sm resize-none"></textarea>
            </div>
            <button type="submit" className="bg-charcoal text-white text-[10px] tracking-[0.2em] uppercase py-4 mt-6 hover:bg-sage transition-colors">
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
