/* 
    how to accept user input

     easy way with window prompt:

let username = window.prompt("whats your name?");
console.log(username);

    difficult way html textbox
*/


let username;

document.getElementById("mybutton").onclick = function(){

    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML = "hello " + username;
}

