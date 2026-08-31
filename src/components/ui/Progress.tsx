interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
}

export function Progress({ value, max = 100, className = '', showLabel = false }: ProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="progress-track flex-1">
        <div 
          className="progress-fill"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
      {showLabel && (
        <span className="text-sm text-text-secondary tabular-nums">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
}