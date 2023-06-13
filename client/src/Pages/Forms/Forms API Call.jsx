import axios from 'axios';

export const addFormInformation = async(data,formData) => {
    const response = axios.post('http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/form_api/transaction_made', {
        user_id: data.user_id,
        form_id: data.form_id,
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
        reason: data.reason,
        last_sem: data.last_sem,
        subjects: data.subjects,
        units_per_subject: data.units_per_subject,
        purpose_ext: data.purpose_ext,

        //Form 13 values
        cSub: data.cSub,
        cProf: data.cProf,
        cUnit: data.cUnit,
        cTime: data.cTime,
        cDay: data.cDay,
        cRoom: data.cRoom,

        aSub: data.aSub,
        aProf: data.aProf,
        aUnit: data.aUnit,
        aTime: data.aTime,
        aDay: data.aDay,
        aRoom:data.aRoom,

        //form 14
        subject_dropped: data.subject_dropped,
        instructor_name: data.instructor_name,
        section: data.section,

        //Form 15
        academic_year_incurred: data.academic_year_incurred,
        course_description_title: data.course_description_title,
        original_grade: data.original_grade,
        academic_year_incurred: data.academic_year_incurred,
        date_completion: data.date_completion,
        removal_grade: data.removal_grade,
        course_num_section: data.course_num_section
    })
    return (response);
}