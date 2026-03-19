import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import team from '../../data/team';
import SectionHeader from '../ui/SectionHeader';

/**
 * Team section for co-founders with profile cards.
 * @returns {JSX.Element}
 */
function Team() {
  return (
    <section id="team" className="section-spacing bg-bg-primary">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeader
            eyebrow="THE TEAM"
            heading="Meet the Co-founders"
            subtext="Two friends on one mission: building practical AI and data solutions that create real impact."
          />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Co-founder profile card.
 * @param {{member: import('../../data/team').default[number], index: number}} props
 * @returns {JSX.Element}
 */
function TeamCard({ member, index }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, x: index === 0 ? -60 : 60, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="rounded-[20px] border border-border border-l-4 border-l-indigo bg-bg-card p-6 sm:p-8 lg:p-10"
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
        {imageError ? (
          <div className="flex h-[104px] w-[104px] shrink-0 items-center justify-center rounded-full border-2 border-indigo bg-gradient-to-br from-indigo to-cyan text-2xl font-extrabold text-white sm:h-[132px] sm:w-[132px] sm:text-3xl">
            {member.name
              .split(' ')
              .map((part) => part[0])
              .slice(0, 2)
              .join('')}
          </div>
        ) : (
          <img
            src={member.photo}
            alt={`${member.name} profile`}
            width="132"
            height="132"
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-[104px] w-[104px] shrink-0 rounded-full border-[3px] border-indigo object-cover sm:h-[132px] sm:w-[132px]"
          />
        )}

        <div>
          <h3 className="text-2xl font-extrabold text-navy sm:text-[26px]">{member.name}</h3>
          <p className="mt-2 font-display text-sm font-semibold text-indigo">{member.role}</p>
        </div>
      </div>

      <p className="my-5 text-base leading-[1.75] text-text-secondary">{member.bio}</p>
      <div className="border-t border-border pt-5">
        <div className="flex flex-wrap gap-2">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-indigo/10 px-3 py-1 text-[13px] font-semibold text-indigo"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring rounded-full border border-border p-2 text-text-secondary transition-all duration-300 hover:text-indigo"
          aria-label={`${member.name} LinkedIn`}
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring rounded-full border border-border p-2 text-text-secondary transition-all duration-300 hover:text-indigo"
          aria-label={`${member.name} GitHub`}
        >
          <Github className="h-5 w-5" />
        </a>
      </div>
    </motion.article>
  );
}

export default Team;
