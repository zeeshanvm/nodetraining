var http = require('http');

var option = {
    host : 'www.google.com',
    port : 80,
    path : '/',
    method : 'GET'
}

var req = http.request(option,function(res){
    console.log(res.statusCode);
    res.pipe(process.stdout);
});

//req.end();
