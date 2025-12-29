import type { Variants } from 'motion';

export const appear: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.3,
      type: 'spring',
      duration: 4,
    },
  }),
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.3,
      type: 'spring',
      duration: 1.5,
    },
  }),
};

export const slideFromBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      type: 'spring',
      duration: 1.5,
    },
  }),
};

export const slideFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.3,
      type: 'spring',
      duration: 1.5,
    },
  }),
};

export const slideFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.3,
      type: 'spring',
      duration: 1.5,
    },
  }),
};

// motion container
export const motionProps = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
};

export const inViewProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: {
    amount: 0.4,
    once: true,
  },
};
