import { useEffect, useRef, useState } from 'react';

/**
 * Tracks whether an element has entered the viewport at least once.
 * @param {{threshold?: number, rootMargin?: string}} options
 * @returns {{ref: React.RefObject<HTMLElement>, isVisible: boolean}}
 */
function useScrollAnimation(options = {}) {
  const { threshold = 0.2, rootMargin = '0px' } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || isVisible) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible, rootMargin, threshold]);

  return { ref, isVisible };
}

export default useScrollAnimation;
