import { forwardRef } from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', interactive = false, children, ...props }, ref) => {
    const baseStyles = 'bg-bg-secondary border border-border rounded-[8px] p-6';
    const interactiveStyles = interactive ? 'transition-colors hover:border-accent cursor-pointer' : '';
    
    return (
      <div
        ref={ref}
        className={`${baseStyles} ${interactiveStyles} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';