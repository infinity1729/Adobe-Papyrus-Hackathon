import React from "react";
import PDFViewer from "./components/DisplayPDF";
import './App.css';
import './components/sidebar/Sidebar';
import Sidebar from './components/sidebar/Sidebar';


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
// import anantPDF from "./anant.pdf";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Sidebar/>
      <PDFViewer />
    </div>
  );
}