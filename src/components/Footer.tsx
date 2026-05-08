import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-cream px-6 py-16 md:py-24">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-16 md:gap-8">
        <div className="max-w-sm">
          <div className="font-serif text-3xl tracking-[0.2em] uppercase text-charcoal mb-8">Eltiar</div>
          <p className="text-charcoal/80 font-light text-sm leading-loose">
            Movement. Community. Lifestyle.<br />
            A sanctuary for embodied living.
          </p>
        </div>
        
        <div>
          <h4 className="text-[10px] font-medium tracking-[0.2em] uppercase mb-8 text-charcoal">Explore</h4>
          <ul className="flex flex-col gap-4 text-charcoal/70 font-light text-sm">
            <li><Link to="/" className="hover:text-sage hover:italic transition-all">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-sage hover:italic transition-all">The Ethos</Link></li>
            <li><Link to="/pilates" className="hover:text-sage hover:italic transition-all">Practices</Link></li>
            <li><Link to="/book-online" className="hover:text-sage hover:italic transition-all">Booking Schedule</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-medium tracking-[0.2em] uppercase mb-8 text-charcoal">Connect</h4>
          <ul className="flex flex-col gap-4 text-charcoal/70 font-light text-sm mb-8">
            <li><a href="#" className="hover:text-sage transition-colors">Instagram</a></li>
            <li><a href="mailto:hello@eltiarwellness.com" className="hover:text-sage transition-colors">hello@eltiarwellness.com</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-medium tracking-[0.2em] uppercase mb-8 text-charcoal">The Journal</h4>
          <p className="text-charcoal/70 font-light text-sm mb-6 leading-loose">
            Join our newsletter. Stay updated on slow living, practices, and community gatherings.
          </p>
          <form className="flex items-center border-b border-charcoal/20 pb-2 group focus-within:border-sage transition-colors" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent text-sm w-full focus:outline-none placeholder:text-charcoal/30 flex-grow text-charcoal" 
              required
            />
            <button type="submit" className="text-[9px] uppercase tracking-[0.2em] text-charcoal/60 group-hover:text-sage transition-colors pl-4 shrink-0">Join</button>
          </form>
        </div>
      </div>
      
      <div className="max-w-[90rem] mx-auto mt-24 pt-8 border-t border-charcoal/10 text-[11px] text-charcoal/50 font-light flex flex-col md:flex-row justify-between items-start md:items-center gap-6 uppercase tracking-wider">
        <p>&copy; {new Date().getFullYear()} Eltiar Wellness.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-sage transition-colors">Privacy</a>
          <a href="#" className="hover:text-sage transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
