const mysql = require('mysql2');
const db = mysql.createConnection({
    user: 'admin',
    host: 'ocs-ars-db.cs1vvpvzmt1b.ap-southeast-2.rds.amazonaws.com',
    password: 'croma123',
    database: 'croma'
});

db.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log("Connected to database")
  });

  exports.databaseConnection = db;