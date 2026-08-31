'use client';

import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-hover border-transparent',
  secondary: 'bg-transparent text-accent border-accent hover:bg-accent-light',
  ghost: 'bg-transparent text-text-secondary hover:bg-bg-tertiary border-transparent',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', disabled, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-[6px] border transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';