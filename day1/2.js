// console.log('2'+2+2);  //'222'

// console.log(2+2+'2'+2+2);
// console.log(2+'2');

// console.log(2/'2'+2+2);

// console.log(2-'2'+2+2);

// console.log(1+'2'+2+2);

function exampleVar() {
    var x = 1;
    if (true) {
        var x = 2;  // Same variable, redeclaring
        console.log(x);  // Output: 2
    }
    console.log(x);  // Output: 2 (var is function-scoped)
}
exampleVar();


// console.log(a);  // ReferenceError: Cannot access 'a' before initialization
// let a = 5; 



    // TDZ starts(Temporal Dead Zone (TDZ) Example)
   // console.log(a);  // ReferenceError: Cannot access 'a' before initialization
    let a1 = 3;  // TDZ ends, 'a' is now initialized
    console.log(a1);  // Output: 3

