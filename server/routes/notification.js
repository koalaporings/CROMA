const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.post("/new", async(req, res) => {        //API endpoint to post new notification to a student
    const q = "INSERT INTO notifications (`user_id`, `notification_body`) VALUES (?)"
    const values = [
        req.body.user_id,
        req.body.notification_body
    ]

    db.query(q, [values],(err, data)=> {
        if(err) console.error('ERROR', err);
        res.json(data)
    })
})

router.get("/get/:id", async (req, res) => {        //API endpoint to get notifications of a student
    const q = "SELECT notification_datetime, notification_body FROM notifications WHERE user_id = ? ORDER BY notification_datetime DESC"
    const userId = req.params.id

    
    const details = await new Promise((resolve) => {
        db.query(q, userId, (err,data) => {
            if(err) console.error('ERROR', err);
            resolve(data)
        })
      })
    
      const values = []
    
      for(i=0;i<details.length;i++){
        let temp = String(details[i].notification_datetime)
      const date = temp.substring(4,15)
      const time = temp.substring(16,24)
    
      values.push({
        notification_date: date,
        notification_time: time,
        notification_body: details[i].notification_body
      })
      }
      
      res.json(values)

})

module.exports = router;