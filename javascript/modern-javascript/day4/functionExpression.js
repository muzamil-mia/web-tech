
/*
function sayHi() {
  alert("hello");
}
*/
//another syntax for creating a function that is called function expression

//it allows us to create a new function in the middle of any expression.
/*
let sayHi = function() {  //note: there is no name after the function
  alert('hello');
};
*/

//function is a value
/*
function sayHi() {
  alert('hello');
}
*/

//alert(sayHi); //shows the function code
//this line does not run the function as there is no parentheses

//surely a function in js is a special value, in the sense we can call it like sayHi()
//but it's still a value.
//so we can work with it like with other kinds of value
//we cam copy a function in other variable

/*let func = sayHi;
func(); //hello
sayHi(); //hello
*/
/*
let func1 = sayHi();
alert(func1); //undefined
*/

//CALLBACK FUNCTIONS
//lets look at more examples of passing functions as values and using function expressions

//ask(question, yes, no)
//question: text of the question
//yes: function to run if the answer is yes
//no: function to run if the answer is no

/*
function ask(question, yes, no) {
  if(confirm(question)) yes()
  else no();
}

function showOk() {
  alert("you agreed");
}

function showCancel() {
  alert("you canceled the execution");
}
//usage: functions showOk, showCancel are passed as arguments to ask
ask("do you agree?", showOk, showCancel);
*/

//the arguments showOk and showCancel of ask are called callback functions or just callbacks

//the idea is that we pass a function and expect it to be "called back" later if necessary
//in our case showOk becomes callback for "yes", and showCancel became callback for "no" answer
//we can use function expressions to write equivalent, shorter function
/*
function ask(question, yes, no) {
  if(confirm(question)) yes()
  else no();
}
*/

//here functions are declared right inside the ask(..) call. They have no name, and so are called anonymous. Such function are not accessible outside the ask (because they are not assigned to variables)
/*
ask("do you agree", function() {alert("you agreed");},
    function() {alert("you canceled the execution")} 
);
*/

//FUNCTION DECLARATION VS FUNCTION EXPRESSION
//1: Function Declaration
//function declaration can be called before defined
//for example a function declaration is visible in the whole script, no matter where it is
//that's is due to internal algorithms. when javascript prepares to run the script, it first looks for function declarations in it and creates the function. we can think it as an initialization stage
//IN STRICT MODE, WHEN A FUNCTION DECLARATION IS WITHIN CODE BLOCK, IT'S VISIBLE EVERYWHERE INSIDE THAT BLOCK. BUT NOT OUTSIDE OF IT.
/*
alert(2,3); //5
function sum(a, b) {
  return a + b;
} 
*/

//2: Function Expression
//here function is created on the right side of the "assignment expression" =:
//A function expression is created when the execution reaches it and is usable only from that moment. 
//function expressions are created when execution reaches them
//Another special feature of function declaration is their block scope.

//alert(sum1(2,3)); //uncaught reference error cannot access 'sum1' before initialization 
/*
let sum1 = function(a, b) {
  return a + b;
};
//alert(sum1(1,2));
*/
//for example lets's imagine that we need to declare a function welcome() depending on the age variable that we get during runtime. And then we plan to use it some time latter
/*
let age = prompt("enter the age?", 18);
//conditionally declare a function
if(age < 18) {
  function welcome() {
    alert("hello");
  }
}else {
  function welcome() {
    alert("greetings!");
  }
}
//use it latter
welcome();  //error welcome is not defined that is because a function declaration is only visible inside the code block in which it resides
*/

//here is another example
/*
let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined
*/
//what can we do to make welcome visible outside of if?
/*
let age1 = prompt("enter the age");
let welcome;

if(age1 < 18) {
  welcome = function() {
    alert('hello');
  };
} else {
  welcome = function() {
    alert("greetings")
  }
}

welcome(); //ok now
*/
//or
/*
let age2 = prompt("enter the age");

let welcome = (age2 < 18) ? function() {alert("hello");}:function(){alert("greetings")};

welcome();
*/
// console.log(c);
// let c = 10;




