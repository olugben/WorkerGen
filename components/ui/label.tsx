import React from 'react';

type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
};

export const Label: React.FC<LabelProps> = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className={`label ${className}`}>
      {children}
      <style jsx>{`
        .label {
          display: block;
          font-weight: bold;
          margin-bottom: 8px;
        }
      `}</style>
    </label>
  );
};
