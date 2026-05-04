const express = require("express");
require("dotenv").config();

const db = require("./db/connection");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const matchRoutes = require("./routes/matchRoutes");
const requestRoutes = require("./routes/requestRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const ratingRoutes= require("./routes/ratingRoutes");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/match", matchRoutes);
app.use("/request", requestRoutes);
app.use("/session", sessionRoutes);
app.use("/rating", ratingRoutes);


app.get("/", (req, res) => {
  res.send("Welcome to the Skill Exchange home page!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});