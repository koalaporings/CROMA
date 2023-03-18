import React from 'react';
import { Row, Column } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';


import './Student Landing.css';

const StudentLanding = ({children}) => {

    return(
        <div>
            <NavBar/>
            <NavBar/>
            <Header/>

            <div className='student-container'>
                <Row className="name-header">
                    Hello, John!
                </Row>
                <Row className="transaction-header">
                    You currently have 4 transactions. Check its progress here.                
                </Row>
            </div>

            <Footer/>
        </div>
    )
}

export default StudentLanding;