const express = require('express')
const router = express.Router();
const db = require('../config');

router.get('/', (req, res) => {
  db.query('SELECT * from category', (err, categories) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        detail: err.sql
      });
    }
    res.status(200).json(categories)
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * from category WHERE id =?', id, (err, category) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        detail: err.sql
      });
    }
    else if (category.length === 0) {
      return res.status(404).json({
        error: `There is no category with id ${id}`
      })
    }
    res.status(200).json(category[0])
  })
})

module.exports = router;