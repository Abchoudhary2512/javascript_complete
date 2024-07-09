const myArr = [0,1,2,3,4,5];
//myArr.push(6);
//myArr.pop();
//myArr.unshift(5) // start mein insert hota hai

// console.log(myArr.includes(42))
// console.log(myArr.indexOf(3))
// console.log(myArr.includes(42))


// const newArr = myArr.join()  // string mein convert hogya


// console.log(myArr)

//slice and splice

// console.log("A",myArr);
// const mya1 = myArr.slice(1,3)
// console.log(mya1)


const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 1 item, add "Lemon" and "Kiwi"
// fruits.splice(1, 1, "Lemon", "Kiwi");
// fruits.splice(1)
// console.log(fruits)
// fruits.slice(3)
// console.log(fruits)


// slice methods mein original array mein change nhi hota
// splice mein overwrite hota hai original array

const a = [ 'zero','one','two']
const b = ['new ','lenove','ideapad']
// a.push(b);
// console.log(a[3][2]);;
//use concat

// const c = a.concat(b);
// console.log(c);

const c = [...a,...b];///using spread
console.log(c);

//nested array --> flat (all elements can accessible)
