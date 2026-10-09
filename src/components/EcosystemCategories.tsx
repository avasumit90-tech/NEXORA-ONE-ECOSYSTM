import React from 'react';
import { ECOSYSTEM_CATEGORIES } from '../config/nexoraConfig';
import { SectionHeading } from './ui/SectionHeading';
import { EcosystemCard } from './EcosystemCard';

export const EcosystemCategories: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Narrative Top Anchor: Resolves Header's About link without creating extra pages */}
      <div id="about" className="mb-14 scroll-mt-20">
        <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-[24px] bg-[color-mix(in_srgb,var(--text)_3%,transparent)] border border-[color-mix(in_srgb,var(--text)_8%,transparent)] text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#10B981] mb-2 inline-block">
            About Nexora One
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F0E9E7] mb-3">
            Digital Platforms Ek Hi Jagah
          </h2>
          <p className="text-sm md:text-base text-[color-mix(in_srgb,var(--text)_70%,transparent)] leading-relaxed max-w-2xl mx-auto">
            Nexora One ka maqsad hai alag-alag digital zarooraton ko aasaan banana — jahan salon owners, beauty customers aur local businesses apne kaam ke specific tools tak bina kisi pareshani ke pahunch sakein.
          </p>
        </div>
      </div>

      {/* Categories Grid Anchor */}
      <div id="ecosystem" className="scroll-mt-20">
        <SectionHeading
          eyebrow="Ecosystem Overview"
          title="Nexora ka ecosystem"
          subtitle="Beauty se lekar business ki doosri zarooraton tak, alag-alag digital products."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
          {ECOSYSTEM_CATEGORIES.map((category, index) => {
            // Last 7th card can span 2 cols on mobile/tablet for pleasant visual balance
            const isLast = index === ECOSYSTEM_CATEGORIES.length - 1;
            return (
              <EcosystemCard
                key={category.id}
                item={category}
                className={isLast ? 'col-span-2 sm:col-span-1' : ''}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
