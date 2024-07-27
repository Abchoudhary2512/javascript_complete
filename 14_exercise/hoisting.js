var myVar;
console.log(myVar); // Output: undefined
myVar = 10;
console.log(myVar); // Output: 10


// function hoisting
myfun();
function myfun(){
    console.log("hii there")
}



//let and const 
console.log(myLet); // Output: ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;
console.log(myLet); // Output: 20
