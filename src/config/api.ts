import axios from 'axios';

// API Configuration
export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  }
};

// Create axios instance with default config
export const apiClient = axios.create(API_CONFIG);

// API endpoints
export const API_ENDPOINTS = {
  merge: '/api/pdf/merge',
  split: '/api/pdf/split',
  compress: '/api/pdf/compress',
  extract: '/api/pdf/extract',
  status: (jobId: string) => `/api/status/${jobId}`,
};

// WebSocket configuration
export const WS_CONFIG = {
  url: import.meta.env.VITE_WS_URL || 'ws://localhost:3000',
  reconnectInterval: 1000,
  maxRetries: 5,
};