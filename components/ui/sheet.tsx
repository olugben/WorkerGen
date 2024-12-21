import React, { ReactNode } from 'react';

type SheetProps = {
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const Sheet: React.FC<SheetProps> = ({ children, open, onOpenChange }) => {
  return (
    <div className={`sheet ${open ? 'open' : ''}`}>
      <div className="sheet-overlay" onClick={() => onOpenChange(false)}></div>
      <div className="sheet-content">
        {children}
      </div>
    </div>
  );
};

type SheetContentProps = {
  children: ReactNode;
  side: string;
  className?: string;
};

export const SheetContent: React.FC<SheetContentProps> = ({ children, side, className }) => {
  return (
    <div className={`sheet-inner-content ${side} ${className}`}>
      {children}
    </div>
  );
};
