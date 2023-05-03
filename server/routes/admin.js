const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.get('/approval_table', async (req, res) => {
  const q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ?'
  const status = "await_approval"
    db.query(q, status, (err, results) => {
        res.json(results)
      })
})

router.get('/ongoing_table', async (req, res) => {
  const q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ?'
  const status = "ongoing"
    db.query(q, status, (err, results) => {
        res.json(results)
      })
})

router.put("/transaction_status/:id", async (req,res) => {
  const q = 'UPDATE transactions SET `transaction_status` = ? WHERE transaction_id = ?'
  const status = req.body.transaction_status
  const transactionId = req.params.id

  db.query(q, [status, transactionId], (err, results) => {
    res.json(results)
  })
})



module.exports = router;