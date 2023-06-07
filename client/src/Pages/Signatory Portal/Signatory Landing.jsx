import React from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Signatory';
import { useState, useEffect } from 'react';
import axios from 'axios'
import './Signatory Landing.css';
import Container from 'react-bootstrap/Container';
import TableComponent from '../../Components/Table/Table';

import AdminApproveModal from '../../Components/Modal/View Modal - Admin Approve';
import ConfirmApprove from '../../Components/Modal/Approve Confirmation';
import ConfirmReject from '../../Components/Modal/Reject Confirmation';


const SignatoryLanding = ({children}) => {


    const [formData, setFormData] = useState([]);
    const [tablesData, setTableData] = useState([]);
    const [selected, setSelected] = useState(0);
    const [documentDetails, setDocumentDetails] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [count, SetCount] = useState(0);

    const [isConfirmOpen, setConfirmOpen] = useState(false);
    const [id, setID] = useState(0);
    const [isRejectOpen, setRejectOpen] = useState(false);


    async function fetchTable (data){
        const response = await axios.get('http://localhost:5000/signatory_api/transactions/' + 3, {credentials: 'same-origin'})
        console.log(response.data)
        setTableData(response.data)
        SetCount(response.data.length)
    }

    useEffect (() =>{
        fetchTable ()
        }, [])
    
    async function viewDocumentDetails(id) {
        const response = await axios.get("http://localhost:5000/student_api/transaction_details/" + id.toString())
        if (response){
            setDocumentDetails(response.data[0])
            console.log(documentDetails)
            setIsOpen(true)
        }
    }

    async function addNotif(id,message) {
        const response = await axios.post("http://localhost:5000/notification_api/new",{
            user_id: id,
            notification_body: message,
        })
        if (response){
            console.log(response)
        }
    }
    
    const approveClickHandler = (data) => {
        setID(data)
        viewDocumentDetails(data)
    }

    const openConfirmationModal = () => {
        setConfirmOpen(true)
    }

    const openRejectionModal = () => {
        setRejectOpen(true)
    }

    const approveTransaction = (data) => {
        approveUpdate(documentDetails.transaction_id)
        const msg = "Your request for " + documentDetails.form_name + " has been approved by signatory: Test Signatory 1."
        window.location.reload()
        addNotif(documentDetails.user_id, msg)
    }

    //Might need adjustments in order to actually work for multiple signatories or to send it back
    const rejectTransaction = (data) => {
        rejectUpdate(documentDetails.transaction_id,data)
        const msg = "Your request for " + documentDetails.form_name + " has been rejected by signatory: Test Signatory 1."
        window.location.reload()
        addNotif(documentDetails.user_id, msg)
    }

    async function approveUpdate(id) {
        const response = axios.put("http://localhost:5000/signatory_api/approvetemp/" + id.toString(), {
        })
        addTracking(id)
        if (response){
            console.log(response)
        }
    }

    async function rejectUpdate(id, comment) {
        const response = axios.put("http://localhost:5000/signatory_api/approvetemp/" + id.toString(), {
            remarks: comment
        })
        addTracking(id)
        if (response){
            console.log(response)
        }
    }


    async function addTracking(id) {
        const response = await axios.post("http://localhost:5000/tracking_api/update",{
            transaction_id: id,
            tracking_status: "Your request has been approved by signatory: Test Signatory 1.",
        })
    }

    
    const handleFilterChange = (data) => {
        const filter = data.target.value
        fetchTable(filter)
    }

    return(
        <div>
            <NavBar/>
            <div className="header-signatory">
                <Header/>
            </div>
            <Container>
                <div className="name-header-admin">
                    Hello, Test Signatory 1!
                </div>
                <div className="transaction-header">
                    There {(count === 1) ? "is" : "are"} currently&nbsp;<span style={{fontWeight: '700'}}>{count} {(count === 1) ? "transaction" : "transactions"} </span>waiting to be approved.       
                </div>
                <div className='title-text-admin'>Waiting Approval</div>
                <div className='filter-container'>
                    Filter by: &nbsp;
                    <select className='filter-button' onChange={(e) => handleFilterChange(e)}>
                        <option value="dsc">&nbsp;Newest to Oldest&nbsp;</option>
                        <option value="asc">&nbsp;Oldest to Newest&nbsp;</option>
                    </select>
                </div>
                <div className='signatory-transactions-table-container'>
                    <TableComponent
                        type = 'signatory_transaction_table'
                        headingColumns = {[
                            "Date",
                            "Transaction Name",
                            "Student Name",
                            "Degree Program",
                            "Approved by",
                            "Action",
                        ]}
                        tableData = {tablesData}
                        action = {approveClickHandler}
                        // setID = {setSelected}
                    />
                    {isOpen && <AdminApproveModal data={documentDetails} setIsOpen={setIsOpen} action={openConfirmationModal} rejectAction={openRejectionModal}/>}
                    {isConfirmOpen && <ConfirmApprove setIsOpen={setConfirmOpen} action={approveTransaction}/>}
                    {isRejectOpen && <ConfirmReject setIsOpen={setRejectOpen} action={rejectTransaction}/>} 
                </div>
            </Container>

            <div className="footer-signatory">
                <Footer/>
            </div>
        </div>
    )
}



export default SignatoryLanding;