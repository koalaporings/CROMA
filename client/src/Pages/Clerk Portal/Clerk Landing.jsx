import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ClerkTransactionTable from './Clerk Transaction Table';
// import ClerkOngoingTable from './Clerk Ongoing Table';
import ClerkAnnouncementTable from './Clerk Announcement Table';
import './Clerk Landing.css';
import NavBar from '../../Components/Navigation Bar/NavBar Clerk.jsx';
import Container from 'react-bootstrap/Container';

const ClerkLanding = ({children}) => {
    return(
        <div>
            <NavBar/>
            <div className="header-clerk">
                <Header/>
            </div>
            <Container>
                <ClerkAnnouncementTable/>
                <ClerkTransactionTable/>
            </Container>

            <div className="footer-clerk">
                <Footer/>
            </div>
        </div>
    )
}

export default ClerkLanding;