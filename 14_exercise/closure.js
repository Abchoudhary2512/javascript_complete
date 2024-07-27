function outerFunction() {
    let outerVariable = "I am outside!";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const myClosure = outerFunction();
  myClosure(); // Output: "I am outside!"
  
  function counter() {
    let count = 0;
  
    return function() {
      count += 1;
      console.log(count);
    };
  }
  
  const increment = counter();
  increment(); // Output: 1
  increment(); // Output: 2
  increment(); // Output: 3
  

  function greeting(name) {
    return function() {
      console.log("Hello, " + name);
    };
  }
  
  const greetJohn = greeting("John");
  const greetJane = greeting("Jane");
  
  greetJohn(); // Output: "Hello, John"
  greetJane(); // Output: "Hello, Jane"
  

  function display(name1){
    return ()=>{
        console.log("hii guys",name1);
    }

  }

  const first = display("pehla")
  const second = display("second");
  first();
  second();