import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import TransactionTable from './Transaction Table';
import OngoingTable from './Ongoing Table';
import AnnouncementTable from './Announcement Table';
import './Admin Landing.css';



const AdminLanding = ({children}) => {
    return(
        <div>
            <div className="header-admin">
                <Header/>
            </div>

            <div className='admin-container'>
                {/* <p>Placeholder text</p> */}
                <AnnouncementTable/>
                <TransactionTable/>
                <OngoingTable/>
            </div>

            <div className="footer-admin">
                <Footer/>
            </div>
        </div>
    )
}

export default AdminLanding;