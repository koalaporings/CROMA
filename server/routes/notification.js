const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.post("/new", async(req, res) => {
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

router.get("/get/:id", async (req, res) => {
    const q = "SELECT DATE_ADD(notification_datetime, INTERVAL 8 HOUR) as notification_datetime, notification_body FROM notifications WHERE user_id = ? ORDER BY notification_datetime DESC"
    const userId = req.params.id

    db.query(q, userId, (err,data) => {
        if(err) console.error('ERROR', err);
        res.json(data)
    })
})

module.exports = router;