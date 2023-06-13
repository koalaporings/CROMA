import axios from 'axios';

export const uploadPdf = async(data) => {
    axios.post('http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/form_api/upload_pdf',data);
}