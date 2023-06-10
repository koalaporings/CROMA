import axios from 'axios';

export const updatePDF = async(data) => {
    axios.put('http://localhost:5000/form_api/updateTransactionFile',data);
}