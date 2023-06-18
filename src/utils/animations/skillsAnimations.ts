// SKILLS SECTION
export const textAnimation = {
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

export const itemAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (custom: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: custom * 0.15,
            type: 'spring',
            duration: 0.85,
        },
    }),
};
