import React from 'react';
import { PRODUCTS_ROW_1, PRODUCTS_ROW_2, ProductItem } from '../config/nexoraConfig';
import { SectionHeading } from './ui/SectionHeading';
import { HorizontalProductRow } from './HorizontalProductRow';
import { ProductCard } from './ProductCard';

const SERVICE_URLS: Record<string, string> = {
  'customer-app': 'https://www.nexorasalon.online/?app=1',
  salonos: 'https://www.nexorasalon.online/partner-rewards',
  'whitelabel-website': 'https://www.nexorasalon.online/',
  'whitelabel-2': 'https://beauty-zone-pearl.vercel.app/',
  'whitelabel-3': 'https://prompt-b-g.vercel.app/',
  'website-creator': 'https://business-web-solutions-kohl.vercel.app/',
  'growth-partner': 'https://nexora-beauty-network.templateapp67.chatgpt.site/',
  'b2b-marketplace': 'https://beauty-shop-2.vercel.app/',
  'salon-jobs': 'https://nexora-salon-job-portal.templateapp67.chatgpt.site/',
  'real-estate': 'https://no-broker-delta.vercel.app/',
  'food-delivery': 'https://nexora-food.templateapp67.chatgpt.site/',
  'car-mitra': 'https://carmitra-jaipur.templateapp67.chatgpt.site/',
};

export const ProductShowcase: React.FC = () => {
  const renderLinkedCard = (product: ProductItem) => {
    const resolvedUrl = SERVICE_URLS[product.id] ?? product.url;
    const itemWithUrl: ProductItem = {
      ...product,
      url: resolvedUrl,
    };

    if (!resolvedUrl) {
      return (
        <ProductCard
          item={itemWithUrl}
          className="border border-[var(--border-subtle)] hover:scale-[1.02] transition-[transform,scale,border-color,box-shadow] duration-200 ease-out motion-reduce:hover:scale-100"
        />
      );
    }

    return (
      <a
        href={resolvedUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${product.name} — ${product.actionLabel}`}
        className="group block shrink-0 snap-start rounded-[24px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-1)]"
      >
        <ProductCard
          item={itemWithUrl}
          className="border border-[var(--border-subtle)] hover:scale-[1.02] transition-[transform,scale,border-color,box-shadow] duration-200 ease-out motion-reduce:hover:scale-100"
          isWrappedInLink
        />
      </a>
    );
  };

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
        cardClassName="border border-[var(--border-subtle)] hover:scale-[1.02]"
        renderCard={renderLinkedCard}
      />

      {/* Row 2: Other Services */}
      <HorizontalProductRow
        title="Other Services"
        products={PRODUCTS_ROW_2}
        cardClassName="border border-[var(--border-subtle)] hover:scale-[1.02]"
        renderCard={renderLinkedCard}
      />
    </section>
  );
};
