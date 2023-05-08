// ----------Functions-----------

/***
 * It is simply a piece of code which we can use in our program many times.
 * It is just like a variable holding some piece of code.
 */

// --Declaration of Function--

// function nameOfFunction(){
//     //Bode of function
// }

function nameOfFunction(){
    console.log("You are running code present inside the function")
}

// function call:-
// nameOfFunction()

// --Function Expression--
// this function also called as anonymous function
let fun = function(){//anonymous function
console.log("This is an example of function expression")
}

// calling function expression
fun()//like this we call using variable name with bracket

// Real example 

let invitation = function(name){//local variable to this function
    console.log(`Welcome! ${name} You are invited on our event`)
}

invitation("chandan")

// parameter:-variable diclaration was done
// argument:-when value given than that is called aragument 
// parameters always have blocked scope only

let invitation1 = function(name="defaultName",time="night"){//local variable to this function
    console.log(`Welcome! ${name} You are invited on our event and time is ${time}`)
}

invitation1("madhu")//if we doesnot pass anything in this argument then in place of name it will show undefined we can make a default argument in function

// Returning Values(How to return value from the function)

let ageCalculation = function(birthYear){
    let age = 2023 - birthYear;
    return age;//After return statement no code of line will execute
}

console.log(`Your age is ` +ageCalculation(2005))

let age = ageCalculation(1996);
console.log(`Your age is ${age}`)

// ----------Arrow Function(ES6)-----------

// special fprm of function expression
// It allows us to write function more fast because
// No need to use function keyword
// No need to use paranthesis"()" in case of single parameter
// No need to use curely"{}" if single line code in function
// No need to use return statement if single line code in function

// --Function Expression--
let invitation2 = function(name){
    console.log(`Welcome ${name} to the event` )
}
invitation2("coders")

// ---Arrow Function---

let invitation3 = name => `Welcome ${name} to the event`
console.log(invitation3("chandan"))

// If more than one line is there then can use "{}" for that and if you using "{}" than have to write "return" keyword to return the value
let invitation4 = name => {
    return `Welcome ${name} to the event`;
}
console.log(invitation4("chandan"))

// ---------Passing function as Argument(Higher order function example)--------
/**
 * ----Higher order function----
 * ->Function which contain other function to do some task
 * ->other function can be argument (callback function)
 * ->other function can be inner return value(closere)
 * 
 */
// Example

let upperCase = function(str){
    return str.toUpperCase();
}

let lowerCase = function(str){
    return str.toLowerCase();
}

let transformer = function(str,fun){
    return fun(str);
}
console.log(transformer("hello",upperCase))

// --------Function returning another function(Higher order function example)---------

let compliment = function(msg){
    return function(name){
        console.log(`${msg} ${name}`);
    }
};

// console.log(compliment("You are good coder")("Lurie"))

// 2nd method

// let complimented = compliment("You are good coder")
// console.log(complimented("carry"))

// -----Immediately invoked function Expression(IIFE)-----
// Executed only once

// Now this is expression

(function(name){
    console.log("This function will never execute again",name)
})("IIFE");


// -------setTimeOut and setInterval-------

// setTimeOut -> Run Function "once" after "interval" of time

// setInterval -> Run function repeatedly,starting after the interval of time, then repeatimg...

// setTimeOut
// setTimeOut(func|code,delay,arg1,arg2,...)

// Example ;-
function greeting(){
    console.log("Welcome to our coder dost family")
}
setTimeout(greeting,10000)

setTimeout(function greeting1(name){
    console.log(`Welcome ${name} to our coder dost family`)
},5000,"chandan")

// setInterval:-
// setInterval(fun|code,delay,arg1,arg2,...)

// setInterval(greeting,1000)

// ----------Hoisting-----------
// variable "declaration" are "hoisted" towords "top" of their scope

console.log(test)
var test = 10;

// function declaration

test1()
function test1(){
    console.log("Hello programmers")
}

// Not function expression and arrow function
test2()
let test2 = function(){
    console.log("Hello coders")
}

// --Function vs Arrow function---

/**
 * --function--
 * ->good for multi-line logic
 * ->Creates a new "this" context
 */

/****
 * ----Arrow function-----
 * ->good for single line returns
 * ->doesnot create a "this" context
 */
