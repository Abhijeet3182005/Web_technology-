const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check user in DB
    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, result) => {
      if (err) {
        return res.status(500).send("Server error");
      }

      // 2. If user not found
      if (result.length === 0) {
        return res.status(400).send("User not found");
      }

      const user = result[0];

      // 3. Compare password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).send("Invalid password");
      }

      // 4. Generate JWT token
      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      // 5. Send response
      res.json({
        message: "Login successful",
        token: token
      });
    });

  } catch (error) {
    res.status(500).send("Server error");
  }
});



router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // hash password 
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert into DB
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    db.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).send("Error saving user");
      }

      res.send("User registered successfully");
    });

  } catch (error) {
    res.status(500).send("Server error");  
  }
});


module.exports = router;