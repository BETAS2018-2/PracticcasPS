const http = require('http');

http.createServer((req, res)=>{

    res.writeHead(200, {'content-type': 'application/json'})

    res.write(JSON.stringify({"Tony": "Hola"}));
    
    console.log(req);
    res.end();

}).listen(3000, (err)=>{
    console.log("Server listening on port 3000");
})