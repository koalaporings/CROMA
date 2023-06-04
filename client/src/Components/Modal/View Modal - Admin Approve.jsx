import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import PDFdocument from "../PDF/PDF Document 1";

function AdminApproveModal({
  data,
  setIsOpen,
  action,
  rejectAction
}) {
  console.log(data);
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="admin-view-modal">
          <div className="view-modalHeader">
            <h5 className="view-heading">True Copy of Grades (TCG)</h5>
          </div>
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="view-document-content">
            <PDFdocument docData={data} />
          </div>
          <div className="textboxes-container">
            <input list="names" name="name1" />
            <datalist id="names">
              <option value="John" />
              <option value="Mary" />
              <option value="David" />
              <option value="Sarah" />
            </datalist>
            <input list="names" name="name2" />
            <input list="names" name="name3" />
          </div>
          <div className="view-modalActions">
            <div className="view-modal-actionsContainer">
              <button className="reject-button" onClick={rejectAction}>
                Reject
              </button>
              <button className="approve-button" onClick={action}>
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminApproveModal;
