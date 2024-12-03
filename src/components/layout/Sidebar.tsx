import React from 'react';
import { FileUpload } from '../FileUpload';
import { FolderSelector } from './FolderSelector';
import type { PDFFile } from '../../types';

interface SidebarProps {
  onFileUpload: (files: File[]) => void;
  onInputFolderSelect: () => void;
  onOutputFolderSelect: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  onFileUpload,
  onInputFolderSelect,
  onOutputFolderSelect
}) => {
  return (
    <div className="w-64 min-w-64 border-r border-gray-200 p-4 bg-white h-full">
      <h1 className="text-xl font-semibold mb-6">PDF Manager</h1>
      <div className="space-y-4">
        <FileUpload onFileUpload={onFileUpload} />
        <FolderSelector
          label="Input Folder"
          onClick={onInputFolderSelect}
        />
        <FolderSelector
          label="Output Folder"
          onClick={onOutputFolderSelect}
        />
      </div>
    </div>
  );
};