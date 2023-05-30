const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.post('/post', async (req, res) => {
    const q = 'INSERT INTO announcements (`announcement_title`, `announcement_body`, `announcement_status`) VALUES (?)'
    const values = [
      req.body.announcement_title,
      req.body.announcement_body,
      "original"]
    
  
    db.query(q,[values], (err, data) => {
      if(err) console.error('ERROR', err);
    })
    res.json(req.body.announcement_body)
  })

router.get('/details', async (req,res) => {
  const q = 'SELECT * FROM announcements ORDER BY announcement_datetime DESC'

  const details = await new Promise((resolve) => {
    db.query(q, (err, data) => {
      if(err) console.error('ERROR', err);
      resolve(data)
    })
  })

  const values = []

  for(i=0;i<details.length;i++){
    let temp = String(details[i].announcement_datetime)
  const date = temp.substring(4,15)
  const time = temp.substring(16,24)

  values.push({
    announcement_id: details[i].announcement_id,
    announcement_title: details[i].announcement_title,
    announcement_date: date,
    announcement_time: time,
    announcement_body: details[i].announcement_body
  })
  }
  
  res.json(values)
})

router.put('/edit/:announcement_id', async (req,res) => {
  const q = 'UPDATE announcements SET announcement_title = COALESCE(?, announcement_title), announcement_body = COALESCE(?, announcement_body), announcement_status = ? WHERE announcement_id = ?'
  const id = req.params.announcement_id
  const values = [
    req.body.announcement_title,
    req.body.announcement_body,
    "edited"
  ]

  db.query(q, [...values, id], (err, data) => {
    if(err) console.error("ERROR", err);
    res.json(data)
  })
})

router.get('/view/:announcement_id', async (req,res) => {
  const q = 'SELECT announcement_title, announcement_body, announcement_status, announcement_datetime FROM announcements WHERE announcement_id = ?'
  const id = req.params.announcement_id

  const details = await new Promise((resolve) => {
    db.query(q, id, (err, data) => {
      if(err) console.error('ERROR', err);
      resolve(data)
    })
  })

  const values = []

  let temp = String(details[0].announcement_datetime)
  const date = temp.substring(4,15)
  const time = temp.substring(16,24)

  values.push({
    announcement_title: details[0].announcement_title,
    announcement_date: date,
    announcement_time: time,
    announcement_body: details[0].announcement_body,
    announcement_status: details[0].announcement_status
  })
  
  res.json(values)
})


router.delete('/delete/:announcement_id', async (req,res) => {
  const q = 'DELETE FROM announcements WHERE announcement_id = ?'
  const id = req.params.announcement_id

  db.query(q, id, (err,data) => {
    if(err) console.error("ERROR", err);
    res.json("Deleted")
  })
})

module.exports = router;