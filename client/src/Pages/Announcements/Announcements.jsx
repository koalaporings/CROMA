import React from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar';
import AnnouncementTableComponent from '../../Components/Table/Announcement Table';
// import AnnounceTable from './Announcement Portal Table';
import announcementIcon from '../../Assets/announcement-icon.svg';
import dummyTableData from '../Announcements/dummyTableData';


import './Announcements.css';

const AnnouncementPage = ({children}) => {

    return(
        <div>
            <NavBar/>
            <Header/>

            <div className='announcement-portal-container'>
                <div className="announcement-portal-header">
                    <img alt="announcement-portal-icon"
                        src={announcementIcon}
                        className="announcement-portal-icon"/>
                    <p className='announcement-portal-text'>Announcement</p>
                </div>

                <div className='announce-button'>
                    <button className='add'>
                        Add
                    </button>
                </div>
                <div className="admin-transaction-requests-table-container">
                    <AnnouncementTableComponent
                        type = 'admin_announcement_table'
                        tableData = {dummyTableData}
                    />
                </div>

            </div>
            <div className='footer-admin-announcement'>
            <Footer/> 
            </div>

        </div>
    )
}

export default AnnouncementPage;