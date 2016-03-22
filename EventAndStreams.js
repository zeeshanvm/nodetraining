var EventEmiter = require('events').EventEmitter;
var process = require('process');



var getresource = function(c)
{
    var e = EventEmiter();

    process.nextTick(function(){
        var count = 0;
        e.emit('start');
        var t = setInterval(function(){

            e.emit('data',++count);
            if(count === c)
            {
                e.emit('end',count);
                clearInterval(t);
            }
        },10);
    });
    return(e);
};

var result =new  getresource(5);
result.on('start',function(){
    console.log('started');
});
result.on('data',function(d){
    console.log(' in process');
});
result.on('end',function(t){
    console.log('ended');
});