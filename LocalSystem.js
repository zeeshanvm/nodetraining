var fs = require('fs');

if(fs.existsSync('temp'))
{
    console.log('removing temp....')
    if(fs.existsSync('temp/kido.txt'))
    {
        fs.unlikeSync('temp/kido.txt');
    }
    fs.rmdirSync('temp');

}
fs.mkdirSync('temp');
if(fs.existsSync('temp'))
{
    console.log('creating directory');
    process.chdir('temp');
    fs.writeFileSync('test.txt','this is some dummy text in dummy test file');
    fs.renameSync('test.txt','kido.txt');
    console.log('kido created');
    console.log('tempdirectory created');
    console.log('file has following data \n' + fs.readFileSync('kido.txt').toString());

}