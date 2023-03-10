import React from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import './Signatory Landing.css';

const SignatoryLanding = ({children}) => {

    return(
        <div>
            <Header/>

            <div className='signatory-container'>
                
            </div>

            <Footer/>
        </div>
    )
}

export default SignatoryLanding;