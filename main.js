
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
for (i = 0; i < array_classmates.length; i++) {
    console.log(array_classmates[i])
}


var ages = [20, 25, 30, 35, 29, 17, 77];
// ages.sort();
// console.log(ages)

//Exercises in between to approach while-ages-loop
var text = "";
var i = 0;
while (i < 10) {
    text += "The number is " + i + " ";
    i++
}
console.log(text)
document.getElementById("TestWhile").innerHTML = text;

// for (i = 0; i < 1; i++) {
//     console.log(ages)
// }

var n = 0;
var x = 0;
while (n < 3) {
    console.log("n" + n++)
    console.log("x" + (x += n))
}
console.log(n)
document.getElementById("TestWhile2").innerHTML = n; 

//First while exercise
var j = 0;
while (j < ages.length) {
    console.log(ages[j]);
    j++
}



//odd / even number exercise
number = 28
if (number % 2 === 0) {
    console.log("The number is even.")
} else {
    console.log("The number is odd.")
}


//while loop + if condition
var k = 0
while (k < ages.length) {
    if (ages[k] % 2 === 0){
        console.log(ages[k])
    }
    // else {
    //     console.log("Uneven age")
    // }
    k++
}

//for loop + if condition
for (l = 0; l < ages.length; l++) {
    if (ages[l] % 2 === 0) {
        console.log(ages[l])
    }
    // else {
    //     console.log("Uneven age")
    // }
}

//FUNCTIONS THAT USE ARRAYS

//preliminary exercises... like: print smalles ages:
console.log(Math.min(...ages));
console.log(Math.min.apply(Math, ages))

var func = myFunction(4, 3)
function myFunction(p1, p2) {
    return p1 * p2
}
console.log(func)
console.log(myFunction(2, 3))

//print lowest age:
var lowestAge = ageFunc(ages)
function ageFunc(ages) {
    return Math.min(...ages);
}
console.log(lowestAge)

//print highest age:
var highestAge = ageHighFunc(ages)
function ageHighFunc(ages) {
    return Math.max(...ages);
}
console.log(highestAge)

//Function Array Index

// var a = [7, 11, 27, 78, 82, 5, 34]
// var i = 0
//console.log(a[i])

console.log("Array Index Function Exercise: ")
var a = [7, 11, 27, 78, 82, 5, 34]
var m = 1;
// var arrayIndex = arrayIndexFunc(a, i)
arrayIndex(a, m)
function arrayIndex(a, m) {
    console.log(a[m]);
}


