const http = require('http')
const server=http.createServer((req,res)=>{
    res.end("hey the server is running!");
});

server.listen(8000,'127.0.0.1',()=>{
    console.log("server is running");
});