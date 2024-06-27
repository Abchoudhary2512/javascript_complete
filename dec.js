//var vs let vs const
//var is old one (try to avoid it)
//let (when need to reassign the values)
//const (!let)
// let x = 12;
// function hacker(x){
//      x = 44;
//      console.log(x);
// }
// console.log(x);
// hacker();


// const x = 12;
// function hacker(x){
//      let x = 44;
//      console.log(x);
// }
// console.log(x);
// hacker();

//always use camelCase in js
// let x = "ajay";
// let y = "bhakar";
// console.log(x+ " "+y )

//string templates
let t = "r";
let n = '33';
let ans = `we have alpha ${t} and number is ${n}`;
console.log(n);
console.log(ans);
console.log(ans.length);
console.log(ans.toLocaleLowerCase());
console.log(ans.toLocaleUpperCase());
console.log(ans.endsWith());
console.log(ans.includes);
// console.log(ans);
// console.log(ans.length);