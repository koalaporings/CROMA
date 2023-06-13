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
import AdminOngoingModal from '../../Components/Modal/View Modal - Admin Ongoing';





const AdminLanding = ({userName}) => {

    const [tableData1, setTableData1] = useState([]);
    const [tableData2, setTableData2] = useState([]);
    const [numApprove, setNumApprove] = useState(0);
    const [numOngoing, setNumOngoing] = useState(0);
    const [documentDetails, setDocumentDetails] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isConfirmOpen, setConfirmOpen] = useState(false);
    const [isRejectOpen, setRejectOpen] = useState(false);
    const [isOngoingOpen, setIsOngoingOpen] = useState(false);
    const [id, setID] = useState(0);
    const [signatoryList, setSignatoryList] = useState([]);
    const [recipients, setRecipients] = useState({
        recipient1: "",
        recipient2: "",
        recipient3: "",
    })

    useEffect(() => {
        async function getSignatory(){
            const response = await axios.get("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/signatory_api/getSignatories")
            console.log(response.data)
            setSignatoryList(response.data)
        }

        getSignatory()
    },[])


    const [filterDetails, setFilterDetails] = useState({
        course_filter: "all",
        order_filter: "dsc",
    });
    const [filterDetails2, setFilterDetails2] = useState({
        course_filter: "all",
        order_filter: "dsc",
    });


        async function fetchApproval(data){
            const response = await axios.get('http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/admin_api/approval_table/' + data.order_filter + "/" + data.course_filter)
            console.log(response.data)
            setTableData1(response.data)
            setNumApprove(response.data.length)
        }

        useEffect (() =>{
            fetchApproval(filterDetails)
            }, [])

        async function fetchOngoing(data){
            const response = await axios.get('http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/admin_api/ongoing_table/' + data.order_filter + "/" + data.course_filter)
            console.log(response.data)
            setTableData2(response.data)
            setNumOngoing(response.data.length)
        }

        useEffect (() =>{
            fetchOngoing(filterDetails)
            }, [])

    async function viewDocumentDetails(id) {
        console.log(id)
        const response = await axios.get("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/student_api/transaction_details/" + id.toString())
        console.log(response)
        if (response){
            console.log(response.data)
            setDocumentDetails(response.data[0])
            console.log(documentDetails)
            setIsOpen(true)
        }
    }

    async function viewDocumentDetails2(id) {
        console.log(id)
        const response = await axios.get("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/student_api/transaction_details/" + id.toString())
        console.log(response)
        if (response){
            console.log(response.data)
            setDocumentDetails(response.data[0])
            console.log(documentDetails)
            setIsOngoingOpen(true)
        }
    }

    async function addTracking(id) {
        const response = await axios.post("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/tracking_api/update",{
            transaction_id: id,
            tracking_status: "Your request has been approved by the admin.",
        })
        if (response){
            console.log(response)
        }
    }

    async function setApprovedBy(id) {
        const response = await axios.put("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/form_api/updateApproved",{
            transaction_id: id,
            approved_by: "COS Secretary",
        })
        if (response){
            console.log(response)
        }
    }

    async function changeStatusToAccepted(id) {
        const response = await axios.put("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/admin_api/transaction_status/" + id.toString(), {
            transaction_status: 'ongoing'
        })
        addTracking(id)
        if (response){
            console.log(response)
        }
    }

    async function changeStatusToRejected(id, comment) {
        const response = await axios.put("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/admin_api/transaction_status/" + id.toString(), {
            transaction_status: 'rejected',
            remarks: comment
        })
        //addTracking(id)
        if (response){
            console.log(response)
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
    
    async function setFirstSignatory(transaction_id, signatory_id) {
        const response = await axios.put("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/signatory_api/approve/",{
            transaction_id: transaction_id,
            signatory_id: signatory_id,
        })
        if (response){
            console.log(response)
        }
    }

    async function updateRecipients(transaction_id, recipients) {
        console.log((recipients.recipient2 != "") ? recipients.recipient2 + ((recipients.recipient3 != "") ? recipients.recipient3 : "") : "")
        const response = await axios.put("http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/form_api/updateRecipients",{
            transaction_id: transaction_id,
            form_recipients: (recipients.recipient2 != "") ? recipients.recipient2 + ((recipients.recipient3 != "") ? recipients.recipient3 : "") : ""
        })
        if (response){
            console.log(response)
        }
    }



    const approveClickHandler = (data) => {
        console.log(data)
        setID(data)
        viewDocumentDetails(data)
    }

    const clickOngoingHandler = (data) => {
        console.log(data)
        setID(data)
        viewDocumentDetails2(data)
    }

    const openConfirmationModal = () => {
        setConfirmOpen(true)
    }

    const openRejectionModal = () => {
        setRejectOpen(true)
    }


    const approveTransaction = (data) => {
        console.log(data)
        changeStatusToAccepted(id)
        console.log(id)
        setFirstSignatory(id, recipients.recipient1)
        updateRecipients(id, recipients)
        setApprovedBy(id)

        const msg = "Your request " + documentDetails.transaction_id + " (" + documentDetails.form_name + ") has been approved by the admin."
        
        addNotif(documentDetails.user_id, msg)
    }
    
    const rejectTransaction = (data) => {
        changeStatusToRejected(id,data)
        const msg = "Your request " + documentDetails.transaction_id + " (" + documentDetails.form_name + ") has been rejected by the admin."
        
        addNotif(documentDetails.user_id, msg)
    }
    
    // const handleFilterChange1 = (data) => {
    //     const filter = data.target.value
    //     setF(filter)
    //     console.log(courseFilter)
    //     fetchApproval(orderFilter, courseFilter)
    // }

    // const handleFilterChange2 = (data) => {
    //     const filter = data.target.value
        
    //     fetchOngoing(orderFilter, courseFilter)
    // }

    // const handleFilterChangeCourse1 = (data) => {
    //     const filter = data.target.value
    //     setCourseFilter(filter)
    //     console.log(courseFilter)
    //     fetchApproval(orderFilter, courseFilter)
    // }

    useEffect(() => {
       // console.log(filterDetails.course_filter);
        fetchApproval(filterDetails)
    }, [filterDetails])

    const handleFilterChange1 = (e) => {
        const { name, value } = e.target;
        setFilterDetails(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect(() => {
        //console.log(filterDetails2.course_filter);
        fetchOngoing(filterDetails2)
    }, [filterDetails2])

    const handleFilterChange2 = (e) => {
        const { name, value } = e.target;
        setFilterDetails2(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setRecipients(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    console.log(recipients)

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
                    Hello, {sessionStorage.getItem("name")} (Admin)!
                </div>
                <div className="transaction-header">
                    There are currently&nbsp;<span style={{fontWeight: '700'}}>{numApprove} transactions waiting to be approved</span>&nbsp; and <span style={{fontWeight: '700'}}>{numOngoing} ongoing transactions</span>.       
                </div>
                <div className='title-text-admin'>Waiting Approval</div>
                <div className='filter-container'>
                    Filter by: &nbsp;
                    <select className='filter-button' name="course_filter" onChange={(e) => handleFilterChange1(e)}>
                        <option value="all">&nbsp;All&nbsp;</option>
                        <option value="BS Computer Science">&nbsp;BS Computer Science&nbsp;</option>
                        <option value="BS Biology">&nbsp;BS Biology&nbsp;</option>
                        <option value="BS Mathematics">&nbsp;BS Mathematics&nbsp;</option>
                        <option value="BS Statistics">&nbsp;BS Statistics&nbsp;</option>
                    </select>
                    &nbsp;
                    <select className='filter-button' name="order_filter" onChange={(e) => handleFilterChange1(e)}>
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
                    {isOpen && <AdminApproveModal data={documentDetails} setIsOpen={setIsOpen} action={openConfirmationModal} rejectAction={openRejectionModal} signatoryList={signatoryList} changeHandler={changeHandler} />}
                    {isConfirmOpen && <ConfirmApprove setIsOpen={setConfirmOpen} action={approveTransaction}/>}
                    {isRejectOpen && <ConfirmReject setIsOpen={setRejectOpen} action={rejectTransaction}/>} 
                    {/* //action={approveTransaction} add this */}
                </div>

                <div className='title-text-admin'>Ongoing Transactions</div>
                <div className='filter-container'>
                    Filter by: &nbsp;
                    <select className='filter-button' name="course_filter" onChange={(e) => handleFilterChange2(e)}>
                        <option value="all">&nbsp;All&nbsp;</option>
                        <option value="BS Computer Science">&nbsp;BS Computer Science&nbsp;</option>
                        <option value="BS Biology">&nbsp;BS Biology&nbsp;</option>
                        <option value="BS Mathematics">&nbsp;BS Mathematics&nbsp;</option>
                        <option value="BS Statistics">&nbsp;BS Statistics&nbsp;</option>
                    </select>
                    &nbsp;
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
                        action={clickOngoingHandler}
                    />
                    {isOngoingOpen && <AdminOngoingModal data={documentDetails} setIsOpen={setIsOngoingOpen} />}

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