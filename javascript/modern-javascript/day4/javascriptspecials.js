

//code structure
//statements are delimited with semicolons
/*
alert('hello'); alert('world');
*/
//usually new line is treated as delimited in js
/*
alert('hello')
alert('world')

//but sometimes it behaves weird
alert('after this message there will be an error');
[1,2].forEach(alert);
*/

//Semicolons are not required after code blocks{..}
/*
function f() {
  //no semicolon needed after the function declaration
}
*/

/*
for(;;) {
  //no semicolon needed after the loop
}
*/

//STRICT MODE
//to fully enable the the modern javascript features, we should start scripts with "use strict"

/*
'use strict'
//The directive must be at the top of a script or at the beginning of a function body.

typeof null == "object";
typeof function(){} == 'function'
*/

let b = 10
{
  let b = 20;
  console.log(b);
}
console.log(b);