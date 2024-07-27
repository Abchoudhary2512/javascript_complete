//objects
const person = {
    name:"ajay",
    age:21,
    id:"21bcs006",
    address:{
        city:"makrana",
        landmark:"chotu ram sons",
        district:{
            firstName:"nagaur",
            secondName:"kuchaman City"
        }
    }
}

console.table([person.age,person.id ,typeof person.id])
console.table([person.address.city,person.address.district.firstName ,typeof person.address])

delete person.address

console.table([person.age,person.id ,typeof person.id])
console.table([person.address.city,person.address.district.firstName ,typeof person.address])

//2nd method
// const p = new Object();
// p.name = '2nd one'
// p.id = 21
// console.log(p.name,p.id)



// // using constructor function 
// function Person(name,age,isStudent){
//     this.name = name;
//     this.age =  age;
//     this.isStudent = isStudent;
// }

// const person3 = new Person('Charlie', 22, true);
// console.log(person3.age);