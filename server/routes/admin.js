const e = require('express');
const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.get('/approval_table/:filter_info/:filter_course', async (req, res) => {    // API endpoint for Admin approval table and filter
  let q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ? ORDER BY transactions.transaction_date DESC'
  const course = req.params.filter_course
  if (req.params.filter_course == "all"){
    if (req.params.filter_info == "dsc") {
      q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ? ORDER BY transactions.transaction_date DESC'
    } else if (req.params.filter_info == "asc") {
      q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ? ORDER BY transactions.transaction_date ASC'
    }
  }
  else {
    if (req.params.filter_info == "dsc") {
      q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ? AND transaction_info.degree_program = ? ORDER BY transactions.transaction_date DESC'
    } else if (req.params.filter_info == "asc") {
      q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ? AND transaction_info.degree_program = ? ORDER BY transactions.transaction_date ASC'
    }
  }
  const status = "await_approval"
    db.query(q, [status, course], (err, results) => {
      if(err) console.error('ERROR', err);
        res.json(results)
      })
})

router.get('/ongoing_table/:filter_info/:filter_course', async (req, res) => {     // API endpoint for Admin ongoing table and filter
  let q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ? ORDER BY transactions.transaction_date DESC'
  const course = req.params.filter_course
  if (req.params.filter_course == "all"){
    if (req.params.filter_info == "dsc") {
      q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ? ORDER BY transactions.transaction_date DESC'
    } else if (req.params.filter_info == "asc") {
      q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ? ORDER BY transactions.transaction_date ASC'  
    }
  }
  else {
    if (req.params.filter_info == "dsc") {
      q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ? AND transaction_info.degree_program = ? ORDER BY transactions.transaction_date DESC'
    } else if (req.params.filter_info == "asc") {
      q = 'SELECT transactions.transaction_id, transactions.form_name, transactions.transaction_date, CONCAT(transaction_info.first_name," ", transaction_info.last_name) as requester_name FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.transaction_status = ? AND transaction_info.degree_program = ? ORDER BY transactions.transaction_date ASC'  
    }
}
  const status = "ongoing"
    db.query(q, [status, course], (err, results) => {
      if(err) console.error('ERROR', err);
        res.json(results)
      })
})

router.get('/history_table/:filter_info', async (req, res) => {     // API endpoint for Admin history table and filter
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

router.put("/transaction_status/:id", async (req,res) => {          // API endpoint for updating transaction_status and signatory_id
  const q = 'UPDATE transactions SET transaction_status = ?, signatory_id = ?, remarks = ? WHERE transaction_id = ?'
  const status = req.body.transaction_status
  const transactionId = req.params.id

  let remarks = ''
  if(req.body.remarks){
    remarks = req.body.remarks
  }
  

  db.query(q, [status, 3, remarks, transactionId], (err, results) => {
    if(err) console.error('ERROR', err);
    res.json(results)
  })
})

router.get('/get_user/:id', async (req, res) => {                   // API endpoint for fetching the user_id in a specific transactions
  const q = 'SELECT user_id FROM transactions WHERE transaction_id = ?'
  const transaction = req.params.id

  db.query(q, transaction, (err,data) => {
    if(err) console.error('ERROR', err);
    res.json(data)
  })
})

router.put('/changeRole', async (req,res) => {
  const q = "UPDATE users SET role = ? WHERE email = ?"
  const email = req.body.email
  const values = req.body.role
  console.log("heh")

  db.query(q,[values,email], (err,data) => {
    if(err) console.log("ERROR", err)
  })
})

router.get('/getAllUser', (req,res) => {
  const q = "SELECT * from users"

  db.query(q, (err,data) => {
    if(err) console.log("ERROR", err)
    res.json(data)
  })
})

router.delete('/deleteAll', (req,res) => {
  const q = "DELETE FROM announcements; DELETE FROM notifications; DELETE FROM overload_subjects; DELETE FROM signatory; DELETE FROM students; DELETE FROM tracking; DELETE FROM transactions; DELETE FROM transaction_info; DELETE FROM users"

  db.query(q, (err,data) => {
    if(err) console.log("ERROR",err)
  })
})


module.exports = router;