import React from 'react';

type ProgressProps = {
  value: number;
  max: number;
  className?: string; // Add className prop for custom styling
};

export const Progress: React.FC<ProgressProps> = ({ value, max, className }) => {
  const percentage = (value / max) * 100;

  return (
    <div className={`progress ${className}`}>
      <div className="progress-bar" style={{ width: `${percentage}%` }} />
    </div>
  );
};
