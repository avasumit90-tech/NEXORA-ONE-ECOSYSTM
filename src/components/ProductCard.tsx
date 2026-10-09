import React from 'react';
import { ProductItem } from '../config/nexoraConfig';
import { GlassCard } from './ui/GlassCard';
import { StatusBadge } from './ui/StatusBadge';
import {
  Smartphone,
  LayoutDashboard,
  Globe,
  Users,
  Store,
  Briefcase,
  Home,
  UtensilsCrossed,
  ExternalLink,
} from 'lucide-react';

interface ProductCardProps {
  item: ProductItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const getProductIcon = () => {
    switch (item.iconType) {
      case 'customer':
        return <Smartphone className="w-6 h-6 text-[#10B981]" />;
      case 'salonos':
        return <LayoutDashboard className="w-6 h-6 text-[#10B981]" />;
      case 'whitelabel':
        return <Globe className="w-6 h-6 text-[#10B981]" />;
      case 'partner':
        return <Users className="w-6 h-6 text-[#10B981]" />;
      case 'b2b':
        return <Store className="w-6 h-6 text-[#10B981]" />;
      case 'jobs':
        return <Briefcase className="w-6 h-6 text-[#10B981]" />;
      case 'realestate':
        return <Home className="w-6 h-6 text-[#10B981]" />;
      case 'food':
        return <UtensilsCrossed className="w-6 h-6 text-[#10B981]" />;
    }
  };

  return (
    <GlassCard className="w-[280px] shrink-0 snap-start p-5 flex flex-col justify-between h-[280px] select-none">
      <div>
        {/* Top Header: Neutral Icon Fallback & Status Badge */}
        <div className="flex items-start justify-between gap-2 mb-4">
          <div
            className="w-12 h-12 rounded-2xl bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] border border-[color-mix(in_srgb,var(--accent)_20%,transparent)] flex items-center justify-center shrink-0"
            aria-hidden="true"
          >
            {getProductIcon()}
          </div>
          <StatusBadge status={item.status} />
        </div>

        {/* Product Name */}
        <h3 className="font-display text-base font-bold text-[#F0E9E7] mb-2 leading-snug">
          {item.name}
        </h3>

        {/* Plain Hinglish Benefit */}
        <p className="text-xs text-[color-mix(in_srgb,var(--text)_65%,transparent)] leading-relaxed line-clamp-3">
          {item.benefit}
        </p>
      </div>

      {/* Direct Valid Action */}
      <div className="pt-3 border-t border-[color-mix(in_srgb,var(--text)_6%,transparent)] mt-auto">
        {item.url ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#10B981] hover:text-[#059669] transition-colors py-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
            aria-label={`${item.name} website dekhein`}
          >
            <span>{item.actionLabel}</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ) : (
          <span
            className="inline-flex items-center text-[11px] text-[color-mix(in_srgb,var(--text)_45%,transparent)] font-medium cursor-not-allowed py-1"
            title="Production link pending owner confirmation"
          >
            {item.actionLabel}
          </span>
        )}
      </div>
    </GlassCard>
  );
};
