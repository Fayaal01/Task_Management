const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({     
  host: 'localhost',
  user: 'root',
  password: 'Example@2022*',
  database: 'task_management_db',
  
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
    return;
  }
  console.log('✅ Connected to MySQL database');
});

module.exports = db;
