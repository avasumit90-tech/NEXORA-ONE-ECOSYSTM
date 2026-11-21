import React from 'react';

interface SectionDividerProps {
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ className = '' }) => {
  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      aria-hidden="true"
    >
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-px w-1/3 max-w-xs bg-gradient-to-r from-transparent via-[var(--border-accent)] to-transparent" />
      </div>
    </div>
  );
};
