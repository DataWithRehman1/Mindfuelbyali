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
                  ? 'relative border-transparent bg-[linear-gradient(135deg,#2D1B69_0%,#1E1B4B_100%)] text-text-primary shadow-[0_24px_60px_rgba(124,58,237,0.4)] lg:scale-[1.04]'
                  : 'border-border bg-bg-card text-text-primary shadow-card'
              }`}
            >
              {plan.badge ? (
                <span className="absolute -top-3 left-6 rounded-full bg-indigo px-3 py-1 font-display text-xs font-semibold uppercase tracking-wide text-text-primary sm:left-10">
                  {plan.badge}
                </span>
              ) : null}

              <p className={`font-display text-sm uppercase tracking-[0.2em] ${plan.highlighted ? 'text-indigo-light/80' : 'text-text-muted'}`}>{plan.plan}</p>
              <p className="mt-4 text-4xl font-extrabold leading-none sm:text-[52px]">{plan.price}</p>
              <p className={`mt-2 text-sm ${plan.highlighted ? 'text-indigo-light/60' : 'text-text-muted'}`}>{plan.priceNote}</p>
              <p className={`mt-5 text-sm leading-relaxed ${plan.highlighted ? 'text-indigo-light/80' : 'text-text-secondary'}`}>{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-3 text-[15px] ${plan.highlighted ? 'text-text-primary/85' : 'text-text-secondary'}`}>
                    <span className={plan.highlighted ? 'text-emerald-200' : 'text-success'}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 w-full ${plan.highlighted ? 'bg-indigo/90 hover:bg-indigo' : 'bg-indigo hover:bg-indigo-dark'}`}
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
