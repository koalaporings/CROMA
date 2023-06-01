import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import './Forms.css';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';
import CancelModal from '../../Components/Modal/Cancel Modal';
import SubmitModal from '../../Components/Modal/Submit Modal';
import { fontSize } from '@mui/system';
import { uploadPdf } from "./Upload Pdf";
import { addFormInformation } from "./Forms API Call";


// Transfer from other schools or UP Units to Cebu
const Form7 = ({children}) => {

    const navigate = useNavigate();
    const classOfferingForm = () => window.location.href = 'https://our.upcebu.edu.ph/wp-content/uploads/2020/05/UPC-FORM-3.1-Application-for-Transfer-from-Other-Schools-or-UP-Units.pdf';
    const [isOpen, setIsOpen] = useState(false);
    const [pdf, setPdf] = useState()
    const [formDetails, setFormDetails] = useState({
            user_id: 4,
            form_id: 7,
        });
    
    
        const navigateLanding = () => navigate('/student');     
    
        async function addInfo() {
            // setIsClicked(true);
            const formData = new FormData()
            formData.append('pdf', pdf)
            formData.append('user_id', formDetails.user_id)
            const response = addFormInformation(formDetails);
            uploadPdf(formData)
            console.log(response)
            setIsOpen(false)
            navigateLanding()
    
        }
    
        const pdfHandler = (e) => {
            const file = e.target.files[0];
            console.log(file)
            setPdf(file)
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
                    Transfer from other schools or UP Units to Cebu
                </div>
                <form class="tcg-form" >
                    <h1 className='form-group-title'>A. Request Details</h1>
                    <div className="form-description-text">
                            <p className='form-description-text -1'>Applicants shall have completed, outside the University, at least thirty-three (33) academic units and must have a general weighted average of at least 2.0 or better for all the collegiate academic units taken outside of UP.</p>
                            <p className='form-description-text -2'>Kindly download and fill up this form: </p>                     
                     </div>
                     <div>
                        <p className='download-form' onClick={classOfferingForm} >APPLICATION FORM FOR TRANSFER FROM OTHER SCHOOL(S)/OTHER UP UNIT(S)  </p>                     
                     </div>

                     <div className="form-description-text">
                            <p className='form-description-text-3'>Upload the filled up request form here: </p>                     
                     </div>


                    <div className="upload">
                        <div class="form-group">
                            <input type="file" class="form-control-file" id="paymentProof" name="pdf" accept="application/pdf" multiple={false} onChange={pdfHandler}/>
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
                        {isOpen && <CancelModal setIsOpen={setIsOpen} />}
                    </div>
                    <div className="submit-button">
                        <button class="btn btn-primary" onClick={() => setIsOpen(true)}>Submit</button> 
                        {isOpen && <SubmitModal setIsOpen={setIsOpen} action={addInfo} />}
                    </div> 
                </div> 
            </Container>
            <Footer/>
        </div>
    )
}



export default Form7;



