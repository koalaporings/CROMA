const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.get("/transactions", async (req,res) => {
    const q = 'SELECT * FROM transactions WHERE transaction_status = ?'
    const status = req.params.transaction_status

    db.query(q, status, (err, results) => {
        res.json(results)
      })
})

module.exports = router;