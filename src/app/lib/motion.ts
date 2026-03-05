/**
 * Motion System — Standardized easings and durations
 * Use these tokens for consistent animations across the portfolio
 */

export const easing = {
  standard: [0.2, 0.8, 0.2, 1] as const,
  sharp: [0.4, 0.0, 0.2, 1] as const,
  smooth: [0.4, 0.0, 0.6, 1] as const,
};

export const duration = {
  fast: 0.12,
  medium: 0.22,
  slow: 0.36,
};

export const stagger = {
  fast: 0.04,
  medium: 0.08,
  slow: 0.12,
};

// Common animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

// Hover and interaction animations
export const hoverLift = {
  scale: 1.02,
  transition: { duration: duration.fast, ease: easing.standard },
};

export const hoverPress = {
  scale: 0.98,
  transition: { duration: duration.fast, ease: easing.sharp },
};
