/**
 * Shared section heading pattern used across the landing page.
 * @param {{eyebrow: string, heading: string, subtext?: string, align?: 'left'|'center'}} props
 * @returns {JSX.Element}
 */
function SectionHeader({ eyebrow, heading, subtext, align = 'center' }) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <header className={`${alignClasses} mb-10 max-w-2xl sm:mb-12`}>
      <p className="font-display text-[13px] font-semibold uppercase tracking-[0.22em] text-indigo">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-[1.2] text-navy sm:text-4xl md:text-[42px]">{heading}</h2>
      {subtext ? <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">{subtext}</p> : null}
    </header>
  );
}

export default SectionHeader;
