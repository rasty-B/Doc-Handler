export interface PDFFile {
  file: File;
  preview: string;
}

export type OutputFormat = 'markdown' | 'text' | 'json';

export interface ExtractionOptions {
  type: 'entire' | 'pages' | 'text';
  pages?: string;
  searchText?: string;
  outputFormat: OutputFormat;
}