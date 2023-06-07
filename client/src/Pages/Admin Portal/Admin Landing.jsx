import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import TransactionTable from './Transaction Table';
import AnnouncementTable from './Announcement Table';
import './Admin Landing.css';
import NavBar from '../../Components/Navigation Bar/NavBar.jsx';
import TableComponent from '../../Components/Table/Table';
import Container from 'react-bootstrap/Container';
import AdminApproveModal from '../../Components/Modal/View Modal - Admin Approve';
import ConfirmApprove from '../../Components/Modal/Approve Confirmation';
import ConfirmReject from '../../Components/Modal/Reject Confirmation';





const AdminLanding = ({children}) => {

    const [tableData1, setTableData1] = useState([]);
    const [tableData2, setTableData2] = useState([]);
    const [numApprove, setNumApprove] = useState(0);
    const [numOngoing, setNumOngoing] = useState(0);
    const [documentDetails, setDocumentDetails] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isConfirmOpen, setConfirmOpen] = useState(false);
    const [isRejectOpen, setRejectOpen] = useState(false);
    const [id, setID] = useState(0);


        async function fetchApproval(data){
            const response = await axios.get('http://localhost:5000/admin_api/approval_table/' + data)
            console.log(response.data)
            setTableData1(response.data)
            setNumApprove(response.data.length)
        }

        useEffect (() =>{
            fetchApproval()
            }, [])

        async function fetchOngoing(data){
            const response = await axios.get('http://localhost:5000/admin_api/ongoing_table/' + data)
            console.log(response.data)
            setTableData2(response.data)
            setNumOngoing(response.data.length)
        }

        useEffect (() =>{
            fetchOngoing()
            }, [])

    async function viewDocumentDetails(id) {
        const response = await axios.get("http://localhost:5000/student_api/transaction_details/" + id.toString())
        if (response){
            setDocumentDetails(response.data[0])
            console.log(documentDetails)
            setIsOpen(true)
        }
    }

    async function addTracking(id) {
        const response = await axios.post("http://localhost:5000/tracking_api/update",{
            transaction_id: id,
            tracking_status: "Your request has been approved by the admin.",
        })
        if (response){
            console.log(response)
        }
    }

    async function changeStatusToAccepted(id) {
        const response = axios.put("http://localhost:5000/admin_api/transaction_status/" + id.toString(), {
            transaction_status: 'ongoing'
        })
        //addTracking(id)
        if (response){
            console.log(response)
        }
    }

    async function changeStatusToRejected(id, comment) {
        const response = axios.put("http://localhost:5000/admin_api/transaction_status/" + id.toString(), {
            transaction_status: 'rejected',
            remarks: comment
        })
        //addTracking(id)
        if (response){
            console.log(response)
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
        changeStatusToAccepted(id)
        const msg = "Your request for " + documentDetails.form_name + " has been approved by the admin."
        window.location.reload()
        addNotif(documentDetails.user_id, msg)
    }
    
    const rejectTransaction = (data) => {
        changeStatusToRejected(id,data)
        const msg = "Your request for " + documentDetails.form_name + " has been rejected by the admin."
        window.location.reload()
        addNotif(documentDetails.user_id, msg)
    }

    const handleFilterChange1 = (data) => {
        const filter = data.target.value
        fetchApproval(filter)
    }

    const handleFilterChange2 = (data) => {
        const filter = data.target.value
        fetchOngoing(filter)
    }
    
    return(
        <div>
            <NavBar/>
            <div className="header-admin">
                <Header/>
            </div>
            <Container>
                {/* <p>Placeholder text</p> */}
                {/* <div className='admin-announcements'>
                    <AnnouncementTable/>
                </div> */}
                <div className="name-header-admin">
                    Hello, Admin!
                </div>
                <div className="transaction-header">
                    There are currently&nbsp;<span style={{fontWeight: '700'}}>{numApprove} transactions waiting to be approved</span>&nbsp; and <span style={{fontWeight: '700'}}>{numOngoing} ongoing transactions</span>.       
                </div>
                <div className='title-text-admin'>Waiting Approval</div>
                <div className='filter-container'>
                    Filter by: &nbsp;
                    <select className='filter-button' onChange={(e) => handleFilterChange1(e)}>
                        <option value="dsc">&nbsp;Newest to Oldest&nbsp;</option>
                        <option value="asc">&nbsp;Oldest to Newest&nbsp;</option>
                    </select>
                </div>
                <div className="admin-approve-requests-table-container">
                    <TableComponent
                        type = 'admin_transaction_req_table'
                        headingColumns = {[
                            " ",
                            "Date",
                            "Student Name",
                            // "Transaction ID",
                            "Transaction Name",
                            "Action",
                        ]}
                        tableData = {tableData1}
                        action={approveClickHandler}
                    />
                    {isOpen && <AdminApproveModal data={documentDetails} setIsOpen={setIsOpen} action={openConfirmationModal} rejectAction={openRejectionModal}/>}
                    {isConfirmOpen && <ConfirmApprove setIsOpen={setConfirmOpen} action={approveTransaction}/>}
                    {isRejectOpen && <ConfirmReject setIsOpen={setRejectOpen} action={rejectTransaction}/>} 
                    {/* //action={approveTransaction} add this */}
                </div>

                <div className='title-text-admin'>Ongoing Transactions</div>
                <div className='filter-container'>
                    Filter by: &nbsp;
                    <select className='filter-button' onChange={(e) => handleFilterChange2(e)}>
                        <option value="dsc">&nbsp;Newest to Oldest&nbsp;</option>
                        <option value="asc">&nbsp;Oldest to Newest&nbsp;</option>
                    </select>
                </div>
                <div className="admin-approve-requests-table-container">
                    <TableComponent
                        type = 'admin_transaction_req_table'
                        headingColumns = {[
                            " ",
                            "Date",
                            "Student Name",
                            // "Transaction ID",
                            "Transaction Name",
                            "Action",
                        ]}
                        tableData = {tableData2}
                        // action={clickHandler}
                    />
                </div>
                {/* <OngoingTable/> */}
            </Container>

            <div className="footer-admin">
                <Footer/>
            </div>
        </div>
    )
}

export default AdminLanding;