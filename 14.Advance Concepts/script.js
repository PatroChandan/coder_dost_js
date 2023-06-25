/**
 * -----14.1 Closures-----
 * Closure means "inner" function has an access to the variables and parameters of "outer" function even after outer function has returned
 */
let outerFunction = function(outerParameter){
    let outerVariable = "outer Variable";
    let innerFunction = function(){
        console.log(outerVariable,outerParameter)
    }
    return innerFunction;
}
let innerFunc = outerFunction("outer parameter");
innerFunc();

//Function

//Closure does not make separate copy of outer variable.

let counter = function(){
    let count = 0;
    let innerCounter = function(){
        return count = count + 1;
    }
    return innerCounter;
}
let innerCount = counter();
console.log(innerCount());
console.log(innerCount());
