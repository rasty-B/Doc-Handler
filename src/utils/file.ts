import { PDFFile } from '../types';

export const validatePDFFile = (file: File): boolean => {
  const validTypes = ['application/pdf'];
  return validTypes.includes(file.type);
};

export const createFilePreview = (file: File): PDFFile => {
  return {
    file,
    preview: URL.createObjectURL(file)
  };
};

export const cleanupFilePreview = (preview: string) => {
  URL.revokeObjectURL(preview);
};