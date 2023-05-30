import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import PDFdocument from "../PDF/PDF Document 1"

function AdminApproveModal({
  data,
  setIsOpen,
  action
}){
  console.log(data)
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)}/>
      <div className="centered">
        <div className="student-view-modal">
          <div className='view-modalHeader'>
            <h5 className='view-heading'>True Copy of Grades (TCG)</h5>
          </div>
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="view-document-content">
            <PDFdocument
              docData = {data}
            />
          </div>
          <div className="view-modalActions">
            <div className="view-modal-actionsContainer">
            <button className="approve-button" onClick={action}>
                Approve
              </button>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default AdminApproveModal;