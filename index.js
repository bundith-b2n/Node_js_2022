// // Blocking
const fs = require('fs')
// // read file
// const data = fs.readFileSync('file/input.txt','utf-8')
// console.log(data);
// // wrait file
// const data_set = `${data} Hello\n\n time is ${new Date}`
// const write_data = fs.writeFileSync('file/input.txt',data_set)
// console.log("Write completed");

// Non Blocking
fs.readFile("file/input.txt",'utf-8',(err,data)=>{
    if (err) return console.log(err);
    const outputText = `Hello Node.js \n${data}\nWrite time is ${new Date()}`
    fs.writeFile('file/output.text',outputText,err=>{
        if (err) return console.log(err);
        console.log("Writed !!!!");
    })
})