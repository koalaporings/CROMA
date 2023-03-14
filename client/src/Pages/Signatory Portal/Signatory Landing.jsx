import React from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Signatory';
import SignatoryTransactionTable from './Signatory Transaction Table';

import './Signatory Landing.css';

import SignatoryAnnouncementTable from '../../Pages/Admin Portal/Announcement Table';;


const SignatoryLanding = ({children}) => {

    return(
        <div>
            <NavBar/>
            <NavBar/>
            <div className="header-signatory">
                <Header/>
            </div>

            <div className='signatory-container'>
                <SignatoryAnnouncementTable/>
                <SignatoryTransactionTable/>
                
            </div>

            <div className="footer-signatory">
                <Footer/>
            </div>
        </div>
    )
}



export default SignatoryLanding;