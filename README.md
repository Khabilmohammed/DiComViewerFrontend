# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enabling type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# DICOM Metadata Viewer (Frontend)

This is the frontend for the DICOM metadata viewer application built with **React**. It provides an intuitive interface to upload DICOM files and view the extracted metadata.

## Features
- Upload DICOM files (.dcm)
- View metadata such as Patient Name, Study Date, Modality, etc.
- User-friendly file upload interface with feedback during the upload process.

## Prerequisites
- Node.js (version v22.14.0)
- npm (version 10.9.2)

### Usage of the Application
-Just run the application using npm run dev.
-Upload the .dcm file, and then the application will automatically fetch the details of the selected file.

### Clone the Repository
```bash
git clone https://github.com/yourusername/dicom-frontend.git
cd dicom-frontend



