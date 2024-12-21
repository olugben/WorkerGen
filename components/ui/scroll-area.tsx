import React, { ReactNode } from 'react';

type ScrollAreaProps = {
  children: ReactNode;
  height?: string;
  width?: string;
  className?: string;  // Add className prop for custom styling
};

export const ScrollArea: React.FC<ScrollAreaProps> = ({ children, height = '100%', width = '100%', className }) => {
  return (
    <div className={`scroll-area ${className}`} style={{ height, width }}>
      {children}
    </div>
  );
};
