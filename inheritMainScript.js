var  Resource = require ('./ineritingdemo');
var r = new Resource(5);
r.on('start',function(){

    console.log("im getting started");
});
r.on('data',function(d){
console.log("data is recieved");
});
r.on('end',function(t){
    console.log("end of story")

});