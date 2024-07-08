// string interpolation (done by using backticks ` `);
const name = "lenov"
const age = 22;
console.log(`Hello my name is ${name} and the age of the model is ${age}`)

const g = new String("ddffsdfds")
console.log(g[0])
console.log(g.__proto__)
console.log(g.length , g.toUpperCase());

// charAt , indexOf
// substr (star,end) //end excluded
// slice (neagtive values also supported)
// trim and replace

const anyString = "substring"
console.log(anyString.charAt(3),anyString.indexOf("s"));
console.log(anyString.slice(-1));

const newString  = "                        heleo              "
console.log(newString.trim())

const start = "ajay-choudhary"
console.log(start.replace('choudhary','bhakar'))