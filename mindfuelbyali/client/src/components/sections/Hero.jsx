import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import useTypingEffect from '../../hooks/useTypingEffect';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay } })
};

/**
 * Hero section with typewriter headline and animated visual motif.
 * @returns {JSX.Element}
 */
function Hero() {
  const { displayedText } = useTypingEffect(['Intelligence', 'Decisions', 'Growth']);

  return (
    <section id="home" className="section-spacing-hero bg-bg-primary">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <div>
          <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0}>
            <Badge label="Founder-led AI & Data Partner" color="indigo" className="normal-case tracking-normal" />
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.1}
            className="mt-6 text-3xl font-extrabold leading-[1.1] text-text-primary sm:text-5xl lg:text-[64px]"
          >
            We Turn Data Into
            <span className="mt-2 block text-indigo-light underline decoration-indigo-light decoration-2 underline-offset-8">
              {displayedText}
              <span className="animate-blink text-indigo-light">|</span>
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.2}
            className="mt-6 max-w-[520px] text-base font-semibold leading-[1.75] text-text-secondary sm:text-lg"
          >
            We build AI systems that turn your data into decisions - and decisions into revenue.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.3}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              ariaLabel="Start a project"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project →
            </Button>
            <Button
              variant="outline"
              size="lg"
              ariaLabel="View our work"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.4}
            className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6"
          >
            {[
              { end: 2, suffix: '', label: 'Founder Specialists' },
              { end: 1, suffix: '', label: 'Direct Point of Contact' },
              { end: 24, suffix: 'h', label: 'Average First Response' }
            ].map((stat, index) => (
              <div key={stat.label} className={`sm:pl-4 ${index > 0 ? 'sm:border-l sm:border-border' : ''}`}>
                <p className="text-4xl font-extrabold leading-none text-text-primary sm:text-[42px]">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </p>
                <p className="mt-2 font-display text-sm text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
            className="h-auto w-full"
          >
            <svg viewBox="0 0 480 480" className="h-auto w-full" role="img" aria-label="Abstract AI data flow illustration">
              <defs>
                <linearGradient id="mfGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-indigo)" />
                  <stop offset="100%" stopColor="var(--color-cyan)" />
                </linearGradient>
              </defs>
              <circle cx="240" cy="240" r="180" fill="none" stroke="url(#mfGradient)" strokeWidth="2" opacity="0.35" />
              {[80, 140, 240, 340, 400].map((x, index) => (
                <line key={x} x1={x} y1={90} x2={240} y2={240} stroke="url(#mfGradient)" strokeWidth="1.8" opacity="0.3" />
              ))}
              {[120, 200, 280, 360].map((x) => (
                <line key={x} x1={x} y1={380} x2={240} y2={240} stroke="url(#mfGradient)" strokeWidth="1.8" opacity="0.3" />
              ))}
              {[
                [80, 90],
                [140, 90],
                [240, 90],
                [340, 90],
                [400, 90],
                [120, 380],
                [200, 380],
                [280, 380],
                [360, 380],
                [240, 240]
              ].map(([cx, cy], index) => (
                <circle
                  key={`${cx}-${cy}`}
                  cx={cx}
                  cy={cy}
                  r={index === 9 ? 14 : 9}
                  fill="url(#mfGradient)"
                  className="animate-none [transform-box:fill-box] [transform-origin:center] sm:animate-pulseNode"
                />
              ))}
            </svg>
          </motion.div>

          <div className="absolute -bottom-2 left-0 hidden rounded-[14px] border border-indigo/30 bg-bg-card p-4 shadow-[0_8px_32px_rgba(124,58,237,0.22)] animate-float min-[420px]:block">
            <p className="font-display text-xs uppercase tracking-[0.12em] text-text-secondary">Model Accuracy</p>
            <p className="mt-1 text-2xl font-extrabold text-text-primary">97.4%</p>
          </div>

          <div className="absolute -left-2 top-4 hidden rounded-[14px] border border-cyan/30 bg-bg-card p-4 shadow-[0_8px_32px_rgba(129,140,248,0.2)] animate-spinSlow [animation-duration:18s] min-[480px]:block">
            <p className="text-sm font-medium text-text-primary">Live Dashboard Ready</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
