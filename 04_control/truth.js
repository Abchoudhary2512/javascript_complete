const userEmail = "ajay@chat.gmail.com"
if(userEmail){
    console.log(`got email`)
}
else{
    console.log(`not`)
}

//falsy values
// false, 0 ,-0,BigInt 0n,
// "",null, undefined,NaN 

/// nullish coalescing operator (??) ; null undefuine

let a;
//a = 6 ?? 10;
//a = null ?? 10;
// a = undefined ?? null  // null

console.log(a);

// ternary operator
//condition ? true : false;
const a1 = 12;
a1>=2?console.log("treu"):console.log("kkk");//"wriong"
