import React from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Signatory';

import './Announcements.css';

const AnnouncementPage = ({children}) => {

    return(
        <div>
            <NavBar/>
            <Header/>

            <div className='announce-container'>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>Announcements Page</p>
            </div>

            <Footer/>
        </div>
    )
}

export default AnnouncementPage;