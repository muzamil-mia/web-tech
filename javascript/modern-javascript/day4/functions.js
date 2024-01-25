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
function showMessage(message, from = anotherMessage()) {
    alert(message +": "+from);
}


// showMessage("hello");//no output
// showMessage("hello", "muzamil"); //hello muzamil
showMessage("hello", undefined); // no output