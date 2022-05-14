const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>This is CodeWithWaqar</h1><p>Hey! This is the way to rock the work.</p>');
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});