import React from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar';
import announcementIcon from '../../Assets/announcement-icon.svg';


import './Announcements.css';

const ViewAnnouncementPage = ({children}) => {

    return(
        <div>
            <NavBar/>
            <Header/>

            <div className='announcement-portal-container'>
                <div className="announcement-portal-header">
                    <img alt="announcement-portal-icon"
                        src={announcementIcon}
                        className="announcement-portal-icon"/>
                    <p className='announcement-portal-text'>Announcement Title</p>
                </div>
                <div className="announcement-date-container">
                    <div className="announcement-date-text">Date: 10/01/2022, 12:43 PM</div>
                </div>
                <div className="announcement-details-container">
                    <div className="announcement-details-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at porttitor eros. Sed sit amet dolor vel elit laoreet vulputate eget in libero. Proin eu tellus maximus, pretium diam sit amet, viverra orci. Aliquam quis nunc nec nibh placerat aliquet eu ut tellus. Integer eget lorem augue. Phasellus in rutrum nulla. Fusce dictum turpis pulvinar erat consequat, in ultrices odio tincidunt. Nulla ipsum neque, vehicula non metus in, mattis dictum orci. Nam nec dapibus turpis. Cras at odio in felis mollis iaculis in vitae arcu. Nulla mi augue, mollis in ornare ut, rutrum at sapien. Sed a scelerisque tortor, sit amet ultricies ex.
                        Mauris rhoncus quis arcu vel mollis. Vivamus a congue sapien, sed lobortis ligula. Curabitur a cursus urna. Praesent fermentum faucibus diam in pretium. Fusce ultrices fringilla arcu, in tincidunt diam egestas eu. Vestibulum ornare elementum posuere. Praesent malesuada tristique lacus, eget cursus ligula suscipit eu. Morbi mattis neque id ipsum aliquam porta. Sed vestibulum, ante quis maximus sodales, risus ante luctus ante, quis fermentum eros sapien a est. In auctor elit vitae felis rutrum bibendum. Pellentesque vel convallis sapien, a imperdiet nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum fermentum tempus commodo. Nam sed malesuada ante, sit amet efficitur urna.
                    </div>
                </div>
                <div className="announcement-details-footer">
                    <div className="announcement-details-footer-text">Modified on: 10/02/2022, 10:43 AM</div>
                    <a href="">RETURN</a>
                </div>

            </div>
            <div className='footer-admin-announcement'>
            <Footer/> 
            </div>

        </div>
    )
}

export default ViewAnnouncementPage;