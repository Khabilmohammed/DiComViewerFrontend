import './App.css'
import './DicomMetadataView.css'
import './DicomUpload.css';
import DicomUpload from './Components/DicomUpload'

function App() {
  return (
    <>
      <h1>Welcome to DICOM Metadata Viewer</h1>
      <DicomUpload />
    </>
  )
}

export default App
