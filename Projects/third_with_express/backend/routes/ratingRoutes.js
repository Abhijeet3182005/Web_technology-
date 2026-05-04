const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth");


router.post("/", authMiddleware, (req, res) => {

  const { sessionId, receiverId, rating } = req.body;
  const giverId = req.user.id;

  // basic validation
  if (rating < 1 || rating > 5) {
    return res.status(400).send("Rating must be between 1 and 5");
  }

  const sql = `
    INSERT INTO ratings (sessionId, giverId, receiverId, rating) VALUES (?, ?, ?, ?)`;

  db.query(sql, [sessionId, giverId, receiverId, rating], (err) => {
    if (err) {
      return res.status(500).send("Error submitting rating");
    }

    res.send("Rating submitted successfully");
  });

});


router.get("/:userId", authMiddleware, (req, res) => {

  const userId = req.params.userId;

  const sql = `
    SELECT 
      AVG(rating) AS averageRating,
      COUNT(*) AS totalRatings
    FROM ratings
    WHERE receiverId = ?
  `;

  db.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).send("Error fetching rating");
    }

    res.json(result[0]);
  });

});

module.exports = router;