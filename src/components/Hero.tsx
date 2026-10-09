import React from 'react';
import { Button } from './ui/Button';
import { motion, useReducedMotion } from 'motion/react';
import { ShieldCheck, ArrowRight, LayoutDashboard, Calendar, Users, ShoppingBag } from 'lucide-react';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const animationVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  const mockupVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' as const, delay: 0.2 } },
  };

  return (
    <section
      id="home"
      className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden scroll-mt-20"
    >
      {/* Background radial atmosphere */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#10B981]/10 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[color-mix(in_srgb,var(--text)_5%,transparent)] border border-[color-mix(in_srgb,var(--text)_10%,transparent)] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#10B981]" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F0E9E7]">
            Nexora One
          </span>
        </motion.div>

        {/* Headline — Space Grotesk, 36px on mobile, 76px on desktop */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          className="font-display text-[36px] sm:text-[54px] lg:text-[76px] font-bold text-[#F0E9E7] leading-[1.1] tracking-tight max-w-4xl text-balance"
        >
          Apne kaam ka digital platform, <span className="text-[#10B981]">ek hi jagah.</span>
        </motion.h1>

        {/* Supporting Line in Indian Hinglish */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ delay: 0.1 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-[color-mix(in_srgb,var(--text)_70%,transparent)] max-w-2xl leading-relaxed text-balance"
        >
          Salon ki website banani ho, beauty service dhoondhni ho, job dekhni ho ya apna business badhana ho — apna option chunein.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ delay: 0.2 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button
            href="#audiences"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto text-base group"
            ariaLabel="Apna Option Chunein"
          >
            Apna Option Chunein
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>

          <Button
            href="#products"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-base"
            ariaLabel="Products Dekhein"
          >
            Products Dekhein
          </Button>
        </motion.div>
      </div>

      {/* Hero Visual Mockup: Clean CSS/SVG device mockup with emerald glow fallback */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={mockupVariants}
        className="mt-14 sm:mt-20 max-w-5xl mx-auto"
      >
        <div className="relative rounded-[24px] bg-[color-mix(in_srgb,var(--color-1)_92%,var(--text)_8%)] border border-[color-mix(in_srgb,var(--text)_10%,transparent)] p-3 sm:p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Top Mockup Window Controls */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[color-mix(in_srgb,var(--text)_8%,transparent)] mb-4 px-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[color-mix(in_srgb,var(--text)_20%,transparent)]" />
              <span className="w-3 h-3 rounded-full bg-[color-mix(in_srgb,var(--text)_20%,transparent)]" />
              <span className="w-3 h-3 rounded-full bg-[color-mix(in_srgb,var(--text)_20%,transparent)]" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[color-mix(in_srgb,var(--text)_5%,transparent)] text-[11px] text-[color-mix(in_srgb,var(--text)_50%,transparent)] font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>nexora.one/ecosystem</span>
            </div>
            <div className="w-10" />
          </div>

          {/* Wireframe Showcase Representation of Nexora Ecosystem */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 p-2 sm:p-4 bg-[#0A0705] rounded-2xl border border-[color-mix(in_srgb,var(--text)_6%,transparent)]">
            {/* Left Nav Overview */}
            <div className="sm:col-span-4 p-4 rounded-xl bg-[color-mix(in_srgb,var(--text)_3%,transparent)] border border-[color-mix(in_srgb,var(--text)_6%,transparent)] flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#10B981] mb-1">
                  Nexora Suite
                </p>
                <h3 className="font-display text-lg font-bold text-[#F0E9E7]">
                  Unified Platform
                </h3>
                <p className="text-xs text-[color-mix(in_srgb,var(--text)_60%,transparent)] mt-1.5 leading-relaxed">
                  Salon tools, booking systems aur business services ek hi platform par connected.
                </p>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[color-mix(in_srgb,var(--text)_5%,transparent)] text-xs text-[#F0E9E7]">
                  <LayoutDashboard className="w-4 h-4 text-[#10B981]" />
                  <span>SalonOS Tools</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[color-mix(in_srgb,var(--text)_5%,transparent)] text-xs text-[#F0E9E7]">
                  <Calendar className="w-4 h-4 text-[#10B981]" />
                  <span>Online Bookings</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[color-mix(in_srgb,var(--text)_5%,transparent)] text-xs text-[#F0E9E7]">
                  <Users className="w-4 h-4 text-[#10B981]" />
                  <span>Partner Network</span>
                </div>
              </div>
            </div>

            {/* Right Product Grid Preview */}
            <div className="sm:col-span-8 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[color-mix(in_srgb,var(--text)_3%,transparent)] border border-[color-mix(in_srgb,var(--text)_6%,transparent)] flex flex-col justify-between">
                <div className="w-8 h-8 rounded-lg bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] flex items-center justify-center text-[#10B981] mb-2">
                  <LayoutDashboard className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F0E9E7]">Salon Management</h4>
                  <p className="text-xs text-[color-mix(in_srgb,var(--text)_50%,transparent)] mt-1">Billing aur appointments</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[color-mix(in_srgb,var(--text)_3%,transparent)] border border-[color-mix(in_srgb,var(--text)_6%,transparent)] flex flex-col justify-between">
                <div className="w-8 h-8 rounded-lg bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] flex items-center justify-center text-[#10B981] mb-2">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F0E9E7]">Customer Discovery</h4>
                  <p className="text-xs text-[color-mix(in_srgb,var(--text)_50%,transparent)] mt-1">Services aur offers</p>
                </div>
              </div>

              <div className="col-span-2 p-4 rounded-xl bg-[color-mix(in_srgb,var(--accent)_6%,transparent)] border border-[color-mix(in_srgb,var(--accent)_20%,transparent)] flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#10B981]">Direct Commerce & Network</p>
                  <p className="text-xs text-[#F0E9E7] mt-0.5">B2B supplies aur verified partner onboarding</p>
                </div>
                <span className="text-[11px] font-semibold text-[#10B981] bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] px-2.5 py-1 rounded-md">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
