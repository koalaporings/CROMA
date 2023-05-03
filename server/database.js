const mysql = require('mysql2');
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: null,
    database: 'croma'
});

db.connect((err) => {
    if (err) {
      return;
    }
  });

  exports.databaseConnection = db;