const http = require('http');

const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Mission Ready dev team is best team</h1>');
});

server.listen(port, () => {
    console.log('Server running at the port '+port);
});

