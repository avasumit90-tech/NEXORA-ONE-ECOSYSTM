import React, { useEffect, useRef } from 'react';
import { NAV_LINKS } from '../config/nexoraConfig';
import { Button } from './ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key & return focus to trigger
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
        const trigger = document.getElementById('mobile-menu-trigger');
        trigger?.focus();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    onClose();
    const trigger = document.getElementById('mobile-menu-trigger');
    trigger?.focus();

    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        targetElement.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 md:hidden bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
      aria-hidden="true"
    >
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className="fixed top-16 right-0 w-full max-w-xs h-[calc(100dvh-4rem)] bg-[#0A0705] border-l border-[color-mix(in_srgb,var(--text)_10%,transparent)] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-6 pt-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-[color-mix(in_srgb,var(--text)_40%,transparent)] px-3">
            Menu Navigation
          </p>

          <nav className="flex flex-col space-y-1" aria-label="Mobile Links">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center justify-between px-3 py-3 text-base font-medium rounded-xl transition-colors min-h-[44px] ${
                    isActive
                      ? 'bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-[#10B981]'
                      : 'text-[#F0E9E7] hover:bg-[color-mix(in_srgb,var(--text)_6%,transparent)]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" aria-hidden="true" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-[color-mix(in_srgb,var(--text)_10%,transparent)] space-y-3 pb-safe">
          <Button
            href="#audiences"
            variant="primary"
            size="md"
            className="w-full justify-center"
            onClick={(e) => handleLinkClick(e, '#audiences')}
            ariaLabel="Apna Option Chunein"
          >
            Apna Option Chunein
          </Button>
          <p className="text-center text-xs text-[color-mix(in_srgb,var(--text)_50%,transparent)]">
            Nexora One Showcase
          </p>
        </div>
      </div>
    </div>
  );
};
