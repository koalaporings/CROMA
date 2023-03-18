import React from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';

import './Tracking.css';

const TrackingPage = ({children}) => {

    return(
        <div>
            <NavBar/>
            <Header/>

            <div className='tracking-container'>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>Tracking Page</p>
            </div>

            <Footer/>
        </div>
    )
}

export default TrackingPage;