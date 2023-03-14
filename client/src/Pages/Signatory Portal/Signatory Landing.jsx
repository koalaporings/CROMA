import React from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import SignatoryTransactionTable from './Signatory Transaction Table';


import './Signatory Landing.css';

const SignatoryLanding = ({children}) => {

    return(
        <div>
            <Header/>

            <div className='signatory-container'>
                <SignatoryTransactionTable/>
                
            </div>

            <Footer/>
        </div>
    )
}

export default SignatoryLanding;