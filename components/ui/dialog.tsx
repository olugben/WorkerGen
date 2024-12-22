import React, { ReactNode } from 'react';

type DialogProps = {
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
  onOpenChange:()=>void;
};

export const Dialog: React.FC<DialogProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      <style jsx>{`
        .dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .dialog {
          background: white;
          padding: 20px;
          border-radius: 8px;
          width: 500px;
          max-width: 80%;
        }
        .dialog-content {
          padding: 16px 0;
        }
        .dialog-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .dialog-title {
          margin: 0;
          font-size: 1.5rem;
        }
        .dialog-close-button {
          background: transparent;
          border: none;
          font-size: 16px;
          cursor: pointer;
        }
        .dialog-footer {
          display: flex;
          justify-content: flex-end;
          padding-top: 16px;
        }
      `}</style>
    </div>
  );
};

type DialogContentProps = {
  children: ReactNode;
  className?:string
};

export const DialogContent: React.FC<DialogContentProps> = ({ children }) => {
  return <div className="dialog-content">{children}</div>;
};

type DialogHeaderProps = {
  children: ReactNode;
  className?:string
};

export const DialogHeader: React.FC<DialogHeaderProps> = ({ children }) => {
  return <div className="dialog-header">{children}</div>;
};

type DialogTitleProps = {
  children: ReactNode;
  className?:string
};

export const DialogTitle: React.FC<DialogTitleProps> = ({ children }) => {
  return <h2 className="dialog-title">{children}</h2>;
};

type DialogFooterProps = {
  children: ReactNode;
  className?:string
};

export const DialogFooter: React.FC<DialogFooterProps> = ({ children }) => {
  return <div className="dialog-footer">{children}</div>;
};
