import React from "react";
import './Footer.css'
import globeIcon from '../../Assets/globe-icon.svg';
import facebookIcon from '../../Assets/facebook-icon.svg';
import telephoneIcon from '../../Assets/telephone-icon.svg';
import envelopeIcon from '../../Assets/envelope-icon.svg';


const Footer = () => {
    return (
        <div>
            <div className='footer-container'>
                    <p className='footer-text-1'>UNIVERSITY OF THE PHILIPPINES - CEBU</p>
                    <p className='footer-text-2'>COLLEGE OF SCIENCE</p>
                    <p className='footer-text-3'>OFFICE OF THE COLLEGE SECRETARY</p>
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

export default Footer;