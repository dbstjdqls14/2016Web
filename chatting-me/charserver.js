let io = require('socket.io')(9299);
let chatlog;

io.on('connection', (client) => {
    console.log(`클라이언트 접속  ${client.id}`);

    client.on('disconnect', (client) =>{
    console.log(`클라이언트 접속 종료  ${client.id}`);

    });

    client.on('chat', (data) => {
       if(data.message.split(" ")[0] == '/nickname')
       {
           let ChangeName = data.message.split(" ")[1];
           client.emit('CN',{Cn: ChangeName});
       }

       else {
        chatlog += data.name + '\n' + data.message + '\n';
       }
        });
        // setInterval(()=>{
        // client.emit('rech',{message: chatlog})
        // ,1000});
});



// io.on('chat', (chatting) => {
//     $("#history").append(test + '<br>');
//     $("#history").append("\n");
// });

setInterval(()=>{
    io.emit('check alive', {message: chatlog});
}
,1000);