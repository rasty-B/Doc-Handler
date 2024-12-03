import React from 'react';
import { PDFOperations } from '../PDFOperations';
import { ExtractionOptionsForm } from '../ExtractionOptions';
import type { ExtractionOptions } from '../../types';

interface MainContentProps {
  activeTab: 'pdfs' | 'extraction';
  extractionOptions: ExtractionOptions;
  onOptionsChange: (options: ExtractionOptions) => void;
  onMerge: () => void;
  onSplit: () => void;
  onCompress: () => void;
}

export const MainContent: React.FC<MainContentProps> = ({
  activeTab,
  extractionOptions,
  onOptionsChange,
  onMerge,
  onSplit,
  onCompress,
}) => {
  return (
    <div className="flex-1 p-6 bg-white overflow-y-auto">
      {activeTab === 'pdfs' ? (
        <PDFOperations
          onMerge={onMerge}
          onSplit={onSplit}
          onCompress={onCompress}
        />
      ) : (
        <ExtractionOptionsForm
          options={extractionOptions}
          onOptionsChange={onOptionsChange}
        />
      )}
    </div>
  );
};