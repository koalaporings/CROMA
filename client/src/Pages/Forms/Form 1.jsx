import { useState } from "react";
import './Forms.css';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';
import CancelModal from '../../Components/Modal/Cancel Modal';
import SubmitModal from '../../Components/Modal/Submit Modal';
import { fontSize } from '@mui/system';
import { addFormInformation } from './Forms API Call';
import { useNavigate } from "react-router-dom";

// True Copy of Grades
const Form1 = ({children}) => {
    const [price, setPrice] = useState(50);
    const [formDetails, setFormDetails] = useState({
        user_id: 4,
        form_id: 1,
        payment_proof: null,
        remarks: null,
        student_id: 1,
        last_name: "",
        first_name: "",
        middle_initial: "",
        student_number: "",
        mobile_number: "",
        year_level: "",
        degree_program: "",
        email: "",
        academic_year: "",
        semester: "",
        num_copies: "",
        purpose: "",
    });

    const navigate = useNavigate();

    const navigateLanding = () => navigate('/student');
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value)

        if (name==="num_copies"){
            if (value){
                setPrice(50*parseInt(value))
            }
            else{
                setPrice(50)
            }
        }
        setFormDetails(prevState => ({
        ...prevState,
        [name]: value
        }));

        console.log(formDetails)
    }

    const [isOpen, setIsOpen] = useState(false);
    const [isCancelOpen, setIsCancelOpen] = useState(false);

    async function addInfo() {
        // setIsClicked(true);
        const response = addFormInformation(formDetails);
        console.log(response)
        setIsOpen(false)
        navigateLanding()
    }



    return(
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/> 
            <NavBar/>
            <div className="header-form">
                <Header/>
            </div>
            <Container>
                <div className="form-title">
                    True Copy of Grades (TCG)
                </div>
                <form class="tcg-form" >
                    <h1 className='form-group-title'>A. Student Details</h1>
                    <div class="form-row">
                        <div class="col-md-3 mb-2">     
                            <label for="studentLastName">Last Name</label>
                            <input type="text" class="form-control" id="studentLastName" name="last_name" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-3 mb-2">     
                            <label for="studentFirstName">First Name</label>
                            <input type="text" class="form-control" id="studentFirstName" name="first_name" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-2 mb-2">     
                            <label for="studentMiddleInitial">Middle Initial</label>
                            <input type="text" class="form-control" id="studentMiddleInitial" name="middle_initial" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="studentNumber">Student Number</label>
                            <input type="text" class="form-control" id="studentNumber" name="student_number" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="mobileNumber">Mobile Number</label>
                            <input type="text" class="form-control" id="mobileNumber" name="mobile_number" onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-2">
                            <label for="degreeProgram">Degree Program</label>
                            <select class="custom-select" id='degreeProgram' name="degree_program" onChange={(e) => handleChange(e)}>
                                <option selected value=""> </option>
                                <option value="bscs">BS Computer Science</option>
                                <option value="bsbio">BS Biology</option>
                                <option value="bsmath">BS Mathematics</option>
                                <option value="bsstat">BS Statistics</option>
                            </select>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="yearLevel">Year Level</label>
                            <input type="number" min='1' max='6' class="form-control" id="yearLevel" name="year_level" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="emailAddress">Email Address</label>
                            <input type="email" class="form-control" id="emailAddress" name="email" onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <h1 className='form-group-title'>B. Request Details</h1>
                    <div class="form-row">
                        <div class="col-md-4 mb-2">     
                            <label for="academicYear">Academic Year</label>
                            <input type="text" class="form-control" id="academicYear" name="academic_year" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="semester">Semester</label>
                            <input type="text" class="form-control" id="semester" name="semester" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="copies">Number of Copies</label>
                            <input type="text" class="form-control" id="copies" name="num_copies" onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-7 mb-2">
                            <label for="purpose">Purpose for TCG</label>
                            <select class="custom-select" id='purpose' name="purpose" onChange={(e) => handleChange(e)}>
                                <option selected value=""> </option>
                                <option value="scholarship">Scholarship</option>
                                <option value="readmission">Readmission</option>
                                <option value="shift">Shift</option>
                            </select>
                        </div>
                    </div>
                    <h1 className='form-group-title'>C. Proof of Payment</h1>
                    <h2 className='form-subtitle-1'>Pay via Philippine Veterans Bank</h2>
                    <div className="inline-form-details">
                        <div className='form-details'><b>Account Name:</b> UP Cebu</div>
                        <div className='form-details'><b>Account Number:</b> 21-0000-067</div>
                        <div className='form-details'><b>Branch:</b> Cebu City</div>
                    </div>
                    <h3 className='form-subtitle-2'>Note:</h3>
                    <div className='form-details'>If asked for mobile number, please provide your own mobile number</div>
                    <div className='form-details'>If paying via GCash, please add 4 zeroes at the start to have 13 digits, 000021-0000-067.</div>
                    <h3 className='form-subtitle-2'>Total Amount to be Paid</h3>
                    <div className="request-price-container">
                        <div className="column-1">
                            <div className='form-details-price'>₱{price}.00</div>
                            <div className='form-details'>This is the total amount to be paid through Philippine Veterans Bank</div>
                            <div className='form-details'>(Payment may be made via online channels such as gcash, instapay, pesonet, bank transfers.)</div>
                        </div>
                        <div className="column-2">
                            <div class="form-group">
                                <input type="file" class="form-control-file" id="paymentProof"/>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                    <div class="col-md-4 mb-2">
                            <label for="paymentMode">Mode of Payment</label>
                            <select class="custom-select" id="paymentMode">
                                <option selected value="1">GCASH</option>
                                <option value="2">Bank</option>
                            </select>
                        </div>
                    </div>
                    <h3 className='form-subtitle-2'>Important:</h3>
                    <ul className='important-list'>
                        <li className='important-item'>Payment status must be COMPLETED or SUCCESSFUL.</li>
                        <li className='important-item'>Proof of payment (screenshot/image) must include <b><u>Amount Paid</u></b>, <b><u>Transaction Date</u></b>, <b><u>Time</u></b>, and <b><u>Reference Number</u></b>.</li>
                        <li className='important-item'>For GCash transactions, make sure to enable mobile or email notifications. Attach proof of completed payment from GCash SMS or GCash Email with InstaPay Trace Number. (also found in your GCash Inbox, "Your Bank Transfer Status" message)</li>
                        <li className='important-item'>Otherwise, if payment is not verifiable, your request may not be processed or may be delayed.</li>
                    </ul>
                    <div className='privacy-notice-container'>
                        <h1 className="form-group-title">Privacy Notice for UP Students</h1>
                        <div className="privacy-notice-text">
                            <p className='privacy-notice-text-1'>"I understand that all payments made to UP Cebu are non-refundable. Additional fees may be requested depending on the actual number of pages.</p>
                            <p className='privacy-notice-text-2'>"I understand that my request will not be processed if the information provided is erroneous or incomplete. I will check my email for updates on this request.</p>
                            <p className='privacy-notice-text-3'>"I am aware of the University of the Philippines' Privacy Notice for students. I understand that for the UP System to carry out its mandate under the 1987 Constitution, the UP Charter and other laws, that the University must necessarily process my personal and sensitive personal information. Therefore, I grant my consent to and recognize the authority of the University to process my personal and sensitive personal information pursuant to the abovementioned Privacy Notice and other applicable laws.</p>
                            <p className='privacy-notice-text-end'>"I hereby certify that all information given above are true and correct."</p>
                        </div>
                    </div>
                </form>
                <div className="form-buttons-container">
                    <div className="cancel-button">
                        <button class="btn btn-primary" type="submit" onClick={() => setIsOpen(true)}>Cancel</button>
                        {isCancelOpen && <CancelModal setIsOpen={setIsCancelOpen} />}
                    </div>
                    <div className="submit-button">
                        <button class="btn btn-primary" onClick={() => setIsOpen(true)}>Submit</button> 
                        {isOpen && <SubmitModal setIsOpen={setIsOpen} action={addInfo}/>}
                    </div>
                </div>
            </Container>

            <Footer/>

        </div>
    )
}



export default Form1;



