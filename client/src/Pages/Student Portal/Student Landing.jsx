import React from 'react';
import { Row, Column, Col } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';
import Notifications from '../../Components/Notifications/Notifications';
import { useState, useEffect } from 'react';
import axios from 'axios'
// import CurrentTable from './Current Table';
import TableComponent from '../../Components/Table/Table';
import PDFdocument from '../../Components/PDF/PDF Document 1';

import './Student Landing.css';
import ViewStudentModal from '../../Components/Modal/View Modal - Student';

// DUMMY DATA
import dummyTableData from './dummyTableData';
import dummyFormData from './dummyTransactionList';

const StudentLanding = ({children}) => {
    const userId = 4
    const [formId, setFormId] = useState(0);
    const [formName, setFormName] = useState("Form");
    const [formDescription, setFormDescription] = useState("Select a form from the list on the left to show the description of the form and click the 'Request' button once you are ready to request.");
    const [paymentInfo, setPaymentInfo] = useState(0);
    const [durationInfo, setDurationInfo] = useState("--");

    const [formData, setFormData] = useState([]);
    const [tablesData, setTableData] = useState([]);
    const [selected, setSelected] = useState(0);
    const [documentDetails, setDocumentDetails] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [numTransactions, setNumTransactions] = useState(0);
    const [notifData, setNotifData] = useState([]);

    // GET TRANSACTION LIST
    useEffect (() =>{
    const fetchAllForms = async ()=>{
        const response = await axios.get('http://localhost:5000/form_api/view')
        setFormData(response.data)
    }
    fetchAllForms()
    }, [])


    // GET STUDENT TRANSACTIONS
    useEffect (() =>{
    const fetchTable = async ()=>{
        console.log("hehe")
        try{
            const response = await axios.get('http://localhost:5000/student_api/transactions/' + 4, {credentials: 'same-origin'})
            setTableData(response.data)
            setNumTransactions(response.data.length)
        }
        catch(err){

        }
    }
    fetchTable()
    }, [])


    // GET NOTIFICATIONS
    useEffect (() =>{
        const fetchNotifications = async ()=>{
            try{
            const response = await axios.get('http://localhost:5000/notification_api/get/' + 4, {credentials: 'same-origin'})
            console.log(response.data)
            setNotifData(response.data)
            console.log(notifData)
        }
        catch(err){
        }
            
        }
        fetchNotifications()
        }, [])


    if (formData.length === 0){
        setFormData(dummyFormData)
    }

    console.log(formData)
    console.log(tablesData)

    async function changeInfo(data1, data2, data3, data4, data5){
        setFormName(data1)
        setFormDescription(data2)
        setPaymentInfo(data3)
        setDurationInfo(data4)
        setFormId(data5)
    }

    const navigate = useNavigate();

    const reqRedirect = () => {
        navigate('/student/request/'+formId)
        console.log("o")
    }

    const clickHandler = (data) => {
        viewDocumentDetails(data)
    }


    async function viewDocumentDetails(id) {
        const response = await axios.get("http://localhost:5000/student_api/transaction_details/" + id.toString())
        if (response){
            setDocumentDetails(response.data[0])
            console.log(documentDetails)
            setIsOpen(true)
        }
    }

    const userFirstName = 'User'

    return(

        <div>
            <NavBar/>
            <Header/>

            <div className='student-container'>
                <div className="name-header">
                    Hello, {userFirstName}!
                </div>

                <div className="transaction-header">
                    You currently have&nbsp;<span style={{fontWeight: '700'}}>{numTransactions} ongoing transactions.</span>&nbsp;              
                </div>
                <div className='student-notifs-container'>
                    <Notifications notifsData={notifData}/>
                </div>

                <div className='title-text'>
                    Current Transactions
                </div>

                <div className="student-ongoing-table-container">
                    <TableComponent
                        type = 'student_ongoing_table'
                        headingColumns = {[
                            "Date",
                            "Transaction Name",
                            "Transaction ID",
                            "Status",
                            "Action",
                        ]}
                        tableData = {tablesData}
                        action = {clickHandler}
                        // setID = {setSelected}
                    />
                    {isOpen && <ViewStudentModal data={documentDetails} setIsOpen={setIsOpen}/>}
                </div>
                
                <div className='title-text'>
                    Request a form?
                </div>

                <div className="transaction-container">
                    <div className="transaction-list-container">
                        {formData.map((data,index) => {
                            return(
                                <div tabIndex={index} className="transaction-name-container" onClick={(e) => changeInfo(data.form_name, data.form_desc, data.form_payment, data.form_duration, data.form_id)}>
                                    {data.form_name}
                                </div>
                            )
                        })}
                    </div>
                    <div className="transaction-desc-container">
                        <div className='transaction-title-text'>Request for {formName}</div>
                        <div className='transaction-description'>{formDescription}</div>
                        <div className='transaction-more-desc-container'>
                            <div className='transaction-payment-text'><span style={{fontWeight: '800'}}>Payment: </span> Php {paymentInfo}</div>
                            <div className='transaction-duration-text'><span style={{fontWeight: '800'}}>Expected Duration: </span>{durationInfo}</div>
                            <div className='transaction-request-button' onClick={reqRedirect}>Request</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer-student">
                <Footer/>
            </div>
            
        </div>
    )
}

export default StudentLanding;