import { LoaderCircle } from 'lucide-react';

const variantClasses = {
  primary: 'bg-indigo text-white hover:bg-indigo-dark',
  secondary: 'bg-navy text-white hover:bg-indigo',
  outline: 'border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-white'
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base'
};

/**
 * Reusable button supporting visual variants and loading state.
 * @param {{variant?: 'primary'|'secondary'|'outline', size?: 'sm'|'md'|'lg', children: import('react').ReactNode, onClick?: () => void, disabled?: boolean, loading?: boolean, className?: string, type?: 'button'|'submit'|'reset', as?: 'button'|'a', href?: string, target?: string, rel?: string, ariaLabel?: string}} props
 * @returns {JSX.Element}
 */
function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  loading = false,
  className = '',
  type = 'button',
  as = 'button',
  href,
  target,
  rel,
  ariaLabel
}) {
  const Component = as;
  const commonClasses = `focus-ring inline-flex items-center justify-center gap-2 rounded-button font-display font-semibold transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <Component
      type={as === 'button' ? type : undefined}
      href={as === 'a' ? href : undefined}
      target={as === 'a' ? target : undefined}
      rel={as === 'a' ? rel : undefined}
      onClick={disabled || loading ? undefined : onClick}
      disabled={as === 'button' ? disabled || loading : undefined}
      aria-disabled={disabled || loading}
      aria-label={ariaLabel}
      className={commonClasses}
    >
      {loading ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
      <span>{loading ? 'Sending...' : children}</span>
    </Component>
  );
}

export default Button;
