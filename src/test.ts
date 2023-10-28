const express = require('express');
const router = express.Router();
const connection = require('../db'); // Import your MySQL connection

// Retrieve data from the database
router.get('/data', (req, res) => {
  connection.query('SELECT * FROM your_table', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(200).json(results);
  });
});

module.exports = router;

