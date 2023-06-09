import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import PDFdocument from "../PDF/PDF Document 1"

function ClerkApproveModal({
  data,
  setIsOpen,
  action,
}) {
  console.log(data);

  
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="student-view-modal">
          <div className="view-modalHeader">
            <h5 className="view-heading">{data.form_name}</h5>
          </div>
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="view-document-content">
            <PDFdocument docData={data} />
          </div>

          <div className="upload">
                        <div class="form-group">
                            <input type="file" class="form-control-file" id="paymentProof" name="pdf" accept="application/pdf" multiple={false}/>
                        </div>
                    </div>
          <div className="view-modalActions">
            <div className="view-modal-actionsContainer">

              <button className="approve-button" onClick={action()}>
                Send to Student
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default ClerkApproveModal;