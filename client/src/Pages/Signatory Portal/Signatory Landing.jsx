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
import SignatoryApproveModal from '../../Components/Modal/View Modal - Signatory Approve';
import ConfirmApprove from '../../Components/Modal/Approve Confirmation';
import ConfirmReject from '../../Components/Modal/Reject Confirmation';


const SignatoryLanding = ({userId, userName, lastName}) => {

    console.log(lastName)


    const [formData, setFormData] = useState([]);
    const [tablesData, setTableData] = useState([]);
    const [selected, setSelected] = useState(0);
    const [documentDetails, setDocumentDetails] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [count, SetCount] = useState(0);

    const [isConfirmOpen, setConfirmOpen] = useState(false);
    const [id, setID] = useState(0);
    const [isRejectOpen, setRejectOpen] = useState(false);
    const [recipients, setRecipients] = useState("");

    const [filterDetails, setFilterDetails] = useState({
        course_filter: "all",
        order_filter: "dsc",
    });


    async function fetchTable (data){
        console.log(data)
        console.log(userId)
        const response = await axios.get('http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/signatory_api/transactions/' + userId + "/" + data.order_filter + "/" + data.course_filter)
        console.log(response.data)
        setTableData(response.data)
        SetCount(response.data.length)
    }

    useEffect (() =>{
        fetchTable(filterDetails)
        }, [])
    
    async function viewDocumentDetails(id) {
        const response = await axios.get("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/student_api/transaction_details/" + id.toString())
        if (response){
            setDocumentDetails(response.data[0])
            console.log(documentDetails)
            setIsOpen(true)
        }
    }

    async function addNotif(id,message) {
        const response = await axios.post("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/notification_api/new",{
            user_id: id,
            notification_body: message,
        })
        if (response){
            console.log(response)
        }
        window.location.reload()
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

    async function approveTransaction (data) {
        const response = await axios.get("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/form_api/approvedBy/" + id)
        console.log(response.data)

        getRecipients(documentDetails.transaction_id)
        const msg = "Your request " + documentDetails.transaction_id + " (" + documentDetails.form_name + ") has been approved by signatory: " + sessionStorage.getItem("name") + "."
        addNotif(documentDetails.user_id, msg)
    }

    //Might need adjustments in order to actually work for multiple signatories or to send it back
    const rejectTransaction = (data) => {
        rejectUpdate(documentDetails.transaction_id,data)
        const msg = "Your request " + documentDetails.transaction_id + " (" + documentDetails.form_name + ") has been rejected by signatory: " + sessionStorage.getItem("name") + "."
        addNotif(documentDetails.user_id, msg)
        
    }

    async function getRecipients(id){
        addTracking(id)
        getApprovedBy(id)
        const response = await axios.get("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/form_api/formRecipients/" + id.toString())
        console.log(response)
        const recip = response.data[0].form_recipients.substring(0,3)

        
        console.log(recip)
        if (recip.length === 3){
            approveUpdate(id, recip.substring(0,3))
        }
        else{
            approveUpdate(id, "10")
        }

        const sliced_recip = response.data[0].form_recipients.slice(3)
        updateRecipients(id,sliced_recip)
    }

    async function updateRecipients(transaction_id, recipients) {
        const response = await axios.put("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/form_api/updateRecipients",{
            transaction_id: transaction_id,
            form_recipients: recipients
        })
        if (response){
            console.log(response)
        }
    }



    async function approveUpdate(id, recip) {
        console.log(id)
        console.log(recip)
        const response = await axios.put("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/signatory_api/approve/", {
            signatory_id: recip,
            transaction_id: id
        })
        
        if (response){
            console.log(response)
        }
    }

    async function getApprovedBy(id) {
        console.log(id)
        const response = await axios.get("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/form_api/approvedBy/" + id)
        const approved_by = response.data[0].approved_by
        console.log(approved_by)
        setApprovedBy(id, approved_by)
    }


    async function setApprovedBy(id, approved_by) {
        console.log(id)
        const response = await axios.put("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/form_api/updateApproved",{
            transaction_id: id,
            approved_by: approved_by + ", " + lastName,
        })
        if (response){
            console.log(response)
        }
    }

    async function rejectUpdate(id, comment) {
        const response = await axios.put("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/signatory_api/rejecttemp/" + id.toString(), {
            transaction_status: 'rejected',
            remarks: comment
        })
        addTracking(id)
        if (response){
            console.log(response)
        }
    }


    async function addTracking(id) {
        const response = await axios.post("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/tracking_api/update",{
            transaction_id: id,
            tracking_status: "Your request has been approved by signatory: " + sessionStorage.getItem("name"),
        })
    }

    
    useEffect(() => {
        // console.log(filterDetails.course_filter);
         fetchTable(filterDetails)
     }, [filterDetails])
 
     const handleFilterChange = (e) => {
         const { name, value } = e.target;
         setFilterDetails(prevState => ({
             ...prevState,
             [name]: value
         }))
     }

    return(
        <div>
            <NavBar/>
            <div className="header-signatory">
                <Header/>
            </div>
            <Container>
                <div className="name-header-admin">
                    Hello, {sessionStorage.getItem("name")}!
                </div>
                <div className="transaction-header">
                    There {(count === 1) ? "is" : "are"} currently&nbsp;<span style={{fontWeight: '700'}}>{count} {(count === 1) ? "transaction" : "transactions"} </span>waiting to be approved.       
                </div>
                <div className='title-text-admin'>Waiting Approval</div>
                <div className='filter-container'>
                    Filter by: &nbsp;
                    <select className='filter-button' name="course_filter" onChange={(e) => handleFilterChange(e)}>
                        <option value="all">&nbsp;All&nbsp;</option>
                        <option value="BS Computer Science">&nbsp;BS Computer Science&nbsp;</option>
                        <option value="BS Biology">&nbsp;BS Biology&nbsp;</option>
                        <option value="BS Mathematics">&nbsp;BS Mathematics&nbsp;</option>
                        <option value="BS Statistics">&nbsp;BS Statistics&nbsp;</option>
                    </select>
                    &nbsp;
                    <select className='filter-button' name="order_filter" onChange={(e) => handleFilterChange(e)}>
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
                    {isOpen && <SignatoryApproveModal data={documentDetails} setIsOpen={setIsOpen} action={openConfirmationModal} rejectAction={openRejectionModal}/>}
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