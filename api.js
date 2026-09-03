//building a simple api

const fs = require('fs');
const http = require('http');
const url = require('url');

//server 
const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const productData = JSON.parse(data);



const server = http.createServer((req,res) => {

    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');

    } else if (pathName === '/product') {
        res.end('This is PRODUCT');
      
    } else if (pathName === '/api') {
            res.writeHead(200, {'Content-type':'application/json'});
            res.end(data);
        } 

    else {
        //adding an http status code and header
        res.writeHead(404 , {
            'Content-type' : 'text/html'
        });
        res.end('<h1>Page not found!</h1>');
    }

    
});

server.listen(7000, 'localhost', () => {
    console.log('Server has started listening on port 7000...');
});
