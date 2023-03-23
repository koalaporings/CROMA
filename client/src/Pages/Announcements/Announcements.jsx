import React from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar';
import Table from './Announcement Portal Table';
import announcementIcon from '../../Assets/announcement-icon.svg';


import './Announcements.css';

const AnnouncementPage = ({children}) => {

    return(
        <div>
            <NavBar/>
            <Header/>

            <div className='announce-container'>
                <div className="header">
                    <img alt="announcement-icon"
                        src={announcementIcon}
                        className="announcement-icon"/>
                    <p className='announcement-text'>Announcement</p>
                </div>

                {/* <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>Announcements Page</p> */}
                <Table/>

            </div>

            <Footer/> 
        </div>
    )
}

export default AnnouncementPage;