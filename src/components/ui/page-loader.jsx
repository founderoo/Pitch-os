import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

const LoadingAnimation = () => (
  <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
    <div className="relative">
      <Zap className="w-12 h-12 animate-bounce text-primary" />
      <div className="absolute inset-0 animate-ping-slow opacity-50">
        <Zap className="w-12 h-12 text-primary" />
      </div>
    </div>
  </div>
);

export function PageLoader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0 0 0)' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}