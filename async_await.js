const connect = true //if connected internet
const url1 = "bundit.com/file1.json"
const url2 = "bundit.com/file2.json"
const url3 = "bundit.com/file3.json"
const url4 = "bundit.com/file4.json"
function downloading(url) {
    return new Promise(function(resolve,reject){
        console.log("Downloading...");
        setTimeout(() => {
            if(connect){
                resolve(`Download ${url} completed`)
            }else{
                reject('ERRO!!!')
            }
        },2000);
    })
}

async function start() {
    // Stept:1
    await downloading(url1).then(function(result){
        console.log(result);
    })
    // Stept:2
    await downloading(url2).then(result=>{
        console.log(result);
    })
    // Stept:3
    await downloading(url3).then(result=>{
        console.log(result);
    // Stept:4
        return downloading(url4)
    }).then(result=>{
        console.log(result);
    })
}
start()