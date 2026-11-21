import React, { useState } from 'react';
import {
  NAV_LINKS,
  SOCIAL_LINKS,
  FOOTER_BUSINESS_LINKS,
  PRODUCTS_ROW_1,
  PRODUCTS_ROW_2,
  SocialLinkItem,
} from '../config/nexoraConfig';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const SocialIcon: React.FC<{ id: SocialLinkItem['id'] }> = ({ id }) => {
  switch (id) {
    case 'instagram':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'youtube':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3v6Z" />
        </svg>
      );
    case 'x':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      );
  }
};

export const Footer: React.FC = () => {
  const [mobileQuickLinksOpen, setMobileQuickLinksOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);
  const [mobileEcosystemOpen, setMobileEcosystemOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const verifiedProducts = [...PRODUCTS_ROW_1, ...PRODUCTS_ROW_2].filter(
    (product) => product.url !== null
  );

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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

  const renderSocialControl = (item: SocialLinkItem) => {
    const sharedClasses =
      'w-11 h-11 rounded-[8px] bg-[var(--surface-card)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--border-accent)] hover:bg-[var(--accent-subtle)] transition-colors duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]';

    if (item.url) {
      return (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Nexora One on ${item.label}`}
          className={sharedClasses}
        >
          <SocialIcon id={item.id} />
        </a>
      );
    }

    return (
      <button
        key={item.id}
        type="button"
        aria-disabled="true"
        onClick={(e) => e.preventDefault()}
        title={`${item.label} — Official link pending confirmation`}
        aria-label={`${item.label} (Official link pending)`}
        className={`${sharedClasses} cursor-not-allowed`}
      >
        <SocialIcon id={item.id} />
      </button>
    );
  };

  const linkClasses =
    'text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 py-1.5 inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded';

  return (
    <footer className="w-full bg-[var(--color-1)] border-t border-[var(--border-subtle)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Desktop / Tablet Structured Layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[var(--border-subtle)]">
          {/* Brand & Social Media Placeholders Column */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <a
                href="#home"
                onClick={(e) => handleAnchorClick(e, '#home')}
                className="font-display text-xl font-bold tracking-tight text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-200 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
                aria-label="Nexora One home"
              >
                Nexora One
              </a>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-sm">
                Free beauty website, 30+ templates, salon business tools aur Growth Partner onboarding support ek hi jagah.
              </p>
            </div>

            {/* Social Media Link Placeholders */}
            <div className="space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text)]">
                Connect
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {SOCIAL_LINKS.map((item) => renderSocialControl(item))}
              </div>
              <p className="text-[11px] text-[var(--text-muted)]">
                Official social links verification ke baad active honge.
              </p>
            </div>
          </div>

          {/* Structured Business & Navigation Links Container */}
          <div className="sm:col-span-2 lg:col-span-8 rounded-[24px] bg-[var(--surface-card)] border border-[var(--border-subtle)] p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Group 1: Home Page Navigation */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text)] pb-2.5 mb-3 border-b border-[var(--border-subtle)]">
                Navigation
              </h4>
              <ul className="space-y-1.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className={linkClasses}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Group 2: Business Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text)] pb-2.5 mb-3 border-b border-[var(--border-subtle)]">
                Business Links
              </h4>
              <ul className="space-y-1.5">
                {FOOTER_BUSINESS_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                      className={linkClasses}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Group 3: Ecosystem & Verified Platforms */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text)] pb-2.5 mb-3 border-b border-[var(--border-subtle)]">
                Platforms
              </h4>
              <ul className="space-y-1.5 mb-4">
                <li>
                  <a
                    href="#products"
                    onClick={(e) => handleAnchorClick(e, '#products')}
                    className={linkClasses}
                  >
                    Explore All 8 Services
                  </a>
                </li>
                <li>
                  <a
                    href="#ecosystem"
                    onClick={(e) => handleAnchorClick(e, '#ecosystem')}
                    className={linkClasses}
                  >
                    Ecosystem Overview
                  </a>
                </li>
                {verifiedProducts.map((p) => (
                  <li key={p.id}>
                    <a
                      href={p.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClasses}
                    >
                      <span>{p.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>

              {verifiedProducts.length === 0 && (
                <p className="text-[11px] text-[var(--text-muted)] leading-relaxed pt-2 border-t border-[var(--border-subtle)]">
                  External platform links domain verification ke baad add honge.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Compact Accordion View (Visible, Compact, Zero Dead Space) */}
        <div className="sm:hidden space-y-4 pb-8 border-b border-[var(--border-subtle)]">
          <div className="space-y-3 mb-4">
            <a
              href="#home"
              onClick={(e) => handleAnchorClick(e, '#home')}
              className="font-display text-lg font-bold tracking-tight text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-200 inline-block"
            >
              Nexora One
            </a>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Free beauty website, 30+ templates aur Growth Partner onboarding help.
            </p>
            <div className="pt-1">
              <div className="flex flex-wrap items-center gap-2">
                {SOCIAL_LINKS.map((item) => renderSocialControl(item))}
              </div>
              <p className="text-[11px] text-[var(--text-muted)] mt-2">
                Official social links verification ke baad active honge.
              </p>
            </div>
          </div>

          {/* Accordion Item 1: Quick Navigation */}
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileQuickLinksOpen((prev) => !prev)}
              className="w-full flex items-center justify-between p-3.5 min-h-[44px] text-xs font-semibold uppercase tracking-wider text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-200 bg-[var(--surface-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              aria-expanded={mobileQuickLinksOpen}
            >
              <span>Quick Navigation</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileQuickLinksOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileQuickLinksOpen && (
              <div className="p-3 bg-[var(--color-1)] space-y-1 border-t border-[var(--border-subtle)]">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="block text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 py-2"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Accordion Item 2: Business Links */}
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileBusinessOpen((prev) => !prev)}
              className="w-full flex items-center justify-between p-3.5 min-h-[44px] text-xs font-semibold uppercase tracking-wider text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-200 bg-[var(--surface-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              aria-expanded={mobileBusinessOpen}
            >
              <span>Business Links</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileBusinessOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileBusinessOpen && (
              <div className="p-3 bg-[var(--color-1)] space-y-1 border-t border-[var(--border-subtle)]">
                {FOOTER_BUSINESS_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="block text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Accordion Item 3: Ecosystem & Platforms */}
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileEcosystemOpen((prev) => !prev)}
              className="w-full flex items-center justify-between p-3.5 min-h-[44px] text-xs font-semibold uppercase tracking-wider text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-200 bg-[var(--surface-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              aria-expanded={mobileEcosystemOpen}
            >
              <span>Platforms & Ecosystem</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileEcosystemOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileEcosystemOpen && (
              <div className="p-3 bg-[var(--color-1)] space-y-1 border-t border-[var(--border-subtle)]">
                <a
                  href="#products"
                  onClick={(e) => handleAnchorClick(e, '#products')}
                  className="block text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 py-2"
                >
                  Explore All 8 Services
                </a>
                <a
                  href="#ecosystem"
                  onClick={(e) => handleAnchorClick(e, '#ecosystem')}
                  className="block text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 py-2"
                >
                  Ecosystem Overview
                </a>
                {verifiedProducts.map((p) => (
                  <a
                    key={p.id}
                    href={p.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 py-2"
                  >
                    <span>{p.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Copyright & Transparency Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>© {currentYear} Nexora One. All rights reserved.</p>
          <p className="text-[11px]">
            Showcase platform — live product links are activated upon official domain verification.
          </p>
        </div>
      </div>
    </footer>
  );
};
