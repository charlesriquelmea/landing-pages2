// Reusable animation configurations for Washington Digital Media landing page

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
}

export const slideDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

// Hero section stagger delays
export const heroStaggerDelays = {
  trustPill: 0.2,
  headline: 0.4,
  subheadline: 0.6,
  ctas: 0.8,
  trustBar: 1.0,
}

// Pulse animation for CTA buttons
export const pulseAnimation = {
  boxShadow: ["0 0 0 0 rgba(0, 208, 132, 0.4)", "0 0 0 10px rgba(0, 208, 132, 0)"],
}

// Card hover animation
export const cardHover = {
  y: -8,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
}

// Icon wiggle animation
export const iconWiggle = {
  rotate: [0, 10, -10, 0],
  scale: [1, 1.1, 1],
}
