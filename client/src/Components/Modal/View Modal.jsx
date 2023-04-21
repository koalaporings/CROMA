import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import PDFdocument1 from "./../PDF/PDF Document 2"

const ViewModal = ({setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="view-modal">
          <div className='view-modalHeader'>
            <h5 className='view-heading'>True Copy of Grades</h5>
          </div>
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="view-modalContent">
            <div className="view-document-content">
              <PDFdocument1/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewModal;