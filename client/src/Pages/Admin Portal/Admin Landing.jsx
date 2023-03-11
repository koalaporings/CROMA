import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Admin Landing.css';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { BsExclamationLg, BsChevronDown } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';



const AdminLanding = ({children}) => {
    return(
        <div>
            <div className="header-admin">
                <Header/>
            </div>
            <div className='admin-container'>
                <p>Placeholder text</p>
                <div className="table1-container">
                    <div className="table-top">
                        <div className="table-label">Transaction Requests</div>
                        <div className="search-filter">
                            <div className='filter'>Filter by:</div>
                            <div className="filter-dropdown">
                                <div className="selected-filter-text">Date</div>
                                <div className='dropdown-icon'><BsChevronDown/></div>
                            </div>
                            <input id="table1-input" className='search-box' type="text" name="search-input" placeholder='Search'/>   
                        </div>
                    </div>
                    <table className="table1">
                        <tr className='header'>
                            <th className='urgent'></th>
                            <th className='date'>Date</th>
                            <th className='student-name'>Student Name</th>
                            <th className='transaction-request'>Transaction Request</th>
                            <th className='form'>Form</th>
                        </tr>
                        <tr className='urgent-row'>
                            <td className='urgent'>
                                <div className="urgent-icon">
                                    <BsExclamationLg/>
                                </div>
                                <div className="urgent-box">
                                    URGENT
                                </div>
                            </td>
                            <td className='date'>10/01/2022</td>
                            <td className='student-name'>Gabriel Howard Awatin</td>
                            <td className='transaction-request'>True Copy of Grades</td>
                            <td className='form'>
                                <button className='view'>
                                    View
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='urgent'></td>
                            <td className='date'>10/01/2022</td>
                            <td className='student-name'>John Oliver Ochea</td>
                            <td className='transaction-request'>True Copy of Grades</td>
                            <td className='form'>
                                <button className='view'>
                                    View
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='urgent'></td>
                            <td className='date'>10/01/2022</td>
                            <td className='student-name'>Gabriel Howard Awatin</td>
                            <td className='transaction-request'>True Copy of Grades</td>
                            <td className='form'>
                                <button className='view'>
                                    View
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='urgent'></td>
                            <td className='date'>10/01/2022</td>
                            <td className='student-name'>Gabriel Howard Awatin</td>
                            <td className='transaction-request'>True Copy of Grades</td>
                            <td className='form'>
                                <button className='view'>
                                    View
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='urgent'></td>
                            <td className='date'>10/01/2022</td>
                            <td className='student-name'>Gabriel Howard Awatin</td>
                            <td className='transaction-request'>True Copy of Grades</td>
                            <td className='form'>
                                <button className='view'>
                                    View
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='urgent'></td>
                            <td className='date'>10/01/2022</td>
                            <td className='student-name'>Gabriel Howard Awatin</td>
                            <td className='transaction-request'>True Copy of Grades</td>
                            <td className='form'>
                                <button className='view'>
                                    View
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='urgent'></td>
                            <td className='date'>10/01/2022</td>
                            <td className='student-name'>Gabriel Howard Awatin</td>
                            <td className='transaction-request'>True Copy of Grades</td>
                            <td className='form'>
                                <button className='view'>
                                    View
                                </button>
                            </td>
                        </tr>  
                        <tr>
                            <td className='urgent'></td>
                            <td className='date'></td>
                            <td className='student-name'></td>
                            <td className='transaction-request'></td>
                            <td className='form'></td>
                        </tr>
                        <tr>
                            <td className='urgent'></td>
                            <td className='date'></td>
                            <td className='student-name'></td>
                            <td className='transaction-request'></td>
                            <td className='form'></td>
                        </tr>  
                        <tr>
                            <td className='urgent'></td>
                            <td className='date'></td>
                            <td className='student-name'></td>
                            <td className='transaction-request'></td>
                            <td className='form'></td>
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
                        <div className="show-section">
                            <div className="show-text">SHOW</div>
                            <div className="show-dropdown">
                                <div className="show-number">1</div>
                                <div className="show-icon"><RiArrowDropDownLine/></div>
                            </div>
                        </div>
                            
                    </div>
                </div>
            </div>
            <div className="footer-admin">
                <Footer/>
            </div>

        </div>
    )
}

export default AdminLanding;