import React from 'react';
import { Row, Column, Col } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';
import { useState } from 'react';


import './Student Landing.css';

const StudentLanding = ({children}) => {
    
    const [formId, setFormId] = useState(0);
    const [formName, setFormName] = useState("Form");
    const [formDescription, setFormDescription] = useState("Select a form from the list on the left to show the description of the form and click the 'Request' button once you are ready to request.");
    const [paymentInfo, setPaymentInfo] = useState(0);
    const [durationInfo, setDurationInfo] = useState("--");


    const dummyData = [
        {
            trans_id: 1,
            trans_name: "True Copy of Grades (TCG)",
            trans_desc: "This is the description for the True Copy of Grades (TCG). Insert more text here. Insert even more text here.",
            payment: 50,
            duration: "7 to 14 days",
        },
        {
            trans_id: 2,
            trans_name: "Form #2",
            trans_desc: "This is the description for Form #2. Insert more text here. Insert even more text here.",
            payment: 51,
            duration: "8 to 16 days",
        },
        {
            trans_id: 3,
            trans_name: "Form #3",
            trans_desc: "This is the description for Form #3. Insert more text here. Insert even more text here.",
            payment: 52,
            duration: "9 to 18 days",
        },
        {
            trans_id: 4,
            trans_name: "Form #4",
            trans_desc: "This is the description for Form #4. Insert more text here. Insert even more text here.",
            payment: 53,
            duration: "10 days",
        },
        {
            trans_id: 5,
            trans_name: "Form #5",
            trans_desc: "This is the description for Form #5. Insert more text here. Insert even more text here.",
            payment: 54,
            duration: "11 days",
        },
        {
            trans_id: 6,
            trans_name: "Form #6",
            trans_desc: "This is the description for Form #6. Insert more text here. Insert even more text here.",
            payment: 55,
            duration: "12 days",
        },
        {
            trans_id: 7,
            trans_name: "Form #7",
            trans_desc: "This is the description for Form #7. Insert more text here. Insert even more text here.",
            payment: 56,
            duration: "13 days",
        },




        {
            trans_id: 1,
            trans_name: "True Copy of Grades (TCG)",
            trans_desc: "This is the description for the True Copy of Grades (TCG). Insert more text here. Insert even more text here.",
            payment: 50,
            duration: "7 to 14 days",
        },
        {
            trans_id: 2,
            trans_name: "Form #2",
            trans_desc: "This is the description for Form #2. Insert more text here. Insert even more text here.",
            payment: 51,
            duration: "8 to 16 days",
        },
        {
            trans_id: 3,
            trans_name: "Form #3",
            trans_desc: "This is the description for Form #3. Insert more text here. Insert even more text here.",
            payment: 52,
            duration: "9 to 18 days",
        },
        {
            trans_id: 4,
            trans_name: "Form #4",
            trans_desc: "This is the description for Form #4. Insert more text here. Insert even more text here.",
            payment: 53,
            duration: "10 days",
        },
        {
            trans_id: 5,
            trans_name: "Form #5",
            trans_desc: "This is the description for Form #5. Insert more text here. Insert even more text here.",
            payment: 54,
            duration: "11 days",
        },
        {
            trans_id: 6,
            trans_name: "Form #6",
            trans_desc: "This is the description for Form #6. Insert more text here. Insert even more text here.",
            payment: 55,
            duration: "12 days",
        },
        {
            trans_id: 7,
            trans_name: "Form #7",
            trans_desc: "This is the description for Form #7. Insert more text here. Insert even more text here.",
            payment: 56,
            duration: "13 days",
        },
        {
            trans_id: 1,
            trans_name: "True Copy of Grades (TCG)",
            trans_desc: "This is the description for the True Copy of Grades (TCG). Insert more text here. Insert even more text here.",
            payment: 50,
            duration: "7 to 14 days",
        },
        {
            trans_id: 2,
            trans_name: "Form #2",
            trans_desc: "This is the description for Form #2. Insert more text here. Insert even more text here.",
            payment: 51,
            duration: "8 to 16 days",
        },
        {
            trans_id: 3,
            trans_name: "Form #3",
            trans_desc: "This is the description for Form #3. Insert more text here. Insert even more text here.",
            payment: 52,
            duration: "9 to 18 days",
        },
        {
            trans_id: 4,
            trans_name: "Form #4",
            trans_desc: "This is the description for Form #4. Insert more text here. Insert even more text here.",
            payment: 53,
            duration: "10 days",
        },
        {
            trans_id: 5,
            trans_name: "Form #5",
            trans_desc: "This is the description for Form #5. Insert more text here. Insert even more text here.",
            payment: 54,
            duration: "11 days",
        },
        {
            trans_id: 6,
            trans_name: "Form #6",
            trans_desc: "This is the description for Form #6. Insert more text here. Insert even more text here.",
            payment: 55,
            duration: "12 days",
        },
        {
            trans_id: 7,
            trans_name: "Form #7",
            trans_desc: "This is the description for Form #7. Insert more text here. Insert even more text here.",
            payment: 56,
            duration: "13 days",
        },
    ]

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
                <div className="transaction-container">
                    <div className = "request-form-title">Request a form?</div>
                    <div className="transaction-list-container">
                        {dummyData.map((data) => {
                            return(
                                <div className="transaction-name-container" onClick={(e) => changeInfo(data.trans_name, data.trans_desc, data.payment, data.duration, data.trans_id)}>
                                    {data.trans_name}
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