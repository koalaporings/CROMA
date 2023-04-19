const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.post('/post', (req, res) => {
    const q = 'INSERT INTO announcements (`announcement_title`, `announcement_body`) VALUES (?)'
    const values = [
      req.body.announcement_title,
      req.body.announcement_body,]
    
  
    db.query(q,[values], (err, data) => {
      if(err) console.error('ERROR', err);
    })
    res.json(req.body.announcement_body)
  })

module.exports = router;