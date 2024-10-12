const ws = require('ws');
const server = new ws.WebSocketServer({port: 8080});
const client = [];


function getUsername(socket){
    return `user${client.indexOf(socket) + 1}:`
}

function broadcastServer(message,socket){
    client.forEach((el) => {
        if (el !== socket && el.readyState === 1) {
            const username = getUsername(socket);
            el.send(`${username}${message.toString()}`);
        }
    });
}

server.on('connection',(socket) => {

    client.push(socket);
    
    socket.on('message',(message) => {
        const username = getUsername(socket);
        console.log(`${username}${message.toString()}`);
        broadcastServer(message,socket);
    }); 
    
    socket.on("close",() => {
        client.splice(client.indexOf(socket),1);
    });
});

server.on("error",() => {
    console.log("error occured");
})


