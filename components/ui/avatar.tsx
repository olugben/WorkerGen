import React from 'react';

export const Avatar: React.FC<{ src: string; alt: string ,className?:string}> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="avatar" />;
};

export const AvatarFallback: React.FC<{ text: string }> = ({ text }) => {
  return <div className="avatar-fallback">{text}</div>;
};

export const AvatarImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="avatar-image" />;
};
