import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { COLORS } from '../lib/constants';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32">
      {/* Ambient Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-40 blur-[120px]"
        style={{
          background: `radial-gradient(ellipse at center, ${COLORS.accent.cyan}20 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-[1200px] mx-auto text-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00FFC2]/10 to-[#8E6EFF]/10 border border-[#00FFC2]/30 rounded-full px-5 py-2.5 mb-8"
        >
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ background: COLORS.accent.cyan }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <Sparkles className="w-4 h-4" style={{ color: COLORS.accent.cyan }} />
          <span
            className="uppercase tracking-wider"
            style={{
              fontSize: '12px',
              color: COLORS.accent.cyan,
              fontWeight: 600,
            }}
          >
            Vefhönnun og forritun
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="mb-6"
          style={{
            fontSize: 'clamp(48px, 8vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.05,
            color: COLORS.text.primary,
          }}
        >
          Stafræn upplifun
          <br />
          <span
            className="inline-block"
            style={{
              background: COLORS.gradient.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            sem skilar árangri
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-[680px] mx-auto mb-12"
          style={{
            fontSize: '18px',
            lineHeight: 1.6,
            color: COLORS.text.secondary,
          }}
        >
          Við byggjum vefina sem dreyma þig, frá hugmynd að veruleika. 
          Hönnun, þróun og viðhald sem gerir þér kleift að einbeita þér að því sem skiptir máli.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 rounded-xl flex items-center gap-3 relative overflow-hidden"
            style={{
              background: COLORS.gradient.primary,
              color: COLORS.text.dark,
              fontSize: '16px',
              fontWeight: 700,
              boxShadow: '0 8px 32px rgba(0, 255, 194, 0.25)',
            }}
          >
            <span>Byrja verkefni</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl"
            style={{
              background: 'rgba(42, 45, 53, 0.5)',
              border: '1px solid rgba(42, 45, 53, 0.8)',
              color: COLORS.text.primary,
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            Skoða verkefni
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="grid grid-cols-3 gap-8 max-w-[600px] mx-auto mt-20"
        >
          {[
            { value: '150+', label: 'Verkefni' },
            { value: '98%', label: 'Ánægja' },
            { value: '24/7', label: 'Stuðningur' },
          ].map((stat, index) => (
            <div key={stat.label}>
              <div
                style={{
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 800,
                  color: COLORS.text.primary,
                  marginBottom: '8px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: COLORS.text.secondary,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}