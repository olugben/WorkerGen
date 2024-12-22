import React, { ReactElement } from 'react';

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
};

type SelectTriggerProps = {
  value?: string;
  children: React.ReactNode;
  className:string
};

type SelectContentProps = {
  onChange?: (value: string) => void;
  children?: React.ReactNode;
};

type SelectItemProps = {
  value: string;
  children: React.ReactNode;
  onChange?: (value: string) => void;
};

type SelectValueProps = {
  children: React.ReactNode;
};

export const Select: React.FC<SelectProps> = ({ value, onChange, children }) => {
  return (
    <div className="select">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === SelectTrigger) {
          return React.cloneElement(child as ReactElement<SelectTriggerProps>, { value });
        }
        if (React.isValidElement(child) && child.type === SelectContent) {
          return React.cloneElement(child as ReactElement<SelectContentProps>, { onChange });
        }
        return child;
      })}
    </div>
  );
};

export const SelectTrigger: React.FC<SelectTriggerProps> = ({ value, children }) => {
  return (
    <div className="select-trigger">
      {children}
      <span className="select-value">{value}</span>
    </div>
  );
};

export const SelectContent: React.FC<SelectContentProps> = ({ onChange, children }) => {
  return (
    <div className="select-content">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === SelectItem) {
          return React.cloneElement(child as ReactElement<SelectItemProps>, { onChange });
        }
        return child;
      })}
    </div>
  );
};

export const SelectItem: React.FC<SelectItemProps> = ({ value, onChange, children }) => {
  return (
    <div
      className="select-item"
      onClick={() => {
        if (onChange) {
          onChange(value);
        }
      }}
    >
      {children}
    </div>
  );
};

export const SelectValue: React.FC<SelectValueProps> = ({ children }) => {
  return <span className="select-value">{children}</span>;
};
