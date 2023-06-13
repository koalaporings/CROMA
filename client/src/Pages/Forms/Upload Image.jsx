import axios from 'axios';

export const uploadImage = (data) => {
    axios.post('http://ec2-3-26-217-82.ap-southeast-2.compute.amazonaws.com:5000/form_api/upload_image/',data);
}