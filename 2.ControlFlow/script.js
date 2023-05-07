// // ----------Control Flow-----------
// // -----------for loop------------
// // for loop runs the specific task for "n" number of times
// // for(let i = 1;i<=5;i++){
// //     console.log("Run task",i)
// // }
// // console.log("--------X--------")
// // let dishes = ['Biryani','Chat','Bhallay','Pani-puri','Karahi'];
// // for(let i = 0;i<dishes.length;i++){
// //     console.log(dishes[i])
// // }

// // -------while loop-------
// /*for(let i = 1;i<=5;i++){
//     console.log("for loop",i)//Here using for loop how to iterate the values it shows
// }
// let j = 1;
// while(j<=5){//In for loop we give 3 conditions but here in while loop we have to give only one condition in the aragument till which we have to iterate we have to only mention or else it will give error
//     console.log("while loop",j)//Here same thig how we done for loop againg we are doing with while loop
//     j++;
// }

// let dishes = ['Biryani','Chat','Bhallay','Pani-puri','Karahi'];
// let i = 0;
// while(i<dishes.length){
//     console.log("Favorite Dish = ",dishes[i])
//     i++;
// }*/

// // ------------Do while loop--------------
// //In this loop first execute the statement then check the condition so it will at least once run 

// /*let j = 1;
// do{
//     console.log("At Least run one time = ",j);
//     j++;
// }while(j<1)*/

// // ---"if","else","else if" statements---

// /*let budget = 5000;
// if(budget > 6000){
//     console.log("Will do dinner in 5 star Hotel")
// }else if(budget > 4500){
//     console.log("Will do dinner in 3 star Hotel")
// }else if(budget > 3000){
//     console.log("Will do dinner in 2 star Hotel")
// }else{
//     console.log("Run if all conditions false")
// }
// // After 1st condition true controll get out of the scope*/

// // -------nested if statement-------
// // Here we run inside a if condition another if condition we can put "n"  number if conditions inside a if condition 

// /*let num = 23;
// if(num > 20){
//     console.log("Run if 1st condition is true")
//     if(num%3>0){
//         console.log("Run if both condition true")
//     }
// }*/

// // ------Break and Continue Statement--------
// // Also called Jump statements
// // ----1.Continue statement--
// // Used to skip some values of loop
// /*for(let i = 1;i<=10;i++){
//     if(i%2==0){
//         continue;//Move towords the next iteration
//     }
//     console.log("Value of i = ",i)
// }*/

// // ----2.Break statement---
// //used to terminate the loop and controll transfer from outside

// /*for(let i = 1;i <= 10;i++){
//     if(i == 5){
//         console.log("Our desired value is = ",i)
//     }
    
// }*/

// // -------Logical Operators-------
// // And(&&) , OR (||) , Not (!) these are the logical operators

// let password = "qwerty";
// if(password.length > 5 && password.includes('@')){
//     console.log("Password is strong")
// }else{
//     console.log("Reset your Password")
// }

// // Not Operator (!) -> it converts true to false and false to true

// let status = false;
// if(!status){
//     console.log("Your status is = ",status)
// }

// // Priorities
// // Not
// // And ,Or from left to right

// // Example ->
// let result = true && true || false && !false

// console.log(result)

// ----------Variable and Block Scope------------

// scope  -> Area where variable is defined or accessible

// let score = 90; //Global Scope

// if(true){
//     let score = 50;//Block Scope
//     console.log(score)

// }
// console.log(score)

// -----------Ternary Operator(? :)-------------


// let age = 19;
// let weight = 60;
// using simple if-else:-
// if(age > 18){
//     console.log("Qualify");
// }else{
//     console.log("Fail")
// }

// Single line solution called Ternary Operator:-

// let result = age > 18 ? "Qualify" : "Fail";
// let result = age > 18 ? weight > 55 ? "Qualify" : "weightIssue" : "ageIssue";
// console.log(result)

// -------Switch Statement--------

// it is used in compitive of "conditional" statements

let currentDate = new Date();
// let weekday = currentDate.getDay() //0 to 6

let age = 17;

switch(age){
    case 15:

    case 16:

    case 17:
        result = "These ages are allowed to sit in the exam";
        break;
    default:
        result = "Not Allowed";
}

// If there is no break statement than "next" case will be execuated
console.log(result)
