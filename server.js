const http = require('http');
const fs = require('fs')
const server = http.createServer((req, res) => {
    //this callback is run everytime a request comes to our server

    //set header content type
    res.setHeader('Content-Type', 'text/html');
    //get the path that user visits
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.setHeader('Location', '/about');
            res.statusCode = 301;
            res.end();
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }
    //read html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })
});
server.listen(3000, 'localhost', () => {
    //this callback fires when we start listening
    console.log('listening to request at localhost port no.3000')
});