// import React from 'react'
// import './Resume.css'
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
// import { useState } from 'react';
// // import { pdfjs } from 'react-pdf';
// import pdf from '../assets/images/JuneAvinaResume.pdf';


// const Resume = () => {
//     const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div id='resume'>Resume
//     <div>
//     <Document
//    file={pdf}
//    renderMode="canvas"
//     onLoadSuccess={onDocumentLoadSuccess}
// >
//    <Page pageNumber={pageNumber} />
// </Document>
// <p>Page {pageNumber} of {numPages}</p>
//     </div>
//     </div>
//   )
// }

// export default Resume;