const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.get("/history/:id/:filter_info", async (req,res) => {                //API endpoint for tracking history with filter
    let q = 'SELECT DATE_ADD(transaction_date, INTERVAL 8 HOUR) as transaction_date, form_name, transaction_id, transaction_status FROM transactions WHERE user_id = ? ORDER BY transaction_date DESC'
    if (req.params.filter_info == "dsc"){
        q = 'SELECT DATE_ADD(transaction_date, INTERVAL 8 HOUR) as transaction_date, form_name, transaction_id, transaction_status FROM transactions WHERE user_id = ? ORDER BY transaction_date DESC'
    } else if (req.params.filter_info == "asc"){
        q = 'SELECT DATE_ADD(transaction_date, INTERVAL 8 HOUR) as transaction_date, form_name, transaction_id, transaction_status FROM transactions WHERE user_id = ? ORDER BY transaction_date ASC'
    }
    const userId = req.params.id

    const details = await new Promise((resolve) => {
        db.query(q, userId, (err,data) => {
            if(err) console.error('ERROR', err);
            resolve(data)
        })
      })
    
    const values = []

    for(i=0;i<details.length;i++){
    let status = ""
    if (details[i].transaction_status == "await_approval"){
        status = "Awaiting Approval"
    }
    else if(details[i].transaction_status == "ongoing"){
        status = "Processing"
    }
    else if(details[i].transaction_status == "completed"){
        status = "Completed"
    }
    details[i].transaction_status = status

    values.push(details[i])
    }
    
    res.json(values)
    
})

router.get('/get/:id', async(req,res) => {              //API endpoint for getting tracking details for a specific transaction
    const q = 'SELECT * FROM tracking WHERE transaction_id = ? ORDER BY tracking_datetime DESC'
    const track = req.params.id

    const details = await new Promise((resolve) => {
        db.query(q, track, (err,data) => {
            if(err) console.error('ERROR', err);
            resolve(data)
        })
      })
    
    const values = []

    for(i=0;i<details.length;i++){
    let temp = String(details[i].tracking_datetime)
    const date = temp.substring(4,15)
    const time = temp.substring(16,24)

    values.push({
    transaction_id: details[i].transaction_id,
    tracking_date: date,
    tracking_time: time,
    tracking_status: details[i].tracking_status
    })
}
    
    res.json(values)
})

router.post('/update', async(req, res) => {             //API endpoint for adding new status to transaction
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