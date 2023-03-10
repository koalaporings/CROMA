import React from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import './Student Landing.css';

const StudentLanding = ({children}) => {

    return(
        <div>
            <Header/>

            <div className='student-container'>
                
            </div>

            <Footer/>
        </div>
    )
}

export default StudentLanding;