import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import CTABanner from './components/sections/CTABanner';
import Contact from './components/sections/Contact';
import Button from './components/ui/Button';

const Portfolio = lazy(() => import('./components/sections/Portfolio'));

/**
 * Root app composition with a first-load spinner and a minimal 404 fallback.
 * @returns {JSX.Element}
 */
function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLoader(false), 800);
    return () => window.clearTimeout(timer);
  }, []);

  const isNotFound = useMemo(() => {
    const validPaths = ['/', '/index.html'];
    return !validPaths.includes(window.location.pathname);
  }, []);

  if (showLoader) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg-primary" aria-live="polite">
        <div
          className="h-12 w-12 animate-loader rounded-full border-4 border-border border-t-indigo"
          aria-label="Loading page"
        />
      </div>
    );
  }

  if (isNotFound) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bg-primary px-4">
        <div className="max-w-lg rounded-card border border-border bg-bg-card p-10 text-center shadow-card">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-indigo">404</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-text-primary">Page Not Found</h1>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            The page you are looking for does not exist. Head back to the homepage and continue exploring.
          </p>
          <div className="mt-8 flex justify-center">
            <Button as="a" href="/" ariaLabel="Go to home page">
              Go Home
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Team />
        <Services />
        <Suspense
          fallback={
            <div className="container-site py-20 text-center text-text-secondary" aria-live="polite">
              Loading section...
            </div>
          }
        >
          <Portfolio />
        </Suspense>
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
