const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const authMiddleware = require("../middleware/auth");

router.get("/match", authMiddleware, (req, res) => {

  // Step 1: Get logged-in user's skillsWanted
  const getUserSql = "SELECT skillsWanted FROM users WHERE id = ?";

  db.query(getUserSql, [req.user.id], (err, userResult) => {
    if (err) {
      return res.status(500).send("Error fetching user");
    }

    const mySkillsWanted = userResult[0].skillsWanted;

    // Step 2: Check if skills exist
    if (!mySkillsWanted) {
      return res.status(400).send("Please add skills first");
    }

    // Step 3: Take only first skill (simple logic)
    const firstSkill = mySkillsWanted.split(",")[0].trim();

    // Step 4: Find matching users
    const matchSql = `
      SELECT id, name, skillsOffered, skillsWanted
      FROM users
      WHERE skillsOffered LIKE ? AND id != ?
    `;

    db.query(matchSql, [`%${firstSkill}%`, req.user.id], (err, result) => {
      if (err) {
        return res.status(500).send("Error finding matches");
      }

      res.json(result);
    });

  });

});


module.exports = router;