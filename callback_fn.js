function calculate(x,y,calback){
    console.log("Calculating...")
    setTimeout(() => {
        const sum = x+y
        calback(sum)
    }, 3000);
}
function display(result){
    console.log('Result:',result)
}
calculate(100,50,display)