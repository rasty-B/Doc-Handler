import React from 'react';
import { Settings } from 'lucide-react';

interface HeaderProps {
  onSettingsClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSettingsClick }) => {
  return (
    <div className="border-b border-gray-200 p-4 flex justify-between items-center bg-white">
      <h2 className="text-xl font-semibold">PDF Manipulator</h2>
      <button 
        onClick={onSettingsClick}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <Settings className="h-5 w-5" />
      </button>
    </div>
  );
};