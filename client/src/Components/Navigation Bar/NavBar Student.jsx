import React, { useState, useEffect } from 'react';
import { Menu, HomeOutlined, CampaignOutlined, Search, ReceiptLongOutlined, LogoutOutlined, Person } from "@mui/icons-material"
import { Box } from "@mui/system"
import { IconButton } from '@mui/material';
import { NavLink } from "react-router-dom";
import ProfileModal from '../../Components/Modal/Profile Modal';

import './NavBar.css';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('MENU');
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);

  // {console.log(localStorage.getItem("id"))}

  const toggle = () => {
    let sidebar = document.getElementById("sidebar");
    let sidebarMenu = document.getElementById("sidebar-menu");
    let viewportWidth = window.innerWidth;
    if (viewportWidth < 768) {
      sidebar.classList.toggle("minimized");
      sidebarMenu.classList.toggle("minimized");
      if (sidebarMenu.className === "sidebar-menu"){
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
    else {
      setIsOpen(!isOpen)
    }
  };

  const doubleToggle = () => {
    toggle();
    setSelectedMenuItem(' ');
  }

  const handleLogout = () => {
    // Perform logout logic here
    // ...
  };

  window.onresize = function() {
    let viewportWidth = window.innerWidth;
    let sidebar = document.getElementById("sidebar");
    let sidebarMenu = document.getElementById("sidebar-menu");
    
    setIsOpen(false)
    if (viewportWidth < 768) {
      sidebar.classList.add("minimized");
      sidebarMenu.classList.add("minimized");
    } else {
      sidebar.classList.remove("minimized");
      sidebarMenu.classList.remove("minimized");
    }
  };

  useEffect(() => {
    let viewportWidth = window.innerWidth;
    let sidebar = document.getElementById("sidebar");
    let sidebarMenu = document.getElementById("sidebar-menu");
    if (viewportWidth < 768) {
      sidebar.classList.add("minimized");
      sidebarMenu.classList.add("minimized");
    } else {
      sidebar.classList.remove("minimized");
      sidebarMenu.classList.remove("minimized");
    }
  }, []);


  

  const menuItem = [
    {
      path: "/student",
      name: "Home",
      icon: <HomeOutlined class="navbar-icon" sx={{ fontSize: "5vh" }} style={{ color: 'white' }} />
    },
    {
      path: "/student/tracking",
      name: "Tracking",
      icon: <Search class="navbar-icon" sx={{ fontSize: "5vh" }} style={{ color: 'white' }} />
    },
    {
      path: "/student/announcements",
      name: "Announcements",
      icon: <CampaignOutlined class="navbar-icon" sx={{ fontSize: "5vh" }} style={{ color: 'white' }} />
    },
    {
      path: "/student/history",
      name: "History",
      icon: <ReceiptLongOutlined class="navbar-icon" sx={{ fontSize: "5vh" }} style={{ color: 'white' }} />
    },
  ];

  return (
    <div className="sidebar-container">
      
      <div style={{ width: isOpen ? "28vh" : "70px" }} className="sidebar" id="sidebar">
        <div className="sidebar-top-section">
          <div className="sidebar-hamburger">
            <Box>
              <IconButton>
                <Menu class="navbar-icon" onClick={doubleToggle} sx={{ fontSize: "6vh" }} style={{ color: 'white' }} />
              </IconButton>
            </Box>
          </div>
          <div className="sidebar-display">
            <div style={{ display: isOpen ? "flex" : "none" }} className="sidebar-display-text">{selectedMenuItem}</div>
          </div>
        </div>
        <div className="sidebar-menu" id="sidebar-menu">
          {menuItem.map((item, index) => (
            <NavLink to={item.path} style={{ textDecoration: 'none' }} key={index}>
              <div
                to={item.path}
                className="sidebar-link"
                activeclassName="sidebar-active"
                onClick={() => {
                  setSelectedMenuItem(item.name);
                  setIsOpen(false);
                }}
              >
                <Box>
                  <IconButton>
                    <div className="sidebar-icon">{item.icon}</div>
                  </IconButton>
                </Box>
                <div
                  to={item.path}
                  style={{ display: isOpen ? "flex" : "none" }}
                  className="sidebar-link_text"
                >
                  {item.name}
                </div>
              </div>
            </NavLink>
          ))}
            <div
              className="sidebar-link"
              activeclassName="sidebar-active"
              onClick={() => setProfileModalOpen(true)}
            >
              {/* Rest of the code
            </div> */}

            <Box>
              <IconButton>
                <div className="sidebar-icon">
                  <Person class="navbar-icon" sx={{ fontSize: "5vh" }} style={{ color: 'white' }} />
                </div>
              </IconButton>
            </Box>
            <div
              style={{ display: isOpen ? "flex" : "none" }}
              className="sidebar-link_text"
            >
              Profile
            </div>
          </div>
          <div className="sidebar-bottom-section">
            <Box>
              <IconButton onClick={handleLogout}>
                <div className="sidebar-user-icon">
                  <LogoutOutlined  class="navbar-icon" sx={{ fontSize: "5vh" }} style={{ color: 'white' }} />
                </div>
              </IconButton>
            </Box>
            <div className="sidebar-bottom-section-link-text" style={{ display: isOpen ? "flex" : "none" }}>
              Log out
            </div>
          </div>
        </div>
      </div>
      {isProfileModalOpen && <ProfileModal open={isProfileModalOpen} onClose={() => setProfileModalOpen(false)} userId={localStorage.getItem("id")} />}
    </div>
  );
}

export default Sidebar;
