'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  AlertCircle,
  Target,
  Search,
  Monitor,
  CheckCircle2,
  Users,
  MessageSquare,
  Shield,
  Zap,
  BarChart3,
  Star,
  Database,
} from 'lucide-react';
import { HeroVisual } from './HeroVisual';
import { BackToTopButton } from './BackToTopButton';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { COLORS } from '../lib/constants';
import { useContactSheet } from '../lib/contact-sheet-context';
import { ReadyToWorkCTA } from './ReadyToWorkCTA';
import {
  problemPoints,
  industryChips,
  commonProblems,
  services,
  whyPoints,
  clientLogos,
  type IndustryChip,
  type CommonProblem,
} from '../lib/aaa-data';
import {
  scalePop,
  fadeSlideBlur,
  fadeSlideUp,
  cardEntrance,
  staggerContainer,
  scaleFade,
  slideBlur,
  VIEWPORT,
  HOVER,
  TAP,
  pulsingGlow,
  SPRING,
} from '../lib/animation-config';

// Icon mapping helper
const iconMap: Record<string, any> = {
  Target,
  Search,
  Monitor,
  Users,
  MessageSquare,
  Shield,
  Zap,
  BarChart3,
  Database,
};

export function AAAPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { openSheet } = useContactSheet();

  // Reactive states
  const [selectedIndustry, setSelectedIndustry] = useState<string>('service');
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);

  // Back to top visibility handler
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectedChip = industryChips.find(chip => chip.id === selectedIndustry);

  return (
    <div className="relative">
      {/* SECTION 1: HERO - SIMPLIFIED & BREATHING */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 sm:pt-40 sm:pb-24 px-6">
        {/* Subtle aurora gradient background */}
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(0, 255, 194, 0.15) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            {/* Left Column - Copy */}
            <div className="lg:col-span-7">
              {/* Eyebrow Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 mb-8"
                style={{
                  borderColor: `${COLORS.accent.cyan}30`,
                  background: `${COLORS.accent.cyan}08`,
                }}
              >
                <Sparkles className="h-4 w-4" style={{ color: COLORS.accent.cyan }} />
                <span
                  className="uppercase tracking-[0.15em]"
                  style={{
                    fontSize: '11px',
                    color: COLORS.accent.cyan,
                    fontWeight: 600,
                  }}
                >
                  Stafræn markaðsstofa á Íslandi
                </span>
              </motion.div>

              {/* H1 Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-6"
                style={{
                  fontSize: 'clamp(42px, 7vw, 64px)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: COLORS.text.primary,
                }}
              >
                Stafræn markaðsstofa{' '}
                <span
                  style={{
                    display: 'block',
                    fontSize: 'clamp(28px, 4.5vw, 42px)',
                    fontWeight: 600,
                    color: COLORS.text.primary,
                    marginTop: '-0.15em',
                  }}
                >
                  sem hjálpar íslenskum fyrirtækjum að vaxa á netinu
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-10 max-w-xl"
                style={{
                  fontSize: 'clamp(17px, 2.2vw, 20px)',
                  color: COLORS.text.secondary,
                  lineHeight: 1.6,
                }}
              >
                Við hjálpum íslenskum fyrirtækjum að fá fleiri fyrirspurnir, sölur og bókanir. Ekkert rugl.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
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
                    fontSize: '16px',
                    fontWeight: 700,
                    boxShadow: '0 8px 24px rgba(0, 255, 194, 0.25)',
                  }}
                >
                  <span 
                    className="relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, #00FFC2, #00B8FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Tökum spjall!
                  </span>
                  <ArrowRight className="w-4 h-4 relative z-10" style={{ color: COLORS.accent.cyan }} />
                </motion.button>
              </motion.div>

              {/* Trust Line */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                style={{
                  fontSize: '14px',
                  color: COLORS.text.muted,
                }}
              >
                300+ íslensk fyrirtæki hafa unnið með okkur · Engin binding
              </motion.p>
            </div>

            {/* Right Column - Simplified Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-5"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM RECOGNITION - SIMPLIFIED */}
      <section className="relative py-24 sm:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header - Pattern A: scaleFade */}
          <motion.div
            variants={scaleFade}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="text-center mb-16"
          >
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(38px, 6vw, 48px)',
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
                lineHeight: 1.5,
              }}
            >
              Við heyrum þetta oft frá fyrirtækjum sem hafa prófað auglýsingar og SEO, en fá ekki alveg það sem þeir bjuggust við.
            </p>
          </motion.div>

          {/* Problem Points Grid - 2x2 with stagger */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {problemPoints.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.25, 
                  delay: idx * 0.03,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="flex items-center gap-3 rounded-xl p-5 border"
                style={{
                  background: COLORS.background.secondary,
                  borderColor: COLORS.border.default,
                }}
              >
                <AlertCircle
                  className="w-5 h-5 shrink-0"
                  style={{ color: COLORS.accent.cyan }}
                />
                <p
                  style={{
                    fontSize: '16px',
                    color: COLORS.text.primary,
                    lineHeight: 1.5,
                  }}
                >
                  {problem}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Beginner-Friendly Callout */}
          <motion.div
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex items-center gap-3 rounded-xl p-5 border"
            style={{
              background: COLORS.background.secondary,
              borderColor: COLORS.border.default,
            }}
          >
            <Sparkles
              className="w-5 h-5 shrink-0"
              style={{ color: COLORS.accent.purple }}
            />
            <div>
              <p
                className="mb-1"
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: COLORS.text.primary,
                  lineHeight: 1.5,
                }}
              >
                Aldrei prófað auglýsingar áður?
              </p>
              <p
                style={{
                  fontSize: '15px',
                  color: COLORS.text.secondary,
                  lineHeight: 1.5,
                }}
              >
                Ekkert mál. Við hjálpum þér að byrja á réttum stað og sjá hvað borgar sig best.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: SERVICE OVERVIEW - OUTCOME-FOCUSED */}
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
                fontSize: 'clamp(38px, 6vw, 56px)',
                fontWeight: 700,
                color: COLORS.text.primary,
              }}
            >
              Hvað gerum við?
            </h2>
            <p
              className="max-w-3xl mx-auto"
              style={{
                fontSize: '18px',
                color: COLORS.text.secondary,
                lineHeight: 1.6,
              }}
            >
              Við böndum saman auglýsingar, SEO og vefsíður svo fólk finnur þig, skilur hvað þú gerir og tekur skrefið.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, idx) => {
              const IconComponent = iconMap[service.icon];
              const isHighlighted = selectedChip?.serviceId === service.id;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ 
                    opacity: 0, 
                    y: 60, 
                    scale: 0.9,
                    filter: 'blur(8px)',
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    filter: 'blur(0px)',
                  }}
                  viewport={{ once: true, amount: 0.15, margin: "0px 0px -60px 0px" }}
                  transition={{ 
                    duration: 0.7,
                    delay: idx * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                    filter: { duration: 0.5 },
                  }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.03,
                    borderColor: isHighlighted ? `${service.color}60` : `${service.color}50`,
                    boxShadow: isHighlighted 
                      ? `0 0 20px ${service.color}20, 0 24px 48px -16px ${service.color}30, 0 0 0 1px ${service.color}20`
                      : `0 24px 48px -16px ${service.color}30, 0 0 0 1px ${service.color}20`,
                    transition: { 
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }}
                  className="group relative rounded-2xl p-8 border flex flex-col will-change-transform overflow-hidden"
                  style={{
                    background: COLORS.background.secondary,
                    borderColor: isHighlighted ? `${service.color}60` : COLORS.border.default,
                    boxShadow: isHighlighted ? `0 0 20px ${service.color}20` : 'none',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{
                      background: `${service.color}15`,
                      border: `1px solid ${service.color}30`,
                    }}
                  >
                    <IconComponent className="w-7 h-7" style={{ color: service.color }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-3"
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      color: COLORS.text.primary,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Outcome Line */}
                  <p
                    className="mb-6"
                    style={{
                      fontSize: '15px',
                      color: COLORS.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    {service.outcome}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-6">
                    {service.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-center gap-2">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0"
                          style={{ color: service.color }}
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

                  {/* Price & CTA - Pushed to bottom */}
                  <div className="mt-auto">
                    {/* Price Hint */}
                    <div
                      className="mb-4"
                      style={{
                        fontSize: '13px',
                        color: COLORS.text.muted,
                      }}
                    >
                      {service.priceHint}
                    </div>

                    {/* CTA Link */}
                    <a
                      href={service.link}
                      className="inline-flex items-center gap-2 transition-all hover:gap-3"
                      style={{
                        fontSize: '14px',
                        color: service.color,
                        fontWeight: 600,
                      }}
                    >
                      Sjá nánar
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(90deg, ${service.color} 0%, transparent 100%)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4: WHY 55 - SIMPLIFIED TO 4-5 POINTS */}
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
                fontSize: 'clamp(38px, 6vw, 56px)',
                fontWeight: 700,
                color: COLORS.text.primary,
              }}
            >
              Af hverju við?
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: COLORS.text.secondary,
              }}
            >
              Við erum lítið teymi sem leggur áherslu á praktíska niðurstöðu sem þú finnur fyrir, ekki bara skýrslur.
            </p>
          </motion.div>

          {/* Why Points Grid - Cleaner Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((point, idx) => {
              const IconComponent = iconMap[point.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.25, 
                    delay: idx * 0.03,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className="rounded-2xl p-6 border"
                  style={{
                    background: COLORS.background.secondary,
                    borderColor: COLORS.border.default,
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${COLORS.accent.cyan}10`,
                        border: `1px solid ${COLORS.accent.cyan}20`,
                      }}
                    >
                      <IconComponent className="w-5 h-5" style={{ color: COLORS.accent.cyan }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className="mb-2"
                        style={{
                          fontSize: '17px',
                          fontWeight: 700,
                          color: COLORS.text.primary,
                        }}
                      >
                        {point.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '14px',
                          color: COLORS.text.secondary,
                          lineHeight: 1.5,
                        }}
                      >
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: CLIENT LOGOS & PROOF - SIMPLIFIED */}
      <section
        id="proof"
        className="relative py-24 sm:py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2
              className="mb-6"
              style={{
                fontSize: 'clamp(38px, 6vw, 56px)',
                fontWeight: 700,
                color: COLORS.text.primary,
              }}
            >
              Fyrirtæki sem við vinnum með
            </h2>

            <p
              className="max-w-3xl mx-auto mb-12"
              style={{
                fontSize: '18px',
                lineHeight: 1.6,
                color: COLORS.text.secondary,
              }}
            >
              Yfir 300 íslensk fyrirtæki hafa unnið með okkur. Við hjálpum helst ferðaþjónustu, þjónustufyrirtækjum, netverslunum og B2B.
            </p>
          </motion.div>

          {/* Logo Grid - Simple Strip */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {clientLogos.map((client, idx) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                className="group relative flex items-center justify-center rounded-lg p-4 min-h-[80px] border overflow-hidden"
                style={{
                  background: COLORS.background.secondary,
                  borderColor: COLORS.border.default,
                }}
              >
                {/* Company Name (default state) */}
                <div
                  className="absolute inset-0 flex items-center justify-center text-center transition-all duration-300 pointer-events-none"
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: COLORS.text.secondary,
                    opacity: 0.5,
                  }}
                >
                  <span className="group-hover:opacity-0 transition-opacity duration-300">
                    {client.name}
                  </span>
                </div>

                {/* Logo Image (shows on hover) */}
                <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <ImageWithFallback
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                    style={{
                      filter: 'brightness(0) invert(1)',
                      opacity: 0.8,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIAL - ONE STRONG QUOTE */}
      <section className="relative py-24 sm:py-32 px-6 overflow-hidden">
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
                fontSize: 'clamp(38px, 6vw, 56px)',
                fontWeight: 700,
                color: COLORS.text.primary,
              }}
            >
              Hvað segja kúnnarnir?
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: COLORS.text.secondary,
              }}
            >
              Raunveruleg reynsla frá fyrirtækjum sem vinna með okkur
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <TestimonialCarousel />
        </div>
      </section>

      <ReadyToWorkCTA context="general" />

      {/* Back to Top Button */}
      <BackToTopButton show={showBackToTop} />
    </div>
  );
}

