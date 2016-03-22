var http = require('http');
var socket = require('socket.io');
var fs =require('fs');

var handler = function(req,res)
{
    fs.readFile('index.abc.html',function(err,data)
    {

        if(err)
        {
            console.log('there is some error')
        }
        else{

            res.writehead(200);
            res.end(data);
        }
    });

};
var app = http.createServer(handler);
var io = socket.listen(app);

io.sockets.on('connection',function(infodata){
    setInterval(function(){
        console.log("establishing connection");
        var timestamp = Date.now();
        infodata.emit('Timer',timestamp);


    },1000);
    io.sockets.on('submit',function(datarecieving){
    console.log("here is your requested data"+datarecieving);

    });

});
app.listen(8080);
console.log('server running');
