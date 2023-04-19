const { Router } = require('express');
const { route } = require('./admin');

const router = Router();
const db = require('../database').databaseConnection;


router.get('/view', (req, res) => {
    const q = 'SELECT * FROM forms'
    
    db.query(q, (err, data) => {
      if(err) console.error('ERROR', err);
      res.json(data)
    })
  })

router.put('/update_form_desc/:form_id', (req, res) => {
  const transactionId = req.params.form_id
  const q = 'UPDATE forms SET `form_desc` = ? WHERE form_id = ?'
  const values = req.body.form_desc

  db.query(q,[values, transactionId], (err, data) => {
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

module.exports = router;