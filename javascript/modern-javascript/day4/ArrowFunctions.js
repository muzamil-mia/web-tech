//let func = (arg1, arg2, ...func, argN); = > XPathExpression={;}
//the above function is same as
/*
let func = function(arg1, arg2,..,argN) {
  return expression;
};
*/
/*
let sum = (a, b) => a + b;
alert(sum(2,3));
*/
//if we have only one argument, then parentheses around parameter can be omitted, making that even shorter
/*
let double = n => n * 2;
//roughly the same as let double = function(n) {return n * 2;}
alert(double(2));
*/
//if there are no arguments, parentheses are empty, but they must be present
/*
let say = () => alert("hello");
say();
*/
//Arrow function can be used in the same way as function expression for instance, to dynamically create a function
/*
let age = prompt("enter the age?", 18);

let welcome = (age<18)?() => alert=('hello'):()=>alert('hi');

welcome();
*/
//MULTILINE ARROW FUNCTIONS
//if we have multiple expressions and statements inside the function, in that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value(just like a regular function does)
//like this
let sum = (a,b) => {
  let result = a + b;
  return result;
}

alert(sum(2,3));