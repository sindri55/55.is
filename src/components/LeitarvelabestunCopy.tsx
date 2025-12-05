'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Search,
  Sparkles,
  ChevronRight,
  Eye,
  Activity,
  AlertCircle,
  Clock,
  Code,
  FileText,
  Link2,
  Target,
  CheckCircle2,
  BarChart3,
  ArrowUp,
} from 'lucide-react';
import { Breadcrumb } from './Breadcrumb';
import { ClimbingSERPSimple } from './ClimbingSERPSimple';
import { COLORS } from '../lib/constants';
import { ReadyToWorkCTA } from './ReadyToWorkCTA';
import { useContactSheet } from '../lib/contact-sheet-context';
import {
  industryChips,
  seoProblems,
  problemCards,
  seoPillars,
  processSteps,
  caseStudies,
  faqItems,
  type IndustryChip,
  type SEOProblem,
  type ProblemCard,
  type SEOPillar,
  type ProcessStep,
  type CaseStudy,
  type FAQItem,
} from '../lib/seo-data';

// Icon mapping helper
const iconMap: Record<string, any> = {
  Eye,
  Activity,
  AlertCircle,
  Clock,
  Code,
  FileText,
  Link2,
  Target,
};

export function LeitarvelabestunCopy() {
  const { openSheet } = useContactSheet();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  
  // Reactive states
  const [selectedIndustry, setSelectedIndustry] = useState<string>('tourism');
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);

  // Back to top visibility handler
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedChip = industryChips.find(chip => chip.id === selectedIndustry);

  return (
    <div className="relative">
      {/* SECTION 0: BREADCRUMB */}
      <section className="relative pt-24 sm:pt-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumb
            items={[
              { label: 'Þjónusta', href: '/#services' },
              { label: 'Leitarvélabestun' },
            ]}
          />
        </div>
      </section>

      {/* SECTION 1: HERO WITH CLIMBING SERP - SIMPLIFIED & BREATHING */}
      <section className="relative py-8 sm:py-12 lg:py-14 px-6">
        {/* Subtle aurora gradient */}
        <motion.div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(0, 255, 194, 0.2) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Column - Copy */}
            <div className="lg:col-span-7">
              {/* Eyebrow Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 mb-3"
                style={{
                  borderColor: `${COLORS.accent.cyan}30`,
                  background: `${COLORS.accent.cyan}08`,
                }}
              >
                <Search className="h-3.5 w-3.5" style={{ color: COLORS.accent.cyan }} />
                <span
                  className="uppercase tracking-[0.15em]"
                  style={{
                    fontSize: '10px',
                    color: COLORS.accent.cyan,
                    fontWeight: 600,
                  }}
                >
                  Leitarvélabestun
                </span>
              </motion.div>

              {/* H1 Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-3"
                style={{
                  fontSize: 'clamp(28px, 5.5vw, 48px)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: COLORS.text.primary,
                }}
              >
                SEO sem klifrar í alvöru,
                <br />
                ekki bara í skýrslum
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-4 max-w-xl"
                style={{
                  fontSize: 'clamp(14px, 2.2vw, 17px)',
                  color: COLORS.text.secondary,
                  lineHeight: 1.5,
                }}
              >
                Við hjálpum íslenskum fyrirtækjum að fara úr{' '}
                <span style={{ color: '#E5E7EB' }}>"einhversstaðar á síðu 3+"</span> í efstu
                sæti sem skila{' '}
                <span style={{ color: COLORS.accent.cyan, fontWeight: 600 }}>
                  fyrirspurnum, bókunum og sölu
                </span>
                .
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-wrap items-start gap-3"
              >
                <motion.button
                  onClick={() => openSheet('seo')}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 12px 32px rgba(0, 255, 194, 0.35)',
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl relative overflow-hidden"
                  style={{
                    background: 'rgba(18, 20, 24, 0.8)',
                    border: '2px solid transparent',
                    backgroundImage: 'linear-gradient(rgba(18, 20, 24, 0.8), rgba(18, 20, 24, 0.8)), linear-gradient(135deg, #00FFC2, #00B8FF)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    fontSize: '14px',
                    fontWeight: 700,
                    boxShadow: '0 8px 24px rgba(0, 255, 194, 0.25)',
                  }}
                >
                  <Sparkles className="w-4 h-4 relative z-10" style={{ color: COLORS.accent.cyan }} />
                  <span 
                    className="relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, #00FFC2, #00B8FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Fáðu ókeypis SEO greiningu
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column - SERP Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-5"
            >
              <ClimbingSERPSimple />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM CARDS - SIMPLIFIED */}
      <section className="relative py-24 sm:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(36px, 6vw, 44px)',
                fontWeight: 700,
                color: COLORS.text.primary,
              }}
            >
              Þekkir þú þetta?
            </h2>
            <p
              className="max-w-3xl mx-auto"
              style={{
                fontSize: '18px',
                color: COLORS.text.secondary,
                lineHeight: 1.6,
              }}
            >
              Við heyrum þetta aftur og aftur frá fyrirtækjum sem hafa reynt SEO áður. Og við heyrum:
            </p>
          </motion.div>

          {/* Problem Cards Grid - 2x2 */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {problemCards.map((card: ProblemCard, idx) => {
              const IconComponent = iconMap[card.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.08,
                    ease: [0.21, 0.94, 0.42, 0.99]
                  }}
                  whileHover={{ 
                    y: -4,
                    borderColor: `${COLORS.accent.cyan}50`,
                    boxShadow: `0 20px 40px -16px ${COLORS.accent.cyan}25`,
                    transition: { duration: 0.25, ease: [0.21, 0.94, 0.42, 0.99] }
                  }}
                  className="group relative rounded-2xl border p-6 will-change-transform"
                  style={{
                    background: COLORS.background.tertiary,
                    borderColor: COLORS.border.default,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                    style={{
                      background: `${COLORS.accent.cyan}10`,
                      border: `1px solid ${COLORS.accent.cyan}20`,
                    }}
                  >
                    <IconComponent className="w-5 h-5" style={{ color: COLORS.accent.cyan }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-2"
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: COLORS.text.primary,
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '15px',
                      color: COLORS.text.secondary,
                      lineHeight: 1.5,
                    }}
                  >
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* SECTION 3: SEO PILLARS - SIMPLIFIED */}
      <section className="relative py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(36px, 6vw, 44px)',
                fontWeight: 700,
                color: COLORS.text.primary,
              }}
            >
              Hvað gerum við?
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: COLORS.text.secondary,
              }}
            >
              Fjögur atriði í SEO sem þurfa að smella saman. Við sjáum um að þeir geri það.
            </p>
          </motion.div>

          {/* Pillars Grid - Simplified Design */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {seoPillars.map((pillar: SEOPillar, idx) => {
              const IconComponent = iconMap[pillar.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.08,
                    ease: [0.21, 0.94, 0.42, 0.99]
                  }}
                  whileHover={{ 
                    y: -4,
                    borderColor: `${pillar.color}50`,
                    boxShadow: `0 20px 40px -16px ${pillar.color}25, 0 0 0 1px ${pillar.color}20`,
                    transition: { duration: 0.25, ease: [0.21, 0.94, 0.42, 0.99] }
                  }}
                  className="relative rounded-2xl border p-8 will-change-transform overflow-hidden"
                  style={{
                    background: COLORS.background.tertiary,
                    borderColor: COLORS.border.default,
                  }}
                >
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${pillar.color}15`,
                        border: `1px solid ${pillar.color}30`,
                      }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: pillar.color }} />
                    </div>

                    <div className="flex-1">
                      <h3
                        className="mb-1"
                        style={{
                          fontSize: '20px',
                          fontWeight: 700,
                          color: COLORS.text.primary,
                        }}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: pillar.color,
                        }}
                      >
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Bullets - Max 3 */}
                  <ul className="space-y-2">
                    {pillar.bullets.map((bullet, bulletIdx) => (
                      <li
                        key={bulletIdx}
                        className="flex items-center gap-2"
                        style={{
                          fontSize: '14px',
                          color: COLORS.text.secondary,
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: pillar.color }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Small accent strip at bottom */}
                  <div
                    className="absolute bottom-0 left-0 w-16 h-1 rounded-bl-2xl"
                    style={{
                      background: pillar.color,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5: PROOF - 2 STRONG CASES WITH HOOK */}
      <section id="proof" className="relative py-24 sm:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hook Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(36px, 6vw, 48px)',
                fontWeight: 700,
                color: COLORS.text.primary,
              }}
            >
              Árangur sem sýnir hvað gott SEO raunverulega gerir.
            </h2>
          </motion.div>

          {/* Case Study Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy: CaseStudy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  ease: [0.21, 0.94, 0.42, 0.99]
                }}
                whileHover={{
                  y: -4,
                  borderColor: `${COLORS.accent.cyan}50`,
                  boxShadow: `0 20px 40px -16px ${COLORS.accent.cyan}25`,
                  transition: { duration: 0.25, ease: [0.21, 0.94, 0.42, 0.99] }
                }}
                className="relative rounded-2xl border p-8 will-change-transform"
                style={{
                  background: COLORS.background.tertiary,
                  borderColor: COLORS.border.default,
                }}
              >
                {/* Industry Badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
                  style={{
                    background: `${COLORS.accent.cyan}10`,
                    border: `1px solid ${COLORS.accent.cyan}20`,
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: COLORS.accent.cyan,
                    }}
                  >
                    {caseStudy.industry}
                  </span>
                </div>

                {/* Context */}
                <p
                  className="mb-6"
                  style={{
                    fontSize: '15px',
                    color: COLORS.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  {caseStudy.context}
                </p>

                {/* Main Metric - Large */}
                <div className="mb-6">
                  <div
                    className="mb-2"
                    style={{
                      fontSize: '13px',
                      color: '#6B7280',
                    }}
                  >
                    {caseStudy.mainMetric.label}
                  </div>
                  <div className="flex items-baseline gap-3">
                    <div
                      style={{
                        fontSize: '40px',
                        fontWeight: 800,
                        color: COLORS.accent.cyan,
                        lineHeight: 1,
                      }}
                    >
                      {caseStudy.mainMetric.value}
                    </div>
                    <div
                      style={{
                        fontSize: '15px',
                        color: COLORS.text.secondary,
                      }}
                    >
                      {caseStudy.mainMetric.timeframe}
                    </div>
                  </div>
                </div>

                {/* Supporting Metric */}
                <div className="mb-6">
                  <span
                    style={{
                      fontSize: '13px',
                      color: '#6B7280',
                    }}
                  >
                    {caseStudy.supportingMetric.label}:{' '}
                  </span>
                  <span
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: COLORS.text.primary,
                    }}
                  >
                    {caseStudy.supportingMetric.value}
                  </span>
                </div>

                {/* Result */}
                <div
                  className="pt-6"
                  style={{
                    borderTop: `1px solid ${COLORS.border.default}`,
                  }}
                >
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#E5E7EB',
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        color: COLORS.accent.cyan,
                        fontWeight: 600,
                      }}
                    >
                      Árangur:
                    </span>{' '}
                    {caseStudy.result}
                  </p>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-30 pointer-events-none"
                  style={{
                    background: `linear-gradient(to bottom right, ${COLORS.accent.cyan}, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ - 5 KEY QUESTIONS */}
      <section className="relative py-24 sm:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(36px, 6vw, 44px)',
                fontWeight: 700,
                color: COLORS.text.primary,
              }}
            >
              Spurningar sem allir spyrja
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: COLORS.text.secondary,
              }}
            >
              Heiðarleg svör við algengum SEO spurningum
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqItems.map((faq: FAQItem, idx) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.05,
                  ease: [0.21, 0.94, 0.42, 0.99]
                }}
                className="border rounded-2xl overflow-hidden will-change-transform"
                style={{
                  borderColor: COLORS.border.default,
                  background: COLORS.background.tertiary,
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#1A1D24] transition-colors"
                >
                  <span
                    className="pr-4"
                    style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: COLORS.text.primary,
                    }}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFAQ === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight
                      className="w-5 h-5 transform rotate-90"
                      style={{ color: COLORS.accent.cyan }}
                    />
                  </motion.div>
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFAQ === faq.id ? 'auto' : 0,
                    opacity: expandedFAQ === faq.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div
                    className="px-6 pb-5 pt-4"
                    style={{
                      fontSize: '15px',
                      color: COLORS.text.secondary,
                      lineHeight: 1.6,
                      borderTop: `1px solid ${COLORS.border.default}`,
                    }}
                  >
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ReadyToWorkCTA context="seo" />

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full flex items-center justify-center border-2 transition-colors"
          style={{
            background: COLORS.background.tertiary,
            borderColor: COLORS.border.default,
          }}
          aria-label="Fara efst á síðu"
        >
          <ArrowUp
            className="w-5 h-5"
            style={{ color: COLORS.text.secondary }}
          />
        </motion.button>
      )}
    </div>
  );
}
