import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import { RiCloseLine } from "react-icons/ri";

const EditUserModal = ({ data, setIsOpen, updateUser }) => {
  const [selectedRole, setSelectedRole] = useState(data.role);
  const { email } = data;

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSave = async () => {
    try {
      console.log("heh");
      setIsOpen(false); // Close the modal first
      window.location.reload(); // Reload the window
      const response = await axios.put("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/admin_api/changeRole", {
        email: email,
        role: selectedRole,
      });
      console.log(response.data);
      updateUser(email, selectedRole); // Update the user in the parent component's state
    } catch (error) {
      console.error(error);
    }
  };

  console.log("selectedRole:", selectedRole);

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="edit-user-modal">
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="edit-user-modalContent">
            <div className="input-container">
              <label>Email:</label>
              <span>{email}</span>
            </div>
            <div className="input-container">
              <label>Role:</label>
              <select value={selectedRole} onChange={handleRoleChange}>
                <option value="admin">Admin</option>
                <option value="clerk">Clerk</option>
                <option value="signatory">Signatory</option>
                <option value="student">Student</option>
              </select>
            </div>
          </div>
          <div className="edit-user-modalActions">
            <div className="edit-user-button-container">
              <button className="edit-user-modal-button" onClick={() => setIsOpen(false)}>
                CANCEL
              </button>
              <button className="edit-user-modal-button" onClick={handleSave}>
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUserModal;
