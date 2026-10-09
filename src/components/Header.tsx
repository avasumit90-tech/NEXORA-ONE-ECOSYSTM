import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../config/nexoraConfig';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = NAV_LINKS.map((link) => link.sectionId);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        targetElement.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        window.history.pushState(null, '', href);
        setActiveSection(targetId);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-[#0A0705]/90 backdrop-blur-md border-b border-[color-mix(in_srgb,var(--text)_8%,transparent)] transition-all">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-display text-xl font-bold tracking-tight text-[#F0E9E7] hover:text-[#10B981] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded-md py-1"
          aria-label="Nexora One home"
        >
          <span>Nexora One</span>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[color-mix(in_srgb,var(--text)_70%,transparent)]"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#F0E9E7] py-1 relative ${
                  isActive ? 'text-[#10B981] font-semibold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#10B981] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:block">
            <Button href="#audiences" variant="primary" size="sm" ariaLabel="Apna Option Chunein">
              Apna Option Chunein
            </Button>
          </div>

          <button
            id="mobile-menu-trigger"
            type="button"
            className="md:hidden flex items-center justify-center w-11 h-11 text-[#F0E9E7] hover:text-[#10B981] rounded-lg border border-[color-mix(in_srgb,var(--text)_10%,transparent)] bg-[color-mix(in_srgb,var(--text)_5%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
            aria-label={isMenuOpen ? 'Navigation menu band karein' : 'Navigation menu kholein'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        activeSection={activeSection}
      />
    </header>
  );
};
