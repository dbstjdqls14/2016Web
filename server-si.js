let io = require('socket.io')(9999);

io.on('connection', (client) => {
    console.log(`${client.id}`);
});
