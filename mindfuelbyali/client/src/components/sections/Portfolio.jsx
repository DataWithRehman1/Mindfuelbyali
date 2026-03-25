import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import portfolio from '../../data/portfolio';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';

const tabs = ['All', 'Machine Learning', 'Data Science', 'NLP', 'Computer Vision'];

/**
 * Filterable portfolio showcase with smooth animated transitions.
 * @returns {JSX.Element}
 */
function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = useMemo(
    () => (activeTab === 'All' ? portfolio : portfolio.filter((project) => project.tag === activeTab)),
    [activeTab]
  );

  const badgeByTag = (tag) => {
    if (tag === 'Data Science') return 'cyan';
    if (tag === 'NLP') return 'nlp';
    if (tag === 'Computer Vision') return 'green';
    return 'indigo';
  };

  return (
    <section id="work" className="section-spacing bg-bg-secondary">
      <div className="container-site">
        <SectionHeader
          eyebrow="OUR WORK"
          heading="Case Studies & Projects"
          subtext="Real problems. Real solutions. Measurable results."
        />

        <div className="-mx-1 mb-10 flex gap-3 overflow-x-auto px-1 pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
          {tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`focus-ring shrink-0 rounded-full border px-4 py-2 font-display text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'border-indigo bg-indigo text-text-primary'
                    : 'border-border bg-white/5 text-text-secondary hover:border-indigo-light hover:text-indigo-light'
                }`}
                aria-label={`Filter by ${tab}`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.97, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                transition={{ duration: 0.32, delay: index * 0.06 }}
                className="rounded-card border border-border bg-bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex items-center justify-between gap-4">
                  <Badge label={project.tag} color={badgeByTag(project.tag)} />
                  <span className="rounded-full bg-gradient-to-r from-indigo to-cyan px-3 py-1 text-xs font-display font-semibold text-text-primary">
                    {project.member}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-text-primary">{project.title}</h3>
                <p className="mt-3 text-sm leading-[1.6] text-text-secondary">{project.problem}</p>

                <div className="mt-4 rounded-md border-l-[3px] border-l-success bg-success/5 px-3.5 py-2.5 text-sm font-semibold text-success">
                  {project.result}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full bg-white/6 px-3 py-1 text-xs font-medium text-text-muted">
                      {item}
                    </span>
                  ))}
                </div>

                <Button
                  as="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="mt-6 w-full border-[1.5px] border-indigo text-indigo-light hover:bg-indigo hover:text-text-primary"
                  ariaLabel={`View live project for ${project.title}`}
                >
                  View Live →
                </Button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;
