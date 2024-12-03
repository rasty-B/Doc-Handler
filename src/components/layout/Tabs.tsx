import React from 'react';

interface TabsProps {
  activeTab: 'pdfs' | 'extraction';
  onTabChange: (tab: 'pdfs' | 'extraction') => void;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="flex">
        <button
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === 'pdfs'
              ? 'border-black text-black'
              : 'border-transparent text-gray-500'
          }`}
          onClick={() => onTabChange('pdfs')}
        >
          PDFs
        </button>
        <button
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === 'extraction'
              ? 'border-black text-black'
              : 'border-transparent text-gray-500'
          }`}
          onClick={() => onTabChange('extraction')}
        >
          Information Extraction
        </button>
      </div>
    </div>
  );
};