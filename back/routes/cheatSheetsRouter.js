const express = require('express')
const router = express.Router();
const db = require('../config');

router.get('/', (req, res) => {
  db.query('SELECT * from cheat_sheet', (err, cheatSheets) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        detail: err.sql
      });
    }
    res.status(200).json(cheatSheets)
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * from cheat_sheet WHERE id =?', id, (err, cheatSheet) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        detail: err.sql
      });
    }
    else if (cheatSheet.length === 0) {
      return res.status(404).json({
        error: `There is no cheat sheet with id ${id}`
      })
    }
    res.status(200).json(cheatSheet[0])
  })
})

module.exports = router;