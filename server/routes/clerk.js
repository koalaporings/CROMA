const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.get("/transactions", async (req,res) => {
    const q = 'SELECT * FROM transactions WHERE transaction_status = ?'
    const status = req.params.transaction_status

    db.query(q, status, (err, results) => {
      if(err) console.error('ERROR', err);
        res.json(results)
      })
})

router.get("/transactions/:signatory_id", async (req,res) => {
  const q = 'SELECT * FROM transactions WHERE signatory_id = ?'
  const sId = req.params.signatory_id

  db.query(q, sId, (err, results) => {
    if(err) console.error('ERROR', err);
      res.json(results)
    })
})

router.put("/update/:transaction_id", async (req,res) => {
const q = "UPDATE transactions SET transaction_status = ? WHERE transaction_id = ?"
const tId = req.params.transaction_id

db.query(q, ['completed', tId], (err, data) => {
  if(err) console.error('ERROR', err);
  res.json(data)
})

})

module.exports = router;