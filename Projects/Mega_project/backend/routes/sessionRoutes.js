const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth");


router.post("/", authMiddleware, (req, res) => {

  const { requestId } = req.body;

  // Step 1: Get request details
  const getRequestSql = "SELECT * FROM requests WHERE id = ? AND status = 'accepted'";

  db.query(getRequestSql, [requestId], (err, result) => {
    if (err) {
      return res.status(500).send("Error fetching request");
    }

    if (result.length === 0) {
      return res.status(400).send("Request not accepted or not found");
    }

    const request = result[0];

    // Step 2: Create session
    const insertSql = `
      INSERT INTO sessions (requestId, user1, user2)
      VALUES (?, ?, ?)
    `;

    db.query(insertSql, [requestId, request.senderId, request.receiverId], (err) => {
      if (err) {
        return res.status(500).send("Error creating session");
      }

      res.send("Session created successfully");
    });

  });

});

router.get("/", authMiddleware, (req, res) => {

  const userId = req.user.id;

  const sql = `
    SELECT s.id, s.status, u1.name AS user1Name, u2.name AS user2Name
    FROM sessions s
    JOIN users u1 ON s.user1 = u1.id
    JOIN users u2 ON s.user2 = u2.id
    WHERE s.user1 = ? OR s.user2 = ?
  `;

  db.query(sql, [userId, userId], (err, result) => {
    if (err) {
      return res.status(500).send("Error fetching sessions");
    }

    res.json(result);
  });

});

module.exports = router;