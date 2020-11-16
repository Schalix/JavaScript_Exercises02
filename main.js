
console.log('Starting JavaScript')

console.log('Hello World')


var x = 10

console.log(x)

var myName = "SaSa";
console.log(myName)

var age = 88;
console.log(age)

var juliaAge = 32;
console.log(juliaAge)

var ageDiff = age - juliaAge;
console.log(ageDiff)

var message;

if (age > 21) {
    console.log("You are older than 21")
} else {
    console.log("You are not older than 21")
}


//start here. Problem: the following lines do not create any output
if (age > juliaAge) {
    console.log("Julia is younger than you")
}
else if (age < juliaAge) {
    console.log("Julis is older than you")
} else {
    console.log("You have the same age as Julia");
}


//ARRAY Exercises
var array_classmates = ["Sue", "Bob", "Ann", "Paul", "Alex"];
array_classmates.sort();
console.log(array_classmates[0])
var array_last = array_classmates[array_classmates.length - 1];
console.log(array_last)
// console.log(array_classmates.length);
for (i = 0; i < 3; i++) {
    console.log(array_classmates)
}

var ages = [20, 25, 30, 35, 29, 17, 77];
// while (i < 6) {
//     console.log(ages);
// }


