import React from 'react';
import {useNavigate} from 'react-router-dom';

import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

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




const Login = ({children}) => {

    const navigate = useNavigate();

    const [user, setUser] = useState({})
    
    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential)
        localStorage.setItem("token",response.credential)
        var userObject = jwt_decode(response.credential)
        if (userObject.hd !== 'up.edu.ph'){
          setUser({})
          localStorage.removeItem("token")
          alert('Incorrect email doman. Try again with the correct email with the correct domain')
          google.accounts.id.prompt()
        }
        else{
          signIn(userObject)
          console.log(userObject.email)
          setUser(userObject)
          navigateLogin()
        }
      }

      useEffect(() => {
        /* global google */
        
        google.accounts.id.initialize({
          client_id: '830758545948-5ubqnng9697rv0hkdcd310klbfbbgar3.apps.googleusercontent.com',
          callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          {theme: "outline", size: "large "}
        )
    
        google.accounts.id.prompt()
      },[])

      const signIn = async (user) => {
        console.log(user.email)
        axios.post('http://localhost:5000/login_api/checkUser', {
          email: user.email
        }).then((response) => {
          console.log(response)
        })
      }

    // TEMPORARY

    const navigateLogin = () => navigate('/student');

    return(
        <div>

            <div className='login-background'>
                <img alt="login-bg-1"
                src={loginBackground}
                className="login-bg-1"/>
            </div>

            <div className = 'login-container'>
                <img alt="cos-logo"
                src={coslogo}
                className="cos-logo"/>

                <img alt="login-bg-2"
                src={loginBackground1}
                className="login-bg-2"/>

                <div>
                    <span className='welcome-text-1'>Welcome to the COS-OCS</span>
                    <span className='welcome-text-2'>Automated Request System</span>
                </div>

                <div className = 'login-box-top'>
                    <img alt="login-icon"
                    src={loginIcon}
                    className="login-icon"/>
                    <span className='login-text-1' style={{
                    color: 'white',
                    fontSize: '3vh',
                    display: 'inline'}}> 
                    LOG IN</span>
                    
                    <span className='login-text-2' style={{
                    color: 'white',
                    fontSize: '1.75vh',
                    display: 'inline'}}> 
                    Submit formal requests and track them online</span>
                </div>

                <div className='login-box-bottom'>

                    <div type="button" className='login-button-container'>
                        <img alt="login-button-icon"
                        src={googleIcon}
                        className="login-button-icon"/>

                        <text className='login-button-text'>Log-in using UP Mail</text>

                        <button type="button" className='login-button' onClick={navigateLogin}>
                        </button>
                    </div>

                    {/* <img alt="login-button-icon"
                    src={googleIcon}
                    className="login-button-icon"/>

                    <text className='login-button-text'>Log-in using UP Mail</text>

                    <button type="button" className='login-button' onClick={navigateLogin}>
                    </button> */}

                    <span className='login-text-2'
                    style={{
                        color: 'black',
                        fontSize: '1.75vh',
                        display: 'inline'}}> If you encounter any problems with logging in through your UP Mail, send a message to loremipsum.com</span>
                </div>

            </div>

            <div className='footer-container1'>
                    <p className='login-footer-text-1'>UNIVERSITY OF THE PHILIPPINES - CEBU</p>
                    <p className='login-footer-text-2'>COLLEGE OF SCIENCE</p>
                    <p className='login-footer-text-3'>OFFICE OF THE COLLEGE SECRETARY</p>
                    <p className='footer-text-4'>© 2022 OCS-ARS. All rights reserved.</p>
                    <p className='footer-text-5'>Follow us:</p>

                    <img alt="footer-icon-1"
                    src={facebookIcon}
                    className="footer-icon-1"/>

                    <img alt="footer-icon-2"
                    src={globeIcon}
                    className="footer-icon-2"/>

                    <p className='footer-text-6'>Contact us:</p>

                    <img alt="footer-icon-3"
                    src={telephoneIcon}
                    className="footer-icon-3"/>

                    <p className='footer-text-7'>09123456789 / 123-456</p>

                    <img alt="footer-icon-4"
                    src={envelopeIcon}
                    className="footer-icon-4"/>

                    <p className='footer-text-8'>loremipsum@up.edu.ph</p>
            </div>

        </div>
    )
}

export default Login;