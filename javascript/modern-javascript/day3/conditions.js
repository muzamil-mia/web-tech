//if statement
/*
let age = prompt("what is you age?");
if(age >= 18)
    alert("you are allowed to vote");
*/

//conditional operator
/*
let accessAllowed;

let age = prompt("enter your age");
if(age>18){
    accessAllowed = true;
}else{
    accessAllowed = false;
}
alert(accessAllowed);
*/

/*
let accessAllowed;
let age = prompt('enter the age');
accessAllowed = (age > 18) ? true : false;
alert(accessAllowed);
*/

//same as
/*
let age = prompt("enter the age");
let accessAllowed = age > 18;
alert(accessAllowed);
*/

//multiple ? operator
/*
let age = prompt("enter the age");
let message = (age < 3) ? 'hi, baby' : (age < 18) ? 'hello' : (age < 100) ? 'Greetings' : 'what an unusual age';
alert( message);
*/

//task
/*
let result;
let a = prompt("enter a");
let b = prompt('enter b');

result = (a + b < 4) ? result = 'bellow': result = 'over';
alert(result);
*/

/*
let message;
let login = prompt("enter the login details");
message = login == 'employee' ? 'hello' : (login == 'director') ? 'greetings' : (login == '') ? 'no login' : '';
alert(message);
*/

let user = prompt("who is there?");
let password;
if(user == 'admin') {
    password = prompt("enter the password");
    if(password === "themaster"){
        alert('welcome');
    }else if(password === '' || pass === null){
        alert('canceled');
    }else{
        alert('wrong password');
    }
}else if(user === '' || user === null){
    alert("canceled");
}else{
    alert("i don't know you");
}