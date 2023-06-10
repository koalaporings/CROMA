import React, { useEffect, useState } from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import PDFdocument1 from "./../PDF/PDF Document 2"
import { Buffer } from 'buffer'
import axios from 'axios'

function ViewModal({
  data,
  setIsOpen,
}) {
  console.log(data);

  const [file, setFile] = useState();

  
  const getImagevalue = async () => {
      const response = await axios.get('http://localhost:5000/form_api/get/' + data)
      console.log(response)
      setFile(Buffer.from(response.data[0].file.data))
      console.log(file)
  }
  getImagevalue()
  useEffect(()=>{
    console.log(file)
  },[file])



  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="view-modal">
          <div className='view-modalHeader'>
            <h5 className='view-heading'>True Copy of Grades</h5>
          </div>
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="view-modalContent">
            <div className="view-document-content">
              {file && <embed src={`data:application/pdf;base64,${file.toString('base64')}#zoom=FitH`} width="100%" height="500" />}
            
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewModal;