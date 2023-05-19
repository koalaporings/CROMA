import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import ErrorIcon from '@mui/icons-material/Error';



const ConfirmApprove = ({ setIsOpen, action }) => {
  return(
    <>
      <div className="darkBG-1" onClick={() => setIsOpen(false)}/>
        <div className="centered-1">
          <div className="approve-modal">
            <ErrorIcon className="modal-icon" sx={{ fontSize: "80px" }} style={{ marginTop: "10px" }}/>
            <button className="modal-close-button" onClick={() => setIsOpen(false)}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className="submit-modalContent">
            ARE YOU SURE YOU WANT TO APPROVE THIS REQUEST?
            </div>
            <div className="submit-modalActions">
              <div className="approve-modal-actions-container">
                <button className="confirm-button" onClick={(add) => setIsOpen(false)}>
                  CANCEL
                </button>
                <button className="confirm-button" onClick={action}>
                  APPROVE
                </button>
                </div>
            </div> 
        </div>
      </div>
    </>
  );
};



export default ConfirmApprove;