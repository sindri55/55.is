import { motion } from 'motion/react';
import { Search, Target, Monitor, TrendingUp } from 'lucide-react';
import { COLORS } from '../lib/constants';

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">
      {/* Animated Aurora Background */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        animate={{
          background: [
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0, 255, 194, 0.2) 0%, transparent 70%)',
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(142, 110, 255, 0.2) 0%, transparent 70%)',
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0, 255, 194, 0.2) 0%, transparent 70%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1],
        }}
      />

      {/* Stacked Preview Cards */}
      <div className="relative space-y-3">
        {/* Section Header */}
        <div
          className="mb-2"
          style={{
            fontSize: '11px',
            fontWeight: 600,
            color: COLORS.text.muted,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Árangur viðskiptavinar
        </div>

        {/* SEO Result Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden"
          style={{
            background: 'rgba(21, 23, 28, 0.9)',
            border: `1px solid ${COLORS.border.default}`,
          }}
        >
          {/* Subtle gradient accent */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${COLORS.accent.cyan}60, transparent)`,
            }}
          />

          <div className="flex gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `${COLORS.accent.cyan}15`,
                border: `1px solid ${COLORS.accent.cyan}30`,
              }}
            >
              <Search className="w-6 h-6" style={{ color: COLORS.accent.cyan }} />
            </div>
            <div className="flex-1 min-w-0">
              <div
                className="mb-3"
                style={{
                  fontSize: '11px',
                  color: COLORS.text.muted,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                }}
              >
                Árangur SEO
              </div>
              <div
                className="mb-1.5 truncate"
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: COLORS.accent.cyan,
                  letterSpacing: '0.01em',
                }}
              >
                icelandpremiumtours.is
              </div>
              <div
                className="mb-4"
                style={{
                  fontSize: '14px',
                  color: COLORS.text.muted,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontWeight: 500,
                }}
              >
                Ferðaþjónusta
              </div>
              <div className="mb-3">
                <span
                  className="px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5"
                  style={{
                    background: `${COLORS.accent.cyan}20`,
                    color: COLORS.accent.cyan,
                    fontWeight: 700,
                    fontSize: '13px',
                    border: `1px solid ${COLORS.accent.cyan}40`,
                  }}
                >
                  Sæti 1 í Google
                </span>
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: COLORS.text.secondary,
                  lineHeight: 1.5,
                  opacity: 0.7,
                }}
              >
                +340% fleiri smelli úr leitarniðurstöðum
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ads Performance Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden"
          style={{
            background: 'rgba(21, 23, 28, 0.9)',
            border: `1px solid ${COLORS.border.default}`,
          }}
        >
          {/* Subtle gradient accent */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${COLORS.accent.purple}60, transparent)`,
            }}
          />

          <div className="flex gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `${COLORS.accent.purple}15`,
                border: `1px solid ${COLORS.accent.purple}30`,
              }}
            >
              <Target className="w-6 h-6" style={{ color: COLORS.accent.purple }} />
            </div>
            <div className="flex-1">
              <div
                className="mb-5"
                style={{
                  fontSize: '11px',
                  color: COLORS.text.muted,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                }}
              >
                Árangur auglýsinga
              </div>
              <div className="flex items-end gap-6 mb-4">
                <div
                  style={{
                    fontSize: '56px',
                    fontWeight: 900,
                    color: COLORS.accent.purple,
                    lineHeight: 0.9,
                    letterSpacing: '-0.02em',
                  }}
                >
                  5,3x
                </div>
                <div className="pb-1">
                  <div
                    style={{
                      fontSize: '11px',
                      color: COLORS.text.muted,
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Ad spend
                  </div>
                  <div
                    style={{
                      fontSize: '19px',
                      fontWeight: 700,
                      color: COLORS.text.primary,
                    }}
                  >
                    350.000 kr
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: COLORS.text.secondary,
                  lineHeight: 1.5,
                  opacity: 0.7,
                }}
              >
                Ein króna í auglýsingar skilaði rúmlega fimm krónum til baka í bókuðum túrum.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Web Conversion Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden"
          style={{
            background: 'rgba(21, 23, 28, 0.9)',
            border: `1px solid ${COLORS.border.default}`,
          }}
        >
          {/* Subtle gradient accent */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${COLORS.accent.cyan}60, transparent)`,
            }}
          />

          <div className="flex gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `${COLORS.accent.cyan}15`,
                border: `1px solid ${COLORS.accent.cyan}30`,
              }}
            >
              <Monitor className="w-6 h-6" style={{ color: COLORS.accent.cyan }} />
            </div>
            <div className="flex-1">
              <div
                className="mb-5"
                style={{
                  fontSize: '11px',
                  color: COLORS.text.muted,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                }}
              >
                Bókanir á vefnum
              </div>
              <div className="flex items-center gap-3.5 mb-4">
                <span
                  style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: COLORS.text.secondary,
                    opacity: 0.5,
                  }}
                >
                  2,3%
                </span>
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-lg"
                  style={{
                    background: `${COLORS.accent.cyan}15`,
                  }}
                >
                  <TrendingUp className="w-4 h-4" style={{ color: COLORS.accent.cyan }} />
                </div>
                <span
                  style={{
                    fontSize: '56px',
                    fontWeight: 900,
                    color: COLORS.accent.cyan,
                    lineHeight: 0.9,
                    letterSpacing: '-0.02em',
                  }}
                >
                  8,7%
                </span>
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: COLORS.text.secondary,
                  lineHeight: 1.5,
                  opacity: 0.7,
                }}
              >
                Fjórum sinnum fleiri sem komu inn á síðuna kláruðu bókunina.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}