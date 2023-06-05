import { useEffect, useState } from "react";
import './Register.css';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';
import CancelModal from '../../Components/Modal/Cancel Modal';
import SubmitModal from '../../Components/Modal/Submit Modal';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = ({children}) => {
    const [image, setImage] = useState()
    const [price, setPrice] = useState(50);
    const [email, setEmail] = useState("");
    const [id, setID] = useState(0);
    const [userDetails, setUserDetails] = useState({
        last_name: "",
        first_name: "",
        middle_initial: "",
        student_number: "",
        degree_program: "",
    });

    async function decodeToken() {
        var token = localStorage.getItem("token")

        var data = jwt_decode(token.toString())
        getUserID(data.email.toString())
    }

    useEffect (() =>{
        decodeToken()
        }, [])
    

    const getUserID = async(email) => {
        const response = await axios.get('http://localhost:5000/id_api/student_id/' + email)
        setID(response.data[0].user_id)
    }

    async function postUpdate(data) {
        console.log(data)
        const response = await axios.put('http://localhost:5000/login_api/updateDetails',{
            user_id: id,
            first_name: data.first_name,
            last_name: data.last_name,
            middle_initial: data.middle_initial,
            degree_program: data.degree_program,
            student_number: data.student_number,
            registered: 1,
        })

        console.log("heh")

        // navigateLanding()
    }


    const navigate = useNavigate();

    const navigateLanding = () => navigate('/student');
    
    const handleChange = (e) => {
        const { name, value } = e.target;
            setUserDetails(prevState => ({
                ...prevState,
                [name]: value
                }));
    }

    async function proceed(){
        postUpdate(userDetails)
    }

    return(
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/> 
            <NavBar/>
            <div className="header-form">
                <Header/>
            </div>
            <Container>
                <div className="form-title">&nbsp;</div>
                <div className="form-title">
                    Registration Form
                </div>
                <form class="registration-form" >
                    <div className='form-subtitle-1'>Welcome to the <b>Automated Request System</b>! Before you start requesting transactions, kindly fill in your necessary information in the text fields below. These information will be used to automatically fill in some of the required fields during the transaction process.</div>
                    <div className='form-subtitle-1'>&nbsp;</div>

                    <h1 className='form-group-title'>Personal Information</h1>
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
                    </div>
                    <h1 className='form-group-title'>&nbsp;</h1>
                    <h1 className='form-group-title'>Academic Information</h1>
                    <div class="form-row">
                        <div class="col-md-3 mb-2">
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
                        {/* <div class="col-md-2 mb-2">
                            <label for="yearLevel">Year Level</label>
                            <input type="number" min='1' max='6' class="form-control" id="yearLevel" name="year_level" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="emailAddress">Email Address</label>
                            <input type="email" class="form-control" id="emailAddress" name="email" onChange={(e) => handleChange(e)}/>
                        </div> */}
                    </div>
                    <h1 className='form-group-title'>&nbsp;</h1>
                    <h1 className='form-group-title'>Note:</h1>
                    <div className='form-subtitle-1'>Make sure that the information provided is correct as it will be used by the College of Science - Office of the College Secretary for future references.</div>
                    <div className='form-subtitle-1'>By proceeding, you hereby approve that the provided information will be saved and used in your form transactions.</div>
                </form>
                
                <div className="form-buttons-container">
                    <div className="submit-button">
                        <button class="btn btn-primary" onClick={() => proceed()}>Proceed</button> 
                    </div>
                </div>
                <div className="form-title">&nbsp;</div>
            </Container>

            <Footer/>

        </div>
    )
}



export default Register;