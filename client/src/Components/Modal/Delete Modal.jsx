import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import ErrorIcon from '@mui/icons-material/Error';
import axios from "axios";

const DeleteModal = ({ setIsOpen, announcement_id, onUpdate }) => {
  const deleteAnnouncement = async () => {
    try {
      await axios.delete(`http://localhost:5000/announcement_api/delete/${announcement_id}`);
      setIsOpen(false);
      onUpdate();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="submit-modal">
          <ErrorIcon className="modal-icon" sx={{ fontSize: "80px" }} style={{ marginTop: "10px" }}/>
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="submit-modalContent">
            ARE YOU SURE YOU WANT TO DELETE THIS ANNOUNCEMENT?
          </div>
          <div className="submit-modalActions">
            <div className="submit-modal-actionsContainer">
              <button className="confirm-button" onClick={deleteAnnouncement}>
                CONFIRM
              </button>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
