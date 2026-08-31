'use client';

import { forwardRef } from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = '', label, id, ...props }, ref) => {
    return (
      <label className="flex items-start gap-3 cursor-pointer group" htmlFor={id}>
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className={`checkbox-custom ${className}`}
          {...props}
        />
        {label && (
          <span className="text-text-primary group-hover:text-accent transition-colors">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';