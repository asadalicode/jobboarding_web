import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import samplePDF from '@src/assets/samplePDF.pdf';
import environment from '@src/environment';

export default function PDFViewer({ resume }: any) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js">
      <div className="h-screen">
        <Viewer
          fileUrl={environment.serverUrl + resume}
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
  );
}
