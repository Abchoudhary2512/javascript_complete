// foreach return nhi krta

// const num = [1,2,3,4,5,6,7,8,9]
// const ans = num.filter((a)=> a>5
// )
// console.log(ans)


const myNum = [1,2,3,4,5,6,7,8]
// const z = myNum.map((a)=>{
//     return a+12;
// })

const newNums = myNum.map((num)=>num*10).map((a) => a+1)
console.log(newNums)