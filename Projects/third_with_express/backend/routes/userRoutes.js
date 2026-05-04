const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");

router.get("/users", authMiddleware, (req, res) => {

  const sql = `
    SELECT id, name, email, skillsOffered, skillsWanted 
    FROM users
    WHERE id != ?
  `;

  db.query(sql, [req.user.id], (err, result) => {
    if (err) {
      return res.status(500).send("Error fetching users");
    }

    res.json(result);
  });

});



 
router.put("/skills", authMiddleware, (req, res) => {
  const { skillsOffered, skillsWanted } = req.body;

  const sql = `
    UPDATE users 
    SET skillsOffered = ?, skillsWanted = ?
    WHERE id = ?
  `;

  db.query(sql, [skillsOffered, skillsWanted, req.user.id], (err, result) => {
    if (err) {
      return res.status(500).send("Error updating skills");
    }

    res.send("Skills updated successfully");
  });
});



router.get("/profile", authMiddleware, (req, res) => {

  const sql = "SELECT id, name, email, role FROM users WHERE id = ?";

  db.query(sql, [req.user.id], (err, result) => {
    if (err) {
      return res.status(500).send("Server error");
    }

    res.json(result[0]);
  });

});

router.put("/profile", authMiddleware, (req, res) => {

  const { name } = req.body;

  const sql = "UPDATE users SET name = ? WHERE id = ?";

  db.query(sql, [name, req.user.id], (err, result) => {
    if (err) {
      return res.status(500).send("Error updating profile");
    }

    res.send("Profile updated successfully");
  });

});


router.put("/change-password", authMiddleware, async (req, res) => {

  const { oldPassword, newPassword } = req.body;

  try {
    // 1. Get current user
    const sql = "SELECT * FROM users WHERE id = ?";

    db.query(sql, [req.user.id], async (err, result) => {
      if (err) {
        return res.status(500).send("Server error");
      }

      const user = result[0];

      // 2. Compare old password
      const isMatch = await bcrypt.compare(oldPassword, user.password);

      if (!isMatch) {
        return res.status(400).send("Old password incorrect");
      }

      // 3. Hash new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // 4. Update password
      const updateSql = "UPDATE users SET password = ? WHERE id = ?";

      db.query(updateSql, [hashedPassword, req.user.id], (err) => {
        if (err) {
          return res.status(500).send("Error updating password");
        }

        res.send("Password updated successfully");
      });

    });

  } catch (error) {
    res.status(500).send("Server error");
  }

});



router.delete("/", authMiddleware, (req, res) => {

  const userId = req.user.id;

  const sql = "DELETE FROM users WHERE id = ?";

  db.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).send("Error deleting account");
    }

    res.send("User deleted successfully");
  });

});

router.get("/skills", authMiddleware, (req, res) => {

  const userId = req.user.id;

  const sql = ` 
    SELECT skillsOffered, skillsWanted 
    FROM users 
    WHERE id = ?
  `;

  db.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).send("Error fetching skills");
    }

    res.json(result[0]);
  });

});

router.get("/:id", authMiddleware, (req, res) => {

  const userId = req.params.id;

  const sql = `
    SELECT id, name, skillsOffered, skillsWanted 
    FROM users 
    WHERE id = ?
  `;

  db.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).send("Error fetching user");
    }

    if (result.length === 0) {
      return res.status(404).send("User not found");
    }

    res.json(result[0]);
  });

});


 
module.exports = router; 