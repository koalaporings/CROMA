const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.post("/checkUser", async (req,res) => {              //API endpoint to check if user is in database
    const email = req.body.email
    console.log(req.body)
    console.log(email)
    const values = await new Promise((resolve) => {
        db.query("SELECT * FROM users WHERE email = ?", email, (err, data) => {
            if(err) console.log("ERROR", err)
            resolve(data)
        })
    })
    console.log(values)

    if(values.length === 0){
        db.query("INSERT INTO users (`email`, `role`) VALUES (?,?)", [email, 'student'], (err,data) =>{
            if(err) console.log("ERROR", err)
            res.send("Congrats, you've signed up!")
        })
        db.query("INSERT INTO students (`email`) VALUES (?)", [email], (err,data) =>{
            if(err) console.log("ERROR", err)
        })
    }
    else{
        res.send("Huzzah! You've logged in with the email " + values[0].email)
    }
})

router.put("/updateDetails", async (req,res) => {               //API endpoint to update details for student
    const q = 'UPDATE students SET `student_number` = ?, `first_name` = ?, `last_name` = ?, `middle_initial` = ?, `year_level` = ?, `degree_program` = ?, `registered` = ? WHERE user_id = ?'
    const userId = req.body.user_id
    const values = [
        req.body.student_number,
        req.body.first_name,
        req.body.last_name,
        req.body.middle_initial,
        req.body.year_level,
        req.body.degree_program,
        req.body.registered
    ]

    db.query(q, [...values, userId], (err,data) => {
        if(err) console.log("ERROR", err)
    })
    
})

router.get("/getRole/:email", async (req,res) => {              //API endpoint to get role using email
    const q = "SELECT role FROM users WHERE email = ?"
    const email = req.params.email

    db.query(q, email, (err,data) => {
        if(err) console.log("ERROR", err)
        res.json(data)
    })
} )


module.exports = router;