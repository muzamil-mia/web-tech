//string conversion
/*
let value = true;
alert(typeof value);
value = String(value);
alert(typeof value);
*/

//numeric conversion
/*
alert("6"/"2"); //3

let value = "123";
alert(typeof value);
value = Number(value);
alert(typeof value);

let age = "hello";
alert(Number(age)); //NaN
*/

//undefined --> NaN
//null --> 0
// true and false --> 1 and 0

//string --> white spaces(includes spaces, tabs,\t, newline \n etc) from the string are removed if the remaining string is empty the result is zero. Otherwise, the number is "read" from the string. An error give NaN.
/*
alert(" 123 \n\t"); //123
alert(Number("123z")); //NaN
alert(Number(true)); //1
alert(Number(false)); //0
*/

//boolean conversion
//values that a intuitively "empty", like 0, an empty string, null, undefined, NaN becomes false
//other values became true
/*
alert(Boolean(1));
alert(Boolean(0));
alert(Boolean(""));
alert(Boolean(" "));
alert(Boolean("0"));
alert(Boolean("true"));
alert(Boolean(undefined));
alert(Boolean(NaN));
alert(Boolean(null));
*/

//increment/decrement
/*
let a = 1, b = 1;
let c = ++a;
let d = b++;
alert(c);
alert(d);
*/

//Assignment result
/*
let a = 2;
let x = 1 + (a *= 2);
alert(x);
*/

let a = prompt("first number", 1);
let b = prompt("second number", 2);
alert(+a + +b);
