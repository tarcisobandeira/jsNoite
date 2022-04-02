var http = require('http');
var fs = require('fs');

http.createServer(function(req,res)
{
    var name = require('url').parse(req.url,true).query.name;

    if(name === undefined){
        name = 'world';
    }

    if(name == 'burningbird'){
        var file = 'burningBird.jpg';
        fs.stat(file, function(err, stat){
            if(err){
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end("Sorry, Burningbird isn't around right now \n");
            }else{
                var img = fs.readFileSync(file);
                res.contentType = 'image/jpg';
                res.contentLength = stat.size;
            }
        });
    }else{
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Hello ' + name + '\n');
    }
}).listen(8124);