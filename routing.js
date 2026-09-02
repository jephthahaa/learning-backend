//routing
const fs = require('fs');
const http = require('http');
const url = require('url');

//server 
const server = http.createServer((req,res) => {

    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');

    } else if (pathName === '/product') {
        res.end('This is PRODUCT');

    } else {
        //adding an http status code and header
        res.writeHead(404 , {
            'Content-type' : 'text/html'
        });
        res.end('<h1>Page not found!</h1>');
    }

    
});

server.listen(5000, 'localhost', () => {
    console.log('Server has started listening on port 5000...');
});
