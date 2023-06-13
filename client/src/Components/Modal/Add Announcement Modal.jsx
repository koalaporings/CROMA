import React, { useState } from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";

const AddAnnouncement = ({ setIsOpen }) => {
  const [announcementDetails, setAnnouncementDetails] = useState({
    announcement_title: "",
    announcement_body: "",
  });
  
  const AddAnnouncementData = async (data) => {
    const response = await axios.post(
      "http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/announcement_api/post",{
      announcement_title: data.announcement_title,
      announcement_body: data.announcement_body,
      }
    );
    return response.data;
  };

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    console.log(value)

    setAnnouncementDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  async function submitAnnouncement() {
    const response = await AddAnnouncementData(announcementDetails);
    console.log(response)
    setIsOpen(false)
    window.location.reload()
  }

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="add-modal">
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="add-modalContent">
            ADD ANNOUNCEMENT
            <div className="input-container">
              <input
                type="text"
                name="announcement_title"
                value={announcementDetails.announcement_title}
                onChange={(e) => handleSubmit(e)}
                placeholder="Title"
              />
            </div>
            <div className="input-container">
              <textarea
                name="announcement_body"
                value={announcementDetails.announcement_body}
                onChange={(e) => handleSubmit(e)}
                placeholder="Description"
              />
            </div>
          </div>
          <div className="cancel-modalActions">
            <div className="cancel-modal-actionsContainer">
              <button className="cancel-modal-button" onClick={submitAnnouncement}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAnnouncement;
