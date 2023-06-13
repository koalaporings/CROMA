import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { ReceiptLongOutlined } from "@mui/icons-material";
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar';
import './History.css';
import Container from 'react-bootstrap/Container';
import TableComponent from '../../Components/Table/Table';




const HistoryPage = ({children}) => {
    const [tableData, setTableData] = useState([]);
    const [numTransactions, setNumTransactions] = useState(0);

    async function fetchTable(filter_info) {
        const response = await axios.get('http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/clerk_api/history_table/' + filter_info)
        setTableData(response.data)
        setNumTransactions(response.data.length)
    }

    const handleFilterChange = (data) => {
        const filter = data.target.value
        fetchTable(filter)
    }

    useEffect (() =>{
        fetchTable()
        }, [])

    return(

        <main>
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
            <div className='filter-container'>
                    Filter by: &nbsp;
                    <select className='filter-button' onChange={(e) => handleFilterChange(e)}>
                        <option value="dsc">&nbsp;Newest to Oldest&nbsp;</option>
                        <option value="asc">&nbsp;Oldest to Newest&nbsp;</option>
                    </select>
                </div>

            <div className="student-history-table-container">
                <TableComponent
                    type = 'clerk_history_table'
                    headingColumns = {[
                        "Date",
                        "Transaction Name",
                        // "Transaction ID",
                        "Student Name",
                        "Action",
                    ]}
                    tableData = {tableData}
                />
            </div>
            </Container>


            <div className="history-student-footer">
                <Footer/>
            </div>
        </div>

        </main>

        
    )
}

export default HistoryPage;