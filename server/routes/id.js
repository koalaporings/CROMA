const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.get("/student_id/:email", (req,res) => {             //API endpoint to get student id from email
    const email = req.params.email
    // const q = "SELECT * from students INNER JOIN signatory ON students.user_id=signatory.user_id where email = ?"
    const q = "SELECT * FROM (SELECT user_id, email FROM students UNION ALL SELECT user_id, email FROM signatory) as users WHERE email = ?"

    
    db.query(q, email, (err,data) => {
        if(err) console.log("ERROR", err)
        console.log('yes')
        console.log(data)
        res.send(data)

    })
})

router.get("/signatory_id/:email", (req,res) => {           //API endpoint to get signatory id from email
    const email = req.params.email
    const q = "SELECT * from signatories where email = ?"
    db.query(q, email, (err,data) => {
        if(err) console.log("ERROR", err)
        res.send(data)
    })
})

router.get("/admin_id/:email", (req,res) => {               //API endpoint to admin id from email
    const email = req.params.email
    const q = "SELECT * from admin where email = ?"
    db.query(q, email, (err,data) => {
        if(err) console.log("ERROR", err)
        res.send(data)
    })
})

router.get("/clerk_id/:email", (req,res) => {               //API endpoint to get clerk id from email
    const email = req.params.email
    const q = "SELECT * from clerk where email = ?"
    db.query(q, email, (err,data) => {
        if(err) console.log("ERROR", err)
        res.send(data)
    })
})



module.exports = router;