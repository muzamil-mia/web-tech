var a = 10
function hello() {
  var x  = 10;
  console.log("hello");
  console.log(x);
  console.log(window);
}
let b;
console.log(b);
// console.log(c);

//const cannot be re-initialized
// const c = 100;
// c = 10;  //typeerror: assignment to constant variable 
// console.log(c);
hello();

//var can be re-declared and re-initialized
var a = 100;

//let cannot be re-declared and re-initialized
// let l = 10;
// let l = 20; //syntax error identifier l has already been declared

//const cannot be re-declared and re-initialized
// const c = 10;
// const c = 20; //syntax error c identifier is already been declared

 x = 100;
console.log(x);
console.log(window);