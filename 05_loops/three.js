const arr = [1,2,3,4,5]
//for of
// for (const i of arr) {
//     console.log(i)
// }

// const greetings = "heelo bhai"
// for (const greet of greetings) {
//     if(greet == ' ') continue;
//     console.log(`Each char is ${greet}`)
    
// }

//maps
const map = new Map();
map.set('In',"India");
map.set("EN","England")

for (const [key,value] of map) {
    console.log(key,':- ',value)
}
//console.log(map)
// object is not iteratable in for of

// const newArr = ["1","2","3"]
// newArr.forEach( (item) =>{
//     console.log(item);
// })
