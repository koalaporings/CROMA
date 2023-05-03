const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.post('/post', async (req, res) => {
    const q = 'INSERT INTO announcements (`announcement_title`, `announcement_body`) VALUES (?)'
    const values = [
      req.body.announcement_title,
      req.body.announcement_body,]
    
  
    db.query(q,[values], (err, data) => {
    })
    res.json(req.body.announcement_body)
  })

router.get('/details/:id', async (req,res) => {
  const q = 'SELECT * FROM announcements WHERE announcement_id = ?'
  const announcementId = req.params.id

  const details = await new Promise((resolve) => {
    db.query(q, announcementId, (err, data) => {
      resolve(data)
    })
  })

  let temp = String(details[0].announcement_datetime)
  const date = temp.substring(4,15)
  const time = temp.substring(16,24)

  const values = {
    announcement_title: details[0].announcement_title,
    announcement_date: date,
    announcement_time: time,
    announcement_body: details[0].announcement_body
  }
  res.json(values)
})
module.exports = router;