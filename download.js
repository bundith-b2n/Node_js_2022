const url0 = "bundith.com/file.json"
const url1 = "bundith.com/file1.json"
const url2 = "bundith.com/file2.json"
const url3 = "bundith.com/file3.json"

function downlaoding(url,callback){
    console.log(`downloading ${url}`)
    setTimeout(() => {
        callback(url)
    }, 1000)
}
downlaoding(url0,function(result){
    console.log(`Downloading...${result} completed`);
    downlaoding(url1,function (result) {
        console.log(`Downloading...${result} completed`);
        downlaoding(url2,function(result){
            console.log(`Downloading...${result} completed`);
            downlaoding(url3,function(result){
                console.log(`Downloading...${result} completed`);
            })
        })
    })
})