import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { BsExclamationLg, BsChevronDown } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { ReceiptLongOutlined } from "@mui/icons-material";
import './History.css';

const HistoryTable = () => {
    
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('historydata.json')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
    

    function renderEmptyRows(dataLength){
        if(dataLength < 16) {
            const rowArray = [];
            for (let i = 0; i < 16-dataLength; i++){
                const emptyRow = <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>;
                rowArray.push(emptyRow);
            }       
            return rowArray;
        }
    }


    console.log(data.length);

    return (
        <div>
             <div className="history-table1-container">
                <div className="history-title-container">
                    <ReceiptLongOutlined sx={{ fontSize: "40px" }} style={{color: '#7A1113'}}/>
                    <h1 className='history-title-text'>Transaction History</h1>
                </div>
                <div className="history-table-top">
                    <div className="search-filter">
                        <label className='filter' htmlFor="ongoing-filter">Filter by:</label>
                        <select className='table-filter' name="ongoing-filter" id="ongoing-filter">
                            <option value="1">Date</option>
                            <option value="2">Student Name</option>
                            <option value="2">Transaction Name</option>
                        </select>
                        <div className="search-box">
                            <AiOutlineSearch className='search-icon'/>
                            <input id="table1-input" className='search-input' type="text" name="search-input" placeholder='Search'/>   
                        </div>
                    </div>
                </div>
                <table className="table1">
                    <thead>
                        <tr className='header'>
                            <th className='date'>Date</th>
                            <th className='student-name'>Student Name</th>
                            <th className='transaction-request'>Transaction Request</th>
                            <th className='degree-program'>Degree Program</th>
                            <th className='year-level'>Year Level</th>
                            <th className='form'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td className='date'>{item.date}</td>
                                <td className='student-name'>{item.student_name}</td>
                                <td className='transaction-request'>{item.transaction_name}</td>
                                <td className='degree-program'>{item.degree_program}</td>
                                <td className='year-level'>{item.year_level}</td>
                                <td className='form'>
                                    <button className='view'>
                                        View
                                    </button>   
                                </td>
                            </tr>
                        ))}
                        {renderEmptyRows(data.length)}


                        {/* <tr className='urgent-row'>
                            <td className='urgent'>
                                <BsExclamationLg class="urgent-icon"/>
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
                        </tr>                     */}
                    </tbody>
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
                <div className="download-button-container">
                    <button className='download-csv-button'>DOWNLOAD CSV</button>
                </div>
            </div>
        </div>
    )
}


export default HistoryTable;