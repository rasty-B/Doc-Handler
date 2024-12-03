import { apiClient, API_ENDPOINTS } from '../config/api';

export interface ProcessingStatus {
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress?: number;
  result?: string;
  error?: string;
}

export class PDFService {
  async mergePDFs(files: File[]): Promise<string> {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    const response = await apiClient.post(API_ENDPOINTS.merge, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.jobId;
  }

  async splitPDF(file: File, pages: string): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('pages', pages);

    const response = await apiClient.post(API_ENDPOINTS.split, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.jobId;
  }

  async compressPDF(file: File, quality: 'low' | 'medium' | 'high'): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('quality', quality);

    const response = await apiClient.post(API_ENDPOINTS.compress, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.jobId;
  }

  async extractInformation(file: File, options: any): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('options', JSON.stringify(options));

    const response = await apiClient.post(API_ENDPOINTS.extract, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.jobId;
  }

  async getStatus(jobId: string): Promise<ProcessingStatus> {
    const response = await apiClient.get(API_ENDPOINTS.status(jobId));
    return response.data;
  }
}