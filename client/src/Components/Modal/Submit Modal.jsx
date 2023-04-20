import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import ErrorIcon from '@mui/icons-material/Error';

const SubmitModal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="submit-modal">

          <div className='submit-modalHeader'>
              <ErrorIcon className="modal-icon"/>
          </div>
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="submit-modalContent">
            ARE YOU SURE YOU WANT TO SUBMIT THIS REQUEST?
          </div>
          <div className="submit-modalActions">
            <div className="submit-modal-actionsContainer">
              <button className="confirm-button" onClick={() => setIsOpen(false)}>
                CONFIRM
              </button>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default SubmitModal;