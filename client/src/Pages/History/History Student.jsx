import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { ReceiptLongOutlined } from "@mui/icons-material";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';
// import "./Modal.css";
// import Modal from './Modal.jsx';

import TableComponent from '../../Components/Table/Table';

import dummyTableData from './dummyTableData';
import './History.css';




const StudentHistoryPage = ({children}) => {



    return(

        <main>
        <div>
            <NavBar/>
            <div className="header-history">
                <Header/>
            </div>


            <Container>            

            <Row className="col-2" >
                <Col xs={1}><ReceiptLongOutlined className="history-icon" sx={{ fontSize: "40px" }} style={{color: '#7A1113'}}/>
                <h1 className='history-title-text'>Transaction History</h1></Col>
            </Row>

            <div className="student-history-table-container">
                <TableComponent
                    type = 'student_history_table'
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



            {/* <Footer/> */}
        </div>

        </main>

        
    )
}

export default StudentHistoryPage;