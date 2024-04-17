// server.js

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'demo',
  password: 'demo',
  database: 'UserPhotosApp'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      if (result.length > 0) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid username or password' });
      }
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
