import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {title && <h2 className="text-lg font-medium mb-4">{title}</h2>}
      {children}
    </div>
  );
};