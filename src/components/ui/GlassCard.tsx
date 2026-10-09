import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  onClick,
  hoverEffect = true,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-[24px] bg-[color-mix(in_srgb,var(--text)_4%,transparent)] border border-[color-mix(in_srgb,var(--text)_8%,transparent)] backdrop-blur-[12px] transition-all duration-300 ${
        hoverEffect
          ? 'hover:border-[color-mix(in_srgb,var(--accent)_30%,transparent)] hover:shadow-[0_8px_32px_-4px_color-mix(in_srgb,var(--color-1)_50%,transparent)] md:hover:scale-[1.02]'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
