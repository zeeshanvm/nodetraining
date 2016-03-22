var fs = require('fs');
var http = require('http');
http.createServer(function(req,res){

    res.writeHeader(200,{'Content-type':'text/plain'});
    if(res.url === './file.txt')
    {
        fs.createReadStream(_dirname + 'file.txt').pipe(res);
    }
    else{
        res.end('hello world to stupidity of extreem');
    }

}).listen(3000,process.env.IP);
console.log(process.env.port);
console.log(process.env.IP);
console.log("server is running");