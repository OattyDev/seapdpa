type BadgeVariant = 'default' | 'success' | 'warning' | 'error';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-bg-tertiary text-text-secondary',
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
  error: 'bg-error/10 text-error',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span 
      className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-[4px] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}