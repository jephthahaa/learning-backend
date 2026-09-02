//creating a simple server using node

const fs = require('fs');
const http = require('http');

//server 
const server = http.createServer((req,res) => {
    res.end('Hello from the server!');
});

server.listen(3000, 'localhost', () => {
    console.log('Server has started listening on port 3000...');
});

