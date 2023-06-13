import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import PDFdocument from "../PDF/PDF Document 1"
import axios from 'axios'
import { Buffer } from 'buffer'
import { useEffect, useState } from 'react'
import { Viewer } from '@react-pdf-viewer/core'
import { updatePDF } from "../../Pages/Forms/Update PDF";

function ClerkApproveModal({
  data,
  setIsOpen,
  action,
}) {
  console.log(data);

  const [file, setFile] = useState();
  const [uploadedFile, setUploadedFile] = useState();
  const [newFormData, setNewFormData] = useState();

  const getImagevalue = async () => {
    const response = await axios.get('http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/form_api/get/' + data.transaction_id)
    console.log(response)
    setFile(Buffer.from(response.data[0].file.data))
  }

  useEffect(()=>{
    if(!file){
      getImagevalue()
    }
  },[])
  console.log(file)

const pdfHandler = (e) => {
    const uploaded_file = e.target.files[0];
    setUploadedFile(uploaded_file)
    console.log(!uploadedFile)
    const formData = new FormData();
    formData.append('pdf', uploaded_file);
    formData.append('id', data.transaction_id);
    console.log(data.transaction_id)
    setNewFormData(formData);
    updatePDF(formData);
    console.log('yes')
}

  
  return (
    
    <>
    
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="admin-view-modal">
          <div className="view-modalHeader">
            <h5 className="view-heading">{data.form_name}</h5>
          </div>
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          {(data.form_id == "1" || data.form_id == "2" || data.form_id == "3" || data.form_id == "17" || data.form_id == "21") ? 
          <div className="view-document-content">
          <PDFdocument docData={data} />
          
        </div>
        :
        <div className="view-document-content">
           

            {file && 
            // <Viewer fileUrl={`data:/application/pdf;base64,${file.toString('base64')}`} />}
            
            <embed src={`data:application/pdf;base64,${file.toString('base64')}#zoom=FitH`} width="100%" height="500" />
            }
          </div>
        }
        
        <div className="upload">
        <h5 className="view-sub-heading center">Upload the requested form:</h5>
            <div class="form-group">
            <input type="file" class="form-control-file" id="paymentProof" name="pdf" accept="application/pdf" multiple={false} onChange={pdfHandler}/>
              </div>
          </div>

          {/* <div className="upload-form">
                        <div class="form-group">
                            <input type="file" class="form-control-file" id="paymentProof" name="pdf" accept="application/pdf" multiple={false}/>
                        </div>
                    </div> */}
          <div className="view-modalActions">
            <div className="view-modal-actionsContainer">

              <button className="approve-button" onClick={() => action(!uploadedFile, newFormData)}>
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