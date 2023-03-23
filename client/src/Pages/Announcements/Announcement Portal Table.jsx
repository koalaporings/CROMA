import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { BsExclamationLg, BsChevronDown } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import './AnnouncementTable.css';


const AnnounceTable = () => {
    return (
        <div>
            {/* <div className = "announcements-headers">
                <div className="search-filters">
                        <label className='filters' htmlFor="ongoing-filter">Filter by:</label>
                        <select className='table-filters' name="ongoing-filter" id="ongoing-filter">
                            <option value="1">Date</option>
                            <option value="2">Announcement Title</option>
                        </select>
                    </div>
            </div> */}
             <div className="tables-container">
  
                <table className="announce-table">
                    <tr className='announce-tr'>
                        <td className='title-date'><p className='title'>Announcement Title</p><p className='date'>10/01/2022 , 12:43pm</p></td>
                        <td className='description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr className='announce-tr'ud exercita...”</td>
                    </tr>
                    <tr className='announce-tr'>
                        <td className='title-date'><p className='title'>Announcement Title</p><p className='date'>10/01/2022 , 12:43pm</p></td>
                        <td className='description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr className='announce-tr'ud exercita...”</td>
                    </tr>
                    <tr className='announce-tr'>
                        <td className='title-date'><p className='title'>Announcement Title</p><p className='date'>10/01/2022 , 12:43pm</p></td>
                        <td className='description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr className='announce-tr'ud exercita...”</td>
                    </tr>
                    <tr className='announce-tr'>
                        <td className='title-date'><p className='title'>Announcement Title</p><p className='date'>10/01/2022 , 12:43pm</p></td>
                        <td className='description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr className='announce-tr'ud exercita...”</td>
                    </tr>
                    <tr className='announce-tr'>
                        <td className='title-date'><p className='title'>Announcement Title</p><p className='date'>10/01/2022 , 12:43pm</p></td>
                        <td className='description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr className='announce-tr'ud exercita...”</td>
                    </tr>
                    <tr className='announce-tr'>
                        <td className='title-date'><p className='title'>Announcement Title</p><p className='date'>10/01/2022 , 12:43pm</p></td>
                        <td className='description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr className='announce-tr'ud exercita...”</td>
                    </tr>
                    <tr className='announce-tr'>
                        <td className='title-date'><p className='title'>Announcement Title</p><p className='date'>10/01/2022 , 12:43pm</p></td>
                        <td className='description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr className='announce-tr'ud exercita...”</td>
                    </tr>
                    <tr className='announce-tr'>
                        <td className='title-date'><p className='title'>Announcement Title</p><p className='date'>10/01/2022 , 12:43pm</p></td>
                        <td className='description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr className='announce-tr'ud exercita...”</td>
                    </tr>
                    <tr className='announce-tr'>
                        <td className='title-date'><p className='title'>Announcement Title</p><p className='date'>10/01/2022 , 12:43pm</p></td>
                        <td className='description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr className='announce-tr'ud exercita...”</td>
                    </tr>           
                    <tr className='announce-tr'>
                        <td className='title-date'><p className='title'>Announcement Title</p><p className='date'>10/01/2022 , 12:43pm</p></td>
                        <td className='description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr className='announce-tr'ud exercita...”</td>
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


export default AnnounceTable;