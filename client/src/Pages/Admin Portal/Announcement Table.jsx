import './Table.css';
import announcementIcon from '../../Assets/announcement-icon.svg';


const AnnouncementTable = () => {
    return (
        <div>
            <div className="announcement-container">
                <div className = "announcement-header">
                <img alt="announcement-icon"
                    src={announcementIcon}
                className="announcement-icon"/>
                <p className='announcement-text'>Announcement</p>
                </div>
                {/* <div className="announce-div">  */}
                <table className="announcement-table">
                    <tr className="announcement-tr">
                    <td className="announcement-date">
                        <div className="date-box">
                                1/3/22 | 11:50 am
                            </div>
                    </td>
                    <td className="announcement-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at porttitor er....</td> 
                    </tr>
                    <tr className="announcement-tr">
                    <td className="announcement-date">
                        <div className="date-box">
                                1/3/22 | 11:50 am
                            </div>
                    </td>                    
                    <td className="announcement-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at porttitor er....</td> 
                    </tr>
                    <tr className="announcement-tr">
                    <td className="announcement-date">
                        <div className="date-box">
                                1/3/22 | 11:50 am
                            </div>
                    </td>                    
                    <td className="announcement-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at porttitor er....</td> 
                    </tr>
                    <tr className="announcement-tr">
                    <td className="announcement-date">
                        <div className="date-box">
                                1/3/22 | 11:50 am
                            </div>
                    </td>                    
                    <td className="announcement-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at porttitor er....</td> 
                    </tr>
                    </table>
                {/* </div> */}
            </div>
        </div>
    )
}


export default AnnouncementTable;