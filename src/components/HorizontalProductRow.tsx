import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ProductItem } from '../config/nexoraConfig';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HorizontalProductRowProps {
  title: string;
  products: ProductItem[];
}

export const HorizontalProductRow: React.FC<HorizontalProductRowProps> = ({ title, products }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    checkScrollState();
    el.addEventListener('scroll', checkScrollState, { passive: true });
    window.addEventListener('resize', checkScrollState, { passive: true });

    return () => {
      el.removeEventListener('scroll', checkScrollState);
      window.removeEventListener('resize', checkScrollState);
    };
  }, [checkScrollState]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;

    const scrollAmount = 300; // Single card width (280px) + gap (16px)
    const targetScroll = direction === 'left' ? el.scrollLeft - scrollAmount : el.scrollLeft + scrollAmount;

    el.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative mb-12 last:mb-0 overflow-x-clip">
      {/* Category Row Header with Controls */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-lg sm:text-xl font-bold text-[#F0E9E7]">
          {title}
        </h3>

        {/* Desktop Left / Right Arrow Controls */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Pichhle products"
            aria-disabled={!canScrollLeft}
            className={`flex items-center justify-center w-9 h-9 rounded-full border border-[color-mix(in_srgb,var(--text)_12%,transparent)] bg-[color-mix(in_srgb,var(--text)_5%,transparent)] text-[#F0E9E7] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] ${
              canScrollLeft
                ? 'hover:bg-[#10B981] hover:text-[#0A0705] hover:border-[#10B981]'
                : 'opacity-35 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Agle products"
            aria-disabled={!canScrollRight}
            className={`flex items-center justify-center w-9 h-9 rounded-full border border-[color-mix(in_srgb,var(--text)_12%,transparent)] bg-[color-mix(in_srgb,var(--text)_5%,transparent)] text-[#F0E9E7] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] ${
              canScrollRight
                ? 'hover:bg-[#10B981] hover:text-[#0A0705] hover:border-[#10B981]'
                : 'opacity-35 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroller Container */}
      <div
        ref={scrollerRef}
        tabIndex={0}
        role="region"
        aria-label={`${title} products row`}
        className="flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 px-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#10B981] rounded-2xl"
      >
        {products.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};
