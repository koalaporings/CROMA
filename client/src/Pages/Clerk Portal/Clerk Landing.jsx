import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ClerkTransactionTable from './Clerk Transaction Table';
import ClerkOngoingTable from './Clerk Ongoing Table';
import ClerkAnnouncementTable from './Clerk Announcement Table';
import './Clerk Landing.css';
import NavBar from '../../Components/Navigation Bar/NavBar Clerk.jsx';

const ClerkLanding = ({children}) => {
    return(
        <div>
            <NavBar/>
            <div className="header-clerk">
                <Header/>
            </div>

            <div className='clerk-container'>
                {/* <p>Placeholder text</p> */}
                <ClerkAnnouncementTable/>
                <ClerkTransactionTable/>
                <ClerkOngoingTable/>
            </div>

            <div className="footer-clerk">
                <Footer/>
            </div>
        </div>
    )
}

export default ClerkLanding;