import React from 'react';
import { Row, Column, Col } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';
import Notifications from '../../Components/Notifications/Notifications';
import { useState, useEffect } from 'react';
import axios from 'axios'
import CurrentTable from './Current Table';

import './Student Landing.css';

const StudentLanding = ({children}) => {
    
    const [formId, setFormId] = useState(0);
    const [formName, setFormName] = useState("Form");
    const [formDescription, setFormDescription] = useState("Select a form from the list on the left to show the description of the form and click the 'Request' button once you are ready to request.");
    const [paymentInfo, setPaymentInfo] = useState(0);
    const [durationInfo, setDurationInfo] = useState("--");

    const [formData, setFormData] = useState([])

    useEffect (() =>{
    const fetchAllForms = async ()=>{
        try{
        const response = await axios.get('http://localhost:5000/db/form/')
        setFormData(response.data)
        }catch(err){
        console.log(err)
        }
    }
    fetchAllForms()
    }, [])

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
    }

    return(
        <div>
            <NavBar/>
            <Header/>

            <div className='student-container'>
                <div className="name-header">
                    Hello, John!
                </div>

                <div className="transaction-header">
                    You currently have 4 transactions. Check its progress here.                
                </div>
                <div className='student-notifs-container'>
                    <Notifications/>
                </div>
                <div className="ongoing-table-container">
                    <CurrentTable/>
                </div>    
                <div className="transaction-container">
                    <div className = "request-form-title">Request a form?</div>
                    <div className="transaction-list-container">
                        {formData.map((data) => {
                            return(
                                <div className="transaction-name-container" onClick={(e) => changeInfo(data.form_name, data.form_desc, data.form_payment, data.form_duration, data.form_id)}>
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