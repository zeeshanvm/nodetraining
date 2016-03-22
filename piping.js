var request = require('request');
var fs = require('fs');

var s =request('https://app.pluralsight.com');
s.pipe(fs.createWriteStream('abc.html'));