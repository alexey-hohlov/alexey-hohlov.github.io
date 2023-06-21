// framer-motion animations presets

export const slideFromLeft = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: (custom: number) => ({
        opacity: 1,
        x: 1,
        transition: {
            delay: custom * 0.2,
            type: 'spring',
            duration: 0.85,
        },
    }),
};

export const slideFromRight = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: (custom: number) => ({
        opacity: 1,
        x: 1,
        transition: {
            delay: custom * 0.2,
            type: 'spring',
            duration: 0.85,
        },
    }),
};

export const slideFromBottom = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: (custom: number) => ({
        opacity: 1,
        y: 1,
        transition: {
            delay: custom * 0.2,
            type: 'spring',
            duration: 0.85,
        },
    }),
};

export const scale = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: custom * 0.2,
            type: 'spring',
            duration: 0.85,
        },
    }),
};

export const appear = {
    hidden: { opacity: 0 },
    visible: (custom: number) => ({
        opacity: 1,
        transition: {
            delay: custom * 0.2,
            type: 'spring',
            duration: 2,
        },
    }),
};

export const loadingSpinner = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.85,
        },
    },
    spin: {
        rotate: 360,
        transition: {
            ease: 'linear',
            duration: 1,
            repeat: Infinity,
        },
    },
};
