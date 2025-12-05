/**
 * Global Animation Configuration
 * Centralized animation variants, easings, and utilities for consistent motion design
 */

// ============================================
// EASING CURVES
// ============================================

export const EASINGS = {
  smooth: [0.4, 0, 0.2, 1] as const, // Smooth ease-out (better for entrances)
  elegant: [0.16, 1, 0.3, 1] as const, // Elegant ease-out-expo
  bounce: [0.68, -0.55, 0.265, 1.55] as const, // Playful bounce
  snap: [0.87, 0, 0.13, 1] as const, // Quick & snappy
  gentle: [0.25, 0.46, 0.45, 0.94] as const, // Gentle & calm
  spring: {
    type: "spring" as const,
    stiffness: 260,
    damping: 20
  }
};

// ============================================
// DURATION PRESETS
// ============================================

export const DURATIONS = {
  instant: 0.15,
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2
};

// ============================================
// CONFIGURATION OBJECTS
// ============================================

export const VIEWPORT = {
  once: true,
  amount: 0.3,
  margin: '-100px'
};

export const HOVER = {
  scale: 1.05,
  transition: {
    duration: DURATIONS.fast,
    ease: EASINGS.smooth
  }
};

export const TAP = {
  scale: 0.95,
  transition: {
    duration: DURATIONS.instant,
    ease: EASINGS.snap
  }
};

export const SPRING = {
  type: 'spring' as const,
  stiffness: 260,
  damping: 20
};

// ============================================
// VIEWPORT ANIMATION CONFIG
// ============================================

export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.3,
  margin: "-100px"
};

// ============================================
// FADE ANIMATIONS
// ============================================

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.smooth
    }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.smooth
    }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.smooth
    }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.smooth
    }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.smooth
    }
  }
};

export const fadeSlideUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.smooth
    }
  }
};

export const fadeSlideBlur = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: DURATIONS.slow,
      ease: EASINGS.smooth
    }
  }
};

// ============================================
// SCALE ANIMATIONS
// ============================================

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.smooth
    }
  }
};

export const scaleInBounce = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: DURATIONS.slow,
      ease: EASINGS.bounce
    }
  }
};

export const scaleFade = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.smooth
    }
  }
};

export const scalePop = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: DURATIONS.slow,
      ease: EASINGS.bounce
    }
  }
};

// ============================================
// STAGGER ANIMATIONS
// ============================================

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

// ============================================
// SLIDE ANIMATIONS
// ============================================

export const slideBlur = {
  hidden: { x: -40, filter: 'blur(8px)' },
  visible: { 
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.smooth
    }
  }
};

// ============================================
// CARD ANIMATIONS
// ============================================

export const cardEntrance = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: DURATIONS.slow,
      ease: EASINGS.smooth
    }
  }
};

// ============================================
// HOVER ANIMATIONS
// ============================================

export const hoverLift = {
  scale: 1.05,
  y: -8,
  transition: {
    duration: DURATIONS.fast,
    ease: EASINGS.smooth
  }
};

export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: DURATIONS.fast,
    ease: EASINGS.smooth
  }
};

export const hoverGlow = {
  boxShadow: '0 0 20px rgba(0, 255, 194, 0.3)',
  transition: {
    duration: DURATIONS.fast,
    ease: EASINGS.smooth
  }
};

// ============================================
// TAP ANIMATIONS
// ============================================

export const tapScale = {
  scale: 0.95,
  transition: {
    duration: DURATIONS.instant,
    ease: EASINGS.snap
  }
};

// ============================================
// ROTATION ANIMATIONS
// ============================================

export const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { 
    opacity: 1, 
    rotate: 0,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.smooth
    }
  }
};

// ============================================
// BLUR ANIMATIONS
// ============================================

export const blurIn = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: {
      duration: DURATIONS.slow,
      ease: EASINGS.smooth
    }
  }
};

// ============================================
// SPECIAL ANIMATIONS
// ============================================

export const pulsingGlow = {
  scale: [1, 1.02, 1],
  boxShadow: [
    '0 0 20px rgba(0, 255, 194, 0.2)',
    '0 0 30px rgba(0, 255, 194, 0.4)',
    '0 0 20px rgba(0, 255, 194, 0.2)',
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Adds a delay to any animation variant
 */
export function withDelay(variant: any, delay: number) {
  return {
    ...variant,
    transition: {
      ...variant.transition,
      delay
    }
  };
}