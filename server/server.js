const express = require('express');
const app = express();

const mysql = require('mysql2');
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: null,
    database: 'croma'
});

const cors = require('cors');

app.use(express.json());
app.use(cors())

db.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database.');
  });

app.get("/db", (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if(err) console.error('ERROR', err);
    res.json(results)
  })
})



app.get("/db/get/:id", (req, res) => {
  const q = 'SELECT * FROM users WHERE id = ?'
  const userId = req.params.id 

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
  const q = 'UPDATE users SET `first_name` = ?, `last_name` = ?, `email` = ?, `password` = ? WHERE id = ?'
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
  const q = 'DELETE FROM users WHERE id = ?'

  db.query(q, [userId], (err, data) => {
    if(err) console.error('ERROR', err);
  })
})

app.put('/db/update/form_description/:form_id', (req, res) => {
  const transactionId = req.params.form_id
  const q = 'UPDATE forms SET `form_desc` = ? WHERE form_id = ?'
  const values = req.body.form_desc

  db.query(q,[values, transactionId], (err, data) => {
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

app.post('/db/announcement', (req, res) => {
  const q = 'INSERT INTO announcements (`announcement_title`, `announcement_body`) VALUES (?)'
  const values = [
    req.body.announcement_title,
    req.body.announcement_body,]
  

  db.query(q,[values], (err, data) => {
    if(err) console.error('ERROR', err);
  })
})

app.get('/db/form/', (req, res) => {
  const q = 'SELECT * FROM forms'
  
  db.query(q, (err, data) => {
    if(err) console.error('ERROR', err);
    res.json(data)
  })
})

app.listen(5000, () => {console.log("Server started on port 5000")})