import React from 'react';

export const Card: React.FC<{ children: React.ReactNode }> = ({ children}) => {
  return <div className="card">{children}</div>;
};

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="card-content">{children}</div>;
  

};


export const CardHeader: React.FC<{ children: React.ReactNode, className:string }> = ({children}) => {
    return <div className="card-content">{children}</div>;
    
  
  };
  
export const CardTitle: React.FC<{ children: React.ReactNode, className:string }> = ({children}) => {
    return <div className="card-content">{children}</div>;
    
  
  };