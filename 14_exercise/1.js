function second() {
  console.log("Second");
}
function First() {
  second();
}
function foo() {
  first();
}
foo();
