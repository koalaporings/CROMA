import axios from 'axios';

export const addFormInformation = async(data) => {
    const response = axios.post('http://localhost:5000/form_api/transaction_made', {
        user_id: data.user_id,
        form_id: data.form_id,
        payment_proof: "",
        remarks: "",
        student_id: 1,
        last_name: data.last_name,
        first_name: data.first_name,
        middle_initial: data.middle_initial,
        student_number: data.student_number,
        mobile_number: data.mobile_number,
        year_level: data.year_level,
        degree_program: data.degree_program,
        email: data.email,
        academic_year: data.academic_year,
        semester: data.semester,
        num_copies: data.num_copies,
        purpose: data.purpose,
    });
    return ({data:response});
}