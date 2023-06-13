import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

const EditAnnouncement = ({ announcementId, onClose, announcement, onUpdate }) => {
  const [editedDetails, setEditedDetails] = useState({
    edited_announcement_title: announcement.announcement_title,
    edited_announcement_body: announcement.announcement_body,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEditedDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const updateAnnouncement = async () => {
    console.log("Updating announcement.....");
    try {
      const editedAnnouncementId = parseInt(announcementId, 10); // Convert announcementId to integer
  
      const { edited_announcement_title, edited_announcement_body } = editedDetails;
  
      const response = await axios.put(
        "http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/announcement_api/edit",
        {
          announcement_title: edited_announcement_title,
          announcement_body: edited_announcement_body,
          announcement_status: "edited",
          announcement_id: editedAnnouncementId, // Pass the edited announcement ID as integer
        }
      );
  
      if (response.status === 200) {
        onUpdate(editedDetails); // Pass the edited details to the onUpdate function
      } else {
        console.error("Failed to update announcement");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleSaveClick = () => {
    updateAnnouncement();
    navigate('/admin/announcements')
    // window.location.reload(); // Reload the window after submitting
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
                name="edited_announcement_title"
                value={editedDetails.edited_announcement_title}
                onChange={handleInputChange}
                placeholder="Title"
              />
            </div>
            <div className="input-container">
              <textarea
                name="edited_announcement_body"
                value={editedDetails.edited_announcement_body}
                onChange={handleInputChange}
                placeholder="Description"
              />
            </div>
          </div>
          <div className="cancel-modalActions">
            <div className="cancel-modal-actionsContainer">
              <button className="cancel-modal-button" onClick={handleSaveClick}>
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
