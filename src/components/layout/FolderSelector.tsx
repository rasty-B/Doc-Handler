import React from 'react';

interface FolderSelectorProps {
  label: string;
  onClick: () => void;
}

export const FolderSelector: React.FC<FolderSelectorProps> = ({ label, onClick }) => {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">{label}</div>
      <button
        onClick={onClick}
        className="w-full text-left p-2 bg-gray-50 rounded text-gray-500 hover:bg-gray-100 transition-colors"
      >
        Select {label.toLowerCase()}
      </button>
    </div>
  );
};