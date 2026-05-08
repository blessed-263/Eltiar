/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Pilates } from './pages/Pilates';
import { Experiential } from './pages/Experiential';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { Booking } from './pages/Booking';

// Placeholder components for new pages
function PagePlaceholder({ title }: { title: string }) {
  return (
    <div className="pt-48 pb-32 px-6 min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-serif font-light mb-6">{title}</h1>
        <p className="text-charcoal/60 uppercase tracking-[0.2em] font-light text-[10px]">Coming Soon</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="pilates" element={<Pilates />} />
          <Route path="experiential-offerings" element={<Experiential />} />
          <Route path="beyond-the-mat" element={<PagePlaceholder title="Beyond The Mat" />} />
          <Route path="private-wellness" element={<PagePlaceholder title="Private Wellness" />} />
          <Route path="retreats" element={<PagePlaceholder title="Retreats" />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-online" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


