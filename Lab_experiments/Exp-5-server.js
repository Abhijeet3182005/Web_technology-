const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use((req, res, next) => {
    console.log("Request received from client");
    next();
});

// Routes
app.get('/', (req, res) => {
    res.send("Welcome to my first Express Server!");
});

app.get('/about', (req, res) => {
    res.send("This is About Page");
});

app.get('/contact', (req, res) => {
    res.send("Contact us at example@gmail.com");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

//23UAM062