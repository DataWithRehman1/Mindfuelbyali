import { motion } from 'framer-motion';
import pricing from '../../data/pricing';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';

/**
 * Pricing cards with highlighted middle tier.
 * @returns {JSX.Element}
 */
function Pricing() {
  return (
    <section id="pricing" className="section-spacing bg-bg-primary">
      <div className="container-site">
        <SectionHeader
          eyebrow="PRICING"
          heading="Transparent, Value-Based Pricing"
          subtext="No surprise fees. No bloated retainers. Just results."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pricing.map((plan, index) => (
            <motion.article
              key={plan.plan}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              whileHover={plan.highlighted ? undefined : { y: -4 }}
              className={`rounded-[20px] border p-6 transition-all duration-300 sm:p-8 lg:p-10 ${
                plan.highlighted
                  ? 'relative border-indigo bg-[linear-gradient(135deg,var(--color-accent-navy)_0%,#2D2B5B_100%)] text-white shadow-[0_24px_60px_rgba(79,70,229,0.3)] lg:scale-[1.04]'
                  : 'border-border bg-white text-text-primary shadow-card'
              }`}
            >
              {plan.badge ? (
                <span className="absolute -top-3 left-6 rounded-full bg-amber-500 px-3 py-1 font-display text-xs font-semibold uppercase tracking-wide text-white sm:left-10">
                  {plan.badge}
                </span>
              ) : null}

              <p className="font-display text-sm uppercase tracking-[0.2em] opacity-80">{plan.plan}</p>
              <p className="mt-4 text-4xl font-extrabold leading-none sm:text-[52px]">{plan.price}</p>
              <p className="mt-2 text-sm opacity-80">{plan.priceNote}</p>
              <p className="mt-5 text-sm leading-relaxed opacity-90">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[15px]">
                    <span className="text-success">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8 w-full"
                variant={plan.highlighted ? 'primary' : 'secondary'}
                ariaLabel={`${plan.cta} for ${plan.plan}`}
              >
                {plan.cta}
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
