import React from 'react';
import { AudienceItem } from '../config/nexoraConfig';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { Sparkles, Store, Users, Building2, TrendingUp, ArrowRight } from 'lucide-react';

interface AudienceCardProps {
  item: AudienceItem;
  isFullWidthOnMobile?: boolean;
}

export const AudienceCard: React.FC<AudienceCardProps> = ({ item, isFullWidthOnMobile = false }) => {
  const getIcon = () => {
    switch (item.iconType) {
      case 'customer':
        return <Sparkles className="w-5 h-5 text-[#10B981]" />;
      case 'owner':
        return <Store className="w-5 h-5 text-[#10B981]" />;
      case 'partner':
        return <Users className="w-5 h-5 text-[#10B981]" />;
      case 'b2b':
        return <Building2 className="w-5 h-5 text-[#10B981]" />;
      case 'investor':
        return <TrendingUp className="w-5 h-5 text-[#10B981]" />;
    }
  };

  return (
    <GlassCard
      className={`p-5 flex flex-col justify-between h-full ${
        isFullWidthOnMobile ? 'col-span-2 md:col-span-1' : 'col-span-1'
      }`}
    >
      <div>
        {/* Icon & Future Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] border border-[color-mix(in_srgb,var(--accent)_25%,transparent)] flex items-center justify-center">
            {getIcon()}
          </div>
          {item.disabled && (
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--text)_50%,transparent)] bg-[color-mix(in_srgb,var(--text)_6%,transparent)] px-2 py-0.5 rounded-md border border-[color-mix(in_srgb,var(--text)_10%,transparent)]">
              Future Phase
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-base font-bold text-[#F0E9E7] mb-1.5">
          {item.title}
        </h3>

        {/* Plain Hinglish Benefit */}
        <p className="text-xs text-[color-mix(in_srgb,var(--text)_65%,transparent)] leading-relaxed">
          {item.benefit}
        </p>
      </div>

      {/* Defined Action */}
      <div className="mt-5 pt-3 border-t border-[color-mix(in_srgb,var(--text)_6%,transparent)]">
        {item.disabled ? (
          <span className="inline-flex items-center text-xs text-[color-mix(in_srgb,var(--text)_45%,transparent)] font-medium">
            {item.actionLabel}
          </span>
        ) : (
          <Button
            href={item.targetAnchor || undefined}
            variant="ghost"
            size="sm"
            className="w-full justify-between px-0 text-xs text-[#10B981] hover:text-[#10B981] group"
            ariaLabel={`${item.title} ke options dekhein`}
          >
            <span>{item.actionLabel}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        )}
      </div>
    </GlassCard>
  );
};
