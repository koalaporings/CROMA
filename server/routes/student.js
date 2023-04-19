const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.get("/transactions", (req,res) => {
    const q = 'SELECT * FROM transactions WHERE user_id = ?'
    const userId = req.params.user_id 

    db.query(q, userId, (err, results) => {
        if(err) console.error('ERROR', err);
        res.json(results)
      })
})


module.exports = router;