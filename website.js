const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');
    if (req.url == '/') {
        res.statusCode = 200;
        const content = fs.readFileSync('index.html');
        res.end(content.toString());
    } else if (req.url == '/cww') {
        res.statusCode = 200;
        res.end('<h1>This is CodeWithWaqar</h1><p>Hey! This is the way to rock the work.</p>');
    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>About CodeWithWaqar</h1><p>This is about codewithwaqar.</p>');
    } else {
        res.statusCode = 404;
        res.end('<h1>Not Found</h1><p>Page not found on this server.</p>');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});