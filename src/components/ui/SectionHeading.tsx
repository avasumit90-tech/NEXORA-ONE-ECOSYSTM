import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-10 md:mb-14 ${alignmentClass} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#10B981] mb-2.5">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-[28px] md:text-[36px] font-bold text-[#F0E9E7] leading-[1.2] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-[color-mix(in_srgb,var(--text)_60%,transparent)] leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
