import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import PDFdocument from "../PDF/PDF Document 1";
import { PDFDocument } from "pdf-lib";

function AdminApproveModal({
  data,
  setIsOpen,
  action,
  rejectAction,
  signatoryList,
  changeHandler,
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
          <h4 className="view-heading">Recipients</h4>
          <div className="textboxes-container">
            <input list="names" name="recipient1" placeholder="Select recipient" onChange={changeHandler}/>
            <datalist id="names" className="">
              {signatoryList.map((data) => {
                  return(
                      // <option value={data.first_name + " " + data.last_name}>{data.signatory_id}</option>
                      <option value={data.signatory_id}>{data.first_name + " " + data.last_name}</option>
                  )
              })}
            </datalist>
            
            <input list="names" name="recipient2" placeholder="Select recipient" onChange={changeHandler}/>
            <input list="names" name="recipient3" placeholder="Select recipient" onChange={changeHandler}/>
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
