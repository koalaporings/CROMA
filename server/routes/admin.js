const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.get("/transactions", async (req,res) => {
    const q = 'SELECT * FROM transactions WHERE transaction_status = ?'
    const status = req.body.transaction_status

    db.query(q, status, (err, results) => {
        if(err) console.error('ERROR', err);
        res.json(results)
      })
})

router.put("/transaction_status/:id", async (req,res) => {
  const q = 'UPDATE transactions SET `transaction_status` = ? WHERE transaction_id = ?'
  const status = req.body.transaction_status
  const transactionId = req.params.id

  db.query(q, [status, transactionId], (err, results) => {
    if(err) console.error('ERROR', err);
    res.json(results)
  })
})

module.exports = router;