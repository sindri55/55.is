'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

/**
 * Animated number counter that springs to target value when in view
 * Used for stats, metrics, and any numerical displays
 */
export function AnimatedCounter({ 
  value, 
  suffix = '', 
  prefix = '',
  decimals = 0,
  duration = 2
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: duration * 1000,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const formatted = decimals > 0 
          ? latest.toFixed(decimals)
          : Math.floor(latest).toLocaleString();
        ref.current.textContent = prefix + formatted + suffix;
      }
    });

    return unsubscribe;
  }, [springValue, suffix, prefix, decimals]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
