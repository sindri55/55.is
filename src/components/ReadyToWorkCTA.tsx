'use client';

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { COLORS } from '../lib/constants';
import { useContactSheet } from '../lib/contact-sheet-context';
import type { ContactSheetContext } from '../lib/contact-sheet-context';

interface ReadyToWorkCTAProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  context?: ContactSheetContext;
  className?: string;
  accentGradient?: [string, string];
  glowColor?: string;
}

export function ReadyToWorkCTA({
  title = 'Tilbúinn að vinna með okkur?',
  description = 'Viltu ná meiri árangri, fá fleiri fyrirspurnir eða rífa þig upp í leitarvélunum? Við erum hér og klárir til að hjálpa.',
  buttonLabel = 'Tökum spjall',
  context = 'general',
  className = '',
  accentGradient = [COLORS.accent.cyan, COLORS.accent.blue],
  glowColor,
}: ReadyToWorkCTAProps) {
  const { openSheet } = useContactSheet();
  const [gradientStart, gradientEnd] = accentGradient;
  const glow = glowColor ?? gradientStart;

  return (
    <section className={`relative py-16 sm:py-24 px-6 ${className}`}>
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-10 sm:p-16 rounded-3xl border text-center overflow-hidden"
          style={{
            background: COLORS.background.secondary,
            borderColor: `${gradientStart}40`,
          }}
        >
          <motion.div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 100% 80% at 50% 50%, ${gradientStart}30 0%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block mb-6"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                style={{
                  background: `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})`,
                  boxShadow: `0 8px 24px ${glow}40`,
                }}
              >
                <Sparkles className="w-8 h-8" style={{ color: COLORS.text.dark }} />
              </div>
            </motion.div>

            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(26px, 5vw, 38px)',
                fontWeight: 700,
                color: COLORS.text.primary,
              }}
            >
              {title}
            </h2>

            <p
              className="mb-8 max-w-xl mx-auto"
              style={{
                fontSize: '17px',
                color: COLORS.text.secondary,
                lineHeight: 1.6,
              }}
            >
              {description}
            </p>

            <motion.button
              onClick={() => openSheet(context)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl"
              style={{
                background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
                color: COLORS.text.dark,
                fontSize: '16px',
                fontWeight: 700,
                boxShadow: `0 8px 24px ${glow}40`,
              }}
            >
              <Sparkles className="w-5 h-5" />
              {buttonLabel}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
