import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./Modal.css";

const EditAnnouncement = ({ onClose, announcement, onUpdate }) => {
  const [announcementDetails, setAnnouncementDetails] = useState({
    announcement_title: announcement.announcement_title,
    announcement_body: announcement.announcement_body,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnnouncementDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateAnnouncement = async () => {
    try {
      await axios.put(
        `http://localhost:5000/announcement_api/edit/${announcement.announcement_id}`,
        { data: { ...announcementDetails } }
      );
      onClose();
      onUpdate();
      navigate('/announcements');
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <div className="darkBG" onClick={handleClose} />
      <div className="centered">
        <div className="add-modal">
          <button className="modal-close-button" onClick={handleClose}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="add-modalContent">
            EDIT ANNOUNCEMENT
            <div className="input-container">
              <input
                type="text"
                name="announcement_title"
                value={announcementDetails.announcement_title}
                onChange={handleInputChange}
                placeholder="Title"
              />
            </div>
            <div className="input-container">
              <textarea
                name="announcement_body"
                value={announcementDetails.announcement_body}
                onChange={handleInputChange}
                placeholder="Description"
              />
            </div>
          </div>
          <div className="cancel-modalActions">
            <div className="cancel-modal-actionsContainer">
              <button className="cancel-modal-button" onClick={updateAnnouncement}>
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAnnouncement;
