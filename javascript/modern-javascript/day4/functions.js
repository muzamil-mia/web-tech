let name = 'john';

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

function showMessage() {
    alert("hello" + ": ");
}
showMessage("Ann");