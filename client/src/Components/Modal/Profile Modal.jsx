import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import axios from 'axios';
import jwt_decode from 'jwt-decode'

const ProfileModal = ({ onClose, userId }) => {
  console.log(userId)
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({});
  const [user, setUser] = useState({})

  const handleEdit = () => {
    navigate('/student/info');
  };

  

  async function getDetails(data) {
    try {
      const userObject = jwt_decode(sessionStorage.getItem("token"))
      setUser(userObject)
      const response = await axios.get(`http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/student_api/getDetails/${data}`);
      console.log(userId);
      console.log(response.data[0]);
      setStudentData(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(user)
  console.log(user.picture)
  useEffect(() => {
    const parsedUserId = parseInt(userId, 10); // Convert userId to an integer
    getDetails(parsedUserId);
  }, [userId]);

  return (
    <>
      <div className="darkBG" onClick={onClose} />
      <div className="centered">
        <div className="profile-modal">
          <button className="modal-close-button" onClick={() => onClose(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="profile-modal-content">
            <div className="circle-profile">
              <img src={user.picture} alt="profile-photo" />
            </div>
            <div className="profile-name">{studentData.first_name} {studentData.middle_initial} {studentData.last_name}</div>
            <div className="profile-degree-program">{studentData.degree_program} {studentData.year_level}</div>
            <div className="profile-email">{studentData.email}</div>
            <div className="profile-student-number">{studentData.student_number}</div>
            <div className="profile-mobile-number">{studentData.mobile_number}</div>
          </div>
          <div className="edit-button">
            <button onClick={handleEdit}>EDIT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
