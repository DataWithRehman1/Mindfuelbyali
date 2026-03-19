import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Button from '../ui/Button';

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'Team', to: 'team' },
  { label: 'Work', to: 'work' },
  { label: 'Services', to: 'services' },
  { label: 'Pricing', to: 'pricing' },
  { label: 'Contact', to: 'contact' }
];

/**
 * Sticky navigation with active section highlighting and mobile overlay menu.
 * @returns {JSX.Element}
 */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileOpen);

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'nav-glass border-b border-border shadow-[0_1px_12px_rgba(0,0,0,0.06)]' : 'bg-transparent'}`}
    >
      <div className="container-site flex h-16 items-center justify-between sm:h-20">
        <a
          href="#home"
          className="focus-ring inline-flex items-center rounded-xl border border-border/60 bg-white/85 px-3 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur"
          aria-label="MindFuelByAli home"
        >
          <img src="/assets/logo.svg" alt="MindFuelByAli logo" className="h-8 w-auto" loading="lazy" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy
              smooth
              offset={-88}
              duration={500}
              className="focus-ring link-underline cursor-pointer font-display text-[15px] font-semibold text-text-primary transition-all duration-300 hover:text-indigo"
              activeClass="text-indigo"
              aria-label={`Go to ${item.label}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button ariaLabel="Get a free consultation" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get a Free Consultation
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring rounded-button border border-border bg-white p-2.5 text-text-primary transition-all duration-300 hover:border-indigo hover:text-indigo md:hidden"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] bg-navy px-6 py-8 md:hidden"
          >
            <div className="mx-auto flex h-full max-w-site flex-col overflow-y-auto">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur">
                  <img src="/assets/logo.svg" alt="MindFuelByAli logo" className="h-8 w-auto brightness-0 invert" loading="lazy" />
                </div>
                <button
                  type="button"
                  className="focus-ring rounded-button border border-white/20 p-2.5 text-white transition-all duration-300 hover:border-white"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-10 flex flex-1 flex-col justify-between pb-4">
                <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
                  {navItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      smooth
                      spy
                      offset={-88}
                      duration={500}
                      activeClass="text-cyan"
                      className="focus-ring cursor-pointer font-display text-xl font-semibold text-white transition-all duration-300 hover:text-cyan sm:text-2xl"
                      onClick={() => setMobileOpen(false)}
                      aria-label={`Go to ${item.label}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <Button
                  className="mt-8 w-full"
                  ariaLabel="Get a free consultation"
                  onClick={() => {
                    setMobileOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get a Free Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
