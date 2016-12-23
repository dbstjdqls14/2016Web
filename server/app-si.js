let socket = io.connect('http://localhost:9999');

socket.on('welcome message', (data) => {
    document.write(data.message + '<br>');
    socket.disconnect();
}); 
socket.on('check alive', (data) => {
    console.log(data.message);
});

// socket.on('connection', (socket) => {
//     console.log("서버와 연결되었습니다.");
// });