// ---------Introduction to Objects JS---------

let car = {
    color:"black",
    model:"2022",
    company:"Honda",
}
console.log(car)

// Accessing the javascript Object properties

console.log(car["color"])//If you are using square bracket then Always try to give properties in double quote ("").
console.log(car.company)

let propertyName  = "color";
console.log(car[propertyName])

// Modify the object property 

car.color = "brown";//way1 for modify the property
console.log(car[propertyName])
car["color"] = "blue";//way2 for modify the property
console.log(car[propertyName])

// Delete properties of object

let obj = {
    prop1 : "value1",
    prop2 : "value2",
    prop3 : "value3"
}

console.log(obj.prop1)
console.log(obj.prop2)

//using "delete" keyword we can delete the property of the object
// delete obj.prop1//way1 of deleteing the property
// console.log(prop1)
// delete obj["prop2"]//way2 of deleteing the property
// console.log(prop2)

// If we return delete method then it always return true
let returnValue = delete obj.prop3

// here delete return value will be true
console.log(obj.prop3,returnValue)

// -----Function vs Method------

let ageCalulate = function(birthyear){
    let age = 2023 - birthyear
    console.log(`Current age is = ${age}`)
}

ageCalulate(2003)

// method -> It is nothing but object property(Key) holding function as "value"

let person = {
    ageCalulate : function(birthyear = 2008){//here 2008 is the default value if nothing will pass then it will take 2008 value
        let age = 2023 - birthyear
        return age
    }
}

console.log(`curent age is ${person.ageCalulate(2003)}`)

// ---this keyword---

/**
 * In each method we have an access of special keyword called "this"
 * "this" keyword represent the object. "Calling" the "method" in which "this" is "present"
 */

let person1 = {
    firstName : "Harry",
    lastName : "Brook",
    city : "Delhi",
    birthyear : 1998,
    Education : "software engineer",
    getSummary : function(){
        return `${this.firstName} ${this.lastName} is lives in ${this.city}. He is a ${this.Education} and his birth year is ${this.birthyear}`;
        // return this
    }

}
console.log(person1.getSummary())

// step 1 : Check in which method we use "this" keyword
// step 2 : Owner of that method(Who is calling those method)

// -----forEach() method of Array------

// Its another type of loop which we used to traverse over the array

let arr = [1,2,3,4,5,6];
// using for loop

for(let i = 0;i < arr.length;i++){
    console.log(arr[i]);
}
console.log("************")
// using forEach method

arr.forEach(function(element){
    console.log(element)
})

// -----Objects inside array-----

let blockList = [{userName:"john",reason:"Abusive content"},{userName:"paul",reason:"copyRight content"}];

for(let i = 0 ;i < blockList.length;i++){
    console.log(blockList[i])
    console.log(blockList[i].userName)
    console.log(`User ${blockList[i].userName} blocke listed because of ${blockList[i].reason}`)
}

// ------Math Object------

// This object is a built in object in javascript

console.log(Math)

let number = 9.6;
console.log(Math.round(number))//round to nearest integer
console.log(Math.floor(number))//round to down
console.log(Math.ceil(number))//round to up
console.log(Math.trunc(number))//remove decimal part

let random = Math.random()
console.log(Math.round(random*100))//1-100 numbers will return

/**
 * Function
 * ---call and apply method---
 * We can manually set the value of "this" keyword using "call and apply"
 */

let mainPlane = {
    airline:"Fly India",
    iatacode:"FI",
    bookings:[],
    book:function(flightNum,name){
        console.log(`${name} Booked Flight on ${this.airline} with flight number ${this.iatacode}${flightNum}`)
        this.bookings.push({flightName:`${this.airline}`,name:name,flightNum:`${this.iatacode}${flightNum}`})
    }
}

mainPlane.book(55587,"chinu")
mainPlane.book(53258,"madhu")

console.log(mainPlane)

let childPlain = {
    airline:"Child Plain",
    iatacode:"CP",
    bookings:[],
}

let book = mainPlane.book;
// book.apply(66657,"Lurie")//book is now regular function
// "this" value is "undefined" at least in strict mode


// Solution using "call" method
book.call(childPlain,66657,"Zack")
console.log(childPlain)

// apply method :-> it also works like "call" method but we have to pass the properties in array it was before ES6 used

book.apply(childPlain,[52486,"Chinmay"])
console.log(childPlain)

// bind method

function greet(){
    console.log(`Welcome ${this.firstName} ${this.lastName} on coder dost channel`)
}

let user = {
    firstName:"John",
    lastName:"Paul"
}

let greets = greet.bind(user);
greets()

/**
 * ------pass by value and pass by reference-------
 * "object/arrays" how "referencr" are passed to variable
 */

let arr1 = [1,2,3,4,5];
let getRef = arr1;

getRef[5] = 6;
// getRef.shift()
console.log("original array",arr1);//also change
console.log("getRef array",getRef);

console.log("**************");
// pass by value

let getValue = [...arr1];
getValue[6] = 7;
// getValue.shift()
console.log("original array",arr1);
console.log("getValue array",getValue);

/**
 * for-in Loop
 * Each iteration return a "Key" of object
 */

let car1 = {
    model:2022,
    color:"Black",
    company:"Toyota"
}
console.log(car1)

let x = ""
for(let key in car1){
    x = x + car1[key]
}
console.log(x)
for(let key in car1){
    console.log(car1[key])
}