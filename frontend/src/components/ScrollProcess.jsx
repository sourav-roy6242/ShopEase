// src/components/ScrollProgress.jsx
import { useScroll, useSpring, motion } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="h-1 bg-purple-500 fixed top-0 left-0 right-0 z-50"
      style={{ scaleX }}
    />
  );
};