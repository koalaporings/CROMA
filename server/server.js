const express = require('express');
const app = express();

const cors = require('cors');
const db = require('./database').databaseConnection;
const adminRoute = require('./routes/admin')
const clerkRoute = require('./routes/clerk')
const signatoryRoute = require('./routes/signatory')
const studentRoute = require('./routes/student')
const announcementRoute = require('./routes/announcement')
const notificationRoute = require('./routes/notification')
const formRoute = require('./routes/form')

app.use(express.json());
app.use(cors())



app.get("/db", (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if(err) console.error('ERROR', err);
    res.json(results)
  })
})


app.get("/db/get/:user_id", (req, res) => {
  const q = 'SELECT * FROM users WHERE user_id = ?'
  const userId = req.params.user_id 

  db.query(q, userId, (err, data) => {
    if(err) console.error('ERROR', err);
    res.json(data)
  })
})

app.post('/db/add', (req, res) => {
  const q = 'INSERT INTO users (`first_name`, `last_name`, `email`, `password`) VALUES (?)'
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.password,]
  

  db.query(q,[values], (err, data) => {
    if(err) console.error('ERROR', err);
  })
})

app.put('/db/update/:id', (req, res) => {
  const userId = req.params.id
  const q = 'UPDATE users SET `first_name` = ?, `last_name` = ?, `email` = ?, `password` = ? WHERE user_id = ?'
  const values = [
  req.body.first_name,
  req.body.last_name,
  req.body.email,
  req.body.password,
]

  db.query(q,[...values, userId], (err, data) => {
    if(err) console.error('ERROR', err);
  })
})

app.delete('/db/delete/:id', (req, res) => {
  const userId = req.params.id
  const q = 'DELETE FROM users WHERE user_id = ?'

  db.query(q, [userId], (err, data) => {
    if(err) console.error('ERROR', err);
  })
})

app.get('/db/logintest/:user_id', (req, res) => {
  const q = 'SELECT role FROM user_roles WHERE user_id = ?'
  const userId = req.params.user_id
  
  db.query(q, userId, (err, data) => {
    if(err) console.error('ERROR', err);
    res.json(data)
  })
})

app.use('/admin_api', adminRoute);
app.use('/clerk_api', clerkRoute);
app.use('/signatory_api', signatoryRoute);
app.use('/student_api', studentRoute);
app.use('/announcement_api', announcementRoute);
app.use('/notification_api', notificationRoute);
app.use('/form_api', formRoute);


app.listen(5000, () => {console.log("Server started on port 5000")})