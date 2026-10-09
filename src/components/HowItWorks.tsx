import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../config/nexoraConfig';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import { MousePointerClick, Search, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '1':
        return <MousePointerClick className="w-5 h-5 text-[#10B981]" />;
      case '2':
        return <Search className="w-5 h-5 text-[#10B981]" />;
      case '3':
        return <CheckCircle2 className="w-5 h-5 text-[#10B981]" />;
      default:
        return null;
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading
        eyebrow="Quick Guide"
        title="Shuru kaise karein?"
        subtitle="Teen aasaan steps mein platform explore karein."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {HOW_IT_WORKS_STEPS.map((stepItem) => (
          <GlassCard key={stepItem.step} className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] border border-[color-mix(in_srgb,var(--accent)_20%,transparent)] flex items-center justify-center"
                  aria-hidden="true"
                >
                  {getStepIcon(stepItem.step)}
                </div>
                <span className="font-display text-sm font-bold text-[#10B981] px-2.5 py-1 rounded-md bg-[color-mix(in_srgb,var(--accent)_10%,transparent)]">
                  Step 0{stepItem.step}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-[#F0E9E7] mb-2">
                {stepItem.title}
              </h3>

              <p className="text-xs sm:text-sm text-[color-mix(in_srgb,var(--text)_65%,transparent)] leading-relaxed">
                {stepItem.description}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
