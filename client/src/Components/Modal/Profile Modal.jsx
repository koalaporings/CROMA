import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import ErrorIcon from '@mui/icons-material/Error';

const ProfileModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/register');
  };


  return (
    <>
      <div className="darkBG" onClick={onClose} />
      <div className="centered">
        <div className="submit-modal">
          <ErrorIcon className="modal-icon" sx={{ fontSize: "80px" }} style={{ marginTop: "10px" }}/>

          <button className="modal-close-button" onClick={onClose}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="submit-modalContent">
            ARE YOU SURE YOU WANT TO CANCEL THIS REQUEST?     
          </div>
          <div className="cancel-modalActions">
            <div className="cancel-modal-actionsContainer">
              <button className="cancel-modal-button" onClick={handleEdit}>
                EDIT
              </button>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
