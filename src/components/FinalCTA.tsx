import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="relative rounded-[28px] bg-[color-mix(in_srgb,var(--color-1)_92%,var(--text)_8%)] border border-[color-mix(in_srgb,var(--accent)_20%,transparent)] p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-2xl">
        {/* Subtle ambient light */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#10B981]/15 blur-[100px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#10B981] mb-3 inline-block">
            Shuruat Karein
          </span>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#F0E9E7] tracking-tight leading-tight">
            Nexora mein apne kaam ka option chunein.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[color-mix(in_srgb,var(--text)_70%,transparent)] leading-relaxed">
            Apni zaroorat ke hisaab se product ya partnership explore karein.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              href="#audiences"
              variant="primary"
              size="lg"
              className="text-base group"
              ariaLabel="Apna Option Chunein"
            >
              Apna Option Chunein
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
