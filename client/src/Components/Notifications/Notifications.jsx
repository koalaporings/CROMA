import React from "react";
import { useNavigate } from "react-router-dom";
import './Notifications.css';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const Notifications = () => {

    const navigate = useNavigate();
    const showMoreNavigate = () => navigate('/notifications');

    const dummyNotifs = [
        {
            notif_id: 1,
            notif_text: "This is a notification. Notification #1.",
            notif_date: "3/22/2023",
            notif_time: "9:00 PM"
        },
        {
            notif_id: 2,
            notif_text: "This is a notification. Notification #2.",
            notif_date: "3/23/2023",
            notif_time: "9:30 AM"
        },
        {
            notif_id: 3,
            notif_text: "This is a notification. Notification #3.",
            notif_date: "3/24/2023",
            notif_time: "11:00 PM"
        },
        {
            notif_id: 4,
            notif_text: "This is a notification. Notification #4.",
            notif_date: "3/25/2023",
            notif_time: "9:40 PM"
        },
        {
            notif_id: 5,
            notif_text: "This is a notification. Notification #5. “Request for True Copy of Grades (TCG)” has been approved by OCS.",
            notif_date: "3/26/2023",
            notif_time: "10:00 AM"
        },
    ]

    return (
        <div>
            <div className='notif-container'>
                <div className="notif-logo"><NotificationsActiveOutlinedIcon sx={{ fontSize: "40px" }} style={{color: '#7A1113'}}/></div>
                <div className="notif-title-text">Notifications</div>
                <div className="notif-list-container">
                    {dummyNotifs.map((data) => {
                        return(
                            <div className="notif-details-container">
                                <div className="notif-date-time-container">{data.notif_date} | {data.notif_time}</div>
                                <div className="notif-body-text">{data.notif_text}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="notif-show-more-button" onClick={showMoreNavigate}>Show more</div>
            </div>
        </div>
    )
}

export default Notifications;