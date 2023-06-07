const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.get("/transactions", async (req,res) => {        // API endpoint for getting all transactions on specific statuses
    const q = 'SELECT * FROM transactions WHERE transaction_status = ?'
    const status = req.params.transaction_status

    db.query(q, status, (err, results) => {
      if(err) console.error('ERROR', err);
        res.json(results)
      })
})

router.get('/transaction_table/:filter_info', async (req, res) => {       //API endpoint for clerk transaction table with filter
  let q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ? ORDER BY transactions.transaction_date DESC'
  if (req.params.filter_info == "dsc") {
    q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ? ORDER BY transactions.transaction_date DESC'
  } else if (req.params.filter_info == "asc") {
    q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ? ORDER BY transactions.transaction_date ASC'
  }
  const status = "clerk"
    db.query(q, status, (err, results) => {
      if(err) console.error('ERROR', err);
        res.json(results)
      })
})

router.get('/history_table/:filter_info', async (req, res) => {       //API endpoint fot clerk history table with filter
  let q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ? ORDER BY transactions.transaction_date DESC'
  if (req.params.filter_info == "dsc") {
    q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ? ORDER BY transactions.transaction_date DESC'
  } else if (req.params.filter_info == "asc") {
    q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ? ORDER BY transactions.transaction_date ASC'
  }
  const status = "completed"
    db.query(q, status, (err, results) => {
      if(err) console.error('ERROR', err);
        res.json(results)
      })
})

// router.get("/transactions/:signatory_id", async (req,res) => {        //API endpoint get transactions based on 
//   const q = 'SELECT * FROM transactions WHERE signatory_id = ?'
//   const sId = req.params.signatory_id

//   db.query(q, sId, (err, results) => {
//     if(err) console.error('ERROR', err);
//       res.json(results)
//     })
// })

router.put("/update/:transaction_id", async (req,res) => {        //API endpoint for last point in forwarding system. change status to 'completed'
const q = "UPDATE transactions SET transaction_status = ? WHERE transaction_id = ?"
const tId = req.params.transaction_id

db.query(q, ['completed', tId], (err, data) => {
  if(err) console.error('ERROR', err);
  res.json(data)
})

})

module.exports = router;