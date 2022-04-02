var http = require('http');
var fs = require('fs');

http.createServer(function(req,res)
    {
        var usuario = require('url').parse(req.url,true).query.usuario;
        var senha = require('url').parse(req.url,true).query.senha;

        if(usuario === undefined || senha === undefined){
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('Acesso Negado.\n');
        }else if(usuario == 'aluno' && senha == 'senha'){
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('Acesso Permitido.\n');
        }else{
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('Acesso Negado.\n');
        }
    }).listen(8124);