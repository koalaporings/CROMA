import React from 'react';
import './Forms.css';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';
import { fontSize } from '@mui/system';


// Removal of Incomplete or 4.0s
const Form15 = ({children}) => {

    return(
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/> 
            <NavBar/>
            <Header/>
            <Container>
                <div className="form-title">
                Removal of Incomplete or 4.0s
                </div>
                <form class="tcg-form" >
                    <h1 className='form-group-title'>A. Student Details</h1>
                    <div class="form-row">
                        <div class="col-md-8 mb-2">     
                            <label for="studentName">Name (Last Name, First Name, Middle Initial)</label>
                            <input type="text" class="form-control" id="studentName"    />
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="studentNumber">Student Number</label>
                            <input type="text" class="form-control" id="studentNumber"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-2">
                            <label for="degreeProgram">Degree Program</label>
                            <input type="text" class="form-control" id="degreeProgram"/>
                        </div>
                        <div class="col-md-6 mb-2">
                            <label for="yearLevel">Year Level</label>
                            <input type="number" min='1' max='6' class="form-control" id="yearLevel"/>
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
                            <input type="text" class="form-control" id="courseTitle"    />
                        </div>
                        <div class="col-md-3 mb-2">
                            <label for="semester">Course No. and Section</label>
                            <input type="text" class="form-control" id="courseNumber"/>
                        </div>
                        <div class="col-md-3 mb-2">
                            <label for="copies">Units</label>
                            <input type="text" class="form-control" id="units"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-3 mb-2">     
                            <label for="academicYear">Original Grade</label>
                            <input type="text" class="form-control" id="originalGrade"    />
                        </div>
                        <div class="col-md-3 mb-2">
                            <label for="semester">Semester Incurred</label>
                            <input type="text" class="form-control" id="semIncurred"/>
                        </div>
                        <div class="col-md-3 mb-2">
                            <label for="copies">Academic Year Incurred</label>
                            <input type="text" class="form-control" id="acadYRIncurred"/>
                        </div>
                        <div class="col-md-3 mb-2">
                            <label for="copies">Date</label>
                            <input type="text" class="form-control" id="date"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-2">     
                            <label for="academicYear">Completion/Removal Grade</label>
                            <input type="text" class="form-control" id="removalGrade"    />
                        </div>
                        <div class="col-md-6 mb-2">
                            <label for="semester">Instructor Name</label>
                            <input type="text" class="form-control" id="profName"/>
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



export default Form15;



