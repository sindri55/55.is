'use client';

import { motion } from 'motion/react';
import {
  Sparkles,
  Target,
  Zap,
  Users,
  ArrowRight,
  Linkedin,
  Mail,
} from 'lucide-react';
import { Breadcrumb } from './Breadcrumb';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { COLORS } from '../lib/constants';
import { ReadyToWorkCTA } from './ReadyToWorkCTA';

export function UmOkkurCopy() {
  const coreValues = [
    {
      icon: Target,
      title: 'Árangur fyrst',
      description: 'Við erum ekki til að selja þér „vinnustundir" eða „brand awareness". Við erum til að skila þér mælanlegum árangri: fleiri leads, hærri ROAS, betri sæti í Google.',
    },
    {
      icon: Zap,
      title: 'Hraði og gagnsæi',
      description: 'Engin óþarfa fundarþyt. Engin bull í skýrslum. Við tölum beint mál, veitum greiðan aðgang að rauntímagögnum og hreyfum okkur hratt.',
    },
    {
      icon: Users,
      title: 'Íslensk fyrirtæki, íslensk reynsla',
      description: 'Við vitum hvernig íslenskur markaður virkar. Við þekkjum áskoranir þínar og við erum hér til að hjálpa þér að ná markmiðum þínum með íslensku og ensku.',
    },
  ];

  return (
    <div className="relative">
      {/* Breadcrumb */}
      <section className="relative pt-24 sm:pt-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumb 
            items={[
              { label: 'Heim', href: '/' },
              { label: 'Um okkur' }
            ]} 
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-6">
        {/* Subtle aurora gradient */}
        <motion.div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(142, 110, 255, 0.2) 0%, transparent 60%)',
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
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 mb-6"
              style={{
                borderColor: `${COLORS.accent.purple}30`,
                background: `${COLORS.accent.purple}08`,
              }}
            >
              <Sparkles className="h-3.5 w-3.5" style={{ color: COLORS.accent.purple }} />
              <span
                className="uppercase tracking-[0.15em]"
                style={{
                  fontSize: '10px',
                  color: COLORS.accent.purple,
                  fontWeight: 600,
                }}
              >
                Um Okkur
              </span>
            </motion.div>

            {/* H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-6"
              style={{
                fontSize: 'clamp(32px, 6vw, 58px)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: COLORS.text.primary,
              }}
            >
              Stafræn markaðsstofa
              <br />
              sem talar beint mál
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-8 max-w-2xl mx-auto"
              style={{
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                color: COLORS.text.secondary,
                lineHeight: 1.6,
              }}
            >
              Við erum{' '}
              <span style={{ color: COLORS.accent.cyan, fontWeight: 600 }}>
                55.is
              </span>
              {' '}— lítið teymi sem hjálpar íslenskum fyrirtækjum að vaxa með stafrænum auglýsingum, 
              SEO og vefsíðugerð. Engin fluff. Bara árangur.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-16 sm:py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div
                    className="relative p-8 rounded-2xl border h-full"
                    style={{
                      background: COLORS.background.secondary,
                      borderColor: COLORS.border.default,
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                      style={{
                        background: `${COLORS.accent.cyan}15`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: COLORS.accent.cyan }} />
                    </div>

                    {/* Title */}
                    <h3
                      className="mb-3"
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: COLORS.text.primary,
                      }}
                    >
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '15px',
                        color: COLORS.text.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      {value.description}
                    </p>

                    {/* Hover gradient overlay */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(0, 255, 194, 0.05) 0%, transparent 70%)',
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-16 sm:py-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative p-10 sm:p-12 rounded-3xl border text-center"
            style={{
              background: COLORS.background.secondary,
              borderColor: COLORS.border.default,
            }}
          >
            {/* Decorative gradient */}
            <div
              className="absolute inset-0 rounded-3xl opacity-10 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 255, 194, 0.3) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.accent.cyan}20, ${COLORS.accent.purple}20)`,
                    border: `2px solid ${COLORS.accent.cyan}40`,
                  }}
                >
                  <Sparkles className="w-8 h-8" style={{ color: COLORS.accent.cyan }} />
                </div>
              </motion.div>

              <h2
                className="mb-4"
                style={{
                  fontSize: 'clamp(24px, 4vw, 32px)',
                  fontWeight: 700,
                  color: COLORS.text.primary,
                }}
              >
                Af hverju 55.is?
              </h2>

              <p
                className="mb-6 max-w-2xl mx-auto"
                style={{
                  fontSize: '17px',
                  color: COLORS.text.secondary,
                  lineHeight: 1.7,
                }}
              >
                Við stofnuðum 55.is vegna þess að íslensk fyrirtæki þurfa ekki „enn eina stóru 
                stofuna" með djúsí pitchum og óljósum skýrslum. Þau þurfa samstarfsaðila sem 
                skilja íslenskan markað, tala beint mál og skila mælanlegum árangri.
              </p>

              <p
                className="max-w-2xl mx-auto"
                style={{
                  fontSize: '17px',
                  color: COLORS.text.secondary,
                  lineHeight: 1.7,
                }}
              >
                Hvort sem þú vilt fleiri bókanir, hærri ROAS eða betri Google sæti — við erum 
                hér til að hjálpa þér að ná markmiðunum{' '}
                <span style={{ color: COLORS.accent.cyan, fontWeight: 600 }}>
                  án óþarfa bull
                </span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team/CEO Section */}
      <section className="relative py-16 sm:py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 700,
                color: COLORS.text.primary,
                marginBottom: '12px',
              }}
            >
              Hver er á bakvið 55.is?
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: COLORS.text.secondary,
              }}
            >
              Stafrænn markaðsfræðingur með áherslu á árangur
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative p-8 sm:p-12 rounded-3xl border overflow-hidden"
              style={{
                background: COLORS.background.secondary,
                borderColor: COLORS.border.default,
              }}
            >
              {/* Gradient overlay */}
              <div
                className="absolute top-0 left-0 right-0 h-32 opacity-20 pointer-events-none"
                style={{
                  background: `linear-gradient(180deg, ${COLORS.accent.purple}40 0%, transparent 100%)`,
                }}
              />

              <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                {/* Photo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex-shrink-0"
                >
                  <div
                    className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden"
                    style={{
                      border: `3px solid ${COLORS.accent.cyan}30`,
                    }}
                  >
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQxNzcxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Framkvæmdastjóri 55.is"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Cyan glow on hover */}
                    <div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${COLORS.accent.cyan}20 0%, transparent 70%)`,
                      }}
                    />
                  </div>
                </motion.div>

                {/* Info */}
                <div className="flex-1 text-center sm:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <h3
                      className="mb-1"
                      style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        color: COLORS.text.primary,
                      }}
                    >
                      Sigurður Þór
                    </h3>
                    <p
                      className="mb-4"
                      style={{
                        fontSize: '14px',
                        color: COLORS.accent.cyan,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      Framkvæmdastjóri
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="mb-6"
                    style={{
                      fontSize: '15px',
                      color: COLORS.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    Með yfir 8 ára reynslu í stafrænum markaðssetningu fyrir íslensk og erlend 
                    fyrirtæki. Sérhæfir sig í Google Ads, Meta auglýsingum og SEO. Leiðir teymið 
                    með áherslu á gagnsæi, hraða og mælanlegum árangri.
                  </motion.p>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="flex gap-3 justify-center sm:justify-start"
                  >
                    <a
                      href="mailto:sigurdur@55.is"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:scale-105"
                      style={{
                        background: `${COLORS.accent.cyan}10`,
                        borderColor: `${COLORS.accent.cyan}30`,
                        color: COLORS.accent.cyan,
                        fontSize: '14px',
                        fontWeight: 600,
                      }}
                    >
                      <Mail className="w-4 h-4" />
                      Netfang
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:scale-105"
                      style={{
                        background: `${COLORS.accent.cyan}10`,
                        borderColor: `${COLORS.accent.cyan}30`,
                        color: COLORS.accent.cyan,
                        fontSize: '14px',
                        fontWeight: 600,
                      }}
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ReadyToWorkCTA context="general" />
    </div>
  );
}
