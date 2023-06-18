// ABOUT SECTION
export const textAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
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

export const imgAnimation = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            duration: 0.9,
        },
    },
};

export const bulletsAnimation = {
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
