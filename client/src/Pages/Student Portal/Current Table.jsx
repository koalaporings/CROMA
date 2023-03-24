import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { BsExclamationLg, BsChevronDown } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';


const CurrentTable = () => {
    return (
        <div>
             <div className="ongoing-table1-container">
                <div className="table-top">
                    <div className="table-label">Current Transactions</div>
                </div>
                <table className="table1">
                    <tr className='header'>
                        <th className='ongoing'>Date</th>
                        <th className='ongoing'>Transaction Name</th>
                        <th className='ongoing'>Transaction ID</th>
                        <th className='ongoing'>Status</th>
                        <th className='ongoing'>Action</th>
                    </tr>
                    <tr>
                        <td className='date'>10/01/2022</td>
                        <td className='transaction-name'>True Copy of Grades</td>
                        <td className='transaction-id'>001</td>
                        <td className='status'>Pending approval</td>
                        <td className='action'>
                            <button className='action-button'>
                                View Details
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className='date'>10/01/2022</td>
                        <td className='transaction-name'>True Copy of Grades</td>
                        <td className='transaction-id'>002</td>
                        <td className='status'>Pending approval</td>
                        <td className='action'>
                            <button className='action-button'>
                                View Details
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className='date'>10/01/2022</td>
                        <td className='transaction-name'>True Copy of Grades</td>
                        <td className='transaction-id'>003</td>
                        <td className='status'>Processing</td>
                        <td className='action'>
                            <button className='action-button'>
                                View Details
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className='date'>10/01/2022</td>
                        <td className='transaction-name'>True Copy of Grades</td>
                        <td className='transaction-id'>004</td>
                        <td className='status'>Processing</td>
                        <td className='action'>
                            <button className='action-button'>
                                View Details
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className='date'></td>
                        <td className='transaction-name'></td>
                        <td className='transaction-id'></td>
                        <td className='status'></td>
                        <td className='action'></td>
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
    )
}


export default CurrentTable;