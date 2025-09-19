'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface HoverAnimationProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  rotate?: number;
  duration?: number;
  whileHover?: any;
  whileTap?: any;
}

export default function HoverAnimation({
  children,
  className = '',
  scale = 1.05,
  rotate = 0,
  duration = 0.2,
  whileHover,
  whileTap
}: HoverAnimationProps) {
  const defaultHover = {
    scale,
    rotate,
    transition: { duration, ease: 'easeOut' }
  };

  const defaultTap = {
    scale: 0.95,
    transition: { duration: 0.1 }
  };

  return (
    <motion.div
      className={className}
      whileHover={whileHover || defaultHover}
      whileTap={whileTap || defaultTap}
      transition={{ duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
