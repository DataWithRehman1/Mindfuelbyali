import { motion } from 'framer-motion';

/**
 * Generic card wrapper with optional hover lift effect.
 * @param {{children: import('react').ReactNode, hover?: boolean, className?: string}} props
 * @returns {JSX.Element}
 */
function Card({ children, hover = false, className = '' }) {
  return (
    <motion.article
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      className={`rounded-card border border-border bg-bg-card shadow-card transition-all duration-300 ${hover ? 'hover:shadow-card-hover' : ''} ${className}`}
    >
      {children}
    </motion.article>
  );
}

export default Card;
