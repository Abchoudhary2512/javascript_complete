// singleton  
//Object.create
// object literals


//creating a symbol
const mySym = Symbol('hee')
const user={
    name:"ajay",
    age:44,
    [mySym]:"heelo",
    "full name": "abC_choudhary",
    email:"ajay@ggoogl.com "
};

console.log(user.age);
console.log(user["age"])
console.log(user["full name"]);
console.log(user[mySym])

// freeze - no change then entertained
