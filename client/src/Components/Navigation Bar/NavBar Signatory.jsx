import React, { useState, useEffect } from 'react';
import { Menu, HomeOutlined, CampaignOutlined, ReceiptLongOutlined , LogoutOutlined } from "@mui/icons-material"
import { Box } from "@mui/system"
import { IconButton } from '@mui/material';
import { NavLink } from "react-router-dom";

import './NavBar.css'


const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('MENU');
  const [usernameDisplay, setUser] = useState('')
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
  const [roleID, setRoleId] = useState("-1")

  const doubleToggle = () => {
    toggle();
    setSelectedMenuItem(' ');
  }
//   console.log(localStorage.getItem("username"))
//   const getUser = () => {
//     try{
//       console.log("here")
//       setUser(localStorage.getItem("username").substring(13,localStorage.getItem("username").length-2))
//       setRoleId(localStorage.getItem("role_id"))
//     } catch {
//       setUser("Guest")
//     }
//   }
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
  

  const menuItem = [
    {
      path: "/signatory",
      name: "Home",
      icon: <HomeOutlined class="navbar-icon" sx={{ fontSize: "5vh" }} style={{color: 'white'}}/>
    },
    {
      path: "/signatory/announcements",
      name: "Announcements",
      icon: <CampaignOutlined class="navbar-icon" sx={{ fontSize: "5vh" }} style={{color: 'white'}}/>
    },
  ]

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


  return (
    <div className="sidebar-container">
      <div style={{ width: isOpen ? "28vh" : "70px" }} className="sidebar" id="sidebar">
        <div className="sidebar-top-section">
          <div className="sidebar-hamburger">
            <Box>
              <IconButton>
                {" "}
                <Menu class="navbar-icon" onClick={() => {
                  doubleToggle()
                //   getUser()
                }} sx={{ fontSize: "6vh" }} style={{color: 'white'}}/>
              </IconButton>
            </Box>
          </div>
          <div className="sidebar-display">
            <div style={{ display: isOpen ? "flex" : "none" }} className="sidebar-display-text">{selectedMenuItem}</div>
          </div>

        </div>
        <div className="sidebar-menu" id="sidebar-menu">
          {
            menuItem.map((item, index) => (
              <NavLink to={item.path} style={{textDecoration: 'none'}}>
              <div to={item.path} key={index} className="sidebar-link" activeclassName="sidebar-active" onClick={() => {setSelectedMenuItem(item.name);setIsOpen(false)}}>
                
                  <Box>
                    <IconButton >
                      <div className="sidebar-icon">{item.icon}</div>
                    </IconButton>
                  </Box>
                
                <div to={item.path} style={{ display: isOpen ? "flex" : "none"}} className="sidebar-link_text">{item.name}</div>
              </div>
              </NavLink>
            ))
          }
          <div className="sidebar-bottom-section">
            <Box>
              <IconButton>
                <div className="sidebar-user-icon">
  
                    <LogoutOutlined class="navbar-icon" sx={{fontSize: "5vh"}} style={{color: 'white'}}/>

                </div>
              </IconButton>
            </Box>
            <div className = "sidebar-bottom-section-link-text"
                style={{display: isOpen? "flex": "none"}}>
                Log out
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sidebar;