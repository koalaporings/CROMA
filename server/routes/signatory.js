const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.get("/transactions/:user_id/:filter_info/:filter_course", async (req,res) => {       //API endpoint to get transaction details for a specific signatory_id
  var q = 'SELECT DATE_ADD(transactions.transaction_date, INTERVAL 8 HOUR) as transaction_date, transactions.form_name, transactions.transaction_id, transactions.transaction_status, transactions.approved_by FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.signatory_id = ? and transactions.transaction_status = "ongoing" ORDER BY transactions.transaction_date DESC'
  const userId = req.params.user_id
  console.log(userId)
  const course = req.params.filter_course
  console.log(course)

  if (req.params.filter_course == "all"){
    if (req.params.filter_info == "dsc") {
      console.log("1")
      q = 'SELECT DATE_ADD(transactions.transaction_date, INTERVAL 8 HOUR) as transaction_date, transactions.form_name, transactions.transaction_id, transactions.transaction_status, transactions.approved_by FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.signatory_id = ? and transactions.transaction_status = "ongoing" ORDER BY transactions.transaction_date DESC'
    } else if (req.params.filter_info == "asc") {
      console.log("2")
      q = 'SELECT DATE_ADD(transactions.transaction_date, INTERVAL 8 HOUR) as transaction_date, transactions.form_name, transactions.transaction_id, transactions.transaction_status, transactions.approved_by FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.signatory_id = ? and transactions.transaction_status = "ongoing" ORDER BY transactions.transaction_date ASC'
    }
  }
  else {
    if (req.params.filter_info == "dsc") {
      console.log("3")
      q = 'SELECT DATE_ADD(transactions.transaction_date, INTERVAL 8 HOUR) as transaction_date, transactions.form_name, transactions.transaction_id, transactions.transaction_status, transactions.approved_by FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.signatory_id = ? and transactions.transaction_status = "ongoing" and transaction_info.degree_program = ? ORDER BY transactions.transaction_date DESC'
    } else if (req.params.filter_info == "asc") {
      console.log("4")
      q = 'SELECT DATE_ADD(transactions.transaction_date, INTERVAL 8 HOUR) as transaction_date, transactions.form_name, transactions.transaction_id, transactions.transaction_status, transactions.approved_by FROM transactions INNER JOIN transaction_info ON transactions.transaction_id = transaction_info.transaction_id WHERE transactions.signatory_id = ? and transactions.transaction_status = "ongoing" and transaction_info.degree_program = ? ORDER BY transactions.transaction_date ASC'
    }
  }

  const transaction_values = await new Promise((resolve) => {
    db.query(q, [userId, course], (err, data) => {
      if(err) console.error('ERROR', err);
    resolve(data)
    })
  })

  console.log(transaction_values)
    const values = []

    for(i=0;i<transaction_values.length;i++){

      const transaction_info = await new Promise((resolve) => {
        db.query("SELECT first_name, last_name, degree_program FROM transaction_info WHERE transaction_id = ?", transaction_values[i].transaction_id, (err, data) => {
          if(err) console.error('ERROR', err);
        resolve(data)
        })

    
    })

      values.push({
        approved_by: transaction_values[i].approved_by,
        transaction_date: transaction_values[i].transaction_date,
        form_name: transaction_values[i].form_name,
        transaction_id: transaction_values[i].transaction_id,
        transaction_status: transaction_values[i].transaction_status,
        name: transaction_info[0].first_name + " " + transaction_info[0].last_name,
        degree_program: transaction_info[0].degree_program
      })
    }
    console.log(values)
    res.json(values)

    
})

router.put("/approve", async(req,res) => {
  const transaction_id = req.body.transaction_id
  const signatory_id = req.body.signatory_id
  const q = "UPDATE transactions SET signatory_id = ? WHERE transaction_id = ?"
  db.query(q,[signatory_id, transaction_id],(err,data) => {
    if(err) console.error('ERROR', err);
    res.json(data);
  })

})

router.put("/approve/:transaction_id", async(req,res) => {        //API endpoint to approve transactions
  const userId = req.params.transaction_id
  const q = 'UPDATE transactions SET signatory_id = ? WHERE transaction_id = ?'

  const signatory = await new Promise((resolve) => {
    db.query("SELECT signatory_id FROM transactions WHERE transaction_id = ?", userId, (err, data) => {
      if(err) console.error('ERROR', err);
    resolve(data)
    })})

  let sig = 3;

  if (signatory[0].signatory_id === 3){
    sig = 5; 
  }
  else if (signatory[0].signatory_id === 5){
    sig = 2;
  }

  db.query(q, [sig, userId], (err,data) =>{
    if(err) console.error('ERROR', err);
    res.json(data)
  })

})

router.put("/approvetemp/:transaction_id", async(req,res) => {        //API endpoint to approve transactions
    const userId = req.params.transaction_id
    const q = 'UPDATE transactions SET signatory_id = ? WHERE transaction_id = ?'
  
    const signatory = await new Promise((resolve) => {
      db.query("SELECT signatory_id FROM transactions WHERE transaction_id = ?", userId, (err, data) => {
        if(err) console.error('ERROR', err);
      resolve(data)
      })})
  
    let sig = 3;
  
    if (signatory[0].signatory_id === 3){
      sig = 5; 
    }
    else if (signatory[0].signatory_id === 5){
      sig = 2;
    }
  
    db.query(q, [sig, userId], (err,data) =>{
      if(err) console.error('ERROR', err);
      res.json(data)
    })
  
  })

  router.put("/rejecttemp/:transaction_id", async (req,res) => {          // API endpoint for updating transaction_status and signatory_id
    const q = 'UPDATE transactions SET transaction_status = ?, signatory_id = ?, remarks = ? WHERE transaction_id = ?'
    const status = req.body.transaction_status
    const transactionId = req.params.transaction_id
  
    let remarks = ''
    if(req.body.remarks){
      remarks = req.body.remarks
    }
    
  
    db.query(q, [status, 3, remarks, transactionId], (err, results) => {
      if(err) console.error('ERROR', err);
      res.json(results)
    })
  })

router.get("/getSignatories", async (req,res) => {        //API endpoint to get all signatories
  const q = "SELECT * FROM signatory"

  db.query(q,(err,data) => {
    if(err) console.log("ERROR", err)
    res.json(data)
  })
})

module.exports = router;