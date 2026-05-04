const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");

router.post("/request", authMiddleware, (req, res) => {

  const { receiverId } = req.body;
  const senderId = req.user.id;

  // prevent sending request to self
  if (senderId === receiverId) {
    return res.status(400).send("You cannot send request to yourself");
  }

  const sql = `
    INSERT INTO requests (senderId, receiverId)
    VALUES (?, ?)
  `;

  db.query(sql, [senderId, receiverId], (err, result) => {
    if (err) {
      return res.status(500).send("Error sending request");
    }

    res.send("Request sent successfully");
  });

});

router.get("/requests", authMiddleware, (req, res) => {

  const userId = req.user.id;

  const sql = `
    SELECT * FROM requests 
    WHERE receiverId = ?
  `;

  db.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).send("Error fetching requests");
    }

    res.json(result);
  });

});


router.put("/request/:id", authMiddleware, (req, res) => {

  const requestId = req.params.id;
  const { status } = req.body; // "accepted" or "rejected"

  // validation
  if (!["accepted", "rejected"].includes(status)) {
    return res.status(400).send("Invalid status");
  }

  const sql = `
    UPDATE requests 
    SET status = ?
    WHERE id = ? AND receiverId = ?
  `;

  db.query(sql, [status, requestId, req.user.id], (err, result) => {
    if (err) {
      return res.status(500).send("Error updating request");
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("Request not found or not authorized");
    }

    res.send(`Request ${status}`);
  });

});

router.get("/sent", authMiddleware, (req, res) => {

  const userId = req.user.id;

  const sql = `
    SELECT r.id, r.status, u.name AS receiverName
    FROM requests r
    JOIN users u ON r.receiverId = u.id
    WHERE r.senderId = ?
  `;

  db.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).send("Error fetching sent requests");
    }

    res.json(result);
  });

});

router.delete("/:id", authMiddleware, (req, res) => {

  const requestId = req.params.id;
  const userId = req.user.id;

  const sql = `
    DELETE FROM requests 
    WHERE id = ? AND senderId = ?
  `;

  db.query(sql, [requestId, userId], (err, result) => {
    if (err) {
      return res.status(500).send("Error deleting request");
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("Request not found or not authorized");
    }

    res.send("Request cancelled successfully");
  });

});


module.exports = router;