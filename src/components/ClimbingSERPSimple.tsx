'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingUp } from 'lucide-react';
import { serpPositions, type SERPPosition } from '../lib/seo-data';
import { useRef } from 'react';

export function ClimbingSERPSimple() {
  const [currentStep, setCurrentStep] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Auto-cycle through positions
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= serpPositions.length - 1) return 0;
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView]);

  const currentPosition: SERPPosition = serpPositions[currentStep];

  return (
    <div ref={ref} className="relative">
      {/* Main SERP Card */}
      <div className="relative bg-[#15171C] border border-[#2A2D35] rounded-2xl p-4">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#2A2D35]">
          <div className="w-2 h-2 rounded-full bg-[#00FFC2]" />
          <span
            className="text-[11px] text-[#9BA1B0]"
            style={{ fontWeight: 600 }}
          >
            Google Search
          </span>
          <div className="ml-auto text-[10px] text-[#6B7280]">
            {currentPosition.week}
          </div>
        </div>

        {/* Search Results (positions 1-10) */}
        <div className="space-y-1.5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pos) => {
            const isActive = pos === currentPosition.position;
            return (
              <motion.div
                key={pos}
                animate={{
                  scale: isActive ? 1.02 : 1,
                  opacity: isActive ? 1 : 0.5,
                }}
                transition={{ duration: 0.5 }}
                className={`p-2 rounded-lg transition-all duration-500 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#00FFC2]/20 to-transparent border border-[#00FFC2]/40'
                    : 'bg-[#0D0E10]/50 border border-transparent'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2 flex-1">
                    <span
                      className="text-[10px] text-[#6B7280] min-w-[14px]"
                      style={{ fontWeight: 500 }}
                    >
                      {pos}
                    </span>
                    <div className="flex-1">
                      <div
                        className={`text-[12px] mb-0.5 ${
                          isActive ? 'text-[#00FFC2]' : 'text-[#9BA1B0]'
                        }`}
                        style={{ fontWeight: isActive ? 600 : 400 }}
                      >
                        {isActive ? 'Þín síða ⬆' : 'Competitor'}
                      </div>
                      <div className="text-[10px] text-[#6B7280] line-clamp-1">
                        Example search result description text...
                      </div>
                    </div>
                  </div>

                  {/* TrendingUp icon when active */}
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <TrendingUp className="w-3 h-3 text-[#00FFC2]" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress Dots */}
        <div className="mt-3 pt-2 border-t border-[#2A2D35] flex items-center justify-between">
          <span className="text-[10px] text-[#6B7280]">Climbing progress:</span>
          <div className="flex gap-1">
            {serpPositions.map((_, idx) => (
              <motion.div
                key={idx}
                animate={{
                  scale: idx === currentStep ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  idx <= currentStep ? 'bg-[#00FFC2]' : 'bg-[#2A2D35]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl blur-3xl pointer-events-none"
        animate={{
          opacity: currentPosition.position <= 3 ? 0.3 : 0.15,
        }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'radial-gradient(circle, #00FFC2 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
