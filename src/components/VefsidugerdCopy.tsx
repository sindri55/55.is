'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Code,
  ArrowRight,
  Eye,
  Zap,
  Layout,
  Globe,
  Users,
  Shield,
  Briefcase,
  HeartPulse,
  Hotel,
  ShoppingBag,
  CheckCircle2,
  ChevronRight,
  ArrowUp,
  Sparkles,
  Target,
} from 'lucide-react';
import { Breadcrumb } from './Breadcrumb';
import { COLORS } from '../lib/constants';
import { useContactSheet } from '../lib/contact-sheet-context';
import { ReadyToWorkCTA } from './ReadyToWorkCTA';
import {
  webProblems,
  problemPoints,
  useCases,
  processSteps,
  packages,
  faqItems,
  type WebProblem,
  type ProblemPoint,
  type UseCase,
  type ProcessStep,
  type Package,
  type FAQItem,
} from '../lib/vefsidugerd-data';

// Icon mapping helper
const iconMap: Record<string, any> = {
  Eye,
  Zap,
  Layout,
  Globe,
  Users,
  Shield,
  Briefcase,
  HeartPulse,
  Hotel,
  ShoppingBag,
  Target,
};

export function VefsidugerdCopy() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const { openSheet } = useContactSheet();

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

  return (
    <div className="relative">
      {/* SECTION 0: BREADCRUMB */}
      <section className="relative pt-24 sm:pt-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumb
            items={[
              { label: 'Þjónusta', href: '/#services' },
              { label: 'Vefsíðugerð' },
            ]}
          />
        </div>
      </section>

      {/* SECTION 1: HERO - SIMPLIFIED & BREATHING */}
      <section className="relative py-24 sm:py-32 px-6">
        {/* Subtle aurora gradient - single layer */}
        <motion.div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(0, 255, 194, 0.2) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            {/* Left Column - Copy */}
            <div className="lg:col-span-7">
              {/* Eyebrow Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 mb-8"
                style={{
                  borderColor: `${COLORS.accent.cyan}30`,
                  background: `${COLORS.accent.cyan}08`,
                }}
              >
                <Code className="h-4 w-4" style={{ color: COLORS.accent.cyan }} />
                <span
                  className="uppercase tracking-[0.15em]"
                  style={{
                    fontSize: '11px',
                    color: COLORS.accent.cyan,
                    fontWeight: 600,
                  }}
                >
                  Vefsíðugerð
                </span>
              </motion.div>

              {/* H1 Headline with gradient on "selur" */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
                style={{
                  fontSize: 'clamp(44px, 7vw, 68px)',
                  fontWeight: 800,
                  lineHeight: 1.05,
                  color: COLORS.text.primary,
                }}
              >
                Vefur sem{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #00FFC2 0%, #00B8FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  selur
                </span>
                ,<br />
                ekki bara lítur vel út
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-10 max-w-xl"
                style={{
                  fontSize: 'clamp(18px, 2.5vw, 20px)',
                  color: COLORS.text.secondary,
                  lineHeight: 1.6,
                }}
              >
                Við byggjum vefi sem líta út eins og 2025, ekki 2012
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
                <motion.button
                  onClick={() => openSheet('vefsidugerd')}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 12px 40px rgba(0, 255, 194, 0.4)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl relative overflow-hidden"
                  style={{
                    background: 'rgba(18, 20, 24, 0.8)',
                    border: '2px solid transparent',
                    backgroundImage: 'linear-gradient(rgba(18, 20, 24, 0.8), rgba(18, 20, 24, 0.8)), linear-gradient(135deg, #00FFC2, #00B8FF)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    fontSize: '16px',
                    fontWeight: 700,
                    boxShadow: '0 8px 24px rgba(0, 255, 194, 0.25)',
                  }}
                >
                  <Sparkles className="w-5 h-5 relative z-10" style={{ color: COLORS.accent.cyan }} />
                  <span 
                    className="relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, #00FFC2, #00B8FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Fáðu ókeypis tilboð
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column - Browser Mockup (THE magic trick) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <div
                  className="relative rounded-3xl border p-8"
                  style={{
                    borderColor: COLORS.border.default,
                    background: `linear-gradient(to bottom right, ${COLORS.background.tertiary}, ${COLORS.background.primary})`,
                    boxShadow: '0 25px 80px rgba(0, 255, 194, 0.12)',
                  }}
                >
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>

                  {/* Content Blocks */}
                  <div className="space-y-4">
                    <motion.div
                      className="h-4 rounded"
                      style={{
                        background: 'linear-gradient(to right, rgba(0, 255, 194, 0.3), transparent)',
                      }}
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                      className="h-4 rounded w-3/4"
                      style={{
                        background: 'linear-gradient(to right, rgba(142, 110, 255, 0.3), transparent)',
                      }}
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                    />
                    <div
                      className="h-20 rounded-lg mt-6"
                      style={{ background: `${COLORS.border.default}50` }}
                    />
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div
                        className="h-12 rounded"
                        style={{ background: `${COLORS.border.default}50` }}
                      />
                      <div
                        className="h-12 rounded"
                        style={{ background: `${COLORS.border.default}50` }}
                      />
                    </div>
                  </div>

                  {/* Floating Metric Badge */}
                  <motion.div
                    className="absolute -right-4 top-1/3 rounded-2xl px-4 py-3 border"
                    style={{
                      background: COLORS.background.primary,
                      borderColor: `${COLORS.accent.cyan}40`,
                      boxShadow: `0 8px 24px ${COLORS.accent.cyan}20`,
                    }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div
                      className="mb-1"
                      style={{
                        fontSize: '12px',
                        color: COLORS.text.secondary,
                      }}
                    >
                      Conversion rate
                    </div>
                    <div
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: COLORS.accent.cyan,
                      }}
                    >
                      +340%
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* SECTION 2: PROBLEM CARDS - SIMPLIFIED & STATIC */}
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
              style={{
                fontSize: '18px',
                color: COLORS.text.secondary,
              }}
            >
              Þetta eru vandamálin sem fyrirtæki koma til okkar með.
            </p>
          </motion.div>

          {/* Problem Grid - 5 cards, simplified */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {problemPoints.map((problem: ProblemPoint, idx) => {
              const IconComponent = iconMap[problem.icon];
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
                  className="relative rounded-2xl border p-6 will-change-transform"
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
                    {problem.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '15px',
                      color: COLORS.text.secondary,
                      lineHeight: 1.5,
                    }}
                  >
                    {problem.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Next Step CTA */}

        </div>
      </section>

      {/* SECTION 3: USE CASES - CLEAN GRID */}
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
              Hvaða vefi gerum við?
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: COLORS.text.secondary,
              }}
            >
              Sérsniðin lausn fyrir þitt fyrirtæki og markmið.
            </p>
          </motion.div>

          {/* Use Case Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase: UseCase, idx) => {
              const IconComponent = iconMap[useCase.icon];
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
                    y: -6,
                    borderColor: `${useCase.color}50`,
                    boxShadow: `0 20px 60px ${useCase.color}25, 0 0 0 1px ${useCase.color}20`,
                    transition: { duration: 0.25, ease: [0.21, 0.94, 0.42, 0.99] }
                  }}
                  className="relative rounded-2xl border p-8 overflow-hidden will-change-transform"
                  style={{
                    background: COLORS.background.tertiary,
                    borderColor: COLORS.border.default,
                  }}
                >
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${useCase.color}15`,
                        border: `1px solid ${useCase.color}30`,
                      }}
                    >
                      <IconComponent className="w-7 h-7" style={{ color: useCase.color }} />
                    </div>

                    <div className="flex-1">
                      <h3
                        className="mb-2"
                        style={{
                          fontSize: '22px',
                          fontWeight: 700,
                          color: COLORS.text.primary,
                          lineHeight: 1.3,
                        }}
                      >
                        {useCase.title}
                      </h3>
                      <p
                        className="mb-4"
                        style={{
                          fontSize: '16px',
                          fontWeight: 600,
                          color: useCase.color,
                          lineHeight: 1.4,
                        }}
                      >
                        {useCase.description}
                      </p>
                    </div>
                  </div>

                  {/* Benefits - as body text */}
                  <div>
                    {useCase.benefits.map((benefit, benefitIdx) => (
                      <p
                        key={benefitIdx}
                        style={{
                          fontSize: '15px',
                          color: COLORS.text.secondary,
                          lineHeight: 1.6,
                        }}
                      >
                        {benefit}
                      </p>
                    ))}
                  </div>

                  {/* Stronger accent strip */}
                  <div
                    className="absolute bottom-0 left-0 w-24 h-0.5 rounded-bl-2xl"
                    style={{
                      background: useCase.color,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* SECTION 5: PROOF + LIGHT PRICING */}
      <section id="proof" className="relative py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Proof Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto mb-24"
          >
            <div
              className="relative rounded-3xl p-10 sm:p-14 border overflow-hidden"
              style={{
                background: 'rgba(21, 23, 28, 0.6)',
                border: '1px solid rgba(42, 45, 53, 0.8)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              {/* Glow Effect */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 blur-3xl"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(0, 255, 194, 0.15) 0%, transparent 70%)',
                }}
              />

              {/* Quote */}
              <blockquote
                className="text-center mb-8"
                style={{
                  fontSize: 'clamp(20px, 3vw, 24px)',
                  fontWeight: 500,
                  color: COLORS.text.primary,
                  lineHeight: 1.6,
                }}
              >
                "Við fengum nýjan vef sem bókaði 3x fleiri túra fyrsta mánuðinn. Vefurinn virkar á símanum, hleður fljótt og fólk finnur bara takkann. Svona einfalt er þetta."
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-12 h-12 rounded-full"
                  style={{ background: `${COLORS.accent.cyan}30` }}
                />
                <div>
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: COLORS.text.primary,
                    }}
                  >
                    Kristín Einarsdóttir
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      color: COLORS.text.secondary,
                    }}
                  >
                    Eigandi · Northern Adventure Tours
                  </div>
                </div>
              </div>

              {/* Metric */}
              <div className="text-center mt-8 pt-6 border-t" style={{ borderColor: COLORS.border.default }}>
                <span
                  style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    color: COLORS.accent.cyan,
                  }}
                >
                  +340%
                </span>
                <span
                  className="ml-3"
                  style={{
                    fontSize: '16px',
                    color: COLORS.text.secondary,
                  }}
                >
                  fyrirspurnir á 3 mánuðum
                </span>
              </div>
            </div>
          </motion.div>

          {/* Pricing CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main Content Card */}
            <div
              className="relative rounded-3xl border p-10 sm:p-14 overflow-hidden"
              style={{
                background: 'linear-gradient(to bottom right, #15171C, #1A1D24)',
                borderColor: `${COLORS.accent.cyan}30`,
              }}
            >
              {/* Glow effect */}
              <div
                className="absolute top-0 right-0 w-64 h-64 blur-3xl opacity-10 pointer-events-none"
                style={{ background: COLORS.accent.cyan }}
              />

              <div className="relative z-10 text-center">
                {/* Icon Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', delay: 0.1 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                  style={{
                    background: `${COLORS.accent.cyan}10`,
                    border: `1px solid ${COLORS.accent.cyan}30`,
                  }}
                >
                  <Target className="w-8 h-8" style={{ color: COLORS.accent.cyan }} />
                </motion.div>

                {/* Heading */}
                <h2
                  className="mb-6"
                  style={{
                    fontSize: 'clamp(36px, 6vw, 48px)',
                    fontWeight: 800,
                    color: COLORS.text.primary,
                  }}
                >
                  Hvað kostar vefsíðugerð?
                </h2>

                {/* Description */}
                <p
                  className="mb-8 max-w-2xl mx-auto"
                  style={{
                    fontSize: '18px',
                    color: COLORS.text.secondary,
                    lineHeight: 1.7,
                  }}
                >
                  Hvert verkefni er einstakt og verðlagning fer eftir umfangi, þörfum og markmiðum.
                  Við gefum aldrei staðlaðar tilboð – í staðinn tökum við okkur tíma til að skilja þitt verkefni og sendum þér skýrt verðtilboð.
                </p>

                {/* Value Points */}
                <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0 mt-1"
                      style={{ color: COLORS.accent.cyan }}
                    />
                    <div>
                      <span
                        style={{
                          fontSize: '15px',
                          fontWeight: 600,
                          color: COLORS.text.primary,
                        }}
                      >
                        Verð frá 129.000 kr.
                      </span>
                      <p
                        style={{
                          fontSize: '14px',
                          color: COLORS.text.secondary,
                          marginTop: '2px',
                        }}
                      >
                        Gagnsætt verð án falinna gjalda
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0 mt-1"
                      style={{ color: COLORS.accent.cyan }}
                    />
                    <div>
                      <span
                        style={{
                          fontSize: '15px',
                          fontWeight: 600,
                          color: COLORS.text.primary,
                        }}
                      >
                        Tilboð á 24-48 klst.
                      </span>
                      <p
                        style={{
                          fontSize: '14px',
                          color: COLORS.text.secondary,
                          marginTop: '2px',
                        }}
                      >
                        Fljótleg og nákvæm verðlagning
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0 mt-1"
                      style={{ color: COLORS.accent.cyan }}
                    />
                    <div>
                      <span
                        style={{
                          fontSize: '15px',
                          fontWeight: 600,
                          color: COLORS.text.primary,
                        }}
                      >
                        Engar uppgjörskvaðningar
                      </span>
                      <p
                        style={{
                          fontSize: '14px',
                          color: COLORS.text.secondary,
                          marginTop: '2px',
                        }}
                      >
                        Áætlun er áætlun, ekki lokað verð
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0 mt-1"
                      style={{ color: COLORS.accent.cyan }}
                    />
                    <div>
                      <span
                        style={{
                          fontSize: '15px',
                          fontWeight: 600,
                          color: COLORS.text.primary,
                        }}
                      >
                        Sniðið að þínum þörfum
                      </span>
                      <p
                        style={{
                          fontSize: '14px',
                          color: COLORS.text.secondary,
                          marginTop: '2px',
                        }}
                      >
                        Ekki template, heldur lausn fyrir þig
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => openSheet('vefsidugerd')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-xl"
                  style={{
                    background: 'linear-gradient(to right, #00FFC2, #00B8FF)',
                    color: COLORS.text.dark,
                    fontSize: '18px',
                    fontWeight: 700,
                    boxShadow: '0 8px 32px rgba(0, 255, 194, 0.3)',
                  }}
                >
                  <span>Fá nákvæmt verðtilboð</span>
                  <Sparkles className="w-5 h-5" />
                </motion.button>

                {/* Small Note */}
                <p
                  className="mt-6"
                  style={{
                    fontSize: '14px',
                    color: COLORS.text.muted,
                    fontStyle: 'italic',
                  }}
                >
                  Ókeypis og án skuldbindinga • Svar innan 24-48 klst.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
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
              Spurningar sem við fáum oft
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: COLORS.text.secondary,
              }}
            >
              Svör við því sem flest fyrirtæki vilja vita
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

      {/* SECTION 7: FINAL CTA */}
      <ReadyToWorkCTA context="vefsidugerd" />

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
