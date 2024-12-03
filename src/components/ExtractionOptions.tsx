import React from 'react';
import type { ExtractionOptions } from '../types';

interface ExtractionOptionsFormProps {
  options: ExtractionOptions;
  onOptionsChange: (options: ExtractionOptions) => void;
}

export const ExtractionOptionsForm: React.FC<ExtractionOptionsFormProps> = ({
  options,
  onOptionsChange
}) => {
  return (
    <div className="space-y-6">
      <div className="text-lg font-medium">Extraction Options</div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              checked={options.type === 'entire'}
              onChange={() => onOptionsChange({ ...options, type: 'entire' })}
              className="form-radio"
            />
            <span>Entire Document/Pool</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              checked={options.type === 'pages'}
              onChange={() => onOptionsChange({ ...options, type: 'pages' })}
              className="form-radio"
            />
            <span>Specific Pages</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              checked={options.type === 'text'}
              onChange={() => onOptionsChange({ ...options, type: 'text' })}
              className="form-radio"
            />
            <span>Specific Text</span>
          </label>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Output Format
          </label>
          <select
            value={options.outputFormat}
            onChange={(e) =>
              onOptionsChange({
                ...options,
                outputFormat: e.target.value as ExtractionOptions['outputFormat']
              })
            }
            className="w-full p-2 border rounded"
          >
            <option value="markdown">Markdown</option>
            <option value="text">Plain Text</option>
            <option value="json">JSON</option>
          </select>
        </div>

        <button
          className="w-full p-3 bg-black text-white rounded hover:bg-gray-800"
        >
          Extract Information
        </button>
      </div>
    </div>
  );
};