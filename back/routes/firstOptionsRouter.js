const express = require('express')
const router = express.Router();
const db = require('../config');

router.get('/', (req, res) => {
  db.query('SELECT * from first_option', (err, firstOptions) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        detail: err.sql
      });
    }
    res.status(200).json(firstOptions)
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * from first_option WHERE id =?', id, (err, firstOptions) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        detail: err.sql
      });
    }
    else if (firstOptions.length === 0) {
      return res.status(404).json({
        error: `There is no option with id ${id}`
      })
    }
    res.status(200).json(firstOptions[0])
  })
})

module.exports = router;