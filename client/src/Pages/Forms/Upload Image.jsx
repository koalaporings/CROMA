import axios from 'axios';

export const uploadImage = (data) => {
    axios.post('http://localhost:5000/form_api/upload_image/',data);
}