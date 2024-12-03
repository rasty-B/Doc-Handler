## PDF Manipulator - Design Choices and Architecture

### Project Overview
PDF Manipulator is a web application that allows users to perform various operations on PDF files, including merging, splitting, compressing, and extracting information. The application uses a React frontend with a LM Studio backend for advanced text processing capabilities.

### Architecture Decisions

#### Frontend Architecture
1. **Component Structure**
   - Modular components with single responsibilities
   - Layout components separated from feature components
   - Shared UI components in `components/ui`
   - Utility functions isolated in `utils` directory

2. **State Management**
   - React's built-in useState for local state
   - Props drilling minimized through component composition
   - File state managed centrally in App.tsx

3. **File Handling**
   - Drag-and-drop support via react-dropzone
   - File validation and preview generation
   - Automatic cleanup of file previews
   - Support for both single and multiple file uploads

#### Backend Integration (LM Studio)

1. **API Configuration**
   - REST API endpoints for PDF operations
   - WebSocket connection for real-time processing updates
   - Base URL configurable through environment variables
   - Automatic retry mechanism for failed requests

2. **PDF Processing**
   - Asynchronous processing for large files
   - Progress tracking for long-running operations
   - Error handling with detailed feedback
   - Support for concurrent processing

### Technical Specifications

1. **API Endpoints**
   ```
   POST /api/pdf/merge
   POST /api/pdf/split
   POST /api/pdf/compress
   POST /api/pdf/extract
   GET  /api/status/:jobId
   ```

2. **WebSocket Events**
   ```
   pdf:progress  - Processing progress updates
   pdf:complete  - Operation completion
   pdf:error     - Error notifications
   ```

3. **File Size Limits**
   - Maximum single file size: 100MB
   - Maximum combined size: 500MB
   - Supported formats: PDF only

### Security Considerations
1. File validation on both frontend and backend
2. Secure file handling with automatic cleanup
3. Rate limiting for API endpoints
4. Input sanitization for all user inputs

### Performance Optimizations
1. Lazy loading of components
2. File preview optimization
3. Debounced API calls
4. Caching of processed files