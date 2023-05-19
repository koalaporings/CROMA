import React, { useState } from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";

import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';


const TrackingModal = ({ setIsOpen, details, trackingData }) => {

  console.log(details)
  console.log(trackingData)

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="tracking-view-modal">
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "0px", color: "#7A1113", fontSize: "30px", fontWeight:"700" }} />
          </button>
          <div className="status-logo-container">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="circle-mini-1"></div>
            <div className="circle-mini-2"></div>
            <div className="circle-mini-3"></div>
            {details[0].transaction_status==="Awaiting Approval" 
              ?
              <div className="circle-1" ><NoteAddOutlinedIcon style={{fontSize: "80px", marginTop: "10px"}}/></div> 
              : 
              <div></div>
            }
            {details[0].transaction_status==="Processing" 
              ?
              <div className="circle-2" ><HourglassEmptyOutlinedIcon style={{fontSize: "80px", marginTop: "10px"}}/></div> 
              : 
              <div></div>
            }
            {details[0].transaction_status==="Completed" 
              ?
              <div className="circle-3" ><TaskOutlinedIcon style={{fontSize: "80px", marginTop: "10px"}}/></div> 
              : 
              <div></div>
            }
          </div>
          <div className="tracking-title">
            {details[0].form_name}
          </div>
          <div className="tracking-sub-text">Transaction ID: &nbsp; {details[0].transaction_id}</div>
          <div className="tracking-sub-text">Status:&nbsp;<span className="tracking-sub-text-bold">{details[0].transaction_status}</span></div>
          {trackingData.length === 0 
          ?
          <div className="tracking-detail-container">
            <div className="tracking-empty-text">
              Transaction is currently waiting to be approved by admin.  
            </div>
          </div>
          :
          <div className="tracking-detail-container">
          {trackingData.map((data,index) => {
            return(
              <div tabIndex={index} className="tracking-detail">
                  <div className="tracking-status-container">
                    <div className="tracking-datetime-container">
                      <div className="tracking-date">{data.tracking_date}</div>
                      <div className="tracking-time">{data.tracking_time}</div>
                    </div>
                    <div className="tracking-status">{data.tracking_status}</div>
                    <div className="tracking-line"></div>
                  </div>
              </div>
            )
          })}
        </div>
        }
          
        </div>
      </div>
    </>
  );
};

export default TrackingModal;
