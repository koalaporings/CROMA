import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import './Forms.css';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';
// import CancelModal from '../../Components/Modal/Cancel Modal';
import SubmitModal from '../../Components/Modal/Submit Modal';
import { fontSize } from '@mui/system';
import { uploadPdf } from "./Upload Pdf";
import { addFormInformation } from "./Forms API Call";
import axios from "axios";


// Change in Class Offering
const Form16 = ({userId}) => {

    const navigate = useNavigate();
    const classOfferingForm = () => window.location.href = 'https://our.upcebu.edu.ph/wp-content/uploads/2022/02/UPC-FORM-Request-for-Change-in-Class-Offerings-Fillable.pdf';
    const [isOpen, setIsOpen] = useState(false);
  
    const [pdf, setPdf] = useState(null);
    const [formDetails, setFormDetails] = useState({
    });

    useEffect(() => {
        async function getDetails(data){
            const response = await axios.get('http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/student_api/getDetails/'+ data)
            console.log(response.data[0])
            setFormDetails({
                user_id: userId,
                form_id: 16,
                first_name: response.data[0].first_name,
                last_name: response.data[0].last_name,
                middle_initial: response.data[0].middle_initial,
                student_number: response.data[0].student_number,
                mobile_number: response.data[0].mobile_number,
                year_level: response.data[0].year_level,
                degree_program: response.data[0].degree_program,
                email: response.data[0].email
            })
        }

        getDetails(userId)
    },[])
  
    const navigateLanding = () => navigate('/student');
  
    async function addInfo (e) {
      e.preventDefault(); // Prevent form submission
      if (pdf) {
        const formData = new FormData();
        formData.append('pdf', pdf);
        const response = await addFormInformation(formDetails);
        formData.append('id', response.data)
        uploadPdf(formData);
        console.log(response);
        setIsOpen(false);
        navigateLanding();
      } else {
        // Show an alert if no file is uploaded
        alert('Please upload a file.');
      }
    }
  
    const pdfHandler = (e) => {
      const file = e.target.files[0];
      console.log(file);
      setPdf(file);
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
                    Change in Class Offering
                </div>
                <form class="tcg-form" onSubmit={addInfo}>
                    <h1 className='form-group-title'>A. Request Details</h1>
                    <div className="form-description-text">
                            <p className='form-description-text -1'>Once pre-enlistment has started, any changes made to the class offerings for the specified term, would require a written request with approval.</p>
                            <p className='form-description-text -2'>Kindly download and fill up this form: </p>                     
                     </div>
                     <div>
                        <p className='download-form' onClick={classOfferingForm} >REQUEST FOR CHANGE IN CLASS OFFERINGS  </p>                     
                     </div>


                    <div className="upload">
                        <div class="form-group">
                            <input type="file" class="form-control-file" id="paymentProof" name="pdf" accept="pdf" multiple={false} onChange={pdfHandler}/>
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
                        {isOpen && <SubmitModal setIsOpen={setIsOpen} action={addInfo} />}
                    </div> 
                </div>
            </Container>
            <Footer/>
        </div>
    )
}



export default Form16;



