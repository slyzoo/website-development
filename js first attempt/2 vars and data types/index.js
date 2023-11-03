/* 
    a var is a container for storing data
    a var behaves as if it was the value that it contains

    2 steps:
        1. declaration    (var, let, const)
        2. assignment     (= assignment operator)
*/

// there are a 2 ways to make a var here is 1

let age1;
age1 = 14;

// there are a 2 ways to make a var here is 2
let age2 = 19;
age1 = age1 + 2;


//numbers
let age3 = 2020;

//string
let firstname = "sly";
let lastname = "zoo";

//boolean
let student = false; 



// do not put vars in quotes bc that makes it into a str intead of a var
console.log(age1);
console.log(age2);
console.log(age3);
console.log(firstname+lastname);
console.log(student);
console.log("hello, " + firstname + lastname + " you are " + age1 +", and you are " + student);

document.getElementById("p1").innerHTML = "hello "+ firstname;
document.getElementById("p2").innerHTML = "you are " + age1 + " years old";
document.getElementById("p3").innerHTML = "enrolled: "+ student;

