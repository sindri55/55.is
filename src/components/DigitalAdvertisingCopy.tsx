'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Zap,
  Sparkles,
  ChevronRight,
  DollarSign,
  Eye,
  MessageSquare,
  AlertCircle,
  Target,
  Activity,
  BarChart3,
  ArrowUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Breadcrumb } from './Breadcrumb';
import { PerformanceDashboardCard } from './PerformanceDashboardCard';
import { PlatformCard3D } from './PlatformCard3D';
import { COLORS } from '../lib/constants';
import { ReadyToWorkCTA } from './ReadyToWorkCTA';
import { useContactSheet } from '../lib/contact-sheet-context';
import {
  roasScenarios,
  problemCards,
  adsServices,
  mainPlatforms,
  secondaryPlatforms,
  processSteps,
  caseStudies,
  faqItems,
  type ROASScenario,
  type ProblemCard,
  type AdsService,
  type Platform,
  type SecondaryPlatform,
  type ProcessStep,
  type CaseStudy,
  type FAQItem,
} from '../lib/ads-data';

// Icon mapping helper
const iconMap: Record<string, any> = {
  DollarSign,
  Eye,
  MessageSquare,
  AlertCircle,
  Target,
  Sparkles,
  Activity,
  BarChart3,
};

// Purple theme color
const PURPLE = '#8E6EFF';

