"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg";
    color?: string;
    children?: ReactNode;
}

const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
};

export default function LoadingSpinner({
    size = "md",
    color = "text-blue-600",
    children,
}: LoadingSpinnerProps) {
    const spinnerVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "linear",
            },
        },
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    if (children) {
        return (
            <motion.div
                className="flex items-center justify-center"
                variants={pulseVariants}
                animate="animate"
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            className={`${sizeClasses[size]} ${color} border-2 border-current border-t-transparent rounded-full`}
            variants={spinnerVariants}
            animate="animate"
        />
    );
}
