const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.get("/history/:id", async (req,res) => {
    const q = 'SELECT DATE_ADD(transaction_date, INTERVAL 8 HOUR) as transaction_date, form_name, transaction_id, transaction_status FROM transactions WHERE user_id = ?'
    const userId = req.params.id

    db.query(q, userId, (err, results) => {
      if(err) console.error('ERROR', err);
      res.json(results)
    })
    
})

router.get('/get/:id', async(req,res) => {
    const q = 'SELECT * FROM tracking WHERE transaction_id = ?'
    const track = req.params.id

    db.query(q, track, (err,data) => {
        if(err) console.error('ERROR', err);
        res.json(data)
    })
})

router.post('/update', async(req, res) => {
    const q = 'INSERT INTO tracking (`transaction_id`, `tracking_status`) VALUES (?)'
    const values = [
        req.body.transaction_id,
        req.body.tracking_status
    ]

    db.query(q, [values], (err,data) => {
        if(err) console.error('ERROR', err);
        res.json(data)
    })
})

module.exports = router;