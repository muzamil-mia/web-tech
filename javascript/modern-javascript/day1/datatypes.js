
//Number type: represents both integer and float values
let n = 123;
n = 12.3;

/*
alert("not an number"/2);
alert(NaN*1);
alert(NaN+1);
alert(NaN**0);
alert(NaN*0);
*/

//Big Int: used to store numbers of arbitrary length
//it is created by appending n to the end of an integer
const bigInt = 1234567890123457849263784688n;
//alert(bigInt);

let num = 123456780353945749438949664981; //precession error will be there therefore it will store approximate value.
//alert(num);

//String
/*
let str = "hello world";
let str1 = "hello world again";
let phrase = `can embed another string ${str}`;
alert(phrase);
let name = "john";
alert(`hello ${name}`);
alert(`expression ${1+2}`);
*/

//Boolean 
/*
let age = 22;
alert(age > 18);
*/

//null type
/*
null does not belong to any datatype it forms its own data type which contains only the null values 
In javascript null is not reference to non existing object here it is just a special value which represents nothing, empty, or value unknown
the code below states that the age in unknown
/*
let age = null;
alert(age);
*/

 //6: undefined
 /*
 the special value undefined also stands apart it makes a type of its own, just like null
 the meaning of undefined is "value is not assigned".
 */
let age;
//alert(age);
age = 100;
//alert(age);
//age = undefined;
//alert(age);
alert(typeof age);