require('./lib/file3');
var plik1 = require('./file1');
// require('./file2');

console.log(plik1.x);




var server = require('http');

server.createServer(function (request, response) {
    var url = request.url;
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // response.end('Hello world!');

    console.log(url);
    response.end(url);

}).listen(8001);

console.log('Server is listening at address: 127.0.0.1:8001');

