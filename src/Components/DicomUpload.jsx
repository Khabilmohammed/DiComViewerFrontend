import React, { useState } from 'react';
import axios from 'axios';
import DicomMetadataView from './DicomMetadataView';


const DicomUpload = () => {
  const [metadata, setMetadata] = useState(null);
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setMetadata(null);
    setFileName(file.name);
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('https://localhost:7079/api/Dicom/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMetadata(res.data);
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <h1 className="upload-title">📁 Upload DICOM File</h1>

      <label className="upload-label">
        <input type="file" accept=".dcm" onChange={handleUpload} />
        <span className="upload-button">Choose File</span>
        <span className="file-name">{fileName || 'No file chosen'}</span>
      </label>

      {loading && <p className="loading-text">Uploading and processing...</p>}

      {metadata && <DicomMetadataView metadata={metadata} />}
    </div>
  );
};

export default DicomUpload;
