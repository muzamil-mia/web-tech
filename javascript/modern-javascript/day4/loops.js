/*
for(let i = 2; i <= 10; i++){
    if(i % 2 == 0) {
        alert(i);
    }
}
*/

/*
let num;
do{
    num = prompt("enter the number greater than 100",0);
}while (num <= 100 && num);
*/

let n = 10;
nextPrime:
for(let i = 2; i <= n; i++) {
    for(let j = 2; j < i; j++){
        if(i % j == 0) continue nextPrime;
    }
    alert(i);
}