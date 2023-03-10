import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Admin Landing.css';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'

const AdminLanding = ({children}) => {

    return(
        <div>
            <Header/>
            <div className='admin-container'>
                <p>Placeholder text</p>
                <div className="table1-container">
                    <div className="table-top">
                        <div className="table-label">Transaction Requests</div>
                        <div className="search-filter">Search Filter</div>
                    </div>
                    <table className="table1">
                        <tr className='header'>
                            <th className='urgent'></th>
                            <th className='date'>Date</th>
                            <th className='student-name'>Student Name</th>
                            <th className='transaction-request'>Transaction Request</th>
                            <th className='form'>Form</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td>10/01/2022</td>
                            <td>Gabriel Howard Awatin</td>
                            <td>True Copy of Grades</td>
                            <td>
                                <button className='view'>
                                    View
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>10/01/2022</td>
                            <td>John Oliver Ochea</td>
                            <td>True Copy of Grades</td>
                            <td>
                                <button className='view'>
                                    View
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>10/01/2022</td>
                            <td>Gabriel Howard Awatin</td>
                            <td>True Copy of Grades</td>
                            <td>
                                <button className='view'>
                                    View
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>  
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>  
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>                    
                    </table>
                    <div className="table1-footer">
                        <div className="display-section">DISPLAY 1 OUT OF 1</div>
                        <div className="page-section">
                            <button className="table-page-button"><AiOutlineDoubleLeft/></button>
                            <button className="table-page-button"><MdOutlineArrowBackIos/></button>
                            <button className="table-page-number">1</button>
                            <button className="table-page-button"><MdOutlineArrowForwardIos/></button>
                            <button className="table-page-button"><AiOutlineDoubleRight/></button>
                        </div>
                        <div className="show-section">SHOW</div>
                            
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default AdminLanding;