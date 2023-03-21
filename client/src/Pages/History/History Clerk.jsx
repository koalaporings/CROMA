import React from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Clerk';

import './History.css';

const ClerkHistoryPage = ({children}) => {

    return(
        <div>
            <NavBar/>
            <Header/>

            <div className='history-container'>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>Transaction History Page</p>
            </div>

            <Footer/>
        </div>
    )
}

export default ClerkHistoryPage;