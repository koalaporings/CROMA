const { Router } = require('express');
const jwt = require('jsonwebtoken');

const router = Router();
const db = require('../database').databaseConnection;

function parseJwt (token) {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

router.get("/transactions/:user_id/:filter_info", async (req,res) => {        //API endpoint to get transaction details for a student with filter
  let q = 'SELECT DATE_ADD(transaction_date, INTERVAL 8 HOUR) as transaction_date, form_name, transaction_id, transaction_status FROM transactions WHERE user_id = ? and transaction_status = "ongoing" ORDER BY transaction_date DESC'
    if(req.params.filter_info == 'dsc'){
      q = 'SELECT DATE_ADD(transaction_date, INTERVAL 8 HOUR) as transaction_date, form_name, transaction_id, transaction_status FROM transactions WHERE user_id = ? and transaction_status = "ongoing" ORDER BY transaction_date DESC'
    } else if(req.params.filter_info == 'asc'){
      q = 'SELECT DATE_ADD(transaction_date, INTERVAL 8 HOUR) as transaction_date, form_name, transaction_id, transaction_status FROM transactions WHERE user_id = ? and transaction_status = "ongoing" ORDER BY transaction_date ASC'
    }
    const userId = req.params.user_id
    db.query(q, userId, (err, results) => {
      if(err) console.error('ERROR', err);
      res.json(results)
    })
    
})

router.get("/transaction_history/:user_id/:filter_info", async (req,res) => {       //API endpoint to get transaction history for a student with filter
  let q = 'SELECT DATE_ADD(transaction_date, INTERVAL 8 HOUR) as transaction_date, form_name, transaction_id, transaction_status FROM transactions WHERE user_id = ? and transaction_status = "completed" ORDER BY transaction_date DESC'
    if(req.params.filter_info == 'dsc'){
      q = 'SELECT DATE_ADD(transaction_date, INTERVAL 8 HOUR) as transaction_date, form_name, transaction_id, transaction_status FROM transactions WHERE user_id = ? and transaction_status = "completed" ORDER BY transaction_date DESC'
    } else if(req.params.filter_info == 'asc'){
      q = 'SELECT DATE_ADD(transaction_date, INTERVAL 8 HOUR) as transaction_date, form_name, transaction_id, transaction_status FROM transactions WHERE user_id = ? and transaction_status = "completed" ORDER BY transaction_date ASC'
    }
    const userId = req.params.user_id
    db.query(q, userId, (err, results) => {
      if(err) console.error('ERROR', err);
      res.json(results)
    })
    
})

router.get("/transaction_details/:id", async (req,res) => {       //API endpoint to get a specific transaction
    const q = 'SELECT * FROM transaction_info INNER JOIN transactions ON transactions.transaction_id = transaction_info.transaction_id WHERE transaction_info.transaction_id = ?'
    const userId = req.params.id

    const details = await new Promise((resolve) => {
      db.query(q, userId, (err, data) => {
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
    else if (details[i].transaction_status == "ongoing"){
      status = "Processing"
    }

    details[i].transaction_status = status
  
    values.push(details[i])
    }
    
    res.json(values)
})

router.get("/getDetails/:id", async (req,res) => {        //API endpoint to get the details of a student
  const q = "SELECT * FROM students WHERE user_id = ?"
  const id = req.params.id

  db.query(q, id, (err,data) => {
    if(err) console.log("ERROR", err)
    res.json(data)
  })

})

router.put("/updateToken", async (req,res) => {
  const q = "UPDATE users SET(`token`) VALUES (?) WHERE email = ?"
  const token = req.body.token
  const email = req.body.email

  db.query(q, [token, email], (err,data) => {
    if(err) console.log("ERROR", err)
  })
})

router.get("/getToken/:email", async (req,res) => {
  const q = "SELECT token FROM users WHERE email = ?"
  const email = req.params.email

  db.query(q, email, (err,data) => {
    if(err) console.log("ERROR", err)
    res.send(data)
  })
})


module.exports = router;