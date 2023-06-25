/**
 * --------12.1 Array De-structuring---------
 * Destructuring the Arrays
 */
// let openingHours = {
//     sunday:{open:"09:00AM",close:"11:00PM"},
//     monday:{open:"10:00AM",close:"10:00PM"},
//     tuesday:{open:"10:00AM",close:"10:00PM"}
// }

let hotel = {
    name:"hottell",
    Location:"street No xyz Delhi",
    categories:["Chinease","Italian","English"],
    mainMenu:["FoodA","FoodB","FoodC"],
    starterMenu:["SpecialFoodA","SpecialFoodB"],
    // openingHours,
    openingHours:{
        sunday:{open:"09:00AM",close:"11:00PM"},
        monday:{open:"10:00AM",close:"10:00PM"},
        tuesday:{open:"10:00AM",close:"10:00PM"}
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
let menu1 = [...hotel.mainMenu, ...hotel.starterMenu]
//if only value

for(let elem of menu1){
    console.log(elem);
}

//if we want both index as well as value

for(let elem of menu1.entries()){
    console.log(elem)
}

for(let [i,item] of menu1.entries()){
    console.log(`${i+1}:${item}`);
}
/**
 * ---------12.8 Enhanced Object Literals-shortcuts---------
 */

/**
 * ---------12.9 Optional Chaining---------------
 */
//Let suppose we want to check this hotel open saturday or not
//If open then at what time

// console.log(hotel.openingHours.sturday.open)
//To avoid this error two methods
//without optional chaining
if(hotel.openingHours && hotel.openingHours.saturday){
    console.log(hotel.openingHours.saturday.open)
}//when it doesnot defined then it wont give any output dont even error

//With optional chaining

console.log(hotel.openingHours.sunday?.open)

//check previous value of the operator => null or undefined
//return undefined
/**
 * ---------12.10 Looping Objects-------------
 * Objects are non-iterable but indirectly we can
 */

//keys(Properties)

let properties = Object.keys(openingHours)
console.log(properties)

//we know how to loop over array

for(let key of properties){
    console.log(key)
}

//values

let values = Object.values(openingHours);
console.log(values);

//complete object

let entries = Object.entries(openingHours);
for(let [day,{open,close}] of entries){
    console.log(`On ${day} We Open at ${open} And Close at ${close}`); 
}
/**
 * ---------12.11 Sets-----------
 * Sets are just collection of unique values
 */
let itemSet = new Set([1,2,2,3,4,5,4,5,6,8,7,8])
let itemSet1 = new Set("Programer")
console.log(itemSet)
console.log(itemSet.size)
console.log(itemSet.has(3))
itemSet.add(9)
console.log(itemSet)
itemSet.delete(9)
console.log(itemSet)

//Set are also iterables
for(let item of itemSet){
    console.log(item)
}
for(let item of itemSet1){
    console.log(item)
}
/**
 * ---------12.12 Map Intro And Map Iteration-----
 * It is data structure which is used to map values into keys
 * In map the data type of keys can be of "any"
 * Map is much similar to objects
 */

let restaurantMap = new Map();

//Adding Values into the Map

restaurantMap.set('name',"Bombay Hotel");
restaurantMap.set(1,"Address1");
restaurantMap.set(2,"Address2").set(true,"We are open today").set(false,"We are close today")
console.log(restaurantMap)

//Getting the value
console.log(restaurantMap.get(false))

//Size of the map
console.log(restaurantMap.size)


