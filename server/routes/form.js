const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;


router.get('/db/view', (req, res) => {
    const q = 'SELECT * FROM forms'
    
    db.query(q, (err, data) => {
      if(err) console.error('ERROR', err);
      res.json(data)
    })
  })

module.exports = router;