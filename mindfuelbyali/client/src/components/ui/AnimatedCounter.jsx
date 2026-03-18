import { useEffect, useRef, useState } from 'react';

/**
 * Counts up once when the counter enters viewport.
 * @param {{end: number, duration?: number, suffix?: string}} props
 * @returns {JSX.Element}
 */
function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current || started) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) {
      return undefined;
    }

    let frameId;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, end, started]);

  return (
    <span ref={elementRef} aria-label={`${end}${suffix}`}>
      {count}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
