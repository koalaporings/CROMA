import React from 'react';
import {useNavigate} from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';


import { useState, useEffect } from 'react';
import axios from 'axios'
import TableComponent from '../../Components/Table/Table';

import './Tracking.css';
import dummyTableData from './dummyTableData';

const TrackingPage = ({children}) => {

    return(
        <div>
            <NavBar/>

            <div className="header-tracking">
                <Header/>
            </div>

            <Container>
                <div className="tracking-title-container">
                    <SearchOutlinedIcon className="leche" sx={{ fontSize: "40px" }} style={{color: '#7A1113'}}/>
                    <h1 className='tracking-title-text'>Tracking Page</h1>
                </div>
                <div className="student-tracking-table-container">
                    <TableComponent
                        type = 'student_tracking_table'
                        headingColumns = {[
                            "Date",
                            "Transaction Name",
                            "Transaction ID",
                            "Status",
                            "Action",
                        ]}
                        tableData = {dummyTableData}
                    />
                </div>
            </Container>
            

            <div className="footer-tracking">
                <Footer/>
            </div>  
        </div>
    )
}

export default TrackingPage;