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

// Removal of Incomplete or 4.0s
const Form12 = ({userId}) => {
    const [formDetails, setFormDetails] = useState({
        user_id: userId,
        form_id: 12,
        remarks: null,
        student_id: 1,
        last_name: "",
        first_name: "",
        middle_initial: "",
        student_number: "",
        degree_program: "",
        year_level: "",
        //
        course_description_title: "",
        course_num_section: "",
        instructor_name: "",
        //
        course_description_title: "",
        course_num_section: "",
        units_per_subject: "",
        original_grade: "",
        semester: "",
        academic_year_incurred: "",
        date_completion: "",
        removal_grade: ""
    });

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
            middle_initial,
            student_number,
            degree_program,
            year_level,
            course_description_title,
            course_num_section,
            instructor_name,
            units_per_subject,
            original_grade,
            semester,
            academic_year_incurred,
            date_completion,
            removal_grade
        } = formDetails;
    
        if (
            !last_name ||
            !first_name ||
            !middle_initial ||
            !student_number ||
            !degree_program ||
            !year_level ||
            !course_description_title ||
            !course_num_section ||
            !instructor_name ||
            !course_description_title ||
            !course_num_section ||
            !units_per_subject ||
            !original_grade ||
            !semester ||
            !academic_year_incurred ||
            !date_completion ||
            !removal_grade
        ){
            // Form validation failed
            alert("Please fill in all fields");
            return false;
        }
        
    
        if (isNaN(student_number)) {
            alert("Student number must be an integer.");
            return false;
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
                Removal of Incomplete or 4.0s
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
                        <div class="col-md-4 mb-2">
                            <label for="studentNumber">Student Number</label>
                            <input type="text" class="form-control" id="studentNumber" name="student_number" onChange={(e) => handleChange(e)}/>
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
                    </div>
                    <h1 className='form-group-title'>B. Request Details</h1>
                    <div className="green-label">Upload your Form 26A or PERMIT FOR REMOVAL OF INCOMPLETE/4.0</div>
                    <div className="request-price-container">
                        <div className="column-2">
                            <div class="form-group">
                                <input type="file" class="form-control-file" id="paymentProof"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-2">     
                            <label for="academicYear">Course Description and Title</label>
                            <input type="text" class="form-control" id="courseTitle" name="course_description_title" onChange={(e) => handleChange(e)} />
                        </div>
                        <div class="col-md-3 mb-2">
                            <label for="semester">Course No. and Section</label>
                            <input type="text" class="form-control" id="courseNumber" name="course_num_section" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-3 mb-2">
                            <label for="copies">Units</label>
                            <input type="text" class="form-control" id="units" name="units_per_subject" onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-3 mb-2">     
                            <label for="academicYear">Original Grade</label>
                            <input type="text" class="form-control" id="originalGrade" name="original_grade" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-3 mb-2">
                            <label for="semester">Semester Incurred</label>
                            <input type="text" class="form-control" id="semIncurred" name="semester" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-3 mb-2">
                            <label for="copies">Academic Year Incurred</label>
                            <input type="text" class="form-control" id="acadYRIncurred" name="academic_year_incurred" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-3 mb-2">
                            <label for="copies">Date</label>
                            <input type="text" class="form-control" id="date" name="date_completion" onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-2">     
                            <label for="academicYear">Completion/Removal Grade</label>
                            <input type="text" class="form-control" id="removalGrade" name="removal_grade" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-6 mb-2">
                            <label for="semester">Instructor Name</label>
                            <input type="text" class="form-control" id="profName" name="instructor_name" onChange={(e) => handleChange(e)}/>
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



export default Form12;



