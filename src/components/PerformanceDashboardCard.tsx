'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingUp } from 'lucide-react';

export function PerformanceDashboardCard() {
  const [animatedROAS, setAnimatedROAS] = useState(1.2);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Auto-increment ROAS when in view
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setAnimatedROAS((prev) => {
        if (prev >= 4.8) return 1.2; // Loop back
        return Math.round((prev + 0.3) * 10) / 10; // Round to 1 decimal
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div ref={ref} className="relative">
      {/* Main Dashboard Card */}
      <div className="relative bg-[#15171C] border border-[#2A2D35] rounded-2xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2A2D35]">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-[#00FFC2]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span
              className="text-[13px] text-[#9BA1B0]"
              style={{ fontWeight: 600 }}
            >
              Live Performance
            </span>
          </div>
          <span className="text-[11px] text-[#6B7280]">Síðustu 30 dagar</span>
        </div>

        {/* Main Metric - Animated ROAS */}
        <div className="mb-6">
          <div className="text-[13px] text-[#9BA1B0] mb-2">
            Return on Ad Spend
          </div>
          <div className="flex items-baseline gap-2">
            <motion.div
              key={animatedROAS}
              initial={{ scale: 1.1, color: '#00FFC2' }}
              animate={{ scale: 1, color: '#F3F4F7' }}
              transition={{ duration: 0.3 }}
              className="text-[48px]"
              style={{ fontWeight: 800, lineHeight: 1 }}
            >
              {animatedROAS.toFixed(1)}x
            </motion.div>
            <div className="text-[16px] text-[#00FFC2] flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span style={{ fontWeight: 600 }}>+180%</span>
            </div>
          </div>
        </div>

        {/* Mini Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#0D0E10] rounded-lg p-3">
            <div className="text-[11px] text-[#6B7280] mb-1">Ad Spend</div>
            <div
              className="text-[18px] text-[#E5E7EB]"
              style={{ fontWeight: 700 }}
            >
              420k kr
            </div>
          </div>
          <div className="bg-[#0D0E10] rounded-lg p-3">
            <div className="text-[11px] text-[#6B7280] mb-1">Revenue</div>
            <div
              className="text-[18px] text-[#00FFC2]"
              style={{ fontWeight: 700 }}
            >
              2.0M kr
            </div>
          </div>
        </div>

        {/* Context Note */}
        <div className="mt-4 pt-4 border-t border-[#2A2D35]">
          <p className="text-[11px] text-[#6B7280] leading-relaxed">
            fyrir ferðaþjónustu clients síðustu 6 mán
          </p>
        </div>
      </div>

      {/* Glow effect */}
      <div
        className="absolute inset-0 -z-10 rounded-2xl blur-3xl opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00FFC2 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
