import React, { useState } from 'react';
const PDFViewer = () => {
  const [selectedPDF, setSelectedPDF] = useState('');

  const handlePDFChange = (event) => {
    setSelectedPDF(event.target.value);
  };

  return (
    
    <div style={{height:"100vh", overflow:"hidden", textAlign:"center", width:"60%",float:"right", paddingRight:"5px"}}>
      <select value={selectedPDF} onChange={handlePDFChange}> 
          
        <option value="">Select Template</option>
        <option value="./ResumeTemplates/Template1/Template1.pdf">Template 1</option>
        <option value="./ResumeTemplates/Template2/Template2.pdf">Template 2</option>
        <option value="./ResumeTemplates/Template3/Template3.pdf">Template 3</option>
      </select>
      <br/><br/>
      {selectedPDF && (
        <embed src={`${selectedPDF}`} width="100%" height="100%" type="application/pdf" />
      )}
    </div>
  );
};

export default PDFViewer;
