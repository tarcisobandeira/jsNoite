var http = require('http');

http.createServer(function(request,response)
{
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end('Big cool cum\n');
}).listen(8124);

console.log('Servidor rodando http://127.0.0.1:8124/');