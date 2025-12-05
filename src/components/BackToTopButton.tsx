import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { COLORS } from '../lib/constants';

interface BackToTopButtonProps {
  show: boolean;
}

export function BackToTopButton({ show }: BackToTopButtonProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full flex items-center justify-center transition-all"
          style={{
            background: COLORS.background.secondary,
            border: `1px solid ${COLORS.border.default}`,
          }}
          aria-label="Fara efst á síðu"
        >
          <ArrowUp className="w-5 h-5" style={{ color: COLORS.text.secondary }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
