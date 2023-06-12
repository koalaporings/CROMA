import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import PDFdocument from "./../PDF/PDF Document 1"
import createForm from "../PDF/PDF Document";

function ViewStudentModal({
  data,
  setIsOpen
}){
  // function onClick() {
  //   download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
  // }
  console.log(data[0])
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)}/>
      <div className="centered">
        <div className="student-view-modal">
          <div className='view-modalHeader'>
            <h5 className='view-heading'>{data.form_name}</h5>
          </div>
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="view-document-content">
            <PDFdocument
              docData = {data[0]}
            />
            {/* <h5 className ='view-heading'>Proof of Payment</h5> */}
            {/* <img src={`http://localhost:5000/public/uploads/` + data[1][0].file.toString()}/> */}
            {/* <button onClick={onClick}>Download</button> */}
          </div>
          <div className="view-modalActions">
            <div className="view-modal-actionsContainer">
              
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default ViewStudentModal;