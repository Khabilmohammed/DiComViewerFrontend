import React from 'react';

import {
  FaUser, FaIdCard, FaCalendarAlt, FaXRay,
  FaHospital, FaMicroscope, FaFileMedical,
  FaBarcode
} from 'react-icons/fa';

const iconMap = {
  patientName: <FaUser className="dicom-icon" />,
  patientID: <FaIdCard className="dicom-icon" />,
  studyDate: <FaCalendarAlt className="dicom-icon" />,
  modality: <FaXRay className="dicom-icon" />,
  studyDescription: <FaFileMedical className="dicom-icon" />,
  seriesInstanceUID: <FaBarcode className="dicom-icon" />,
  studyInstanceUID: <FaBarcode className="dicom-icon" />,
  institutionName: <FaHospital className="dicom-icon" />,
  manufacturer: <FaMicroscope className="dicom-icon" />,
  bodyPartExamined: <FaXRay className="dicom-icon" />,
};

const DicomMetadataView = ({ metadata }) => {
  return (
    <div className="dicom-container">
      <h2 className="dicom-title">📄 DICOM Metadata</h2>
      <div className="dicom-grid">
        {Object.entries(metadata).map(([key, value]) => (
          <div key={key} className="dicom-card">
            <div>{iconMap[key] || <FaFileMedical className="dicom-icon" />}</div>
            <div>
              <div className="dicom-key">{formatKey(key)}</div>
              <div className="dicom-value">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function formatKey(key) {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

export default DicomMetadataView;
