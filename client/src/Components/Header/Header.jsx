import React from "react";
import './Header.css'

import coslogo from '../../Assets/cos-logo.png';
import headerBackground from '../../Assets/header-background.png';

const Header = () => {
    return (
        <div data-testid="header-component" style={{"width": "100%"}}>
            <div className='header-container'>
                    <img alt="header-logo"
                        src={coslogo}
                    className="header-logo"/>
                    <p className='header-text-1'>University of the Philippines Cebu - College of Science</p>
                    <p className='header-text-2'>Office of the College Secretary</p>
                    <p className='header-text-3'>Automated Request System</p>

                    <h1 class="abbr">ARS</h1>
                    <img alt="header-bg-1"
                        src={headerBackground}
                    className="header-bg-1"/>
            </div>
        </div>
    )
}

export default Header;