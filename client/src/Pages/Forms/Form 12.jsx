import React from 'react';
import './Forms.css';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';
import { fontSize } from '@mui/system';


// Overload
const Form12 = ({children}) => {

    return(
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/> 
            <NavBar/>
            <Header/>
            <Container>
                <div className="form-title">
                    Request for Overload
                </div>
                <form class="tcg-form" >
                    <h1 className='form-group-title'>A. Student Details</h1>
                    <div class="form-row">
                        <div class="col-md-8 mb-2">     
                            <label for="studentName">Name (Last Name, First Name, Middle Initial)</label>
                            <input type="text" class="form-control" id="studentName"    />
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="studentNumber">Student Number</label>
                            <input type="text" class="form-control" id="studentNumber"/>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="date">Date</label>
                            <input type="date" class="form-control" id="date"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-2">
                            <label for="degreeProgram">Degree Program</label>
                            <input type="text" class="form-control" id="degreeProgram"/>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="yearLevel">Year Level</label>
                            <input type="number" min='1' max='6' class="form-control" id="yearLevel"/>
                        </div>
                    </div>
                    <h1 className='form-group-title'>B. Request Details</h1>
                    <div class="form-row">
                        <div class="form-text">I am a graduating student and I would like to request for an overload of</div>
                        <div class="col-md-3 mb-1">     
                            <input type="text" class="form-control" id="units"    />
                        </div>
                        
                    </div>


                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="sem">Semester</label>
                                <input type="text" class="form-control" id="sem"/>
                            </div>
                            <div class="form-group">
                                <label for="acadYear">Academic Year</label>
                                <input type="text" class="form-control" id="acadYear"/>
                            </div>
                            <div class="form-group">
                                <label for="lastSem">Status of Last Semester Enrolled</label>
                                <input type="text" class="form-control" id="lastSem"/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="reason">Reason</label>
                                <textarea class="form-control" id="reason" rows="8"></textarea>
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
                                <input type="text" class="form-control" id="subject1"/>
                                <input type="text" class="form-control" id="subject2"/>
                                <input type="text" class="form-control" id="subject3"/>
                                <input type="text" class="form-control" id="subject4"/>
                                <input type="text" class="form-control" id="subject5"/>
                                <input type="text" class="form-control" id="subject6"/>
                                <input type="text" class="form-control" id="subject7"/>
                                <input type="text" class="form-control" id="subject8"/>
                                <input type="text" class="form-control" id="subject9"/>
                                <input type="text" class="form-control" id="subject10"/>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <input type="text" class="form-control" id="unit1"/>
                                <input type="text" class="form-control" id="unit2"/>
                                <input type="text" class="form-control" id="unit3"/>
                                <input type="text" class="form-control" id="unit4"/>
                                <input type="text" class="form-control" id="unit5"/>
                                <input type="text" class="form-control" id="unit6"/>
                                <input type="text" class="form-control" id="unit7"/>
                                <input type="text" class="form-control" id="unit8"/>
                                <input type="text" class="form-control" id="unit9"/>
                                <input type="text" class="form-control" id="unit10"/>
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
                    <div className="form-buttons-container">
                        <div className="cancel-button">
                            <button class="btn btn-primary" type="submit">Cancel</button>
                        </div>
                        <div className="submit-button">
                            <button class="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </Container>
            <Footer/>
        </div>
    )
}



export default Form12;



