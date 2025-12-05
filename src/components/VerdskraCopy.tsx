'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  Sparkles,
  Zap,
  TrendingUp,
  Rocket,
  Layout,
  Globe,
  ShoppingCart,
  Settings,
  ArrowUp,
} from 'lucide-react';
import { COLORS } from '../lib/constants';
import { ReadyToWorkCTA } from './ReadyToWorkCTA';
import { useContactSheet } from '../lib/contact-sheet-context';
import {
  monthlyPackages,
  webProjects,
  includedItems,
  notIncludedItems,
  faqItems,
  type MonthlyPackage,
  type WebProject,
  type FAQItem,
} from '../lib/verdskra-data';

// Icon mapping
const packageIcons: Record<string, any> = {
  synileiki: Zap,
  voxtur: TrendingUp,
  framurskarandi: Rocket,
};

const webProjectIcons: Record<string, any> = {
  'ai-landing': Zap,
  'company-web': Globe,
  'wordpress-shopify': ShoppingCart,
};

export function VerdskraCopy() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
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
      {/* SECTION 1: HERO */}
      <section className="relative py-32 sm:py-40 px-6">
        {/* Subtle aurora gradient */}
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

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: `${COLORS.accent.cyan}10`,
              border: `1px solid ${COLORS.accent.cyan}30`,
            }}
          >
            <span
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: COLORS.accent.cyan,
              }}
            >
              Engin binding • 30 daga uppsögn
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
            style={{
              fontSize: 'clamp(48px, 8vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.05,
              color: COLORS.text.primary,
            }}
          >
            Transparent verð. Engin binding.
            <br />
            Ekkert bull***t.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-10 max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(18px, 3vw, 22px)',
              fontWeight: 600,
              color: COLORS.text.secondary,
              lineHeight: 1.5,
            }}
          >
            Nákvæm verð á auglýsingum og SEO – svo þú veist strax hvort við erum réttu aðilarnir.
          </motion.p>

          {/* Trust bullets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" style={{ color: COLORS.accent.cyan }} />
              <span style={{ fontSize: '15px', color: COLORS.text.secondary }}>
                Allt verð sýnt fyrirfram
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" style={{ color: COLORS.accent.cyan }} />
              <span style={{ fontSize: '15px', color: COLORS.text.secondary }}>
                Engin langtímasamningur
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" style={{ color: COLORS.accent.cyan }} />
              <span style={{ fontSize: '15px', color: COLORS.text.secondary }}>
                Þú átt öll gögn og aðganga
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {/* CTA Button */}
            <motion.button
              onClick={() => openSheet('general')}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 12px 32px rgba(0, 255, 194, 0.35)',
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl relative overflow-hidden"
              style={{
                background: 'rgba(18, 20, 24, 0.8)',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(rgba(18, 20, 24, 0.8), rgba(18, 20, 24, 0.8)), linear-gradient(135deg, #00FFC2, #00B8FF)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                fontSize: '17px',
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
                Fá nákvæmt tilboð
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: HOW MONTHLY PACKAGES WORK */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
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
              Hvað er innifalið í pökkunum?
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontSize: '18px',
                color: COLORS.text.secondary,
                lineHeight: 1.7,
              }}
            >
              Einfalt ferli, skýr árangur og engin óþægindi.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Process */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border p-8"
              style={{
                background: COLORS.background.tertiary,
                borderColor: `${COLORS.accent.cyan}30`,
              }}
            >
              <h3
                className="mb-8"
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: COLORS.text.primary,
                }}
              >
                Ferlið
              </h3>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${COLORS.accent.cyan}20`,
                      border: `1px solid ${COLORS.accent.cyan}40`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: COLORS.accent.cyan,
                      }}
                    >
                      1
                    </span>
                  </div>
                  <div>
                    <h4
                      className="mb-1"
                      style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: COLORS.text.primary,
                      }}
                    >
                      Þú velur áherslu
                    </h4>
                    <p
                      style={{
                        fontSize: '14px',
                        color: COLORS.text.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      Auglýsingar, SEO eða blanda
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${COLORS.accent.cyan}20`,
                      border: `1px solid ${COLORS.accent.cyan}40`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: COLORS.accent.cyan,
                      }}
                    >
                      2
                    </span>
                  </div>
                  <div>
                    <h4
                      className="mb-1"
                      style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: COLORS.text.primary,
                      }}
                    >
                      Við setjum upp og keyrum
                    </h4>
                    <p
                      style={{
                        fontSize: '14px',
                        color: COLORS.text.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      Stefna, uppsetning og daglegt eftirlit
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${COLORS.accent.cyan}20`,
                      border: `1px solid ${COLORS.accent.cyan}40`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: COLORS.accent.cyan,
                      }}
                    >
                      3
                    </span>
                  </div>
                  <div>
                    <h4
                      className="mb-1"
                      style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: COLORS.text.primary,
                      }}
                    >
                      Þú sérð árangur og gögn
                    </h4>
                    <p
                      style={{
                        fontSize: '14px',
                        color: COLORS.text.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      Skýrar skýrslur og mánaðarlegir fundir
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border p-8"
              style={{
                background: COLORS.background.tertiary,
                borderColor: COLORS.border.default,
              }}
            >
              <h3
                className="mb-8"
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: COLORS.text.primary,
                }}
              >
                Af hverju þetta virkar
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: COLORS.accent.cyan }}
                  />
                  <span
                    style={{
                      fontSize: '15px',
                      color: COLORS.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    Engin binding – 30 daga uppsögn
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: COLORS.accent.cyan }}
                  />
                  <span
                    style={{
                      fontSize: '15px',
                      color: COLORS.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    Þú átt reikningana og gögnin, ekki við
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: COLORS.accent.cyan }}
                  />
                  <span
                    style={{
                      fontSize: '15px',
                      color: COLORS.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    Allt mælt og útskýrt á íslensku
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: COLORS.accent.cyan }}
                  />
                  <span
                    style={{
                      fontSize: '15px',
                      color: COLORS.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    Reglulegar fínstillingar og prófanir
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: COLORS.accent.cyan }}
                  />
                  <span
                    style={{
                      fontSize: '15px',
                      color: COLORS.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    Skýrir fundir eða upptökur eftir áætlun
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MONTHLY PACKAGES */}
      <section className="relative py-24 px-6">
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
              Mánaðarlegir pakkar  Ads & SEO
            </h2>
          </motion.div>

          {/* Package Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {monthlyPackages.map((pkg: MonthlyPackage, idx) => {
              const IconComponent = packageIcons[pkg.id];
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="relative rounded-2xl border p-8"
                  style={{
                    background: COLORS.background.tertiary,
                    borderColor: pkg.popular ? `${COLORS.accent.cyan}60` : COLORS.border.default,
                    boxShadow: pkg.popular ? `0 0 30px ${COLORS.accent.cyan}20` : 'none',
                  }}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full"
                      style={{
                        background: `linear-gradient(to right, ${COLORS.accent.cyan}, #00B8FF)`,
                        fontSize: '12px',
                        fontWeight: 700,
                        color: COLORS.text.dark,
                      }}
                    >
                      Mest valinn
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6"
                    style={{
                      background: `${COLORS.accent.cyan}15`,
                      border: `1px solid ${COLORS.accent.cyan}30`,
                    }}
                  >
                    <IconComponent className="w-7 h-7" style={{ color: COLORS.accent.cyan }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-2"
                    style={{
                      fontSize: '28px',
                      fontWeight: 700,
                      color: COLORS.text.primary,
                    }}
                  >
                    {pkg.title}
                  </h3>

                  {/* Price */}
                  <div
                    className="mb-6"
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: COLORS.accent.cyan,
                    }}
                  >
                    {pkg.price}
                  </div>

                  {/* For Who */}
                  <p
                    className="mb-6"
                    style={{
                      fontSize: '15px',
                      color: COLORS.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    {pkg.forWho}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-6">
                    {pkg.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-5 h-5 shrink-0 mt-0.5"
                          style={{ color: COLORS.accent.cyan }}
                        />
                        <span
                          style={{
                            fontSize: '14px',
                            color: COLORS.text.secondary,
                          }}
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Note */}
                  <div
                    className="pt-6 border-t"
                    style={{
                      borderColor: COLORS.border.default,
                    }}
                  >
                    <p
                      style={{
                        fontSize: '13px',
                        color: COLORS.text.muted,
                        fontStyle: 'italic',
                        lineHeight: 1.5,
                      }}
                    >
                      {pkg.note}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT'S INCLUDED */}
      <section className="relative py-24 px-6">
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
              Hvað er innifalið og hvað ekki?
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontSize: '17px',
                color: COLORS.text.secondary,
                lineHeight: 1.7,
              }}
            >
              Við höfum ekkert að fela. Hér er nákvæmt yfirlit.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Included */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border p-8"
              style={{
                background: COLORS.background.tertiary,
                borderColor: `${COLORS.accent.cyan}40`,
              }}
            >
              <h3
                className="mb-2 flex items-center gap-3"
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: COLORS.text.primary,
                }}
              >
                <CheckCircle2 className="w-6 h-6" style={{ color: COLORS.accent.cyan }} />
                Innifalið í þjónustugjaldi
              </h3>
              <p
                className="mb-6"
                style={{
                  fontSize: '14px',
                  color: COLORS.text.muted,
                  lineHeight: 1.6,
                }}
              >
                Þetta er föst þjónusta sem fylgir pakkanum þínum.
              </p>
              <ul className="space-y-3">
                {includedItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                      style={{ backgroundColor: COLORS.accent.cyan }}
                    />
                    <span
                      style={{
                        fontSize: '15px',
                        color: COLORS.text.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not Included */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border p-8"
              style={{
                background: COLORS.background.tertiary,
                borderColor: COLORS.border.default,
              }}
            >
              <h3
                className="mb-2 flex items-center gap-3"
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: COLORS.text.primary,
                }}
              >
                <Settings className="w-6 h-6" style={{ color: COLORS.text.muted }} />
                Bætist við sérstaklega
              </h3>
              <p
                className="mb-6"
                style={{
                  fontSize: '14px',
                  color: COLORS.text.muted,
                  lineHeight: 1.6,
                }}
              >
                Við tökum ekkert þóknun af þessu – þú greiðir beint til þjónustuveitenda.
              </p>
              <ul className="space-y-3">
                {notIncludedItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                      style={{ backgroundColor: COLORS.text.muted }}
                    />
                    <span
                      style={{
                        fontSize: '15px',
                        color: COLORS.text.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Ad Spend Explainer Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-2xl border p-8"
            style={{
              background: `linear-gradient(135deg, ${COLORS.background.tertiary} 0%, ${COLORS.background.secondary} 100%)`,
              borderColor: `${COLORS.accent.cyan}20`,
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: `${COLORS.accent.cyan}15`,
                  border: `1px solid ${COLORS.accent.cyan}30`,
                }}
              >
                <Sparkles className="w-6 h-6" style={{ color: COLORS.accent.cyan }} />
              </div>
              <div>
                <h4
                  className="mb-3"
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: COLORS.text.primary,
                  }}
                >
                  Skýring á auglýsingakostnaði
                </h4>
                <p
                  style={{
                    fontSize: '15px',
                    color: COLORS.text.secondary,
                    lineHeight: 1.7,
                  }}
                >
                  Þjónustugjaldið okkar (129–349 þús./mán) er fyrir stjórnun og vinnu. Auglýsingakostnaður er sér liður sem fer beint í auglýsingar hjá Meta, Google o.s.frv.
                  {' '}
                  <span style={{ fontWeight: 600, color: COLORS.text.primary }}>
                    Dæmi:
                  </span>
                  {' '}
                  Ef þú ert í Vöxtur pakkanum (199 þús.) og vilt eyða 300 þús. í auglýsingar, þá er heildarið 499 þús. á mánuði.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Small Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
            style={{
              fontSize: '14px',
              color: COLORS.text.muted,
              fontStyle: 'italic',
            }}
          >
            Ef eitthvað er óljóst, spurðu bara. Við förum frekar of langt í átt að skýrleika heldur en að fela kostnað.
          </motion.p>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="relative py-24 px-6">
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
              Algengar spurningar
            </h2>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqItems.map((faq: FAQItem, idx) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
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
      <ReadyToWorkCTA context="general" />

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
