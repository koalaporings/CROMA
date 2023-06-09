import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import PDFdocument from "../PDF/PDF Document 1"
import axios from 'axios'
import { Buffer } from 'buffer'
import { useEffect, useState } from 'react'

function ClerkApproveModal({
  data,
  setIsOpen,
  action,
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
        <div className="student-view-modal">
          <div className="view-modalHeader">
            <h5 className="view-heading">{data.form_name}</h5>
          </div>
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="view-document-content">
            <PDFdocument docData={data} />
            {file && <img src={`data:image/jpeg;base64,${file.toString('base64')}`}></img>}
          </div>

          <div className="upload">
                        <div class="form-group">
                            <input type="file" class="form-control-file" id="paymentProof" name="pdf" accept="application/pdf" multiple={false}/>
                        </div>
                    </div>
          <div className="view-modalActions">
            <div className="view-modal-actionsContainer">

              <button className="approve-button" onClick={action}>
                Send to Student
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default ClerkApproveModal;