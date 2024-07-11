const num =[1,2,4]
const ans = num.reduce(function (acc,currVal) {
    console.log(`acc is ${acc} and curr_val is ${currVal}`)
    return acc+ currVal;
},0)
console.log(ans)