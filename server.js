const http = require('http')

const server = http.createServer((req,res)=>{
    const myhtml = `
    <h1>Hello Bundith DEV</h1>
    <h2>Hello</h2>
    <h2>Hello2</h2>
    <h2>Hello3</h2>
    `
    res.write(myhtml)
    res.end()
})
server.listen(3000,'localhost',()=>{
    console.log("Start in port 3000");
})