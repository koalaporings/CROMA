import React from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import './Admin Landing.css';

const AdminLanding = ({children}) => {

    return(
        <div>
            <Header/>

            <div className='admin-container'>
                
            </div>
            
            <Footer/>
        </div>
    )
}

export default AdminLanding;