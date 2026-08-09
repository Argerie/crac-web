import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  pulse?: boolean;
}

export default function Button({ children, variant = 'primary', onClick, pulse }: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-toucan-400 text-mist-50 hover:shadow-lg'
      : 'bg-transparent border-2 border-mist-50 text-mist-50 hover:bg-mist-50/10';

  return (
    <motion.button
      onClick={onClick}
      initial={pulse ? { scale: 1 } : undefined}
      animate={pulse ? { scale: [1, 1.05, 1] } : undefined}
      transition={pulse ? { duration: 1.2, delay: 1, repeat: 1 } : undefined}
      whileHover={{ scale: 1.03 }}
      className={`rounded-full px-6 py-3 font-body font-medium transition-shadow ${styles}`}
    >
      {children}
    </motion.button>
  );
}
