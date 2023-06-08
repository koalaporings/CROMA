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
        <div className="profile-modal">
          <div className="profile-modal-content">
            <div className="circle-profile">
              <img src="" alt="profile-photo" />
            </div>
            <div className="profile-name">John Oliver Ochea</div>
            <div className="profile-course">BS Computer Science 1</div>
            <div className="profile-email">jeochea@up.edu.ph</div>
            <div className="profile-student-number">202020201</div>
            <div className="profile-contact-number">09266550484</div>
          </div>
          <div className="edit-button">
              <button  onClick={handleEdit}>
                EDIT
              </button>
          </div> 
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
