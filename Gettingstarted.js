var maxTimeTowait = 520;


var evenDoubler = function(v,callback)
{
    var waitTime = Math.floor(Math.random()*maxTimeTowait);
    if(v%2)
    {
        callback(NewError(" Odd Input"));
    }
    else
    {
        callback(null,v,v*2,waitTime);

    }

};
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

evenDoubler(2,resultHandler);
module.exports.evenDoubler = evenDoubler;
//module.exports.resultHandler = resultHandler;
