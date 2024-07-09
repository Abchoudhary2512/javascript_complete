function sayMyName(){
    console.log("ihihih");
}

//sayMyName(); //execution

function add(a,b,c){
    console.log(a+b+c); 
}

//add(2,3,3)
//add("2",2,2);
//add(2,2,"2")

// function add1(a,b){
//     const result = a+b;
   
//     return result;
//     console.log("is it visible");
// }

// console.log("result is",result)
// // add1(2,3)



//username === undefined or  ! username
// function loginUserMessage(username){

//     if(username === undefined){
//         console.log("Please enter username")
//         return
//     }
//     return `${username} just logged in`;
// }
// const result = loginUserMessage(); // no para then it is undefined
// console.log(result)


//rest and spread operator ...
function calculatePrice(...a){
    return a;
}
console.log(calculatePrice(2,4,5))

//object and function

const user = {
    name:"ajay choudhary",
    age:"21"
}

function handleObject(anyobj){
    console.log(`the name is ${anyobj.name} and the age is ${anyobj.age}`)
}

handleObject(user);