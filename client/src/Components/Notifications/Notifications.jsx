import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Notifications.css';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

function Notifications ({
    notifsData
}) {

    const navigate = useNavigate();
    const showMoreNavigate = () => navigate('/notifications');
    const [notifDate, setNotifDate] = useState("");
    const [notifTime, setNotifTime] = useState("");



    const length = notifsData.length

    return (
        <div>
            <div className='notif-container'>
                <div className="notif-header-container">
                    <div className="notif-logo"><NotificationsActiveOutlinedIcon sx={{ fontSize: "40px" }} style={{color: '#7A1113'}}/></div>
                    <div className="notif-title-text">Notifications</div>
                </div>
                {length === 0 ?
                    <div className="no-notifs">There are no notifications.</div>
                    :
                    <div className="notif-list-container">
                    {notifsData.map((data) => {
                        return(
                            <div className="notif-details-container">
                                <div className="notif-date-time-container">{data.notification_date} | {data.notification_time}</div>
                                <div className="notif-body-text">{data.notification_body}</div>
                            </div>
                        )
                    })}
                    </div>
                    }
                <div className="notif-button-container">
                    <div className="notif-show-more-button" onClick={showMoreNavigate}>Show more</div>
                </div>
            </div>
        </div>
    )
}

export default Notifications;