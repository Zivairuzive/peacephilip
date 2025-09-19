"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface StaggeredListProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    direction?: "up" | "down" | "left" | "right";
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: (direction: string) => {
        switch (direction) {
            case "up":
                return { opacity: 0, y: 28, scale: 0.98 };
            case "down":
                return { opacity: 0, y: -28, scale: 0.98 };
            case "left":
                return { opacity: 0, x: 28, scale: 0.98 };
            case "right":
                return { opacity: 0, x: -28, scale: 0.98 };
            default:
                return { opacity: 0, y: 28, scale: 0.98 };
        }
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            damping: 26,
            stiffness: 260,
            mass: 0.7,
        },
    },
};

export default function StaggeredList({
    children,
    className = "",
    staggerDelay = 0.1,
    direction = "up",
}: StaggeredListProps) {
    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                staggerChildren: staggerDelay,
                delayChildren: Math.max(0, staggerDelay - 0.05),
            }}
        >
            {Array.isArray(children) ? (
                children.map((child, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        custom={direction}
                        whileHover={{ translateY: -2 }}
                    >
                        {child}
                    </motion.div>
                ))
            ) : (
                <motion.div variants={itemVariants} custom={direction}>
                    {children}
                </motion.div>
            )}
        </motion.div>
    );
}
