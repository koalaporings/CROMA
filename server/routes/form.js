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
  const q2 = 'INSERT INTO transaction_info (`last_name`, `first_name`, `middle_initial`, `student_number`, `mobile_number`, `year_level`, `degree_program`, `email`, `academic_year`, `semester`, `num_copies`, `purpose`) VALUES (?)'
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
  const transaction_ETA = year + "-" + month + "-" + date

  const values = [
    req.body.user_id,
    req.body.form_id,
    form_values[0].form_name,
    req.body.payment_proof,
    "await_approval",
    transaction_ETA,
  ]

  const info = [
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
  db.query(q,[values], (err, data) => {
    if(err) console.error('ERROR', err);
    
  })
  db.query(q2,[info], (err, data) => {
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