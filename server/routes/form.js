const { Router } = require('express');
const express = require('express')

const router = Router();
const db = require('../database').databaseConnection;
const upload = require('../storage').uploadStorage;
const path = require('path');
const app = require('../server');

router.use('/', express.static(path.join(__dirname, '/')));
router.use(express.urlencoded({ extended: true }))
router.use(express.json())

router.use(express.static('public'))

router.get('/view', async (req, res) => {       //API endpoint for viewing list of forms available
    const q = 'SELECT * FROM forms'
    
    db.query(q, (err, data) => {
      if(err) console.error('ERROR', err);
      res.json(data)
    })
  })

router.put('/update_form_desc/:form_id', async (req, res) => {        //API endpoint for updating form description (for admin only)
  const formId = req.params.form_id
  const q = 'UPDATE forms SET `form_desc` = ? WHERE form_id = ?'
  const values = req.body.form_desc

  db.query(q,[values, formId], (err, data) => {
    if(err) console.error('ERROR', err);
  })
  res.json(req.body.form_desc)
})

router.post('/new', async (req, res) => {       //API endpoint for inserting new forms
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

router.post('/upload_pdf/', upload.single('pdf'), (req,res) => {     //API endpoint for uploading pdfs
  const image = req.file.buffer
  console.log(image)
  const id = req.body.id
  console.log(id)
  const q2 = 'INSERT INTO files (`file`, `transaction_id`) VALUES (?,?)'

  db.query(q2, [image,id], (err,result)=> {

})
})

router.post('/upload_image/', upload.single('image'), (req, res) => {        //API endpoint for uploading images
  const image = req.file.buffer
  const id = req.body.id
  const upload = 'INSERT INTO files (`file`, `transaction_id`) VALUES (?,?)'

  db.query(upload, [image,id], (err,result)=> { 
    res.json({status:'Success'})
  })
})

router.get('/get/:id', async (req,res) => {       //API endpoint for image viewing
  const q = 'SELECT file from files WHERE transaction_id = ?'
  const id = req.params.id

  db.query(q, id, (err,data) => {
    res.json(data)
  })
})

router.post("/transaction_made_upload",async (req,res,err)=> {        //API endpoint (not used) 
  //formdata.append("user_id", the user id)
  const q = 'INSERT INTO transactions (`transaction_id`, `user_id`, `form_id`, `form_name`, `transaction_status`, `transaction_ETA`) VALUES (?)'
  const q3 = 'INSERT INTO transaction_info (`transaction_id`) VALUES ?'

  let now = new Date()
  let months = ''
  let dates = ''
  let hour = ''
  let minute = ''
  let second = ''
  if((now.getMonth()+1) < 10){months = "0" + (now.getMonth()+1).toString()} else {months = (now.getMonth()+1).toString()}
  if(now.getDate() < 10){dates = "0" + now.getDate().toString()} else{dates = now.getDate().toString()}
  if(now.getHours() < 10){hour = "0" + now.getHours().toString()} else{hour = now.getHours().toString()}
  if(now.getMinutes() < 10){minute = "0" + now.getMinutes().toString()} else{minute = now.getMinutes().toString()}
  if(now.getSeconds() < 10){second = "0" + now.getSeconds().toString()} else{second = now.getSeconds().toString()}

  let transaction_id = now.getYear().toString() + months + dates + hour + minute + second + req.body.user_id.toString()
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
    transaction_id,
    req.body.user_id,
    req.body.form_id,
    form_values[0].form_name,
    "await_approval",
    transaction_ETA,
  ]
  db.query(q,[values], (err, data) => {
    if(err) console.error('ERROR', err);
    res.json(transaction_id)
  })  

  db.query(q3,transaction_id, (err, data) => {
      if(err) console.error('ERROR', err);
      res.json(transaction_id)
    }) 
  })

router.post('/transaction_made', async (req,res) =>{        //API endpoint for submitting request
  const q = 'INSERT INTO transactions (`transaction_id`, `user_id`, `form_id`, `form_name`, `transaction_status`, `transaction_ETA`) VALUES (?)'
  var q2 = ''
  var info = ''
  let now = new Date()
  let months = ''
  let dates = ''
  let hour = ''
  let minute = ''
  console.log(req.body)
  if((now.getMonth()+1) < 10){months = "0" + (now.getMonth()+1).toString()} else {months = (now.getMonth()+1).toString()}
  if(now.getDate() < 10){dates = "0" + now.getDate().toString()} else{dates = now.getDate().toString()}
  if(now.getHours() < 10){hour = "0" + now.getHours().toString()} else{hour = now.getHours().toString()}
  if(now.getMinutes() < 10){minute = "0" + now.getMinutes().toString()} else{minute = now.getMinutes().toString()}

  let transaction_id = now.getYear().toString() + months + dates + hour + minute + req.body.user_id.toString()
  if((req.body.form_id >= 1 && req.body.form_id <= 3) || req.body.form_id == 17 || req.body.form_id == 21){
    q2 = 'INSERT INTO transaction_info (`transaction_id`,`last_name`, `first_name`, `middle_initial`, `student_number`, `mobile_number`, `year_level`, `degree_program`, `email`, `academic_year`, `semester`, `num_copies`, `purpose`) VALUES (?)'
    info = [
      transaction_id,
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
    console.log("1")
  } else if(req.body.form_id == 4 || (req.body.form_id >= 7 && req.body.form_id <= 11) || (req.body.form_id >= 13 && req.body.form_id <= 16) || req.body.form_id == 18 || req.body.form_id == 20){
    q2 = 'INSERT INTO transaction_info (`transaction_id`,`last_name`, `first_name`, `middle_initial`, `student_number`, `mobile_number`, `year_level`, `degree_program`, `email`) VALUES (?)'
    info = [
      transaction_id,
      req.body.last_name,
      req.body.first_name,
      req.body.middle_initial,
      req.body.student_number,
      req.body.mobile_number,
      req.body.year_level,
      req.body.degree_program,
      req.body.email,
    ]
    console.log("2")
  }else if(req.body.form_id == 6){
    q2 = 'INSERT INTO transaction_info (`transaction_id`,`last_name`, `first_name`, `middle_initial`, `student_number`, `mobile_number`, `year_level`, `degree_program`, `email`, `purpose`, `subject_dropped`, `instructor_name`, `section`) VALUES (?)'
    info = [
      transaction_id,
      req.body.last_name,
      req.body.first_name,
      req.body.middle_initial,
      req.body.student_number,
      req.body.mobile_number,
      req.body.year_level,
      req.body.degree_program,
      req.body.email,
      req.body.purpose,
      req.body.subject_dropped,
      req.body.instructor_name,
      req.body.section
    ]
    console.log("dropepd")
  }else if(req.body.form_id == 5){
    q2 = 'INSERT INTO transaction_info (`transaction_id`,`last_name`, `first_name`, `middle_initial`, `student_number`, `degree_program`, `year_level`, `semester`, `academic_year`, `status_last_semester`, `purpose`) VALUES (?)';

    info = [
      transaction_id,
      req.body.last_name,
      req.body.first_name,
      req.body.middle_initial,
      req.body.student_number,

      req.body.degree_program,
      req.body.year_level,
      
      req.body.semester,
      req.body.academic_year,

      req.body.last_sem,
      req.body.reason
    ];
  }else if(req.body.form_id == 12){
    q2 = 'INSERT INTO transaction_info (`transaction_id`, `last_name`, `first_name`, `middle_initial`, `student_number`, `degree_program`, `year_level`, `course_description_title`, `course_num_section`, `units`, `original_grade`, `semester_incurred`, `academic_year_incurred`, `date_completion`, `removal_grade`, `instructor_name`) VALUES (?)';

    info = [
      transaction_id,
      req.body.last_name,
      req.body.first_name,
      req.body.middle_initial,
      req.body.student_number,
      req.body.degree_program,
      req.body.year_level,

      req.body.course_description_title,
      req.body.course_num_section,
      req.body.units_per_subject,
      req.body.original_grade,
      req.body.semester,
      req.body.academic_year_incurred,
      req.body.date_completion,
      req.body.removal_grade,
      req.body.instructor_name
    ];

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
    transaction_id,
    req.body.user_id,
    req.body.form_id,
    form_values[0].form_name,
    "await_approval",
    transaction_ETA,
  ]


  db.query(q,[values], (err, data) => {
    if(err) console.error('ERROR', err);
    res.json(transaction_id)
  })

  //This section was made to insert data into the foreign key tables.
  //These tables were made because the data would not fit into one table.
  if(req.body.form_id == 5){
    db.query(q2,[info], (err, result) => {
      if(err) {
        console.error('ERROR', err);
      } else {
        
        let subjects = Object.values(req.body.subjects);
        let units = Object.values(req.body.units_per_subject);
        
        if(subjects.length !== units.length) {
          console.error('Subjects and Units do not match in length.');
        } else {
            for(let i = 0; i < subjects.length; i++) {
                const q3 = 'INSERT INTO overload_subjects (`transaction_id`, `overload_subjects`, `overload_credits`) VALUES (?, ?, ?)';
                const overloadInfo = [transaction_id, subjects[i], units[i]];
                console.log('Transaction ID: ', transaction_id);
                db.query(q3, overloadInfo, (err, data) => {
                    if(err) console.error('ERROR', err);
                });
            }
        }
      }
    });

  }else if(req.body.form_id == 7){
    db.query(q2, [info], (err, result) => {
      if(err) {
        console.error('ERROR', err);
      } else {  

        let cancelledSubjects = Object.values(req.body.cSub);
        let cancelledInstructors = Object.values(req.body.cProf);
        let cancelledUnits = Object.values(req.body.cUnit);
        let cancelledTimes = Object.values(req.body.cTime);
        let cancelledDays = Object.values(req.body.cDay);
        let cancelledRooms = Object.values(req.body.cRoom);

        let authorizedSubjects = Object.values(req.body.aSub);
        let authorizedInstructors = Object.values(req.body.aProf);
        let authorizedUnits = Object.values(req.body.aUnit);
        let authorizedTimes = Object.values(req.body.aTime);
        let authorizedDays = Object.values(req.body.aDay);
        let authorizedRooms = Object.values(req.body.aRoom);
  
        for (let i = 0; i < cancelledSubjects.length; i++){
          const q3 = 'INSERT INTO cancelled_subjects (`transaction_id`, `subjects_cancelled`, `cancelled_instructor`, `cancelled_units`, `cancelled_time`, `cancelled_day`, `cancelled_room`) VALUES (?, ?, ?, ?, ?, ?, ?)';
          db.query(q3, [transaction_id, cancelledSubjects[i], cancelledInstructors[i], cancelledUnits[i], cancelledTimes[i], cancelledDays[i], cancelledRooms[i]], err => {
            if(err) console.error('ERROR', err);
          });
        }

        for (let i = 0; i < cancelledSubjects.length; i++){
          const q3 = 'INSERT INTO authorized_subjects (`transaction_id`, `subjects_authorized`, `auth_instructor`, `auth_units`, `auth_time`, `auth_day`, `auth_room`) VALUES (?, ?, ?, ?, ?, ?, ?)'
          db.query(q3, [transaction_id, authorizedSubjects[i], authorizedInstructors[i], authorizedUnits[i], authorizedTimes[i], authorizedDays[i], authorizedRooms[i]], err => {
            if(err) console.error('ERROR', err);
          });
        }
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

})

router.get('/request/get/:user_id', async (req, res) => {       //API endpoint for geting student details using user_id
  const q = 'SELECT * FROM students WHERE user_id = ?'
  const userId = req.params.user_id

  db.query(q,userId, (err, data) => {
    if(err) console.error('ERROR', err);
    res.json(data)
  })

  
  
})

router.get("/formRecipients/:transaction_id", (req,res) => {        //API endpoint for getting formRecipients from transactions based on transaction_id
  const q = "SELECT form_recipients FROM transactions WHERE transaction_id = ?"
  const id = req.params.transaction_id

  db.query(q, id, (err,data) => {
    if(err) console.log("ERROR", err)
    res.json(data)
  })
})

router.put('/updateRecipients', (req,res) => {
  const q = 'UPDATE transactions SET form_recipients = ? WHERE transaction_id = ?'
  const id = req.body.transaction_id
  const rec = req.body.form_recipients

  db.query(q,[rec,id], (err,data) => {
    if(err) console.log("ERROR",err)
  })
})

router.get("/approvedBy/:transaction_id", (req,res) => {        //API endpoint for getting formRecipients from transactions based on transaction_id
  const q = "SELECT approved_by FROM transactions WHERE transaction_id = ?"
  const id = req.params.transaction_id

  db.query(q, id, (err,data) => {
    if(err) console.log("ERROR", err)
    res.json(data)
  })
})

router.put('/updateApproved', (req,res) => {
  const q = 'UPDATE transactions SET approved_by = ? WHERE transaction_id = ?'
  const id = req.body.transaction_id
  const rec = req.body.approved_by

  db.query(q,[rec,id], (err,data) => {
    if(err) console.log("ERROR",err)
  })
})

router.put('/updateTransactionFile', upload.single('pdf'), (req,res) => {
  const q = 'UPDATE files SET file = ? WHERE transaction_id = ?' 
  const file = req.file.buffer
  const id = req.body.id
  console.log(file)
  console.log(id)


  db.query(q, [file,id], (err, result) => {
    res.json({status: 'Success'})
  })

})



module.exports = router;


  
