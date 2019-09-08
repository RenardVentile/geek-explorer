const express = require("express");
const router = express.Router();
const db = require("../config");

router.get("/:category/cheat-sheets", (req, res) => {
  const category = req.params.category;
  db.query(
    "SELECT * from category LEFT JOIN cheat_sheet ON category.id = cheat_sheet.categoryId WHERE category.label = ?",
    category,
    (err, categories) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
          detail: err.sql
        });
      }
      res.status(200).json(categories);
    }
  );
});

module.exports = router;
