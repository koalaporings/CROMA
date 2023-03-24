import React from 'react';

import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar';
import HistoryTable from './History Table';
import './History.css';

const HistoryPage = ({children}) => {

    return(
        <div>
            <NavBar/>

            <div className="header-history">
                <Header/>
            </div>
            <div className='history-container'>
                
                <div className="history-table-container">
                    <HistoryTable/>
                </div>
            </div>
            <div className="footer-history">
                <Footer/>
            </div>
        </div>
    )
}

export default HistoryPage;