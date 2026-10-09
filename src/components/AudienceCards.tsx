import React from 'react';
import { AUDIENCE_ITEMS } from '../config/nexoraConfig';
import { SectionHeading } from './ui/SectionHeading';
import { AudienceCard } from './AudienceCard';

export const AudienceCards: React.FC = () => {
  return (
    <section id="audiences" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading
        eyebrow="Who It's For"
        title="Aap Nexora par kis kaam se aaye hain?"
        subtitle="Apne kaam ka option chunein."
      />

      {/* Grid: 2 columns on mobile (5th card spans full width), 3 on tablet, 5 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
        {AUDIENCE_ITEMS.map((item, index) => {
          const isFifthCard = index === 4;
          return (
            <AudienceCard
              key={item.id}
              item={item}
              isFullWidthOnMobile={isFifthCard}
            />
          );
        })}
      </div>
    </section>
  );
};
