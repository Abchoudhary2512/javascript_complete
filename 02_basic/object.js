//const tinderUser = new Object()

const tinderUser = {};
tinderUser.id = "1";
tinderUser.name = "steve";
// console.log(tinderUser)

const user = {
  name: "sam don",
  fullname: {
    first: "sam",
    last: "don",
  },
};

console.log(user.fullname.first);

// object concat
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
//const obj3 = Object.assign({},obj1,obj2);

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
  {
    id: 1,
    email: "temp@gmail.com",
  },
];

// ===============++++++++++ Destructuring +++++++
const course = {
  name: "hind",
price :"0003"
};
//course.courseIns

const {price : p} = course 
console.log(p)