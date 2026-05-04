// Import required modules
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

// Create app
const app = express();
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mananger", // replace with your MySQL password
    database: "studentdb"
});

// Connect to database
db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL");
    }
});


// ================= CRUD OPERATIONS ================= //

// 1. CREATE (Insert Student)
app.post("/students", (req, res) => {
    const { name, age, course } = req.body;

    const sql = "INSERT INTO students (name, age, course) VALUES (?, ?, ?)";
    
    db.query(sql, [name, age, course], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Student added successfully");
        }
    });
});


// 2. READ (Get All Students)
app.get("/students", (req, res) => {
    db.query("SELECT * FROM students", (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});


// 3. UPDATE (Update Student by ID)
app.put("/students/:id", (req, res) => {
    const { name, age, course } = req.body;
    const { id } = req.params;

    const sql = "UPDATE students SET name=?, age=?, course=? WHERE id=?";
    
    db.query(sql, [name, age, course, id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Student updated successfully");
        }
    });
});


// 4. DELETE (Delete Student by ID)
app.delete("/students/:id", (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM students WHERE id=?";
    
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Student deleted successfully");
        }
    });
});


// ================= START SERVER ================= //
app.listen(3000, () => {
    console.log("Server running on port 3000");
});