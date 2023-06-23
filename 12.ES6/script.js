/**
 * --------12.1 Array De-structuring---------
 * Destructuring the Arrays
 */

let hotel = {
    name:"hottell",
    Location:"street No xyz Delhi",
    categories:["Chinease","Italian","English"],
    mainMenu:["FoodA","FoodB","FoodC"],
    openingHours:{
        sunday:{open:"09:00AM",close:"11:00PM"},
        monday:{open:"10:00AM",close:"10:00PM"}
    }
}

//Simple Example
//Without Destructuring
let items = [2,3,4,5];
// let x = items[0];
// let y = items[1];
// let z = items[2];
// let p = items[3];
// console.log(x,y,z,p)

//with Destructurin
let [x,y,z,p] = items
console.log(x,y,z,p)

//Example 2
let [first,second] = hotel.categories
console.log(first,second)
let [main,,Secondary] = hotel.categories
// console.log(main,secondary)

//Switch the category(Usecase)
//without Destructuring

// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary)
//with Destructuring
// [Secondary,main] = [main,Secondary]
// console.log(main,Secondary)

//Destructuring of nested Arrays

let nums = [2,3,[6,5]];
let [a,,[b,c]] = nums;
console.log(a,b,c)


/**
 * ---------12.2 Object De-structuring----------
 * Destructuring of "Objects"
 */
// let {name,Location,mainMenu} = hotel
// console.log(name,Location,mainMenu)

//set customize name to object property

let {name:hotelName,Location:hotelLocation,mainMenu:menu} = hotel

console.log(hotelName,hotelLocation,menu)

//setting Default Valus

// let {name,Menu:newMenu = [],categories = []} = hotel;
// console.log(name,newMenu,categories);

//Destructuring Nested Objects

let {name,openingHours} = hotel
console.log(name,openingHours)

let {sunday:{open,close}} = openingHours
console.log(open,close)
/**
 * ---------12.3 Spread Operator----------
 * Spresd Operator(Unpacking of array elements)
 */

let nums1 = [2,3,4,5];
console.log(...nums1);

//Usecase
let newArray = [9,10,...nums1]
console.log(newArray)

let updateedMainMenu = [...hotel.mainMenu,"FoodD","FoodE"]
console.log(updateedMainMenu);

//Join 2 Arrays

let joinedArrays = [...nums1,...newArray]
console.log(joinedArrays)

//create shallow copy using spread operator

let copyArray = [...updateedMainMenu]
copyArray[1] = "UpdatedFood";
console.log(copyArray)
console.log(updateedMainMenu)

//we can also use spread operator on Strings

let passion = "Programming";
console.log(...passion)
console.log('p','r','o','g','r','a','m','i','n','g')
/**
 * ---------12.4 Rest Operator--------
 * Rest pattern and parameter/operator
 */

//Spread(...) operator It is present in the RHS of =
let nums2 = [2,3,4,5,6];
let newArray1 = [1,...nums2];
console.log(newArray1);

//Syntax of REST(...) Get elements and packed them into array Use in LHS
let [xx,yy,...rest] = nums2;
console.log(rest);

//objects
let{sunday,...weekdays} = hotel.openingHours;
console.log(sunday,weekdays)
/**
 * ---------12.5 Short Circuiting(&&,||)---------
 */

//falsy values => 0,false,null,undefined,''(empty string)

//AND (&&) operator (Output true if all input true else onnwhich input it will false that input will return)
let result = "programers" && "coders" && 0;//Not move towords next
console.log(result)//original form

//OR (||) operator (Output true if any given input true)
let result1 = ""||null;
console.log(result1)
//As || operator find first output true.It simply return that true value and does not move towords next operands
/**
 * ---------12.6 Nullish coalescing operator(??)------
 */

//false values are 0,null,false,undefined,''(empty string)
//for || operator

let numGuests = null;
let result2 = numGuests || 10;
console.log(result2)

//For nullish coalesing operator (??) only "null" and "undefined" are falsy value

let result3 = numGuests ?? 10;
console.log(result3)//0 is not nullish value

//It return first non-nullish value
/**
 * ---------12.7 for-of loop-----------
 */
/**
 * ---------12.8 Enhanced Object Literals-shortcuts---------
 */
/**
 * ---------12.9 Optional Chaining---------------
 */
/**
 * ---------12.10 Looping Objects-------------
 */
/**
 * ---------12.11 Sets-----------
 */
/**
 * ---------12.12 Map Intro And Map Iteration-----
 */

