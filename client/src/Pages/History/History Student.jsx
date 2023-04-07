import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';
import "./Modal.css";
import Modal from './Modal.jsx';
import './History.css';




const StudentHistoryPage = ({children}) => {


    const [isOpen, setIsOpen] = useState(false);

    return(

        <main>
        <div>
            <NavBar/>
            <Header/>

            <div className='history-container'>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>Tracking History Student Page</p>
            </div>

            <button className='action-button' onClick={() => setIsOpen(true)}>
                View
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}

            {/* <Footer/> */}
        </div>

        </main>

        
    )
}

export default StudentHistoryPage;