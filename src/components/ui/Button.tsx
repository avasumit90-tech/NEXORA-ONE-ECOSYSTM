import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  ariaLabel,
  type = 'button',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0705] active:scale-[0.98] min-h-[44px] whitespace-nowrap shrink-0';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 rounded-full',
    md: 'text-sm px-5 py-2.5 rounded-full',
    lg: 'text-base px-6 py-3 rounded-full',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#10B981] text-[#0A0705] font-semibold hover:bg-[color-mix(in_srgb,var(--accent)_85%,var(--color-1)_15%)] shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]',
    secondary:
      'bg-[color-mix(in_srgb,var(--text)_6%,transparent)] text-[#F0E9E7] border border-[color-mix(in_srgb,var(--text)_12%,transparent)] hover:bg-[color-mix(in_srgb,var(--text)_10%,transparent)] hover:border-[color-mix(in_srgb,var(--text)_20%,transparent)]',
    outline:
      'bg-transparent text-[#F0E9E7] border border-[color-mix(in_srgb,var(--accent)_40%,transparent)] hover:border-[#10B981] hover:text-[#10B981]',
    ghost:
      'bg-transparent text-[#F0E9E7] hover:bg-[color-mix(in_srgb,var(--text)_6%,transparent)]',
  }[variant];

  const disabledStyles = disabled
    ? 'opacity-45 cursor-not-allowed pointer-events-none hover:shadow-none active:scale-100'
    : '';

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${disabledStyles} ${className}`.trim();

  if (href && !disabled) {
    return (
      <a href={href} className={combinedClasses} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};
