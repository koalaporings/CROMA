import React from 'react';
import { ReceiptLongOutlined } from "@mui/icons-material";
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar';
import './History.css';
import Container from 'react-bootstrap/Container';
import TableComponent from '../../Components/Table/Table';
import dummyTableData from './dummyTableData';



const HistoryPage = ({children}) => {

    return(
        <div>
            <NavBar/>

            <div className="header-history">
                <Header/>
            </div>
            <Container>
                <div className="tracking-title-container">
                        <ReceiptLongOutlined className="history-icon" sx={{ fontSize: "40px" }} style={{color: '#7A1113'}}/>
                        <h1 className='tracking-title-text'>History Page</h1>
                </div>
                    
                <div className="student-history-table-container">
                    <TableComponent
                        type = 'admin_history_table'
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

            <div className="footer-history">
                <Footer/>
            </div>
        </div>
    )
}

export default HistoryPage;