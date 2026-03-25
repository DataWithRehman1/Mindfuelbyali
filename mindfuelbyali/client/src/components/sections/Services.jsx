import { motion } from 'framer-motion';
import {
  Activity,
  BarChart2,
  Brain,
  Cpu,
  Database,
  Eye,
  Layers,
  MessageSquare,
  PieChart,
  Rocket,
  TrendingUp
} from 'lucide-react';
import { dataScientistServices, mlEngineerServices } from '../../data/services';
import Badge from '../ui/Badge';
import SectionHeader from '../ui/SectionHeader';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const iconMap = {
  Activity,
  BarChart2,
  Brain,
  Cpu,
  Database,
  Eye,
  Layers,
  MessageSquare,
  PieChart,
  Rocket,
  TrendingUp
};

/**
 * Services grid showing ML engineering and Data Science offerings.
 * @returns {JSX.Element}
 */
function Services() {
  const services = [...mlEngineerServices, ...dataScientistServices];
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.12 });

  return (
    <section id="services" ref={ref} className="section-spacing bg-bg-secondary">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >
          <SectionHeader
            eyebrow="WHAT WE DO"
            heading="Our Services"
            subtext="Two founders, hands-on delivery from discovery to deployment across the AI and data stack."
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const badgeColor = service.tag === 'ML Engineering' ? 'indigo' : 'cyan';
            const iconTone = service.tag === 'ML Engineering' ? 'bg-indigo/15 text-indigo-light' : 'bg-cyan/15 text-cyan';

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-card border border-border bg-bg-card p-8 shadow-card transition-all duration-300 hover:border-l-[3px] hover:border-l-indigo hover:shadow-[0_20px_40px_rgba(124,58,237,0.25)]"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconTone}`}>
                  {Icon ? <Icon className="h-6 w-6" /> : null}
                </div>
                <Badge label={service.tag} color={badgeColor} className="mt-4" />
                <h3 className="mt-4 text-2xl font-bold leading-snug text-text-primary">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">{service.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-light">
                  Learn more
                  <span className="learn-more-link h-[2px] w-8 bg-indigo-light" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
