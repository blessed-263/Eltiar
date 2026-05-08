import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen bg-cream text-charcoal w-full overflow-x-hidden selection:bg-gold/20 selection:text-charcoal flex flex-col">
      <Navigation />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
