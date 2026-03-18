const colorClasses = {
  indigo: 'bg-indigo/10 text-indigo border-indigo/20',
  cyan: 'bg-cyan/10 text-cyan border-cyan/20',
  green: 'bg-success/10 text-success border-success/20',
  grey: 'bg-bg-secondary text-text-secondary border-border'
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
