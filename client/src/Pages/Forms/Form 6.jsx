import { useState, useEffect } from "react";
import './Forms.css';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';
// import CancelModal from '../../Components/Modal/Cancel Modal';
import SubmitModal from '../../Components/Modal/Submit Modal';
//import { fontSize } from '@mui/system';
import { addFormInformation } from './Forms API Call';
import { useNavigate } from "react-router-dom";
import axios from 'axios'



// Dropping of Course
const Form6 = ({userId}) => {
    const [formDetails, setFormDetails] = useState({
        user_id: userId,
        form_id: 6,
        remarks: null,
        student_id: 1,
        last_name: "",
        first_name: "",
        middle_initial: "",
        student_number: "",
        degree_program: "",
        year_level: "",
        subject_dropped: "",
        section: "",
        instructor_name: "",
        purpose: ""
    });

    const [savedDetails, setSavedDetails] = useState({})

        useEffect(() => {
            async function getDetails(data){
                const response = await axios.get('http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/student_api/getDetails/'+ data)
                console.log(response.data[0])
                setSavedDetails(response.data[0])
            }
    
            getDetails(userId)
        },[])

        useEffect(() => {
            console.log(formDetails)
            setFormDetails({
                user_id: userId,
                form_id: 6,
                last_name: (savedDetails.last_name) ? savedDetails.last_name : "",
                first_name: (savedDetails.first_name) ? savedDetails.first_name : "",
                middle_initial: (savedDetails.middle_initial) ? savedDetails.middle_initial : "",
                student_number: (savedDetails.student_number) ? savedDetails.student_number : "",
                mobile_number: (savedDetails.mobile_number) ? savedDetails.mobile_number : "",
                year_level: (savedDetails.year_level) ? savedDetails.year_level : "",
                degree_program: (savedDetails.degree_program) ? savedDetails.degree_program : "",
                email: (savedDetails.email) ? savedDetails.email : "",
            })
            console.log(formDetails)
        },[savedDetails])
    
    const navigate = useNavigate();

    const navigateLanding = () => navigate('/student');
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value)

        setFormDetails(prevState => ({
        ...prevState,
        [name]: value
        }));

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
        setIsOpen(false);
        navigateLanding();
    }


    const formValid = () => {
        const {

            last_name,
            first_name,
            student_number,
            year_level,
            degree_program,
            subject_dropped,
            section,
            instructor_name,
            purpose

        } = formDetails;

        if (
            !last_name ||
            !first_name ||
            !student_number ||
            !year_level ||
            !degree_program ||
            !subject_dropped||
            !section||
            !instructor_name||
            !purpose
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
                    Dropping of Course
                </div>
                <form class="tcg-form" onSubmit={handleSubmit}>
                    <h1 className='form-group-title'>A. Student Details</h1>
                    <div class="form-row">
                        <div class="col-md-3 mb-2">     
                            <label for="studentLastName">Last Name</label>
                            <input type="text" class="form-control" id="studentLastName" name="last_name"  onChange={(e) => handleChange(e)} defaultValue={savedDetails.last_name} key={savedDetails.last_name}/>
                        </div>
                        <div class="col-md-3 mb-2">     
                            <label for="studentFirstName">First Name</label>
                            <input type="text" class="form-control" id="studentFirstName" name="first_name"  onChange={(e) => handleChange(e)} defaultValue={savedDetails.first_name} key={savedDetails.first_name} />
                        </div>
                        <div class="col-md-2 mb-2">     
                            <label for="studentMiddleInitial">Middle Initial</label>
                            <input type="text" class="form-control" id="studentMiddleInitial" name="middle_initial"  onChange={(e) => handleChange(e)} defaultValue={savedDetails.middle_initial} key={savedDetails.middle_initial}/>
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="studentNumber">Student Number</label>
                            <input type="text" class="form-control" id="studentNumber" name="student_number" onChange={(e) => handleChange(e)} defaultValue={savedDetails.student_number} key={savedDetails.student_number}/>
                        </div>
                    </div>
                    <div class="form-row">
                    <div class="col-md-6 mb-2">
                        <label for="degreeProgram">Degree Program</label>
                            <select class="custom-select" id='degreeProgram' name="degree_program" defaultValue={savedDetails.degree_program}  key={savedDetails.degree_program} onChange={(e) => handleChange(e)} >
                                <option selected defaultValue={savedDetails.degree_program}> </option>
                                <option value="BS Computer Science">BS Computer Science</option>
                                <option value="BS Biology">BS Biology</option>
                                <option value="BS Mathematics">BS Mathematics</option>
                                <option value="BS Statistics">BS Statistics</option>
                            </select>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="yearLevel">Year Level</label>
                            <input type="number" min='1' max='6' class="form-control" id="yearLevel" name="year_level"  onChange={(e) => handleChange(e)} defaultValue={savedDetails.year_level} key={savedDetails.year_level}/>
                        </div>
                    </div>
                    <h1 className='form-group-title'>B. Request Details</h1>
                    <div class="form-row">
                        <div class="col-md-4 mb-2">     
                            <label for="academicYear">Subject Dropped</label>
                            <input type="text" class="form-control" id="academicYear" name="subject_dropped"  onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="semester">Section</label>
                            <input type="text" class="form-control" id="section" name="section"  onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="copies">Instructor's Name</label>
                            <input type="text" class="form-control" id="instructorName" name="instructor_name"  onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <div class="form-row">
                    <div class="col-md-12 mb-2">
                            <label for="copies">Reason</label>
                            <input type="text" class="form-control" id="purpose" name="purpose"  onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>

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
                        <button class="btn btn-primary" type="submit" onClick={navigateLanding}>Cancel</button>
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



export default Form6;



