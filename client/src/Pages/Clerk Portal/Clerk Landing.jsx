import React from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import './Clerk Landing.css';

const ClerkLanding = ({children}) => {

    return(
        <div>
            <Header/>

            <div className='clerk-container'>
                
            </div>

            <Footer/>
        </div>
    )
}

export default ClerkLanding;