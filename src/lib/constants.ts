// 55.is Design System Constants

export const COLORS = {
  // Backgrounds (Dark Theme)
  background: {
    primary: '#0D0E10',      // Main background
    secondary: '#15171C',    // Cards, elevated surfaces
    tertiary: '#1C1F26',     // Slightly lighter surfaces
  },
  
  // Borders
  border: {
    default: '#2A2D35',      // Standard borders
  },
  
  // Text
  text: {
    primary: '#F3F4F7',      // Main text (white)
    secondary: '#9BA1B0',    // Muted text (gray)
    muted: '#6B7280',        // Extra muted
    dark: '#0D0E10',         // For light backgrounds
  },
  
  // Brand Accents
  accent: {
    cyan: '#00FFC2',         // Primary accent (teal/cyan)
    purple: '#8E6EFF',       // Secondary accent
    blue: '#00B8FF',         // Tertiary accent
  },
  
  // Gradients
  gradient: {
    primary: 'linear-gradient(115deg, #00FFC2 0%, #8E6EFF 100%)',
    primaryAlt: 'linear-gradient(90deg, #00FFC2 0%, #8E6EFF 100%)',
    hover: 'linear-gradient(115deg, #00FFC2 0%, #8E6EFF 50%, #00FFC2 100%)',
  }
} as const;

export const TYPOGRAPHY = {
  // Hero/H1
  h1: {
    fontSize: '48px - 72px',  // Responsive
    fontWeight: 800,
    lineHeight: 1.05,
  },
  
  // Section Headings
  h2: {
    fontSize: '38px - 56px',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  
  // Card Headings
  h3: {
    fontSize: '20px - 28px',
    fontWeight: 700,
    lineHeight: 1.3,
  },
  
  // Body Text
  body: {
    fontSize: '16px - 18px',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  
  // Small Text
  small: {
    fontSize: '13px - 14px',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  
  // Labels/Eyebrows
  label: {
    fontSize: '11px - 12px',
    fontWeight: 600,
    letterSpacing: '0.15em - 0.2em',
    textTransform: 'uppercase',
  }
} as const;

export const SPACING = {
  // Section Padding
  section: {
    py: '80px - 128px',
    px: '24px',
    maxWidth: '1200px - 1400px',
  },
  
  // Container
  container: {
    maxWidth: '1280px',
    px: '24px',
    mx: 'auto',
  },
  
  // Card Padding
  card: {
    sm: '24px',
    md: '32px',
    lg: '56px',
  },
  
  // Gaps
  gap: {
    xs: '12px',
    sm: '16px',
    md: '32px',
    lg: '48px',
  }
} as const;