// Testimonial Carousel Component
function TestimonialCarousel() {
  const testimonials = [
    {
      quote: "Við höfum unnið með fullt af agencies áður, en 55 er fyrsta stofan sem talar í raun plain language um hvað er að gerast. Ad spend okkar hefur þrefaldast því við treystum að peningarnir séu vel varið.",
      author: "Jón Þórsson",
      company: "TechCo Iceland"
    },
    {
      quote: "Við fengum alveg nýtt líf í síðuna þegar 55.is komu að þessu. Hún er mun notendavænni, auðveldari að uppfæra og lítur bara miklu betur út. Þau hlustuðu á okkur og gerðu hugmyndirnar okkar að veruleika.",
      author: "Auður Snorradóttir",
      company: "Flugsystur.is"
    },
    {
      quote: "Við vildum prófa nýja nálgun í auglýsingum og 55 Markaðsstofa kom með skýra stefnu sem virkaði. Herferðirnar voru mælanlegar og vel unnar, og við fengum fljótt til baka það sem við lögðum í þetta.",
      author: "Sigurður Jónsson",
      company: "Aspire ehf"
    },
    {
      quote: "Sindri og co hjálpuðu okkur að skerpa á textanum og stilltu herferðirnar þannig að við sjáum miklu betri árangur núna. Þau eru áreiðanleg og vinna hlutina eins og á að gera.",
      author: "Anna Kristín",
      company: "Iceland Premium Tours"
    },
    {
      quote: "Sindri hjá 55 Markaðsstofu tók yfir auglýsingarnar okkar og stilltu allt upp þannig að þetta fór að virka loksins. Nú fáum við steady nýjar fyrirspurnir og sjáum nákvæmlega hvað skilar árangri.",
      author: "Hreinn Orri Hreinsson",
      company: "Coach Clean"
    },
    {
      quote: "Við vildum fá nýjan vef sem væri bæði hraður og flottur og 55.is kláruðu það frábærlega. Núna er bókunarkerfið miklu þægilegra, síðurnar opnast hratt og allt lítur bara betur út.",
      author: "Kristján",
      company: "Fara.is"
    },
    {
      quote: "Þau komu með ferskan takt á samfélagsmiðlana okkar. Við höfum fengið meiri athygli og fleiri sem koma í heimsókn eftir að hafa séð okkur á netinu. Þau ná að halda okkar stíl en gera hann bara flottari.",
      author: "Ólöf",
      company: "Brand Vín og Grill"
    },
    {
      quote: "Teymið hjá 55 lagfærðu síðuna, hreinsuðu upp villur og bættu textan töluvert. Það kom okkur bara ofar í leitarniðurstöðum. Nú er mun meiri organic traffík, takktakk!",
      author: "Magnús",
      company: "Málningarvörur ehf"
    },
    {
      quote: "Sindri hjá 55 hjálpaði okkur að fínstilla síðuna og velja réttu leitarorðin. Við erum að fá mun fleiri bókanir frá markhópnum okkar, án þess að þurfa að eyða meira í ads.",
      author: "Helena",
      company: "Viking Women Tours"
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const [isPaused, setIsPaused] = useState(false);
  const xPos = useRef(0);
  const animationRef = useRef<number | null>(null);
  const [offset, setOffset] = useState(0);
  const offsetRef = useRef(0);

  useEffect(() => {
    const totalWidth = testimonials.length * 420;
    const duration = testimonials.length * 8 * 1000; // Convert to milliseconds
    let startTime = Date.now() - (Math.abs(offsetRef.current) / totalWidth) * duration;

    const animate = () => {
      if (!isPaused) {
        const elapsed = Date.now() - startTime;
        const progress = (elapsed % duration) / duration;
        const newOffset = -progress * totalWidth;
        offsetRef.current = newOffset;
        setOffset(newOffset);
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, testimonials.length]);

  return (
    <div className="relative">
      {/* Gradient Fade Edges */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${COLORS.background.primary}, transparent)`
        }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to left, ${COLORS.background.primary}, transparent)`
        }}
      />

      {/* Scrolling Container */}
      <div className="overflow-hidden py-2">
        <div
          className="flex gap-6"
          style={{
            transform: `translateX(${offset}px)`,
            transition: isPaused ? 'none' : 'none',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              whileHover={{ 
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="flex-shrink-0 w-[400px] rounded-2xl p-8 border relative group cursor-pointer overflow-hidden"
              style={{
                background: COLORS.background.secondary,
                borderColor: COLORS.border.default,
              }}
            >
              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${COLORS.accent.cyan}15, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Quote - Flexible height */}
                <p
                  className="mb-6 flex-grow"
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: COLORS.text.primary,
                    fontWeight: 400,
                  }}
                >
                  "{testimonial.quote}"
                </p>

                {/* Divider */}
                <div 
                  className="h-px mb-4"
                  style={{
                    background: `linear-gradient(to right, ${COLORS.accent.cyan}40, transparent)`
                  }}
                />

                {/* Author Info - Fixed position at bottom */}
                <div className="h-[44px] flex flex-col justify-center">
                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: COLORS.text.primary,
                      marginBottom: '2px',
                      lineHeight: 1.4,
                    }}
                  >
                    {testimonial.author}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: COLORS.text.muted,
                      lineHeight: 1.4,
                    }}
                  >
                    {testimonial.company || '\u00A0'}
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, ${COLORS.accent.cyan}, ${COLORS.accent.purple})`
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pause Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isPaused ? 1 : 0 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12"
      >
        <div
          className="px-4 py-2 rounded-full border"
          style={{
            background: COLORS.background.secondary,
            borderColor: COLORS.border.default,
            fontSize: '12px',
            color: COLORS.text.muted,
          }}
        >
          Paused · Hover to read
        </div>
      </motion.div>
    </div>
  );
}
