const express = require('express');
const app = express();

const mysql = require('mysql2');
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
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

app.get("/api/database", (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      return;
    }
    console.log('Query results:', results);
    res.json(results)
  });
})

app.get("/db", (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
      if(err) console.error('ERROR', err);
      res.json(results)
    })
})

app.post('/db', (req, res) => {
  const q = 'INSERT INTO users (`first_name`, `last_name`, `email`, `password`) VALUES (?)'
  const values = [req.body.first_name, req.body.last_name, req.body.email, req.body.password]

  db.query(q,[values], (err, data) => {
    if(err) console.error('ERROR', err);
    res.json('User has been added successfully!')
  })
})

app.post('/db/add', (req, res) => {
  const q = 'INSERT INTO users (`first_name`, `last_name`, `email`, `password`) VALUES (?)'
  const values = ['NAME', 'LASTNAME', 'EMAIL@EMAIL.COM', 'PASSWORD']

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

//testing for webhook, dun mind comment hehe

app.listen(5000, () => {console.log("Server started on port 5000")})