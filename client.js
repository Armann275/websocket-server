const ws = require('ws');
const connection = new ws('ws://localhost:8080');
connection.on("open",() => {
    console.log("connected");
    
    process.stdin.on('data',(data) => {
        connection.send(data.toString().trim());
    });
});

connection.on('message', (data,) => {
    process.stdout.write(`${data}\n`);
});
    
connection.on('error', function(e) {
    console.log("error occured");
});
