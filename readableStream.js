var request = require('request');

var result = request('https://app.pluralsight.com');

result.on('data',function(chunk){
    console.log(chunk);

});
result.on('end',function(){
console.log('Jim is dead');
});