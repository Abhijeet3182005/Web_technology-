const express = require('express');
const app = express();
const PORT = 3001;

// Home Route
app.get('/', (req, res) => {
    res.send("Welcome to Dynamic Routing Example");
});

// Dynamic Route - Single Parameter
app.get('/user/:name', (req, res) => {
    const userName = req.params.name;
    res.send(`Hello, ${userName}!`);
});

// Dynamic Route - Multiple Parameters
app.get('/product/:id/:category', (req, res) => {
    const productId = req.params.id;
    const category = req.params.category;

    res.send(`Product ID: ${productId}, Category: ${category}`);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// 23UAM062