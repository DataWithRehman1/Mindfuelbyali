const colorClasses = {
  indigo: 'bg-indigo/15 text-indigo-light border-indigo/40',
  cyan: 'bg-cyan/15 text-cyan border-cyan/40',
  green: 'bg-orange-400/15 text-orange-400 border-orange-400/30',
  grey: 'bg-white/5 text-text-muted border-border',
  nlp: 'bg-indigo-light/20 text-indigo-light border-indigo-light/30'
};

/**
 * Small pill badge with consistent typography and spacing.
 * @param {{label: string, color?: 'indigo'|'cyan'|'green'|'grey', className?: string}} props
 * @returns {JSX.Element}
 */
function Badge({ label, color = 'indigo', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-display text-xs font-semibold uppercase tracking-wide ${colorClasses[color]} ${className}`}
    >
      {label}
    </span>
  );
}

export default Badge;
