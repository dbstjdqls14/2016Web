const net = require('net');

let client = net.connect({port:9999, hose:'localhost'}, () => {
    console.log('서버와 연결되었습니다.');
})





// const fs = require("fs");
// fs.watch('./', (event, filename) => {
//     console.log(`event type is: ${event}`);
//     if(filename) {
//         console.log(`filename provided: ${filename}`);
//     }else {
//         console.log('filename not provided');
//     }
// });




// const fs = require("fs");

// let data = fs.readFileSync('app.js','utf-8',(err, data) => {
//     fs.writeFile('appreverse.js',data.split("").reverse().join(""));
// });