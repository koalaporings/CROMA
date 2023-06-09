import React, { useState, useEffect } from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import PDFdocument from "../PDF/PDF Document 1";
import { PDFDocument } from "pdf-lib";
import axios from 'axios'
import { Buffer } from 'buffer'

function AdminOngoingModal({
  data,
  setIsOpen,
}) {
  console.log(data);

  const [file, setFile] = useState();

  const getImagevalue = async () => {
    const response = await axios.get('http://localhost:5000/form_api/get/' + data.transaction_id)
    console.log(response)
    setFile(Buffer.from(response.data[0].file.data))
  }

  useEffect(()=>{
    if(!file){
      getImagevalue()
    }
  },[])
  console.log(file)
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="admin-view-modal">
          <div className="view-modalHeader">
            <h4 className="view-heading">{data.form_name}</h4>
          </div>
          <div className="view-modalHeader">
            <h5 className="view-sub-heading"><b>Transaction ID:</b> {data.transaction_id}</h5>
          </div>
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="view-document-content">
          {(data.form_id == "1" || data.form_id == "2" || data.form_id == "3"  || data.form_id == "5" || data.form_id == "6" || data.form_id == "7" || data.form_id == "12" || data.form_id == "17" || data.form_id == "21") ? 
          <div className="view-document-content">
          <PDFdocument docData={data} />
          {file && <img src={`data:image/jpeg;base64,${file.toString('base64')}`}></img>}
        </div>
        :
        <div className="view-document-content">
            
            {file && 
            // <Viewer fileUrl={`data:/application/pdf;base64,${file.toString('base64')}`} />}
            
            <embed src={`data:application/pdf;base64,${file.toString('base64')}#zoom=FitH`} width="100%" height="500" />
            }
          </div>
        }
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminOngoingModal;
