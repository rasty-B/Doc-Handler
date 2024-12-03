import React from 'react';
import { Layers, Scissors, Download } from 'lucide-react';

interface PDFOperationsProps {
  onMerge: () => void;
  onSplit: () => void;
  onCompress: () => void;
}

export const PDFOperations: React.FC<PDFOperationsProps> = ({
  onMerge,
  onSplit,
  onCompress
}) => {
  return (
    <div className="space-y-4">
      <div className="text-lg font-medium mb-4">PDF Operations</div>
      <div className="grid grid-cols-1 gap-3">
        <button
          onClick={onMerge}
          className="flex items-center justify-center w-full p-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
        >
          <Layers className="h-5 w-5 mr-2" />
          Merge PDFs
        </button>
        <button
          onClick={onSplit}
          className="flex items-center justify-center w-full p-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
        >
          <Scissors className="h-5 w-5 mr-2" />
          Split PDF
        </button>
        <button
          onClick={onCompress}
          className="flex items-center justify-center w-full p-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
        >
          <Download className="h-5 w-5 mr-2" />
          Compress PDF
        </button>
      </div>
    </div>
  );
};