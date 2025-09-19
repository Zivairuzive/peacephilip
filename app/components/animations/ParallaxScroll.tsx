'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, ReactNode } from 'react';

interface ParallaxScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
}

export default function ParallaxScroll({
  children,
  className = '',
  speed = 0.5,
  direction = 'up'
}: ParallaxScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? ['0%', `${-100 * speed}%`] : ['0%', `${100 * speed}%`]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
}
