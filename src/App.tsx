/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AudienceCards } from './components/AudienceCards';
import { ProductShowcase } from './components/ProductShowcase';
import { EcosystemCategories } from './components/EcosystemCategories';
import { HowItWorks } from './components/HowItWorks';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0705] text-[#F0E9E7] overflow-x-clip flex flex-col font-sans">
      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full overflow-x-clip">
        {/* Section B: Hero (id="home") */}
        <Hero />

        {/* Section C: Audience Choice Cards (id="audiences") */}
        <AudienceCards />

        {/* Section D: Product Showcase (id="products") */}
        <ProductShowcase />

        {/* Section E: Ecosystem Categories (id="about" & id="ecosystem") */}
        <EcosystemCategories />

        {/* Section F: How It Works Strip (id="how-it-works") */}
        <HowItWorks />

        {/* Section G: Final CTA (id="cta") */}
        <FinalCTA />
      </main>

      {/* Global Footer (id="footer") */}
      <Footer />
    </div>
  );
}
