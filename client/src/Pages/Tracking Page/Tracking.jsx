import React from 'react';
import {useNavigate} from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Container from 'react-bootstrap/Container';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';

import TrackingModal from '../../Components/Modal/Tracking Modal';
import { useState, useEffect } from 'react';
import axios from 'axios'
import TableComponent from '../../Components/Table/Table';

import './Tracking.css';

const TrackingPage = ({children}) => {

    const [transactionData, setTransactionData] = useState([]);
    const [transactionDetails, setTransactionDetails] = useState([]);
    const [trackingData, setTrackingData] = useState([]);    
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState("");

    
        async function fetchTrackingTransactions(filter_info) {
            const response = await axios.get('http://localhost:5000/tracking_api/history/' + 4 + "/" + filter_info)
            console.log(response.data)
            setTransactionData(response.data)
        }

        async function getTrackingDetails(id) {
            console.log(id)
            const response = await axios.get("http://localhost:5000/tracking_api/get/" + id.toString())
            console.log(response)
            if (response){
                setTrackingData(response.data)
            }
        }

        async function viewTransactionDetails(id) {
            console.log(id)
            var response = await axios.get("http://localhost:5000/student_api/transaction_details/" + id.toString())
            console.log(response)
            if (response){
                setTransactionDetails(response.data)
                setIsOpen(true)
            }
        }

        const viewHandler = (id) => {
            getTrackingDetails(id)
            viewTransactionDetails(id)
        }

        const handleFilterChange = (data) => {
            const filter = data.target.value
            fetchTrackingTransactions(filter)
        }

        useEffect (() =>{
            fetchTrackingTransactions()
            }, [])
    
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
                <div className='filter-container'>
                    Filter by: &nbsp;
                    <select className='filter-button' onChange={(e) => handleFilterChange(e)}>
                        <option value="dsc">&nbsp;Newest to Oldest&nbsp;</option>
                        <option value="asc">&nbsp;Oldest to Newest&nbsp;</option>
                    </select>
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
                        tableData = {transactionData}
                        action = {viewHandler}
                    />
                </div>
            </Container>
            {isOpen && <TrackingModal setIsOpen={setIsOpen} details={transactionDetails} trackingData={trackingData}/>}

            

            <div className="footer-tracking">
                <Footer/>
            </div>  
        </div>
    )
}

export default TrackingPage;