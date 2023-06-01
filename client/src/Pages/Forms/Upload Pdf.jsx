import axios from 'axios';

export const uploadPdf = async(data) => {
    axios.post('http://localhost:5000/form_api/upload_pdf',data);
}