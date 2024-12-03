import React, { useState, useCallback, useEffect } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Tabs } from './components/layout/Tabs';
import { MainContent } from './components/layout/MainContent';
import { createFilePreview, cleanupFilePreview } from './utils/file';
import type { PDFFile, ExtractionOptions } from './types';

function App() {
  const [files, setFiles] = useState<PDFFile[]>([]);
  const [activeTab, setActiveTab] = useState<'pdfs' | 'extraction'>('pdfs');
  const [extractionOptions, setExtractionOptions] = useState<ExtractionOptions>({
    type: 'entire',
    outputFormat: 'markdown'
  });

  const handleFileUpload = useCallback((uploadedFiles: File[]) => {
    const newFiles = uploadedFiles.map(createFilePreview);
    setFiles(prev => [...prev, ...newFiles]);
  }, []);

  const handleInputFolderSelect = () => {
    // Handle input folder selection
    console.log('Selecting input folder...');
  };

  const handleOutputFolderSelect = () => {
    // Handle output folder selection
    console.log('Selecting output folder...');
  };

  const handleSettingsClick = () => {
    // Handle settings click
    console.log('Opening settings...');
  };

  const handleMerge = () => {
    console.log('Merging PDFs...', files);
  };

  const handleSplit = () => {
    console.log('Splitting PDF...');
  };

  const handleCompress = () => {
    console.log('Compressing PDF...');
  };

  // Cleanup file previews when component unmounts
  useEffect(() => {
    return () => {
      files.forEach(file => {
        cleanupFilePreview(file.preview);
      });
    };
  }, [files]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        <Sidebar
          onFileUpload={handleFileUpload}
          onInputFolderSelect={handleInputFolderSelect}
          onOutputFolderSelect={handleOutputFolderSelect}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onSettingsClick={handleSettingsClick} />
          <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
          <MainContent
            activeTab={activeTab}
            extractionOptions={extractionOptions}
            onOptionsChange={setExtractionOptions}
            onMerge={handleMerge}
            onSplit={handleSplit}
            onCompress={handleCompress}
          />
        </div>
      </div>
    </div>
  );
}

export default App;