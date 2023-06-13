import { useEffect, useState } from "react";
import './Forms.css';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';
// import CancelModal from '../../Components/Modal/Cancel Modal';
import SubmitModal from '../../Components/Modal/Submit Modal';
//import { fontSize } from '@mui/system';
import { addFormInformation } from './Forms API Call';
// import { uploadImage } from "./Upload Image";
import { useNavigate } from "react-router-dom";
import axios from "axios";



// Overload
const Form5 = ({ userId }) => {
    const [image, setImage] = useState()

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
            form_id: 5,
            last_name: (savedDetails.last_name) ? savedDetails.last_name : "",
            first_name: (savedDetails.first_name) ? savedDetails.first_name : "",
            middle_initial: (savedDetails.middle_initial) ? savedDetails.middle_initial : "",
            student_number: (savedDetails.student_number) ? savedDetails.student_number : "",
            mobile_number: (savedDetails.mobile_number) ? savedDetails.mobile_number : "",
            year_level: (savedDetails.year_level) ? savedDetails.year_level : "",
            degree_program: (savedDetails.degree_program) ? savedDetails.degree_program : "",
        })
        console.log(formDetails)
    },[savedDetails])


    const [formDetails, setFormDetails] = useState({
        user_id:  userId.toString(),
        form_id: 5,
        remarks: null,
        student_id: 1,
        last_name: "",
        first_name: "",
        middle_initial: "",
        student_number: "",
        mobile_number: "",
        year_level: "",
        degree_program: "",
        units: "",
        academic_year: "",
        semester: "",
        last_sem: "",
        reason: "121212",
        subjects: {},
        units_per_subject: {},
    });

    const navigate = useNavigate();
    
    const navigateLanding = () => navigate('/student');
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails(prevState => ({
            ...prevState,
            [name]: value
        }))
        
        console.log(formDetails);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [isCancelOpen, setIsCancelOpen] = useState(false);

    async function addInfo() {


        if (!formValid()) {
            return;
        }

        const formData = new FormData();
        formData.append('image', image);
        formData.append('user_id', userId);
        console.log (formDetails);
        const response = await addFormInformation(formDetails);
        formData.append('id', response.data)
        console.log(response.data)
        setIsOpen(false);
        navigateLanding();
    }

    // const pdfHandler = (e) => {
    //     const file = e.target.files[0];
    //     console.log(file)
    //     setImage(file)
    // }
    
    const formValid = () => {
        const {
          last_name,
          first_name,
          student_number,
          year_level,
          degree_program,
          units,
          academic_year,
          semester,
          last_sem,
          reason,
        //   subjects,
        //   units_per_subject
        } = formDetails;
      
        const unfilledFields = [];
      
        if (!last_name) {
          unfilledFields.push("Last Name");
        }
        if (!first_name) {
          unfilledFields.push("First Name");
        }
        if (!student_number) {
          unfilledFields.push("Student Number");
        }
        if (!year_level) {
          unfilledFields.push("Year Level");
        }
        if (!degree_program) {
          unfilledFields.push("Degree Program");
        }
        if (!units) {
          unfilledFields.push("Units");
        }
        if (!academic_year) {
          unfilledFields.push("Academic Year");
        }
        if (!semester) {
          unfilledFields.push("Semester");
        }
        if (!last_sem) {
          unfilledFields.push("Last Semester");
        }
        if (!reason) {
          unfilledFields.push("Reason");
        }
        // if (!subjects) {
        //   unfilledFields.push("Subjects");
        // }
        // if (!units_per_subject) {
        //   unfilledFields.push("Units per Subject");
        // }
      
        if (unfilledFields.length > 0) {
          const unfilledFieldsList = unfilledFields.join(", ");
          alert(`Please fill in the following fields: ${unfilledFieldsList}`);
          return false;
        }
      
        if (isNaN(student_number)) {
          alert("Student number and mobile number must be integers.");
          return;
        }
      
        return true;
      };
      

    const pdfHandler = (e) => {
        const file = e.target.files[0];
        setImage(file);
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
    {console.log(savedDetails.degree_program)}

    return(
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/> 
            <NavBar/>
            <div className="header-form">
                <Header/>
            </div>
            <Container>
                <div className="form-title">
                    Request for Overload
                </div>
                <form class="tcg-form" onSubmit={handleSubmit}>
                    <h1 className='form-group-title'>A. Student Details</h1>
                    <div class="form-row">
                        <div class="col-md-3 mb-2">     
                            <label for="studentLastName">Last Name</label>
                            <input type="text" class="form-control" id="studentLastName" name="last_name" onChange={(e) => handleChange(e)} defaultValue={savedDetails.last_name} key={savedDetails.last_name}/>
                        </div>
                        <div class="col-md-3 mb-2">     
                            <label for="studentFirstName">First Name</label>
                            <input type="text" class="form-control" id="studentFirstName" name="first_name" onChange={(e) => handleChange(e)} defaultValue={savedDetails.first_name} key={savedDetails.first_name}/>
                        </div>
                        <div class="col-md-2 mb-2">     
                            <label for="studentMiddleInitial">Middle Initial</label>
                            <input type="text" class="form-control" id="studentMiddleInitial" name="middle_initial" onChange={(e) => handleChange(e)} defaultValue={savedDetails.middle_initial} key={savedDetails.middle_initial}/>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="studentNumber">Student Number</label>
                            <input type="text" class="form-control" id="studentNumber" name= "student_number" onChange={(e) => handleChange(e)} defaultValue={savedDetails.student_number} key={savedDetails.student_number}/>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="mobileNumber">Mobile Number</label>
                            <input type="text" class="form-control" id="mobileNumber" name="mobile_number" onChange={(e) => handleChange(e)} defaultValue={savedDetails.mobile_number} key={savedDetails.mobile_number}/>
                        </div>
                    </div>
                    <div class="form-row">
                    <div class="col-md-6 mb-2">
                        <label for="degreeProgram">Degree Program</label>
                            <select class="custom-select" id='degreeProgram' name="degree_program" defaultValue={savedDetails.degree_program}  key={savedDetails.degree_program} onChange={(e) => handleChange(e)}>
                                <option selected defaultValue={savedDetails.degree_program}> </option>
                                <option value="BS Computer Science">BS Computer Science</option>
                                <option value="BS Biology">BS Biology</option>
                                <option value="BS Mathematics">BS Mathematics</option>
                                <option value="BS Statistics">BS Statistics</option>
                            </select>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="yearLevel">Year Level</label>
                            <input type="number" min='1' max='6' class="form-control" id="yearLevel" name="year_level" onChange={(e) => handleChange(e)} defaultValue={savedDetails.year_level} key={savedDetails.year_level}/>
                        </div>
                    </div>
                    <h1 className='form-group-title'>B. Request Details</h1>
                    <div class="form-row">
                        <div class="form-text">I am a graduating student and I would like to request for an overload of</div>
                        <div class="col-md-3 mb-1">     
                            <input type="text" class="form-control" id="units" name="units" onChange={(e) => handleChange(e)}/>
                        </div>        
                    </div>


                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="sem">Semester</label>
                                <input type="text" class="form-control" id="semester" name="semester" onChange={(e) => handleChange(e)}/>
                            </div>
                            <div class="form-group">
                                <label for="acadYear">Academic Year</label>
                                <input type="text" class="form-control" id="academicYear" name="academic_year" onChange={(e) => handleChange(e)}/>
                            </div>
                            <div class="form-group">
                                <label for="lastSem">Status of Last Semester Enrolled</label>
                                <input type="text" class="form-control" id="lastSem" name="last_sem" onChange={(e) => handleChange(e)}/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="reason">Reason</label>
                                <textarea class="form-control" id="reason" rows="8" name="reason" onChange={(e) => handleChange(e)}></textarea>
                            </div>
                        </div>
                    </div>
                    {/* <div class="form-row">
                        <div class="col-md-4 mb-2">
                            <label for="sem">Semester</label>
                                <input type="text" class="form-control" id="sem"/>
                            </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-4 mb-2">
                            <label for="acadYear">Academic Year</label>
                            <input type="text"  class="form-control" id="acadYear"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-4 mb-2">
                            <label for="lastSem">Status of Last Semester Enrolled</label>
                            <input type="text"  class="form-control" id="lastSem"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-4 mb-2">
                            <label for="reason">Reason</label>
                            <textarea class="form-control" id="reason" cols="30" rows="10"/>
                        </div>
                    </div> */}
                    <div className="form-text">The subjects I intend to enroll in are: (include non-academic subjects such as PE, NSTP)</div>
                    <br></br>
                    <label for="">Subjects</label>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" id="subject1" name="subject_1" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="subject2" name="subject_2" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="subject3" name="subject_3" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="subject4" name="subject_4" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="subject5" name="subject_5" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="subject6" name="subject_6" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="subject7" name="subject_7" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="subject8" name="subject_8" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="subject9" name="subject_9" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="subject10" name="subject_10" onChange={(e) => handleChange(e)}/>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <input type="text" class="form-control" id="unit1" name="unit_1" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="unit2" name="unit_2" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="unit3" name="unit_3" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="unit4" name="unit_4" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="unit5" name="unit_5" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="unit6" name="unit_6" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="unit7" name="unit_7" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="unit8" name="unit_8" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="unit9" name="unit_9" onChange={(e) => handleChange(e)}/>
                                <input type="text" class="form-control" id="unit10" name="unit_10" onChange={(e) => handleChange(e)}/>
                            </div>
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



export default Form5;



