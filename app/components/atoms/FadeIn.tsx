// components/atoms/FadeIn.tsx
'use client';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
};

const offset = {
  up: { y: 24 },
  left: { x: -24 },
  right: { x: 24 },
};

const FadeIn = ({ children, delay = 0, direction = 'up', className }: FadeInProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;