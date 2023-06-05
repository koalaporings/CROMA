const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.get("/student_id/:email", (req,res) => {
    const email = req.params.email
    const q = "SELECT * from students where email = ?"
    db.query(q, email, (err,data) => {
        if(err) console.log("ERROR", err)
        res.send(data)
    })
})

router.get("/signatory_id/:email", (req,res) => {
    const email = req.params.email
    const q = "SELECT * from signatories where email = ?"
    db.query(q, email, (err,data) => {
        if(err) console.log("ERROR", err)
        res.send(data)
    })
})

router.get("/admin_id/:email", (req,res) => {
    const email = req.params.email
    const q = "SELECT * from admin where email = ?"
    db.query(q, email, (err,data) => {
        if(err) console.log("ERROR", err)
        res.send(data)
    })
})

router.get("/clerk_id/:email", (req,res) => {
    const email = req.params.email
    const q = "SELECT * from clerk where email = ?"
    db.query(q, email, (err,data) => {
        if(err) console.log("ERROR", err)
        res.send(data)
    })
})



module.exports = router;