import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { ReceiptLongOutlined } from "@mui/icons-material";
import Container from 'react-bootstrap/Container';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';
import { useEffect } from "react";
import axios from "axios";

import ViewModal from "../../Components/Modal/View Modal";
import { Buffer } from 'buffer'

// import "./Modal.css";
// import Modal from './Modal.jsx';

import TableComponent from '../../Components/Table/Table';
import './History.css';




const StudentHistoryPage = ({userId}) => {
    const [tableData, setTableData] = useState([]);
    const [numTransactions, setNumTransactions] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [documentDetails, setDocumentDetails] = useState([]);

        async function fetchTable(filter_info) {
            const response = await axios.get('http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/student_api/transaction_history/' + userId + "/" + filter_info)
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

            const [file, setFile] = useState();

            async function viewDocumentDetails(id) {
                console.log(id)
                const response = await axios.get("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/student_api/transaction_details/" + id.toString())
                console.log(response)
                if (response){
                    setDocumentDetails(response.data[0])
                    setIsOpen(true)
                }
            }

  
            const getImagevalue = async (data) => {
                const response = await axios.get('http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/form_api/get/' + data)
                console.log(response)
                setFile(Buffer.from(response.data[0].file.data))
                console.log(file)
            }
            
            // useEffect(()=>{
            //   getImagevalue()
            //   console.log(file)
            // },[])
        
        async function actionHandler(data) {
            viewDocumentDetails(data)
            getImagevalue(data)
            

        }

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
                    type = 'student_history_table'
                    headingColumns = {[
                        "Date",
                        "Transaction Name",
                        // "Transaction ID",
                        "Status",
                        "Action",
                    ]}
                    tableData = {tableData}
                    action = {actionHandler}
                />
                {isOpen && <ViewModal setIsOpen={setIsOpen} file={file} data={documentDetails}/>}
            </div>
            </Container>


            <div className="history-student-footer">
                <Footer/>
            </div>
        </div>

        </main>

        
    )
}

export default StudentHistoryPage;