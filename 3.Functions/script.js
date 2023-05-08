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

