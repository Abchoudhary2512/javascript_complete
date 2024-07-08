//#primitive 
// 7 types: string , number, boolean , null , undefined , symbol ,BigInt;

const id = Symbol('1222');
console.log(typeof id)
// dynamicaally type


//reference types && non primitive - 
// array,objects,functions,

const car = ["tata","hyundai","kia"];
//array


//object
let obj = {
    name:"nwe",
    age:23,
}

const myFunction = function(){
    console.log("heelo ");
}

console.log(typeof myFunction); // object function

//+++++++++++++++++++++++++++++++++++++++++memory


//stack(primitive)
 //, heap(non primitive)