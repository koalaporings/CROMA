import { useState } from "react";
import './Forms.css';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';
import CancelModal from '../../Components/Modal/Cancel Modal';
import SubmitModal from '../../Components/Modal/Submit Modal';
//import { fontSize } from '@mui/system';
import { addFormInformation } from './Forms API Call';
import { useNavigate } from "react-router-dom";




// Change of Matriculation
const Form7 = ({userId}) => {
    const [formDetails, setFormDetails] = useState({
        user_id: userId,
        form_id: 7,
        remarks: null,
        student_id: 1,
        last_name: "",
        first_name: "",
        middle_initial: "",
        student_number: "",
        mobile_number:"",
        degree_program: "",
        year_level: "",
        email:"",

        purpose: "",
        purpose_ext: "",

        cSub: {},
        cProf: {},
        cUnit: {},
        cTime: {},
        cDay: {},
        cRoom: {},

        aSub: {},
        aProf: {},
        aUnit: {},
        aTime: {},
        aDay: {},
        aRoom: {}
    });

    const navigate = useNavigate();

    const navigateLanding = () => navigate('/student');
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value)

        const prefixes = ["cSub", "cProf", "cUnit", "cTime", "cDay", "cRoom", "aSub", "aProf", "aUnit", "aTime", "aDay", "aRoom"];

        // Check if the name starts with any of the prefixes
        let prefix = ''
        for (let p of prefixes){
            if(name.startsWith(p)){
                prefix = p    
                console.log(p)            
                break
            }
        }
        console.log('heh')
        console.log(prefix)

        if (prefix) {
            setFormDetails(prevState => ({
                ...prevState,
                [prefix]: {
                    ...prevState[prefix],
                    [name]: value,
                }
            }));
        } else {
            setFormDetails(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }

        console.log(formDetails)
    }

    const [isOpen, setIsOpen] = useState(false);
    const [isCancelOpen, setIsCancelOpen] = useState(false);

    async function addInfo() {
        if (!formValid()) {
            return;
        }

        const formData = new FormData();
        formData.append('user_id', formDetails.user_id);

        const response = addFormInformation(formDetails);
        //setIsOpen(false);
        //navigateLanding();
    }

    const formValid = () => {
        const {
            last_name,
            first_name,
            student_number,
            mobile_number,
            year_level,
            degree_program,
            email,
            purpose,
            purpose_ext

        } = formDetails;

        if (!last_name) {
            console.log("Last name is missing");
        }
        
        if (!first_name) {
            console.log("First name is missing");
        }
        
        if (!student_number) {
            console.log("Student number is missing");
        }
        
        if (!year_level) {
            console.log("Year level is missing");
        }
        
        if (!degree_program) {
            console.log("Degree program is missing");
        }
        
        if (!mobile_number) {
            console.log("Mobile number is missing");
        }
        
        if (!email) {
            console.log("Email is missing");
        }
        
        if (!purpose) {
            console.log("Purpose is missing");
        }
        
        if (!purpose_ext) {
            console.log("Purpose extension is missing");
        }
        

        if (
            !last_name ||
            !first_name ||
            !student_number ||
            !year_level ||
            !degree_program ||
            !mobile_number||
            !email||
            !purpose||
            !purpose_ext
        ) {
            // Form validation failed
            alert("Please fill in all fields");
            return false;
        }

        if (isNaN(student_number)) {
            alert("Student number and mobile number must be integers.");
            return;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setIsCancelOpen(true);
    };

    const handleCancelModalClose = () => {
        setIsCancelOpen(false);
    };

    const handleSubmitModalClose = () => {
        setIsOpen(false);
    };


    return(
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/> 
            <NavBar/>
            <div className="header-form">
                <Header/>
            </div>
            <Container>
                <div className="form-title">
                    Change of Matriculation
                </div>
                <form class="tcg-form" onSubmit={handleSubmit}>
                    <h1 className='form-group-title'>A. Student Details</h1>
                    <div class="form-row">
                        <div class="col-md-3 mb-2">     
                            <label for="studentLastName">Last Name</label>
                            <input type="text" class="form-control" id="studentLastName" name="last_name"  onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-3 mb-2">     
                            <label for="studentFirstName">First Name</label>
                            <input type="text" class="form-control" id="studentFirstName" name="first_name"  onChange={(e) => handleChange(e)} />
                        </div>
                        <div class="col-md-2 mb-2">     
                            <label for="studentMiddleInitial">Middle Initial</label>
                            <input type="text" class="form-control" id="studentMiddleInitial" name="middle_initial"  onChange={(e) => handleChange(e)}/>
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
                                <option value="BS Computer Science">BS Computer Science</option>
                                <option value="BS Biology">BS Biology</option>
                                <option value="BS Mathematics">BS Mathematics</option>
                                <option value="BS Statistics">BS Statistics</option>
                            </select>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="yearLevel">Year Level</label>
                            <input type="number" min='1' max='6' class="form-control" id="yearLevel" name="year_level"  onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="emailAddress">Email Address</label>
                            <input type="email" class="form-control" id="emailAddress" name="email" onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <h1 className='form-group-title'>B. Request Details</h1>
                    <label for="purpose">Purpose</label>
                    <div class="row">
                        <div class="col-md-6">
                            <select class="custom-select" id='purpose' name="purpose" onChange={(e) => handleChange(e)}>
                                <option selected value="Ill Advised">Ill Advised</option>
                                <option value="Conflict of Time">Conflict of Time</option>
                                <option value="Lacks Prerequisite">Lacks Prerequisite</option>
                                <option value="Class Dissolved">Class Dissolved</option>
                                <option value="Section Closed">Section Closed</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" id="others" name="purpose_ext" onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-md-2 pr-1">
                            <label for="">Subjects Cancelled</label>
                            <input type="text" class="form-control" id="cSub1"  name="cSub1" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cSub2"  name="cSub2" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cSub3"  name="cSub3" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cSub4"  name="cSub4" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="col-md-2 pl-1 pr-1">
                            <label for="">Instructor</label>
                            <input type="text" class="form-control" id="cProf1" name="cProf1" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cProf2" name="cProf2" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cProf3" name="cProf3" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cProf4" name="cProf4" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="col-md-2 pl-1 pr-1">
                            <label for="">Units</label>
                            <input type="text" class="form-control" id="cUnit1" name="cUnit1" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cUnit2" name="cUnit2" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cUnit3" name="cUnit3" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cUnit4" name="cUnit4" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="col-md-2 pl-1 pr-1">
                            <label for="">Time</label>
                            <input type="text" class="form-control" id="cTime1" name="cTime1" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cTime2" name="cTime2" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cTime3" name="cTime3" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cTime4" name="cTime4" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="col-md-2 pl-1 pr-1">
                            <label for="">Day</label>
                            <input type="text" class="form-control" id="cDay1"  name="cDay1" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cDay2"  name="cDay2" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cDay3"  name="cDay3" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cDay4"  name="cDay4" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="col-md-2 pl-1">
                            <label for="">Room</label>
                            <input type="text" class="form-control" id="cRoom1" name="cRoom1" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cRoom2" name="cRoom2" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cRoom3" name="cRoom3" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="cRoom4" name="cRoom4" onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-md-2 pr-1">
                            <label for="">Subjects Authorized</label>
                            <input type="text" class="form-control" id="aSub1"  name="aSub1" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aSub2"  name="aSub2" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aSub3"  name="aSub3" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aSub4"  name="aSub4" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="col-md-2 pl-1 pr-1">
                            <label for="">Instructor</label>
                            <input type="text" class="form-control" id="aProf1" name="aProf1" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aProf2" name="aProf2" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aProf3" name="aProf3" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aProf4" name="aProf4" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="col-md-2 pl-1 pr-1">
                            <label for="">Units</label>
                            <input type="text" class="form-control" id="aUnit1" name="aUnit1" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aUnit2" name="aUnit2" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aUnit3" name="aUnit3" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aUnit4" name="aUnit4" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="col-md-2 pl-1 pr-1">
                            <label for="">Time</label>
                            <input type="text" class="form-control" id="aTime1" name="aTime1" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aTime2" name="aTime2" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aTime3" name="aTime3" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aTime4" name="aTime4" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="col-md-2 pl-1 pr-1">
                            <label for="">Day</label>
                            <input type="text" class="form-control" id="aDay1"  name="aDay1" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aDay2"  name="aDay2" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aDay3"  name="aDay3" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aDay4"  name="aDay4" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="col-md-2 pl-1">
                            <label for="">Room</label>
                            <input type="text" class="form-control" id="aRoom1" name="aRoom1" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aRoom2" name="aRoom2" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aRoom3" name="aRoom3" onChange={(e) => handleChange(e)}/>
                            <input type="text" class="form-control" id="aRoom4" name="aRoom4" onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <br></br>
                    <div className="col-md-12 p-0">
                        <label htmlFor="remarks">Remarks</label>
                        <textarea name="remarks" id="remarks" class="form-control" rows="3" onChange={(e) => handleChange(e)}></textarea>
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
                            <div className='form-details-price'>₱150.00</div>
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



export default Form7;



