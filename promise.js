const connect = true //if connected internet
const url1 = "bundit.com/file1.json"
const url2 = "bundit.com/file2.json"
const url3 = "bundit.com/file3.json"
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
// promise Hell
// downloading(url1).then(result=>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Good bye 😁!!!");
// })

// promise Then
// downloading(url1).then(function(result){
//     console.log(result);
//     downloading(url2).then(function(result){
//         console.log(result);
//     })
// })

downloading(url1).then(function(result){
  console.log(result);
  return downloading(url2)
}).then(function(result){
    console.log(result);
    return downloading(url3)
})