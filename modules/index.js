const mymodule = require('./my_module/module')
const now = require('./my_module/module').getCurrenTime

const getCurrenTime =  mymodule.getCurrenTime();
const add =  mymodule.add(3,4);

const number = 5000000;
const formatNumber = mymodule.formatNumber(number)
console.log(formatNumber);

// console.log(getCurrenTime);
// console.log(now());
// console.log(add);