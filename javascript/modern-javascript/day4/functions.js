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



let from = "muzamil";

function showMessage(from, text) {
    from = '*' + from + '*';
    alert(from + ': ' + text);
}


// let from = "muzamil";
alert(from);
showMessage(from, 'hello');
alert(from);

let userName = 'john';

function showMessage1() {
    userName = "Bob";

    let message = 'hello, ' + userName;
    alert(message);
}

alert(userName);
showMessage1();
alert(userName);