// Animation utility functions and constants

export const animationVariants = {
    // Fade animations
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },

    // Slide animations
    slideUp: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    },

    slideDown: {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    },

    slideLeft: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },

    slideRight: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },

    // Scale animations
    scaleIn: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },

    scaleOut: {
        hidden: { opacity: 0, scale: 1.2 },
        visible: { opacity: 1, scale: 1 },
    },

    // Rotate animations
    rotateIn: {
        hidden: { opacity: 0, rotate: -180 },
        visible: { opacity: 1, rotate: 0 },
    },

    // Bounce animations
    bounceIn: {
        hidden: { opacity: 0, scale: 0.3 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
            },
        },
    },
};

export const transitionPresets = {
    smooth: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
    },

    spring: {
        type: "spring",
        stiffness: 300,
        damping: 30,
    },

    bounce: {
        type: "spring",
        stiffness: 400,
        damping: 10,
    },

    quick: {
        duration: 0.3,
        ease: "easeOut",
    },

    slow: {
        duration: 1,
        ease: "easeInOut",
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

// Common animation delays
export const delays = {
    none: 0,
    short: 0.1,
    medium: 0.2,
    long: 0.5,
    extraLong: 1,
};

// Viewport settings
export const viewportSettings = {
    once: true,
    amount: 0.3,
    margin: "-100px",
};
