// // es6 - classes and objects
// // prototyped language (JS)
// // new instances - this,new

// // 4 pillars
// // abstraction // encapsulation inheritance polymorphism

// // object literal

// const user = {
//     username:"temp sur",
//     logIn:5,
//     mail:"tmpo@gmail.com",

//     getUser:function(){
//         console.log("got user details")
//     }



// }
// console.log(user.mail)

// console.log(user.getUser())


// const promiseOne = new Promise(function(){

// })

// const date = new Date()// new is used for new context and used as constructor function

function User(username,id,){
    this.username = username
    this.id = id;//(passed values)
    // return this ---
}

const userOne = new User("ajay",3);
const userOne2 = new User("ajady",3555);
console.log(userOne)
console.log(userOne2)

// if u use the userTwo then u can overwrite the values and using constructor and this keyword 
// we can use the differnt instances and no overwriting takes place