export function DigitalAdvertisingCopy() {
  const { openSheet } = useContactSheet();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedScenario, setSelectedScenario] = useState<string>('small');

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

  const currentScenario = roasScenarios.find(s => s.id === selectedScenario) || roasScenarios[0];

  return (
    <div className="relative">
      {/* SECTION 0: BREADCRUMB */}
      <section className="relative pt-24 sm:pt-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumb
            items={[
              { label: 'Þjónusta', href: '/#services' },
              { label: 'Stafrænar auglýsingar' },
            ]}
          />
        </div>
      </section>

      {/* SECTION 1: HERO - ROAS DASHBOARD (THE magic trick) */}
      <section className="relative py-24 sm:py-32 px-6">
        {/* Soft purple aurora gradient */}
        <motion.div
          className="absolute inset-0 opacity-12 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(142, 110, 255, 0.25) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.14, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            {/* Left Column - Copy */}
            <div className="lg:col-span-7">
              {/* Eyebrow Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 mb-8"
                style={{
                  borderColor: `${PURPLE}30`,
                  background: `${PURPLE}08`,
                }}
              >
                <Zap className="h-4 w-4" style={{ color: PURPLE }} />
                <span
                  className="uppercase tracking-[0.15em]"
                  style={{
                    fontSize: '11px',
                    color: PURPLE,
                    fontWeight: 600,
                  }}
                >
                  Stafrænar auglýsingar
                </span>
              </motion.div>

              {/* H1 Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
                style={{
                  fontWeight: 800,
                  lineHeight: 1.05,
                  color: COLORS.text.primary,
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontSize: 'clamp(28px, 4.5vw, 42px)',
                  }}
                >
                  Ekki fleiri auglýsingar
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: 'clamp(48px, 8vw, 72px)',
                  }}
                >
                  Betri auglýsingar
                </span>
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
                Við keyrum Meta og Google auglýsingar sem byggja á gögnum, ekki ágískunum. Þú færð mælingar sem virka, skýrslur sem þú skilur og áætlun sem borgar sig.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
                <motion.button
                  onClick={() => openSheet('ads')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
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
                    Fá ókeypis greiningu á auglýsingum
                  </span>
                </motion.button>
              </motion.div>

              {/* Microcopy under CTAs */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                style={{
                  fontSize: '14px',
                  color: COLORS.text.muted,
                  lineHeight: 1.5,
                }}
              >
                Greiningin er stutt yfirferð á tækifærum og vandamálum í herferðunum þínum. Þú færð heildarmynd án þess að skuldbinda þig.
              </motion.p>
            </div>

            {/* Right Column - ROAS Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-5"
            >
              {/* Scenario Toggle Pills */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {roasScenarios.map((scenario: ROASScenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => setSelectedScenario(scenario.id)}
                    className="px-4 py-2 rounded-full border transition-all"
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      borderColor: selectedScenario === scenario.id ? PURPLE : COLORS.border.default,
                      background: selectedScenario === scenario.id ? `${PURPLE}15` : 'transparent',
                      color: selectedScenario === scenario.id ? PURPLE : COLORS.text.secondary,
                    }}
                  >
                    {scenario.label}
                  </button>
                ))}
              </div>

              {/* ROAS Dashboard Card with scenario data */}
              <div className="relative">
                <PerformanceDashboardCard />
                
                {/* Scenario Data Overlay */}
                <motion.div
                  key={selectedScenario}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 p-4 rounded-xl border text-center"
                  style={{
                    background: COLORS.background.secondary,
                    borderColor: `${PURPLE}30`,
                  }}
                >
                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div>
                      <div
                        style={{
                          fontSize: '12px',
                          color: COLORS.text.muted,
                          marginBottom: '4px',
                        }}
                      >
                        Budget
                      </div>
                      <div
                        style={{
                          fontSize: '18px',
                          fontWeight: 700,
                          color: COLORS.text.primary,
                        }}
                      >
                        {currentScenario.budget}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '12px',
                          color: COLORS.text.muted,
                          marginBottom: '4px',
                        }}
                      >
                        ROAS
                      </div>
                      <div
                        style={{
                          fontSize: '18px',
                          fontWeight: 700,
                          color: PURPLE,
                        }}
                      >
                        {currentScenario.roas}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '12px',
                          color: COLORS.text.muted,
                          marginBottom: '4px',
                        }}
                      >
                        Revenue
                      </div>
                      <div
                        style={{
                          fontSize: '18px',
                          fontWeight: 700,
                          color: COLORS.accent.cyan,
                        }}
                      >
                        {currentScenario.revenue}
                      </div>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: '13px',
                      color: COLORS.text.muted,
                    }}
                  >
                    {currentScenario.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM CARDS - TIGHTENED */}
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
              Við heyrum þetta oft. Og nei, þú ert ekki að gera neitt rangt. Þetta er bara algengt þegar mælingar, uppsetning og skýr markmið vantar.
            </p>
          </motion.div>

          {/* Problem Grid - 2x2 */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {problemCards.map((problem: ProblemCard, idx) => {
              const IconComponent = iconMap[problem.icon];
              
              return (
                <motion.div
                  key={idx}
                  initial={{ 
                    opacity: 0,
                    y: 24,
                  }}
                  whileInView={{ 
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                  transition={{ 
                    duration: 0.6,
                    delay: idx * 0.08,
                    ease: [0.21, 0.94, 0.42, 0.99],
                  }}
                  whileHover={{ 
                    y: -4,
                    borderColor: `${PURPLE}50`,
                    boxShadow: `0 20px 40px -16px ${PURPLE}25, 0 0 0 1px ${PURPLE}20`,
                    transition: { 
                      duration: 0.25,
                      ease: [0.21, 0.94, 0.42, 0.99]
                    }
                  }}
                  className="group relative rounded-2xl border p-8 overflow-hidden will-change-transform"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.background.tertiary} 0%, ${COLORS.background.secondary} 100%)`,
                    borderColor: COLORS.border.default,
                  }}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top right, ${PURPLE}06, transparent 70%)`,
                      transition: 'opacity 0.35s ease-out'
                    }}
                  />

                  {/* Icon with glow */}
                  <div className="relative mb-6">
                    <div
                      className="inline-flex items-center justify-center w-14 h-14 rounded-2xl relative"
                      style={{
                        background: `linear-gradient(135deg, ${PURPLE}15, ${PURPLE}08)`,
                        border: `1px solid ${PURPLE}30`,
                      }}
                    >
                      <IconComponent className="w-6 h-6 relative z-10" style={{ color: PURPLE }} />
                      
                      {/* Icon glow effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl blur-xl opacity-40 group-hover:opacity-80"
                        style={{
                          background: `radial-gradient(circle, ${PURPLE}40, transparent 70%)`,
                          transition: 'opacity 0.35s ease-out'
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Title */}
                    <h3
                      className="mb-3"
                      style={{
                        fontSize: '19px',
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
                        lineHeight: 1.6,
                      }}
                    >
                      {problem.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${PURPLE}50, transparent)`,
                      transition: 'opacity 0.35s ease-out'
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 3: WHAT WE DO IN ADS - OUTCOME-LED */}
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
              className="mb-2"
              style={{
                fontSize: '18px',
                color: COLORS.text.secondary,
              }}
            >
              Fjórar stoðir sem vinna saman. Ef ein vantar verður þetta dýrara en það þarf.
            </p>
          </motion.div>

          {/* Service Cards Grid - 2x2 */}
          <div className="grid md:grid-cols-2 gap-8">
            {adsServices.map((service: AdsService, idx) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                  transition={{ 
                    duration: 0.6,
                    delay: idx * 0.08,
                    ease: [0.21, 0.94, 0.42, 0.99],
                  }}
                  whileHover={{ 
                    y: -4,
                    borderColor: `${service.color}50`,
                    boxShadow: `0 20px 40px -16px ${service.color}25, 0 0 0 1px ${service.color}20`,
                    transition: { 
                      duration: 0.25,
                      ease: [0.21, 0.94, 0.42, 0.99]
                    }
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
                        background: `${service.color}15`,
                        border: `1px solid ${service.color}30`,
                      }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: service.color }} />
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
                        {service.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '14px',
                          color: COLORS.text.secondary,
                        }}
                      >
                        {service.benefit}
                      </p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {service.bullets.map((bullet, bulletIdx) => (
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
                          style={{ backgroundColor: service.color }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Small accent line */}
                  <div
                    className="absolute bottom-0 left-0 w-16 h-1 rounded-bl-2xl"
                    style={{
                      background: service.color,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: PLATFORMS - 3D TILT FOR META & GOOGLE (secondary wow) */}
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
              Hvar keyrum við?
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: COLORS.text.secondary,
              }}
            >
              Tvær megin platforms og nokkrar secondary þar sem það hentar.
            </p>
          </motion.div>

          {/* Main Platforms - 3D Tilt Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {mainPlatforms.map((platform: Platform, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <PlatformCard3D platform={platform} />
                
                {/* Typical Result Below Card */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-4 text-center"
                  style={{
                    fontSize: '14px',
                    color: COLORS.text.muted,
                    fontStyle: 'italic',
                  }}
                >
                  {platform.typicalResult}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Secondary Platforms - Flat Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <p
              className="mb-6"
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: COLORS.text.secondary,
              }}
            >
              Önnur platforms þar sem við keyrum auglýsingar líka:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {secondaryPlatforms.map((platform: SecondaryPlatform, idx) => (
                <div
                  key={idx}
                  className="px-6 py-4 rounded-xl border"
                  style={{
                    background: COLORS.background.secondary,
                    borderColor: COLORS.border.default,
                  }}
                >
                  <div
                    className="mb-1"
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: COLORS.text.primary,
                    }}
                  >
                    {platform.name}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: COLORS.text.secondary,
                    }}
                  >
                    {platform.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: PROOF - 2-3 STRONG CASES */}
      <section id="proof" className="relative py-24 sm:py-32 px-6">
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
              Dæmi um árangur
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: COLORS.text.secondary,
              }}
            >
              Raunveruleg case studies með raunverulegum tölum.
            </p>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-8">
            {caseStudies.map((caseStudy: CaseStudy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative rounded-2xl border p-8"
                style={{
                  background: COLORS.background.tertiary,
                  borderColor: COLORS.border.default,
                }}
              >
                {/* Industry Badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
                  style={{
                    background: `${PURPLE}10`,
                    border: `1px solid ${PURPLE}20`,
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: PURPLE,
                    }}
                  >
                    {caseStudy.industry}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Left Column - Context */}
                  <div className="md:col-span-2">
                    <h3
                      className="mb-3"
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: COLORS.text.primary,
                      }}
                    >
                      Ástand:
                    </h3>
                    <p
                      className="mb-6"
                      style={{
                        fontSize: '15px',
                        color: COLORS.text.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      {caseStudy.situation}
                    </p>

                    <h3
                      className="mb-3"
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: COLORS.text.primary,
                      }}
                    >
                      Hvað gerðum við:
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {caseStudy.whatWeDid.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle2
                            className="w-5 h-5 shrink-0 mt-0.5"
                            style={{ color: PURPLE }}
                          />
                          <span
                            style={{
                              fontSize: '14px',
                              color: COLORS.text.secondary,
                            }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column - Results */}
                  <div>
                    <h3
                      className="mb-4"
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: COLORS.text.primary,
                      }}
                    >
                      Árangur:
                    </h3>
                    {caseStudy.results.map((result, resultIdx) => (
                      <div key={resultIdx} className="mb-4">
                        <div
                          className="mb-1"
                          style={{
                            fontSize: '12px',
                            color: COLORS.text.muted,
                          }}
                        >
                          {result.label}
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            style={{
                              fontSize: '16px',
                              color: COLORS.text.secondary,
                              textDecoration: 'line-through',
                            }}
                          >
                            {result.before}
                          </span>
                          <ArrowRight className="w-4 h-4" style={{ color: PURPLE }} />
                          <span
                            style={{
                              fontSize: '24px',
                              fontWeight: 800,
                              color: PURPLE,
                            }}
                          >
                            {result.after}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div
                      className="mt-4 pt-4"
                      style={{
                        borderTop: `1px solid ${COLORS.border.default}`,
                        fontSize: '13px',
                        color: COLORS.text.muted,
                      }}
                    >
                      Tímarammi: {caseStudy.timeframe}
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div
                  className="mt-6 pt-6"
                  style={{
                    borderTop: `1px solid ${COLORS.border.default}`,
                  }}
                >
                  <p
                    style={{
                      fontSize: '15px',
                      color: COLORS.text.primary,
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ color: PURPLE }}>Niðurstaða: </span>
                    {caseStudy.outcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
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
              Heiðarleg svör við algengum spurningum um ads
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqItems.map((faq: FAQItem, idx) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                className="border rounded-2xl overflow-hidden"
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
                      style={{ color: PURPLE }}
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

      {/* SECTION 8: AD ACCOUNT REVIEW CTA */}
      <ReadyToWorkCTA
        context="ads"
        accentGradient={[PURPLE, COLORS.accent.cyan]}
        glowColor={PURPLE}
      />

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
