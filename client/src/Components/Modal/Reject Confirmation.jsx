import React, { useState } from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import ErrorIcon from "@mui/icons-material/Error";

const ConfirmReject = ({ setIsOpen, action }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <div className="darkBG-1" onClick={() => setIsOpen(false)} />
      <div className="centered-1">
        <div className="reject-modal">
          <ErrorIcon className="modal-icon" sx={{ fontSize: "80px" }} style={{ marginTop: "10px" }} />
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="submit-modalContent">
            ARE YOU SURE YOU WANT TO REJECT THIS REQUEST?
          </div>
          <div className="comment-input">
            <textarea
              placeholder="Add your comment..."
              value={comment}
              onChange={handleCommentChange}
            />
          </div>
          <div className="submit-modalActions">
            <div className="approve-modal-actions-container">
              <button className="confirm-button" onClick={(add) => setIsOpen(false)}>
                CANCEL
              </button>
              <button className="confirm-button" onClick={() => action(comment)}>
                REJECT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmReject;
