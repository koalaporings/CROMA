import React from 'react';
import {useNavigate} from 'react-router-dom';

import './Login.css';
import coslogo from '../../Assets/cos-logo.png';
import loginBackground from '../../Assets/login-background.png';
import loginBackground1 from '../../Assets/login-background-1.png';
import loginIcon from '../../Assets/login-icon.svg';
import googleIcon from '../../Assets/google-icon.svg';




const Login = ({children}) => {

    const navigate = useNavigate();

    // TEMPORARY

    const navigateLogin = () => navigate('/admin');

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

        </div>
    )
}

export default Login;