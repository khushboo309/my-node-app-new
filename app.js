console.log("Hello, Node.js!");
console.log("My first npm project");

const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello! My CI/CD Node.js application is running.");
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
