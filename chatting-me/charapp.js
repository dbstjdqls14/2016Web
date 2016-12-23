let socket = io.connect('http://localhost:9299');

let whatname = "user1";

socket.on('check alive', (data) => {
    $("#history").val(data.message);
});

socket.on('CN',(Cn) => {
    whatname = Cn.Cn;
});

$("#go").click( function(){

    socket.emit('chat', {name: whatname,message: $("#chatting").val()});
   // socket.emit('name', {name: whatname} );
});

socket.on('rech', (data)=> {
    
    $("#history").val(data.message);
    
});
