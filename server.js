// Experiment no 4

const http =  require('http');

const server = http.createServer((req, res) => {
    const now = new Date();

    res.writeHead(200, {'Content-type':'text/plain'});
    res.write('Hello\n');
    res.write('current date and time' + now.toString());
    res.end();
});

const PORT = 3000;
server.listen(PORT,() => {
    console.log('server running at the http://localhost:${PORT}');
});