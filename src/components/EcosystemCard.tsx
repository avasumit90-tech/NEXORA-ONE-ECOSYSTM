import React from 'react';
import { EcosystemCategoryItem } from '../config/nexoraConfig';
import { GlassCard } from './ui/GlassCard';
import {
  Sparkles,
  Building,
  Utensils,
  Briefcase,
  ShoppingBag,
  Megaphone,
  Cpu,
} from 'lucide-react';

interface EcosystemCardProps {
  item: EcosystemCategoryItem;
  className?: string;
}

export const EcosystemCard: React.FC<EcosystemCardProps> = ({ item, className = '' }) => {
  const getCategoryIcon = () => {
    switch (item.iconType) {
      case 'beauty':
        return <Sparkles className="w-5 h-5 text-[#10B981]" />;
      case 'realestate':
        return <Building className="w-5 h-5 text-[#10B981]" />;
      case 'food':
        return <Utensils className="w-5 h-5 text-[#10B981]" />;
      case 'jobs':
        return <Briefcase className="w-5 h-5 text-[#10B981]" />;
      case 'commerce':
        return <ShoppingBag className="w-5 h-5 text-[#10B981]" />;
      case 'advertising':
        return <Megaphone className="w-5 h-5 text-[#10B981]" />;
      case 'ai':
        return <Cpu className="w-5 h-5 text-[#10B981]" />;
    }
  };

  return (
    <GlassCard className={`p-5 flex flex-col justify-between h-full ${className}`}>
      <div>
        <div
          className="w-10 h-10 rounded-xl bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] border border-[color-mix(in_srgb,var(--accent)_20%,transparent)] flex items-center justify-center mb-3.5"
          aria-hidden="true"
        >
          {getCategoryIcon()}
        </div>

        <h3 className="font-display text-base font-bold text-[#F0E9E7] mb-1.5">
          {item.title}
        </h3>

        <p className="text-xs text-[color-mix(in_srgb,var(--text)_65%,transparent)] leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="mt-4 pt-2.5 border-t border-[color-mix(in_srgb,var(--text)_5%,transparent)]">
        <span className="text-[11px] font-medium text-[color-mix(in_srgb,var(--text)_45%,transparent)]">
          Category Overview
        </span>
      </div>
    </GlassCard>
  );
};
