//boolean comparison
/*
alert(2 > 1);
alert(2 == 1);
alert(2 != 1);

let result = 5 > 4;
alert(result);
*/

//string comparison
/*
alert('Z' > 'A');
alert('Glow' > 'Glee');
*/

//comparison of different types
//when comparing values of different types , js converts the values to numbers 
/*
alert('2' > 1);
alert('01' > 1);

// for boolean values, true becomes 1 and false becomes 0
alert(true == 1);
alert(false == 0);
*/
//a funny consequences
/*
let a = 0;
alert(Boolean(a));  //false
let b = "0";
alert(Boolean(b));  //true

alert(a == b);  //true
*/

//strict equality
//A strict equality operator === checks the equality without type conversion
/*
alert(0 == false) //true
//the same thing happens with string
alert('' == false); //true
*/

//comparison with null and undefined
/*
alert(nul == undefined); // true
alert(nul === undefined) // false
*/

//null/undefined are converted to numbers: null becomes 0 and undefined becomes NaN
/*
alert(null > 0); //false
alert(null == 0);// false
alert(null >= 0); //true
*/

//an incomparable undefined
// the value undefined shouldn't be compared to other values
/*
alert(undefined == 0);
alert(undefined < 0);
alert(undefined == 0);
*/


