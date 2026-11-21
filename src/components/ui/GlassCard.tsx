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
      className={`relative rounded-[24px] bg-[var(--surface-card,#161616)] border border-[var(--border-subtle)] backdrop-blur-[12px] transition-[transform,border-color,box-shadow] duration-200 ease-out ${
        hoverEffect
          ? 'hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-soft)] md:hover:scale-102 motion-reduce:hover:scale-100'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
