const http = require('http')

const server = http.createServer((req,res)=>{
    const pathname = req.url
    console.log(pathname);
    if(pathname ==="/" || pathname ==="/home"){
        const myhtml =`
        <h1>Hello Homepage</h1>
        <h1>Hello Bundith</h1>
        `
        res.end(myhtml)
    }else if(pathname === "/product"){
        res.end("<h1>Hello Product</h1>")
    }else{
        res.writeHead(404)
        res.end("<h1>Not found</h1>")
    }
})
server.listen(3000,'localhost',()=>{
    console.log("Start in port 3000");
})