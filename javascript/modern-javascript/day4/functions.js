// let name = 'john';

/*
function showMessage() {
    let name = 'doe';
    alert('hello ' + name)
    name = 'bob';
    alert('hello ' + name);
}
alert(name);
showMessage();
alert(name);
*/

//if the same-named variable is declared inside the function then it shadows the outer one. 

/*
function showMessage(){
    let name = 'doe';
    alert('hello ' + name);
}
showMessage()
alert(name);
*/

/*
let from = "ann";
function showMessage() {
   

    from = "bob";
    alert(from + ":");
}

showMessage();
alert(from);
*/


/* Parameters */
/*
function showMessage(from, text) {
    //values will be copied to local variables from and text then the function uses them
    alert(from + ": " + text);
}
showMessage("muzamil", "hello");
showMessage('muzamil', "what's up?")
*/



/*
let userName = 'john';

function showMessage1() {
    userName = "Bob";  //here it will change the outer variable

    let message = 'hello, ' + userName;
    alert(message); //hello bob
}

alert(userName); //john
showMessage1();
alert(userName); //bob

*/

/*
let from = "muzamil";

function showMessage(from, text) {
    from = '*' + from + '*';  //here we are changing the local variable only
    alert(from + ': ' + text);
}


// let from = "muzamil";
alert(from);
showMessage(from, 'hello');
alert(from);
*/


/*
function showMessage(message, from) { //calling this function while passing only one argument in calling statement second parameter value will be undefined
    alert(message + ': ' + from);
}

showMessage("hello");
*/


/*
function showMessage(message, from = "muzamil") {
    alert(message +": "+from);
}
showMessage("hello");
//showMessage("hello", undefined);
*/

//in js a default parameter is evaluated every time the function is called without the respective parameter.
//in the example below anotherFunction() isn't called at all if the from 

// function anotherFunction(){
//     alert("hello");
// }
//if from parameter is provided by method calling statement anotherFunction() will not be called at all
//on the other hand, it's independently called every time when from parameter is missing
/*
function showMessage(message, from = anotherMessage()) {
    alert(message +": "+from);
}


// showMessage("hello");//no output
// showMessage("hello", "muzamil"); //hello muzamil
//showMessage("hello", undefined); // no output
showMessage("muzammil")
*/

/*
function showMessage(from, text) {
    if(text == undefined) {
        text = 'no text given';
    }

    alert(from + ": " + text);
}

showMessage("muzamil");
*/

/*
function showMessage(text) {  //if the parameter is missing
    // if(text == undefined) {
    //     text = 'empty message';
    // }

    //or

    text = text || "empty text";

    alert(text);
}

showMessage();  //empty message
*/

/*
function showCount(count) {
    //if count is undefined or null, show "unknown"

    alert(count ?? "unknown");

}
*/

//showCount(0); //0
/*
showCount(null);//unknown
showCount()//unknown
*/

//Returning a value
/*
function sum(a, b) {
    return a+b;
}

let result = sum(1,3);
alert(result); //3
*/

//a function with empty return or without it returns undefined
/*
function doNothing() {
   
}

//alert( doNothing() === undefined);//true
alert(doNothing());
*/

/*
function doNothing(){
    return;
}
alert(doNothing());

return
    "hello how are you"

    //the above return statement is same as below
    return;
    "hello how are you";
    //because js assumes semicolon after return statement

    //do like below
    return(
        "hello how are you"
    )
    */

    /*
    function showPrimes(n) {
        nextPrime: for (let i = 2; i < n; i++) {
            for(let j = 2; j < i; j++) {
                if(i % j == 0) {
                    continue nextPrime;
                }
            }
            alert(i);
        }
    }
    showPrimes(10);
    */

    //break the function
    /*
    function showPrimes(n) {
        for(let i = 2; i < n; i++) {
            if(! isPrime(i) ) continue;

            alert(i);
        }
    }

    function isPrime(n) {
        for(let i = 2; i < n; i++){
            if(n % i == 0) return false;
        }
        return true;
    }

showPrimes(10);
*/

/*
function confirm(){
    return false;
}

function checkAge(age) {
    // if(age > 18) {
    //     return true;
    // }else{
    //     return confirm("did parents allow you");
    // }
    
   // return (age > 18) ? true : confirm("did your parents allow you");

    //or
    return (age > 18) || confirm ("same");
}
*/
/*
alert(checkAge(19));

function checkMin(a,b){
   return (a < b) ? a : b;
}

alert(checkMin(10,20));
*/

/*
function power(x, y) {
    let ans = 1;
    for( i = 1; i <= y; i++) {
        ans = ans * x;
    }
    return ans;
}

//alert(power(3,2));
let x = prompt("x?", '');
let y = prompt("y?", '');

if(y < 1) {
    alert(`power ${y} is not supported, use a positive value`);
}else {
    alert(power(x,y));
}
*/

/*
let a = 10;
console.log(a);
var b = 20;
*/

/*
{
    var a = 10;
    let b = 20;
    const  c = 20;
}

var a = 100;
{
    var a = 10;//samee name as global var
    let b = 20;
    const c = 30;
    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}
console.log(a);//10
*/

/*
let b = 200;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(b);//20
}
console.log(b);//200
*/

/*
const c = 100;
function d() {
    const c = 200;
    console.log(c);
}
d();
console.log(c);
*/

