import React from 'react';
import { PRODUCTS_ROW_1, PRODUCTS_ROW_2 } from '../config/nexoraConfig';
import { SectionHeading } from './ui/SectionHeading';
import { HorizontalProductRow } from './HorizontalProductRow';

export const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-clip scroll-mt-20">
      <SectionHeading
        eyebrow="Services & Platforms"
        title="Explore Our Services & Platforms"
        subtitle="Alag-alag zarooraton ke liye specific digital products — ek hi jagah se explore karein."
      />

      {/* Row 1: Beauty & Business Services */}
      <HorizontalProductRow
        title="Beauty & Business Services"
        products={PRODUCTS_ROW_1}
        cardClassName="border border-[var(--border-subtle)]"
      />

      {/* Row 2: Other Services */}
      <HorizontalProductRow
        title="Other Services"
        products={PRODUCTS_ROW_2}
        cardClassName="border border-[var(--border-subtle)]"
      />
    </section>
  );
};
