import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import PDFdocument from "../PDF/PDF Document 1";
import { PDFDocument } from "pdf-lib";

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
            <h4 className="view-heading">{data.form_name}</h4>
          </div>
          <div className="view-modalHeader">
            <h5 className="view-sub-heading"><b>Transaction ID:</b> {data.transaction_id}</h5>
          </div>
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="view-document-content">
            <PDFdocument docData={data} />
          </div>
          <div className="textboxes-container">
            <input list="names" name="name1" />
            <datalist id="names" className="">
              {/* <option value="John Mynar"/>
              <option value="John Oliver"/>
              <option value="Kienth John"/>
              <option value="Kyle Alan"/> */}
              <option value="John Oliver">199</option>
              <option value="2">John Mynar</option>
              <option value="3">Kyle Alan</option>
              <option value="4">Kienth John</option>
              <option value="5">John Arvin</option>
              <option value="6">James Peter</option>
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
