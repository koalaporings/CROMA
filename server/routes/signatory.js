const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.get("/transactions/:user_id", async (req,res) => {
    const q = 'SELECT DATE_ADD(transaction_date, INTERVAL 8 HOUR) as transaction_date, form_name, transaction_id, transaction_status FROM transactions WHERE signatory_id = ? and transaction_status = "ongoing"'
    const userId = req.params.user_id

    const transaction_values = await new Promise((resolve) => {
      db.query(q, userId, (err, data) => {
        if(err) console.error('ERROR', err);
      resolve(data)
      })
    })

    const values = []

    for(i=0;i<transaction_values.length;i++){

      const transaction_info = await new Promise((resolve) => {
        db.query("SELECT first_name, last_name, degree_program FROM transaction_info WHERE transaction_id = ?", transaction_values[i].transaction_id, (err, data) => {
          if(err) console.error('ERROR', err);
        resolve(data)
        })

    
    })

      values.push({
        transaction_date: transaction_values[i].transaction_date,
        form_name: transaction_values[i].form_name,
        transaction_id: transaction_values[i].transaction_id,
        transaction_status: transaction_values[i].transaction_status,
        name: transaction_info[0].first_name + " " + transaction_info[0].last_name,
        degree_program: transaction_info[0].degree_program
      })
    }
    res.json(values)
    
})

router.put("/approve/:transaction_id", async(req,res) => {
  const userId = req.params.transaction_id
  const q = 'UPDATE transactions SET signatory_id = ?, form_recipients = ? WHERE transaction_id = ?'

  const signatory = await new Promise((resolve) => {
    db.query("SELECT form_recipients FROM transactions WHERE transaction_id = ?", userId, (err, data) => {
      if(err) console.error('ERROR', err);
    resolve(data)
    })})

  let array = signatory[0].form_recipients.split(",").map(Number);
  array.shift()
  let sig = array[0]
  let recipients = array.toString()
  
  db.query(q, [sig, recipients, userId], (err,data) =>{
    if(err) console.error('ERROR', err);
    res.json(data)
  })

})

router.put("/approvetemp/:transaction_id", async(req,res) => {
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

module.exports = router;