const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    res.end('Hello World');
});

server.listen(port, () => {
    console.log("SERVIDOR LISTO A LA ESCUCHA");
});

console.log('Server running at http://127.0.0.1:/3000');