const http = require("http")
const port=6969

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/plaikn'});
    res.end('penis')
})


server.listen(port,()=>{
    console.log('penis')
})