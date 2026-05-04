const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");


router.get("/admin/users", authMiddleware, roleMiddleware, (req, res) => {

  const sql = "SELECT id, name, email, role FROM users";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send("Server error");
    }

    res.json(result);
  });

});

router.delete("/user/:id", authMiddleware, roleMiddleware("admin"), (req, res) => {

  const userId = req.params.id;

  const sql = "DELETE FROM users WHERE id = ?";

  db.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).send("Error deleting user");
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("User not found");
    }

    res.send("User deleted by admin");
  });

});

router.get("/requests", authMiddleware, roleMiddleware("admin"), (req, res) => {

  const sql = `
    SELECT r.id, r.status, 
           u1.name AS senderName, 
           u2.name AS receiverName
    FROM requests r
    JOIN users u1 ON r.senderId = u1.id
    JOIN users u2 ON r.receiverId = u2.id
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send("Error fetching requests");
    }

    res.json(result);
  });

});


module.exports = router;

 