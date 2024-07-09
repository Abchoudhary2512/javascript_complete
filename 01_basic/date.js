let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// month - 0 (starting)
let myCreateDate = new Date("2023-01-14");
// console.log(myCreateDate.toLocaleString())

console.log(Math.floor(Date.now()/1000));