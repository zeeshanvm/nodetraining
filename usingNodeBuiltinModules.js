var os = require('os');
var gettingStarted = require('./Gettingstarted');

console.log(os.hostname());
console.log(os.freemem()/1024);
var resultHandler = function(err,v,result,waitTime)
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Result we get by doubling " + v +" in " + waitTime + "(ms) is " + result );

    }
};

var result = gettingStarted.evenDoubler(2,resultHandler);


