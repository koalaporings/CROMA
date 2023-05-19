import React, { useState } from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";

const EditAnnouncement = ({ setIsOpen, announcement, onUpdate }) => {
  const [announcementDetails, setAnnouncementDetails] = useState({
    announcement_title: announcement.announcement_title,
    announcement_body: announcement.announcement_body,
  });

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
        announcementDetails
      );
      setIsOpen(false);
      onUpdate();
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    onUpdate();
  }

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
