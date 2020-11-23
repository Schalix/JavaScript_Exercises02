
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
// document.getElementById("TestWhile").innerHTML = text;

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
// document.getElementById("TestWhile2").innerHTML = n; 

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
        console.log("reminder", ages[k] % 2)
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
console.log(func)

function myFunction(p1, p2) {
    return p1 * p2
}
console.log(myFunction(2, 3))

//print lowest age solution 1:
var lowestAge = ageFunc(ages)
function ageFunc(ages) {
    return Math.min(...ages);
}
console.log(lowestAge)

//preliminary exercises... print lowest age, solution 2: 
testAge1 = 19
testAge2 = 20
if (testAge1 < testAge2) {
    console.log("TestAge", testAge1)
}

var array_random = [6, 89, 2, 22, 33, 74]
for (q = 0; q < array_random.length; q++) {
    console.log("Array Random", array_random[q])
}


var q = 0
// console.log("Test Q", array_random[q + 1])
for (q = 0; q < array_random.length; q++) {
    // console.log(array_random[q], array_random[q + 1])
    if (array_random[q] < array_random[q + 1]) {
        console.log("TestSmaller", array_random[q])
    }
}

for (q = 0; q < array_random.length; q++) {
    if (array_random[q] <= array_random[q + 1]) {
        console.log("First one smaller", array_random[q])
    }
    if (array_random[q] >= array_random[q + 1]) {
        console.log("Second one smaller", array_random[q + 1])
    }
}

//still preliminary exercises smallest age
//now: combine function and if, compare first to all numbers
smallerAge02()
function smallerAge02() {
    var min = array_random[0]
    for (q = 0; q < array_random.length; q++) {
        var value = array_random[q]     
        if (value < min) {
            min = value 
        } 
    }
    console.log("youngest age", min)
}

//Translation of result = a > b ? x : y;
// if (value < min) {
//     min = value;
// } else {
//     min = min
// }

// if (array[i] < array[0]) {
//     array[0] = array[i];
// } else {
//     array[0] = array[0]
// }


//print highest age:
var highestAge = ageHighFunc(ages)
function ageHighFunc(ages) {
    return Math.max(...ages);
}
console.log(highestAge)

//new version of highest age:
//WRONG RESULT:::::::
highestAgeNew()
function highestAgeNew() {
    var min = array_random[0];
    for (i = 0; i < array_random.length; i++) {
        var value = array_random[i];
        if (value > min) {
            min = value
        }
    }
    console.log("highest age", min)
}

highestAge02()
function highestAge02() {
    var max = array_random[0]
    for (q = 0; q < array_random.length; q++) {
        var value = array_random[q]     
        if (value > max) {
            max = value 
        } 
    }
    console.log("highest age2", max)
}



//Function Array Index

// var a = [7, 11, 27, 78, 82, 5, 34]
// var i = 0
//console.log(a[i])

console.log("Array Index Function Exercise: ")

// var arrayIndex = arrayIndexFunc(a, i)
var a = [7, 11, 27, 78, 82, 5, 34]
var m = 1;
arrayIndex(a, m)
function arrayIndex(a, m) {
    console.log(a[m]);
}


//Print repeated values

//preliminary exercise:
console.log("Print repeated values:")
numberA = 27
numberB = 27
if (numberA === numberB) {
    console.log(numberA)
} 

//DOM MANIPULATION EXERCISES

//preliminary exercise: replace header
function replaceHeader() {
    var header = document.getElementById("header")
    header.innerHTML = "Replaces Band Header"
}

// addBands(["Superstar", "Morningstar", "StarEve"])
//[a, b, c]
function addBands() {
    var bandList = document.getElementById("band-list")
    var addBandname = document.createElement("addBandname")
    addBandname.text = "Band New!";
    bandList.addEventListener(addBandname);
    
    
}