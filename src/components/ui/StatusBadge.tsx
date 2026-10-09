import React from 'react';

interface StatusBadgeProps {
  status: 'Live Website' | 'Demo' | 'Planned' | null;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  if (!status) return null;

  const styleMap = {
    'Live Website':
      'text-[#10B981] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] border-[color-mix(in_srgb,var(--accent)_30%,transparent)]',
    Demo: 'text-[#F0E9E7] bg-[color-mix(in_srgb,var(--text)_8%,transparent)] border-[color-mix(in_srgb,var(--text)_15%,transparent)]',
    Planned:
      'text-[color-mix(in_srgb,var(--text)_70%,transparent)] bg-[color-mix(in_srgb,var(--text)_5%,transparent)] border-[color-mix(in_srgb,var(--text)_10%,transparent)]',
  }[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-[7px] border uppercase tracking-wider ${styleMap} ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === 'Live Website' ? 'bg-[#10B981]' : 'bg-[color-mix(in_srgb,var(--text)_50%,transparent)]'
        }`}
        aria-hidden="true"
      />
      {status}
    </span>
  );
};
