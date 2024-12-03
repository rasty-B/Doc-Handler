import React, { useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { validatePDFFile } from '../utils/file';

interface FileUploadProps {
  onFileUpload: (files: File[]) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback((files: File[]) => {
    const validFiles = files.filter(validatePDFFile);
    if (validFiles.length > 0) {
      onFileUpload(validFiles);
    }
  }, [onFileUpload]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    handleFiles(acceptedFiles);
  }, [handleFiles]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    multiple: true,
    noClick: true
  });

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    handleFiles(files);
  };

  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Upload PDFs</div>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-4 transition-colors ${
          isDragActive 
            ? 'border-black bg-gray-50' 
            : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <input 
          {...getInputProps()} 
          ref={fileInputRef}
          onChange={handleInputChange}
        />
        <div className="flex flex-col items-center justify-center space-y-3">
          <button
            type="button"
            onClick={handleButtonClick}
            className="w-full p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
          >
            <Upload className="h-4 w-4" />
            <span>Select Files</span>
          </button>
          <p className="text-sm text-gray-500 text-center">
            {isDragActive
              ? 'Drop PDF files here...'
              : 'or drag and drop PDF files here'}
          </p>
        </div>
      </div>
    </div>
  );
};