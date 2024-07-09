// const user ={
//     name:"steve",
//     price:212,
//     welcomeMessage: function(){
//         console.log(`${this.name}  , welcome sir`)
//         //console.log(this);
    
//     }

// }

// //console.log(this);

// // user.welcomeMessage()
// // user.name = "new"
// // user.welcomeMessage()

// // function chai(){
// //     console.log(this);
// // }

// // chai()

// // const chai = () =>{
// //     //rest of same
// //     console.log(this)
// // }
// // chai()

// // pure arrow function
 
// const addTwo = (a,b) =>{
//     return a+b;
// }

// //() = no need of return
// // {
// //     return likhna pdea
// // }
// console.log(addTwo(3,4))


// IIFE (immediately invoked function expression)

(function chai(){
    console.log(`db connected`);

})();
// chai()
// ; needed to stop this
//using arrow iife
((name) => {
    console.log(`db connected sir ${name}`);

})('ajay')