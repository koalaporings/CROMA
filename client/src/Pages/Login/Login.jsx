import React from 'react';
import {useNavigate} from 'react-router-dom';

import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Footer from '../../Components/Footer/Footer';
import './Login.css';
import coslogo from '../../Assets/cos-logo.png';
import loginBackground from '../../Assets/login-background.png';
import loginBackground1 from '../../Assets/login-background-1.png';
import loginIcon from '../../Assets/login-icon.svg';
import googleIcon from '../../Assets/google-icon.svg';
import globeIcon from '../../Assets/globe-icon.svg';
import facebookIcon from '../../Assets/facebook-icon.svg';
import telephoneIcon from '../../Assets/telephone-icon.svg';
import envelopeIcon from '../../Assets/envelope-icon.svg';


const Login = (props) => {

  const navigate = useNavigate();

  const [user, setUser] = useState({})
  
  async function handleCallbackResponse(response) {
      console.log("Encoded JWT ID token: " + response.credential)
      sessionStorage.setItem("token",response.credential)
      var userObject = jwt_decode(response.credential)
      
      if (userObject.hd !== 'up.edu.ph'){
        setUser({})
        sessionStorage.removeItem("token")
        alert('Incorrect email domain. Try again with the correct email with the correct domain')
        google.accounts.id.prompt()
      }
      else{
        sessionStorage.setItem("name", userObject.given_name)
        signIn(userObject)
        // const response1 = await axios.get('http://localhost:5000/login_api/getRole/' + userObject.email)
        // console.log(response1)
        // sessionStorage.setItem("role", response1.data[0].role)
        // const responses = await axios.get('http://localhost:5000/id_api/student_id/' + userObject.email)
        // console.log(responses)
        // sessionStorage.setItem("id", responses.data[0].user_id)
        
      }
    }


    useEffect(() => {
      /* global google */
      
      google.accounts.id.initialize({
        client_id: '830758545948-5ubqnng9697rv0hkdcd310klbfbbgar3.apps.googleusercontent.com',
        callback: handleCallbackResponse
      });
      google.accounts.id.renderButton(
        document.getElementById('googleLogin'),{
          type: "standard", theme: "filled_black", size: "large", shape: "pill", logo_alignment: "left", text: "continue_with" 
        }
        
      )
  
      google.accounts.id.prompt()
    },[])

    const signIn = async (user) => {
      console.log(user.email)
      sessionStorage.setItem("email", user.email)
      axios.post('http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/login_api/checkUser', {
        email: user.email
      }).then((response) => {
        console.log(response)
      })
      const response1 = await axios.get('http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/login_api/getRole/' + user.email)
        console.log(response1)
        console.log("yes")
        sessionStorage.setItem("role", response1.data[0].role)
        console.log(response1.data[0].role)
      if(response1.data[0].role !== 'admin'){
        const responses = await axios.get('http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/id_api/student_id/' + user.email)
        console.log(responses)
        sessionStorage.setItem("id", responses.data[0].user_id)
        props.fetchData(response1.data[0].role)
        navigateLogin(response1.data[0].role)
        // window.role = response1.data[0].role
      }else {
        props.fetchData(response1.data[0].role)
        navigateLogin(response1.data[0].role)
      }

        
    }

  // TEMPORARY

  const navigateLogin = (role) => navigate('/'+role);

    return(
      <div>
        <div className="login-container">
          <div className="login-body-container">
              <img alt="login-bg-1" src={loginBackground} className="login-bg-1"/>
              <div className="login-content-container">
                <img alt="cos-logo"
                src={coslogo}
                className="cos-logo"/>
                <div>
                    <h1 className='welcome-text-1'>Welcome to the COS-OCS</h1>
                    <h1 className='welcome-text-2'>Automated Request System</h1>
                </div>
                <div className="login-form-container-1">
                  <div className="login-form-container-2">
                    <div className="login-top">
                      <div className="login-top-1">
                        <img alt="login-icon"
                        src={loginIcon}
                        className="login-icon"/>
                        <div className='login-text-1'>
                        LOG IN</div>
                      </div>
                      <div className="login-top-2">
                        <div className='login-text-2'>
                        Submit formal requests and track them online</div>
                      </div>
                    </div>
                    <div className="login-bottom" >
                          {/* <button type="button" className='login-button-container' >
                            <img alt="login-button-icon"
                            src={googleIcon}
                            className="login-button-icon"/>
                            Log-in using UP Mail
                          </button> */}
                          <div id='googleLogin' className='googleLogin'></div>

                      <div className='login-text-3'> If you encounter any problems with logging in through your UP Mail, send a message to ocs_cos.upcebu@up.edu.ph</div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="footer-login">
          <div className='footer-component-container'>
                <div className="frow-1">
                    <div className="fcol-1">
                        <div className="col-1-container">
                            <p className='footer-component-text-1'>UNIVERSITY OF THE PHILIPPINES - CEBU</p>
                            <p className='footer-component-text-2'>COLLEGE OF SCIENCE</p>
                            <p className='footer-component-text-3'>OFFICE OF THE COLLEGE SECRETARY</p>
                        </div>
                    </div>
                    <div className="fcol-2">
                        <p className='footer-component-text-5'>Follow us:</p>
                        <div className="media-logo-container">
                            <img alt="footer-component-icon-1"
                                src={facebookIcon}
                                className="footer-component-icon-1"/>
                            <img alt="footer-component-icon-2"
                                src={globeIcon}
                                className="footer-component-icon-2"/>
                        </div>
                    </div>
                    <div className="fcol-3">
                        <p className='footer-component-text-6'>Contact us:</p>
                        <div className="contact-container-1">
                            <img alt="footer-component-icon-3"
                            src={telephoneIcon}
                            className="footer-component-icon-3"/>
                            <p className='footer-component-text-7'>232 8185 / 232 8187</p>
                        </div>
                        <div className="contact-container-2">
                            <img alt="footer-component-icon-4"
                            src={envelopeIcon}
                            className="footer-component-icon-4"/>
                            <p className='footer-component-text-8'>ocs_cos.upcebu@up.edu.ph</p>     
                        </div>
                    </div>    
                </div>
                <div className="frow-2">
                    <p className='footer-component-text-4'>© 2022 OCS-ARS. All rights reserved.</p>
                </div>
            </div>
          </div>
        </div>
      </div>  
    )
}

export default Login;