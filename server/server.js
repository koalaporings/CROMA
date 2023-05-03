const express = require('express');
const request = require("supertest");

const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const db = require('./database').databaseConnection;

const adminRoute = require('./routes/admin')
const clerkRoute = require('./routes/clerk')
const signatoryRoute = require('./routes/signatory')
const studentRoute = require('./routes/student')
const announcementRoute = require('./routes/announcement')
const notificationRoute = require('./routes/notification')
const formRoute = require('./routes/form')
const loginRoute = require('./routes/login')

app.use(express.json());
app.use(cors({ origin: true, credentials: true }))
app.use(cookieParser());

process.env.MY_SECRET = 'hello';

const authorization = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, process.env.MY_SECRET);
    req.user_id = data.user_id;
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

app.get("/logout", async (req, res) => {
  
  res.clearCookie("token")
  
})

app.get("/db", (req, res) => {
  
  db.query('SELECT * FROM users', async (err, results) => {
    res.json(results)
  })
})


app.get("/db/get/:user_id", async (req, res) => {
  const q = 'SELECT * FROM users WHERE user_id = ?'
  const userId = req.params.user_id 

  db.query(q, userId, (err, data) => {
    res.json(data)
  })
})

app.post('/db/add', async (req, res) => {
  const q = 'INSERT INTO users (`first_name`, `last_name`, `email`, `password`) VALUES (?)'
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.password,]
  

  db.query(q,[values], async (err, data) => {
  })
})

app.put('/db/update/:id', async (req, res) => {
  const userId = req.params.id
  const q = 'UPDATE users SET `first_name` = ?, `last_name` = ?, `email` = ?, `password` = ? WHERE user_id = ?'
  const values = [
  req.body.first_name,
  req.body.last_name,
  req.body.email,
  req.body.password,
]

  db.query(q,[...values, userId], (err, data) => {
  })
})

app.delete('/db/delete/:id', async (req, res) => {
  const userId = req.params.id
  const q = 'DELETE FROM users WHERE user_id = ?'

  db.query(q, [userId], (err, data) => {
  })
})

// app.get('/db/logintest/:user_id', (req, res) => {
//   const q = 'SELECT role FROM user_roles WHERE user_id = ?'
//   const userId = req.params.user_id
  
//   db.query(q, userId, (err, data) => {
//     if(err) console.error('ERROR', err);
//     res.json(data)
//   })
// })

app.use('/admin_api', adminRoute);
app.use('/clerk_api', clerkRoute);
app.use('/signatory_api', signatoryRoute);
app.use('/student_api', studentRoute);
app.use('/announcement_api', announcementRoute);
app.use('/notification_api', notificationRoute);
app.use('/form_api', formRoute);
app.use('/db/logintest/:user_id', loginRoute);

app.listen(5000, () => {})

module.exports = app