import React, {useEffect} from "react";
import './Footer.css'
import globeIcon from '../../Assets/globe-icon.svg';
import facebookIcon from '../../Assets/facebook-icon.svg';
import telephoneIcon from '../../Assets/telephone-icon.svg';
import envelopeIcon from '../../Assets/envelope-icon.svg';


const Footer = () => {
    useEffect(() => {
        const adjustFooterHeight = () => {
            const containerHeight = document.querySelector('.App').offsetHeight;
            const windowHeight = window.innerHeight;
            const footer = document.querySelector('.footer-component-outer-container');
            const footerHeight = footer.offsetHeight;
            if (containerHeight  < windowHeight) {
                const extraSpace = windowHeight - containerHeight;
                footer.style.height = footerHeight + extraSpace + 'px';
            } 
            // else {
            //     footer.style.height = 'auto';
            // }
            console.log(containerHeight, windowHeight, footer)
        };
    
        window.addEventListener('resize', adjustFooterHeight);
        window.addEventListener('load', adjustFooterHeight);
    
        // Cleanup event listeners
        // return () => {
        // window.removeEventListener('resize', adjustFooterHeight);
        // window.removeEventListener('load', adjustFooterHeight);
        // };
    }, []);


    return (
        <div data-testid="footer-component">
            <div className="footer-component-outer-container">
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
                            <img
                                alt="footer-component-icon-1"
                                src={facebookIcon}
                                className="footer-component-icon-1"
                                onClick={() => {
                                    window.open("https://www.facebook.com/UPCebuCollegeOfScience");
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.classList.add("hover-effect");
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.classList.remove("hover-effect");
                                }}
                                />

                                <img
                                alt="footer-component-icon-2"
                                src={globeIcon}
                                className="footer-component-icon-2"
                                onClick={() => {
                                    window.open("https://cs.upcebu.edu.ph");
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.classList.add("hover-effect");
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.classList.remove("hover-effect");
                                }}
                                />
                            </div>
                        </div>
                        <div className="fcol-3">
                            <p className='footer-component-text-6'>Contact us:</p>
                            <div className="contact-container-1">
                                <img alt="footer-component-icon-3"
                                src={telephoneIcon}
                                className="footer-component-icon-3"/>
                                <p className='footer-component-text-7'> 232 8185 / 232 8187 </p>
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
                        <p className='footer-component-text-4'>© 2023 OCS-ARS. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;