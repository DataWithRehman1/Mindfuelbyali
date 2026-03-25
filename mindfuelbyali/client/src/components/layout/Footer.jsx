import { Facebook, Instagram, MessageCircle, Music2, Youtube } from 'lucide-react';

const serviceLinks = [
  'Custom ML Models',
  'Deep Learning & Neural Networks',
  'Model Deployment & MLOps',
  'Computer Vision Solutions',
  'Feature Engineering & Optimization',
  'Exploratory Data Analysis',
  'Predictive Analytics & Forecasting',
  'BI Dashboards',
  'Data Pipeline & ETL Engineering',
  'Statistical Modeling & Reporting'
];

/**
 * Footer with service links, company links, and contact details.
 * @returns {JSX.Element}
 */
function Footer() {
  const socialLinks = [
    { href: 'https://www.instagram.com/mindfuelbyali/', label: 'Instagram', Icon: Instagram },
    { href: 'https://www.tiktok.com/@mindfuelbyali', label: 'TikTok', Icon: Music2 },
    { href: 'https://www.facebook.com/profile.php?id=61587206103138', label: 'Facebook', Icon: Facebook },
    { href: 'https://youtube.com/@mindfuelby_ali?si=RXR3vyuGxELc-9b1', label: 'YouTube', Icon: Youtube },
    { href: 'https://whatsapp.com/channel/0029VbBAKj289ine8q7fhP2d', label: 'WhatsApp Channel', Icon: MessageCircle }
  ];

  return (
    <footer className="bg-[#050510] text-text-primary">
      <div className="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex items-center rounded-2xl border border-indigo/30 bg-bg-card px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
            <img src="/assets/logo.svg" alt="MindFuelByAli logo" className="h-9 w-auto" loading="lazy" />
          </div>
          <p className="mt-4 text-sm text-text-primary/50">We Turn Data Into Intelligence</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-primary/40">
            A founder-led AI and data platform helping startups and growing teams build measurable, production-ready solutions.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-full border border-border p-2 text-text-primary/40 transition-all duration-300 hover:border-indigo-light hover:text-indigo-light"
                aria-label={`${label} profile`}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.2em] text-text-primary/90">Services</h3>
          <ul className="mt-5 space-y-3">
            {serviceLinks.map((link) => (
              <li key={link}>
                <a href="#services" className="focus-ring text-sm text-text-primary/40 transition-all duration-300 hover:text-text-primary/85">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.2em] text-text-primary/90">Platform</h3>
          <ul className="mt-5 space-y-3">
            {['About', 'Team', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase() === 'portfolio' ? 'work' : item.toLowerCase()}`}
                  className="focus-ring text-sm text-text-primary/40 transition-all duration-300 hover:text-text-primary/85"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.2em] text-text-primary/90">Get In Touch</h3>
          <p className="mt-5 text-sm text-text-primary/40">mindfuelbyali@gmail.com</p>
          <p className="mt-2 text-sm text-text-primary/40">Remote - Worldwide</p>
          <a
            href="#contact"
            className="focus-ring mt-5 inline-flex rounded-full border border-indigo/50 px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.15em] text-indigo-light transition-all duration-300 hover:bg-indigo hover:text-text-primary"
            aria-label="Book a free call"
          >
            Book a Free Call
          </a>
        </div>
      </div>

      <div className="border-t border-indigo/20">
        <div className="container-site flex flex-col items-start justify-between gap-4 py-6 text-[13px] text-text-primary/30 sm:flex-row sm:items-center">
          <p>© 2025 MindFuelByAli. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="focus-ring transition-all duration-300 hover:text-text-primary/85" aria-label="Privacy policy">
              Privacy Policy
            </a>
            <a href="#" className="focus-ring transition-all duration-300 hover:text-text-primary/85" aria-label="Terms of service">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
