const http = require('http');


const server = http.createServer((req, res) => {

    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Routing
    if (req.url === "/") {
        res.end("<h1>Welcome to Tiny HTTP Server</h1>");
    }
    else if (req.url === "/about") {
        res.end("<h1>This is About Page</h1>");
    }
    else if (req.url === "/contact") {
        res.end("<h1>This is Contact Page</h1>");
    }
    else {
        res.end("<h1>404 Page Not Found</h1>");
    }
});



const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

