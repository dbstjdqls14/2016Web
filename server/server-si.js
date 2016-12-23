let io = require('socket.io')(9999);

io.on('connection', (client) => {
    console.log(`클라이언트 접속  ${client.id}`);

    client.emit('welcome message', {message: "welcome"});

    client.on('disconnect', (client) =>{
    console.log(`클라이언트 접속 종료  ${client.id}`);
});
});



setInterval(()=>{
    io.emit('check alive', {message: 'HELLO?'});
}
,1000);