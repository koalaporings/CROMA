const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;


router.get('/view', async (req, res) => {
    const q = 'SELECT * FROM forms'
    
    db.query(q, (err, data) => {
      if(err) console.error('ERROR', err);
      res.json(data)
    })
  })

router.put('/update_form_desc/:form_id', async (req, res) => {
  const formId = req.params.form_id
  const q = 'UPDATE forms SET `form_desc` = ? WHERE form_id = ?'
  const values = req.body.form_desc

  db.query(q,[values, formId], (err, data) => {
    if(err) console.error('ERROR', err);
  })
  res.json(req.body.form_desc)
})

router.post('/new', async (req, res) => {
  const q = 'INSERT INTO forms (`form_name`, `form_desc`, `form_duration`, `form_payment`, `form_recipients`) VALUES (?)'
  const values = [
    req.body.form_name,
    req.body.form_desc,
    req.body.form_duration,
    req.body.form_payment,
    req.body.form_recipients,
  ]
  

  db.query(q,[values], (err, data) => {
    if(err) console.error('ERROR', err);
  })
  res.json(req.body.form_name)
})

router.post('/transaction_made', async (req,res) =>{
  const q = 'INSERT INTO transactions (`user_id`, `form_id`, `form_name`, `payment_proof`, `transaction_status`, `transaction_ETA`) VALUES (?)'
  var q2 = ''
  var info = ''
  if(req.body.form_id >= 0 && req.body.form_id <= 3){
    q2 = 'INSERT INTO transaction_info (`last_name`, `first_name`, `middle_initial`, `student_number`, `mobile_number`, `year_level`, `degree_program`, `email`, `academic_year`, `semester`, `num_copies`, `purpose`) VALUES (?)'
    info = [
      req.body.last_name,
      req.body.first_name,
      req.body.middle_initial,
      req.body.student_number,
      req.body.mobile_number,
      req.body.year_level,
      req.body.degree_program,
      req.body.email,
      req.body.academic_year,
      req.body.semester,
      req.body.num_copies,
      req.body.purpose,
    ]
  } else if((req.body.form_id >= 10 && req.body.form_id <= 13) || req.body.form_id == 15){ // Because Form 14 has a different way to handle names

    //NAME HANDLING FOR FORMS
    var last_name, first_name, middle_initial
    try{      
      const result = req.body.student_name.split(/,\s*|,/);
      [last_name, first_name, middle_initial] = result
    }catch{
      console.log('Form Field Error')
    }

    //FORMS DATA HANDLING
    if(req.body.form_id == 10 || req.body.form_id == 11){
      q2 = 'INSERT INTO transaction_info (`last_name`, `first_name`, `middle_initial`, `student_number`, `mobile_number`, `degree_program`, `year_level`,  `email`, `academic_year`, `semester`, `num_copies`, `purpose`) VALUES (?)'
      info = [
        last_name,
        first_name,
        middle_initial,
        req.body.student_number,
        req.body.mobile_number,
  
        req.body.degree_program,
        req.body.year_level,      
        req.body.email,
  
        req.body.academic_year,
        req.body.semester,
        req.body.num_copies,
        req.body.purpose,
      ]
    }else if(req.body.form_id == 12){
      q2 = 'INSERT INTO transaction_info (`last_name`, `first_name`, `middle_initial`, `student_number`, `date`, `degree_program`, `year_level`, `semester`, `academic_year`, `status_last_semester`, `purpose`) VALUES (?)';
  
      info = [
        last_name,
        first_name,
        middle_initial,
        req.body.student_number,
        req.body.date,
        req.body.degree_program,
        req.body.year_level,
        
        
        req.body.semester,
        req.body.academic_year,

        req.body.status_last_semester,
        req.body.purpose,
      ];
    
    }else if(req.body.form_id == 13){
        q2 = 'INSERT INTO transaction_info (`last_name`, `first_name`, `middle_initial`, `student_number`, `mobile_number`, `degree_program`, `year_level`, `email`, `purpose`, `purpose_ext`) VALUES (?)';
        info = [
          last_name,
          first_name,
          middle_initial,
          req.body.student_number,
          req.body.mobile_number,

          req.body.degree_program,
          req.body.year_level,          
          req.body.email,

          req.body.purpose,
          req.body.purpose_ext,
        ];
  
    }else if(req.body.form_id == 15){
      q2 = 'INSERT INTO transaction_info (`last_name`, `first_name`, `middle_initial`, `student_number`, `degree_program`, `year_level`, `course_description_title`, `course_num_section`, `units`, `original_grade`, `semester_incurred`, `academic_year_incurred`, `date_completion`, `removal_grade`, `remarks`) VALUES (?)';
  
      info = [
        last_name,
        first_name,
        middle_initial,
        req.body.student_number,
        req.body.degree_program,
        req.body.year_level,

        req.body.course_description_title,
        req.body.course_num_section,
        req.body.units,
        req.body.original_grade,
        req.body.semester_incurred,
        req.body.academic_year_incurred,
        req.body.date_completion,
        req.body.removal_grade,
        req.body.remarks,
      ];
  
    }    

  }else if(req.body.form_id == 14){
    q2 = 'INSERT INTO transaction_info (`last_name`, `first_name`, `middle_initial`, `student_number`, `degree_program`, `year_level`, `subject_dropped`, `section`, `instructor_name`, `purpose`) VALUES (?)'
    info = [
      req.body.last_name,
      req.body.first_name,
      req.body.middle_initial,
      req.body.student_number,

      req.body.degree_program,
      req.body.year_level,

      req.body.subject_dropped,
      req.body.section,
      req.body.instructor_name,
      req.body.purpose,
    ]
  }

  const formId = req.body.form_id

  const form_values = await new Promise((resolve) => {
    db.query("SELECT form_duration, form_name FROM forms WHERE form_id = ?", formId, (err, data) => {
      if(err) console.error('ERROR', err);
    resolve(data)
    })
})
  let ts = Date.now() + (86400000 * form_values[0].form_duration)
  let date_time = new Date(ts)
  let date = ("0" + date_time.getDate()).slice(-2);
  let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
  let year = date_time.getFullYear();
  const transaction_ETA = year + "-" + month + "-" + date + " " + date_time.getHours() + ":" + date_time.getMinutes() + ":" + date_time.getSeconds()

  const values = [
    req.body.user_id,
    req.body.form_id,
    form_values[0].form_name,
    req.body.payment_proof,
    "await_approval",
    transaction_ETA,
  ]


  db.query(q,[values], (err, data) => {
    if(err) console.error('ERROR', err);
    
  })

  //This section was made to insert data into the foreign key tables.
  //These tables were made because the data would not fit into one table.
  if(req.body.form_id == 12){
    db.query(q2,[info], (err, result) => {
      if(err) {
        console.error('ERROR', err);
      } else {
        let transaction_id = result.insertId;
  
        for(let overloadSubject of req.body.overload_subjects) {
          const q3 = 'INSERT INTO overload_subjects (`transaction_id`, `OverloadSubjects`, `OverloadCredits`) VALUES (?, ?, ?)';
          const overloadInfo = [transaction_id, overloadSubject.OverloadSubjects, overloadSubject.OverloadCredits];
  
          db.query(q3, overloadInfo, (err, data) => {
            if(err) console.error('ERROR', err);
          });
        }
      }
    });

  }else if(req.body.form_id == 13){
    db.query(q2, [info], (err, result) => {
      if(err) {
        console.error('ERROR', err);
      } else {  
        const cancelledSubjects = req.body.cancelledSubjects || [];
        const authorizedSubjects = req.body.authorizedSubjects || [];
  
        cancelledSubjects.forEach(subject => {
          const {subjects_cancelled, cancelled_instructor, cancelled_units, cancelled_time, cancelled_day, cancelled_room} = subject;
          const q2 = 'INSERT INTO cancelled_subjects (`transaction_id`, `subjects_cancelled`, `cancelled_instructor`, `cancelled_units`, `cancelled_time`, `cancelled_day`, `cancelled_room`) VALUES (?, ?, ?, ?, ?, ?, ?)';
          db.query(q2, [transaction_id, subjects_cancelled, cancelled_instructor, cancelled_units, cancelled_time, cancelled_day, cancelled_room], err => {
            if(err) console.error('ERROR', err);
          });
        });
  
        authorizedSubjects.forEach(subject => {
          const {subjects_authorized, auth_instructor, auth_units, auth_time, auth_day, auth_room} = subject;
          const q3 = 'INSERT INTO authorized_subjects (`transaction_id`, `subjects_authorized`, `auth_instructor`, `auth_units`, `auth_time`, `auth_day`, `auth_room`) VALUES (?, ?, ?, ?, ?, ?, ?)';
          db.query(q3, [transaction_id, subjects_authorized, auth_instructor, auth_units, auth_time, auth_day, auth_room], err => {
            if(err) console.error('ERROR', err);
          });
        });
      }
    });
  }else{
    db.query(q2,[info], (err, data) => {
      if(err) console.error('ERROR', err);
    })
  }
  

  const get_latest = await new Promise((resolve) => {
    db.query("SELECT transaction_id, transaction_date FROM transactions WHERE user_id = ? ORDER BY transaction_date DESC LIMIT 1", req.body.user_id, (err, data) => {
      if(err) console.error('ERROR', err);
    resolve(data)
    })
  })
  const tracking = [
    get_latest[0].transaction_id, 
    'Awaiting Approval',
    get_latest[0].transaction_date

  ]
  db.query('INSERT INTO tracking (`transaction_id`, `tracking_status`, `tracking_datetime`) VALUES (?)', [tracking], (err, data) => {
    if(err) console.error('ERROR', err);
  })

  res.send()
})



router.get('/request/get/:user_id', async (req, res) => {
  const q = 'SELECT * FROM students WHERE user_id = ?'
  const userId = req.params.user_id

  db.query(q,userId, (err, data) => {
    if(err) console.error('ERROR', err);
    res.json(data)
  })

  
  
})



module.exports = router;


  
