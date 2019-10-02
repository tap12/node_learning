var server = require('http');

server.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello world!');

}).listen(8001);

console.log('Server is listening at address: 127.0.0.1:8001');

