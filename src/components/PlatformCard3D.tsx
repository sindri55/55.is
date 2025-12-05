'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { type Platform } from '../lib/ads-data';

interface PlatformCard3DProps {
  platform: Platform;
}

export function PlatformCard3D({ platform }: PlatformCard3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group"
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative bg-[#15171C] border border-[#2A2D35] rounded-2xl p-8 overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 3D accent layer behind */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${platform.color}15 0%, transparent 70%)`,
            transform: 'translateZ(-20px)',
          }}
        />

        {/* Content */}
        <div style={{ transform: 'translateZ(20px)' }}>
          {/* Platform Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3
                className="mb-1"
                style={{
                  fontSize: '26px',
                  fontWeight: 800,
                  color: platform.color,
                }}
              >
                {platform.name}
              </h3>
              <p className="text-[14px] text-[#9BA1B0]">
                {platform.subtitle}
              </p>
            </div>

          </div>

          {/* Description */}
          <p className="text-[15px] text-[#9BA1B0] mb-6 leading-relaxed">
            {platform.description}
          </p>

          {/* Use Cases */}
          <ul className="space-y-3">
            {platform.useCases.map((useCase, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-[14px] text-[#E5E7EB]"
              >
                <CheckCircle2
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color: platform.color }}
                />
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
          style={{
            background: `linear-gradient(90deg, ${platform.color} 0%, transparent 100%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
