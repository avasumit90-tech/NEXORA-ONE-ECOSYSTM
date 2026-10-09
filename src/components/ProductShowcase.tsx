import React from 'react';
import { PRODUCTS_ROW_1, PRODUCTS_ROW_2 } from '../config/nexoraConfig';
import { SectionHeading } from './ui/SectionHeading';
import { HorizontalProductRow } from './HorizontalProductRow';

export const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-clip scroll-mt-20">
      <SectionHeading
        eyebrow="Product Showcase"
        title="Nexora ke Products"
        subtitle="Alag-alag zarooraton ke liye alag products — ek hi jagah se explore karein."
      />

      {/* Row 1: Beauty & Business Products */}
      <HorizontalProductRow
        title="Beauty aur Business Products"
        products={PRODUCTS_ROW_1}
      />

      {/* Row 2: Other Products */}
      <HorizontalProductRow
        title="Doosre Products"
        products={PRODUCTS_ROW_2}
      />
    </section>
  );
};
