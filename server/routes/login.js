const { Router } = require('express');

const router = Router();
const db = require('../database').databaseConnection;

router.post("/checkUser", async (req,res) => {
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

router.put("/updateDetails", (req,res) => {
    const values = [
        req.body.student_number,
        req.body.first_name,
        req.body.last_name,
        req.body.middle_initial,
        req.body.year_level,
        req.body.course
    ]
})


module.exports = router;