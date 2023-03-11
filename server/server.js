const express = require('express');
const app = express();

const mysql = require('mysql2');
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'croma'
});

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

app.get("/api", (req, res) => {
    res.json({"users": ["userOne, userTwo, userThree, userFour"]})
})

//testing for webhook, dun mind comment hehe

app.listen(5000, () => {console.log("Server started on port 5000")})