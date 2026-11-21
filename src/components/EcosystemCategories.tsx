import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Store, Users, Sparkles, Building2, ArrowRightLeft, ShieldCheck, Layers } from 'lucide-react';

export const EcosystemCategories: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Narrative Top Anchor: Resolves Header's About link without creating extra pages */}
      <div id="about" className="mb-14 scroll-mt-20">
        <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-[24px] bg-[#161616] border border-[color-mix(in_srgb,var(--text)_8%,transparent)] text-center shadow-lg">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#10B981] mb-2 inline-block">
            About Nexora One
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F0E9E7] mb-3">
            One Connected Beauty & Business Ecosystem
          </h2>
          <p className="text-sm md:text-base text-[color-mix(in_srgb,var(--text)_70%,transparent)] leading-relaxed max-w-2xl mx-auto">
            Free beauty website, 30+ templates aur Growth Partner ki onboarding help — Nexora One salons, customers, aur local business services ko ek transparent, connected framework mein jodta hai.
          </p>
        </div>
      </div>

      {/* Ecosystem Visual Network Architecture */}
      <div id="ecosystem" className="scroll-mt-20">
        <SectionHeading
          eyebrow="Ecosystem Architecture"
          title="One Ecosystem, Multiple Services"
          subtitle="Beauty se lekar business ki doosri zarooraton tak, ek connected framework."
        />

        {/* Connected Ecosystem Network Visual Container */}
        <div className="relative rounded-[28px] bg-[#161616] border border-[color-mix(in_srgb,var(--text)_8%,transparent)] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#10B981]/10 blur-[100px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Connected Network Overview Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Node 1: Salon Owners & Websites */}
            <div className="p-6 rounded-2xl bg-[color-mix(in_srgb,var(--text)_3%,transparent)] border border-[color-mix(in_srgb,var(--text)_6%,transparent)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] border border-[color-mix(in_srgb,var(--accent)_25%,transparent)] flex items-center justify-center text-[#10B981] mb-4">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#F0E9E7] mb-1.5">
                  Salons & Shop Owners
                </h3>
                <p className="text-xs text-[color-mix(in_srgb,var(--text)_65%,transparent)] leading-relaxed">
                  Free beauty website, 30+ ready templates, billing tools aur digital booking portal.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[color-mix(in_srgb,var(--text)_6%,transparent)] flex items-center justify-between text-xs text-[#10B981]">
                <span>SalonOS Powered</span>
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>

            {/* Node 2: Growth Partner Onboarding Network */}
            <div className="p-6 rounded-2xl bg-[color-mix(in_srgb,var(--text)_3%,transparent)] border border-[color-mix(in_srgb,var(--text)_6%,transparent)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] border border-[color-mix(in_srgb,var(--accent)_25%,transparent)] flex items-center justify-center text-[#10B981] mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#F0E9E7] mb-1.5">
                  Growth Partner Network
                </h3>
                <p className="text-xs text-[color-mix(in_srgb,var(--text)_65%,transparent)] leading-relaxed">
                  Real assisted onboarding aur field support jo salons ko platform se aasaani se jodta hai.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[color-mix(in_srgb,var(--text)_6%,transparent)] flex items-center justify-between text-xs text-[#10B981]">
                <span>Assisted Support</span>
                <ArrowRightLeft className="w-4 h-4" />
              </div>
            </div>

            {/* Node 3: Customer Discovery */}
            <div className="p-6 rounded-2xl bg-[color-mix(in_srgb,var(--text)_3%,transparent)] border border-[color-mix(in_srgb,var(--text)_6%,transparent)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] border border-[color-mix(in_srgb,var(--accent)_25%,transparent)] flex items-center justify-center text-[#10B981] mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#F0E9E7] mb-1.5">
                  Customer Discovery
                </h3>
                <p className="text-xs text-[color-mix(in_srgb,var(--text)_65%,transparent)] leading-relaxed">
                  Nearby salons aur verified beauty services discover karna, rate card dekhna aur booking karna.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[color-mix(in_srgb,var(--text)_6%,transparent)] flex items-center justify-between text-xs text-[#10B981]">
                <span>App & Web Direct</span>
                <Layers className="w-4 h-4" />
              </div>
            </div>

            {/* Node 4: B2B Commerce & Extended Services */}
            <div className="p-6 rounded-2xl bg-[color-mix(in_srgb,var(--text)_3%,transparent)] border border-[color-mix(in_srgb,var(--text)_6%,transparent)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] border border-[color-mix(in_srgb,var(--accent)_25%,transparent)] flex items-center justify-center text-[#10B981] mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#F0E9E7] mb-1.5">
                  B2B Trade & Services
                </h3>
                <p className="text-xs text-[color-mix(in_srgb,var(--text)_65%,transparent)] leading-relaxed">
                  Distributor supplies, salon hiring (Jobs), commercial leasing (Real Estate) aur Food platform.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[color-mix(in_srgb,var(--text)_6%,transparent)] flex items-center justify-between text-xs text-[#10B981]">
                <span>Connected Commerce</span>
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
