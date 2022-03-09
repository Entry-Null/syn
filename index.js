
const WebSocket = require('ws');

// Establishing Connection 
let sock_cache = []
const PORT = process.env.PORT; 
const ws = new WebSocket.Server({ port: PORT || 3000 });

// Events 
ws.on("connection",function(client){
    console.log('New Connection')
    client.on('message',function(message){
        ws.clients.forEach(function each(cli) {
            if (cli !== ws) {
              client.send(message);
            }
        })
    })
})
