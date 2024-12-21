import React from 'react';

type CheckboxProps = {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

export const Checkbox: React.FC<CheckboxProps> = () => {
  return (
    <label className="checkbox-container">
      
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};
