import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Admin Landing.css';
import NavBar from '../../Components/Navigation Bar/NavBar.jsx';
import { People } from '@mui/icons-material';
import TableComponent from '../../Components/Table/Table';
import axios from 'axios';
import EditUserModal from '../../Components/Modal/Edit User Modal';

const Users = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchAllUser();
  }, []);

  const fetchAllUser = async () => {
    try {
      const response = await axios.get('http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/admin_api/getAllUser');
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const openEditUserModal = (email) => {
    const user = userData.find((user) => user.email === email);
    setSelectedUser(user);
    setIsOpen(true);
  };

  const updateUser = (email, role) => {
    setUserData(prevUserData =>
      prevUserData.map(user => {
        if (user.email === email) {
          return { ...user, role };
        }
        return user;
      })
    );
  };

  const closeEditUserModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <NavBar />
      <div className="header-admin">
        <Header />
      </div>
      <Container>
        <div className="tracking-title-container">
          <People className="history-icon" sx={{ fontSize: "40px" }} style={{ color: '#7A1113' }} />
          <h1 className='tracking-title-text'>Users</h1>
        </div>

        <div className="student-history-table-container">
          <TableComponent
            type='users_table'
            headingColumns={[
              "Email",
              "Role",
              "Edit Role",
            ]}
            tableData={userData}
            action={openEditUserModal}
          />
          {isOpen && (
            <EditUserModal
              data={selectedUser}
              setIsOpen={closeEditUserModal}
              updateUser={updateUser}
            />
          )}
        </div>
      </Container>
      <div className="footer-admin">
        <Footer />
      </div>
    </div>
  );
};

export default Users;
