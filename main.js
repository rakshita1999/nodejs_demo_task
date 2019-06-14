var Downloader = require("./downloader");

// const Downloader=require('./downloader.js');
var myargv = process.argv.slice(2);


var downloader = new Downloader(myargv,file_size);

downloader.start();
