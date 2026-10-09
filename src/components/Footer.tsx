import React, { useState } from 'react';
import { NAV_LINKS, PRODUCTS_ROW_1, PRODUCTS_ROW_2 } from '../config/nexoraConfig';
import { ChevronDown } from 'lucide-react';

export const Footer: React.FC = () => {
  const [mobileQuickLinksOpen, setMobileQuickLinksOpen] = useState(false);
  const [mobileEcosystemOpen, setMobileEcosystemOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  // Combine products that have actual verified URLs
  const verifiedProducts = [...PRODUCTS_ROW_1, ...PRODUCTS_ROW_2].filter(
    (product) => product.url !== null
  );

  return (
    <footer className="w-full bg-[#0A0705] border-t border-[color-mix(in_srgb,var(--text)_8%,transparent)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Desktop / Tablet Multi-Column View */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-[color-mix(in_srgb,var(--text)_8%,transparent)]">
          {/* Col 1: Wordmark & Summary */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-3">
            <a
              href="#home"
              className="font-display text-xl font-bold tracking-tight text-[#F0E9E7] hover:text-[#10B981] transition-colors inline-block"
              aria-label="Nexora One home"
            >
              Nexora One
            </a>
            <p className="text-xs text-[color-mix(in_srgb,var(--text)_60%,transparent)] leading-relaxed max-w-sm">
              Bharat ka multi-product ecosystem — salon business tools, beauty services aur commercial solutions ek hi jagah.
            </p>
          </div>

          {/* Col 2: Working Section Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F0E9E7] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[color-mix(in_srgb,var(--text)_70%,transparent)]">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#10B981] transition-colors py-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ecosystem Sections */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F0E9E7] mb-3">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs text-[color-mix(in_srgb,var(--text)_70%,transparent)]">
              <li>
                <a href="#audiences" className="hover:text-[#10B981] transition-colors py-1 inline-block">
                  Aapke Kaam Ke Options
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#10B981] transition-colors py-1 inline-block">
                  Products Showcase
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-[#10B981] transition-colors py-1 inline-block">
                  Business Categories
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#10B981] transition-colors py-1 inline-block">
                  Shuruat Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Configured Products Status */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F0E9E7] mb-3">
              Live Platforms
            </h4>
            {verifiedProducts.length > 0 ? (
              <ul className="space-y-2 text-xs text-[color-mix(in_srgb,var(--text)_70%,transparent)]">
                {verifiedProducts.map((p) => (
                  <li key={p.id}>
                    <a
                      href={p.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#10B981] transition-colors py-1 inline-block"
                    >
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-[color-mix(in_srgb,var(--text)_50%,transparent)] leading-relaxed">
                Platforms status aur direct links config verification ke baad add honge.
              </p>
            )}
          </div>
        </div>

        {/* Mobile Accordion View (Compact, Visible, No Dead Space) */}
        <div className="sm:hidden space-y-4 pb-8 border-b border-[color-mix(in_srgb,var(--text)_8%,transparent)]">
          <div className="mb-4">
            <a
              href="#home"
              className="font-display text-lg font-bold tracking-tight text-[#F0E9E7]"
            >
              Nexora One
            </a>
            <p className="text-xs text-[color-mix(in_srgb,var(--text)_60%,transparent)] mt-1.5 leading-relaxed">
              Salon, beauty aur business ke digital products ek hi jagah.
            </p>
          </div>

          {/* Accordion Item 1: Quick Links */}
          <div className="rounded-xl border border-[color-mix(in_srgb,var(--text)_8%,transparent)] overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileQuickLinksOpen((prev) => !prev)}
              className="w-full flex items-center justify-between p-3.5 text-xs font-semibold uppercase tracking-wider text-[#F0E9E7] bg-[color-mix(in_srgb,var(--text)_3%,transparent)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#10B981]"
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
              <div className="p-3 bg-[#0A0705] space-y-2 border-t border-[color-mix(in_srgb,var(--text)_8%,transparent)]">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-xs text-[color-mix(in_srgb,var(--text)_70%,transparent)] hover:text-[#10B981] py-1.5"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Accordion Item 2: Ecosystem */}
          <div className="rounded-xl border border-[color-mix(in_srgb,var(--text)_8%,transparent)] overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileEcosystemOpen((prev) => !prev)}
              className="w-full flex items-center justify-between p-3.5 text-xs font-semibold uppercase tracking-wider text-[#F0E9E7] bg-[color-mix(in_srgb,var(--text)_3%,transparent)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#10B981]"
              aria-expanded={mobileEcosystemOpen}
            >
              <span>Ecosystem Sections</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileEcosystemOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileEcosystemOpen && (
              <div className="p-3 bg-[#0A0705] space-y-2 border-t border-[color-mix(in_srgb,var(--text)_8%,transparent)]">
                <a
                  href="#audiences"
                  className="block text-xs text-[color-mix(in_srgb,var(--text)_70%,transparent)] hover:text-[#10B981] py-1.5"
                >
                  Aapke Kaam Ke Options
                </a>
                <a
                  href="#products"
                  className="block text-xs text-[color-mix(in_srgb,var(--text)_70%,transparent)] hover:text-[#10B981] py-1.5"
                >
                  Products Showcase
                </a>
                <a
                  href="#ecosystem"
                  className="block text-xs text-[color-mix(in_srgb,var(--text)_70%,transparent)] hover:text-[#10B981] py-1.5"
                >
                  Business Categories
                </a>
                <a
                  href="#how-it-works"
                  className="block text-xs text-[color-mix(in_srgb,var(--text)_70%,transparent)] hover:text-[#10B981] py-1.5"
                >
                  Shuruat Guide
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Copyright & Transparency Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[color-mix(in_srgb,var(--text)_50%,transparent)]">
          <p>© {currentYear} Nexora One. All rights reserved.</p>
          <p className="text-[11px]">
            Showcase platform — live product links are activated upon official domain verification.
          </p>
        </div>
      </div>
    </footer>
  );
};
