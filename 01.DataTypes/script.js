// Variables,Constants and Comments
/**
 * -------var--------
 * never use it(its old style,creates error)
 */
// var score = 34;
// var score = 56;//Redeclare
// console.log(score)

/**
 * --------let--------
 * when you need to re-assign values,may or may not be initialised at declaration
 */
// let points = 23;
//if decleare "points"  variable again using "let" like how we done using "var" then it will show error ony you can change the value
// points = 21;
// console.log(points)

/**
 * --------const(constants)-------
 * when you never want to re-assign, also always initialised at declaration
 */
// const value = 11;
/*In "const" when you decleare the variable that time only have to give the value you cant 
do it separately and once assigned the value you cant change the assigned value always try to use "const" */
// console.log(value)

/**
 *-------- Data Types of values---------
 there are 7 data types 
 1.Numbers -> 1,2,3,4,5
 2.Strings -> "I am chandan","34",'Also String'
 3.Boolean -> true/false
 4.Null ->Intentionally absence of value
 5.Undefined -> Variable decleared but not initialized
 6.Object -> Complex data structure
 7.Symbol ->Looks like object
 */
//-------Null Data type example-------
//  let score = null;
//  score = "i am chandan";//if we again decleare then again work
//  console.log(score)

//--------Undefined Data type example--------
// let points;//If we use like this then it will show undefined
// points = 13;//here also we can assigne the value 
// console.log(points)

//----------String data type--------
// console.log("Hello coders")
// let firstName = "WOW";
// let lastName = "Programmer";
// console.log(firstName,lastName)

//String Concatination method 1 using "+" operator
// let fullName = firstName+" "+lastName
// console.log(fullName)

//String Concatination method 2 using Template literals(``)
// let fullName = `I want to become ${firstName} ${lastName}`
//using "${}" we make template literals
// console.log(fullName)

//getting String Character
// console.log(firstName[1])//will get the index 1 from that string

// String Methods
// console.log(firstName.toLowerCase()) //will convert the string all character in to lower case
// console.log(firstName.toUpperCase()) //will convert the string all character in to upper case
// console.log(lastName.indexOf("e")) //will give the index of that character which we want if there are 2 characters are there then it will first characters index only

//String trim method
// let hobbies = '   coding reading running    ';
// let result = hobbies.trim()
// console.log(hobbies)
// console.log(result)
// console.log(hobbies.indexOf("coding"))//ans - 3
// console.log(result.indexOf("coding"))//ans - 0

// console.log(result.lastIndexOf("running"))//It will give the last index of string in String methods are case sensetive so if upper and lower case then it will return "-1"

// console.log(result.includes("readings"))//It will return boolean value if it present then return true or else false and it is also case sensetive

// String Slice method
// let fullName = "wowprogrammer";
// console.log(fullName.slice(0,5))//Here it starts from 0th index but it doesnot include last index in this case it starts from 0 and ends in 4th index Exculding last index it will give all
// let result = fullName.slice(0,4)//0-3

// Imporatant Note Does not mutate original array.
// console.log("Original String: ",fullName);
// console.log("Extracted String: ",result)

// String "split" method
// let favouriteColour1 = "Brown Blue Black Grey";
// let arrColors1 = favouriteColour1.split(' ');//Here when ever space will come String will devide 
// console.log(arrColors1)

// let favouriteColour2 = "Brown,Blue,Black,Grey";
// let arrColors2 = favouriteColour2.split(',');//Here when ever "," will come String will devide 
// console.log(arrColors2)

//javaScript Strings are Immutable

// let str = "Hello";
// str[0] = 'p';//Here after changing indexes also it will note change bz its immutable
// str[1] = 'j';
// console.log(str)

// let str2 = "Hello";
// str2 = str2 + "Programmers";//But we can add some new String in that String but we cant chane anything in already assigned String 
// console.log(str2)

// -----------Numbers Data Type------------
// let score = 50;
// console.log(score,typeof score) //"typeof" keyword will give the variables data type

// Mathmatical Operators "*, /, %, +, -"
// let result1 = score/2; //Give Quotient
// let result2 = score%2; //Give Reminder
// console.log(result2)

// Mathmatical Expression
// let result3 = score*2+(4*3)-8/2%4;

// Using Priority and Precedence
// 1.() Brackets
// 2.** Power Operator
// 3.* / % (From Left to Right)
// 4.+ - (From left to right)
// console.log(result3)

// Concatination of Numbers
// let resultLine = 'My Total Score is = ' +result3
// console.log(resultLine)

// -----LooseEquality(==) VS Strict Equality Operator(===)---------
//LooseEquality(==) ->Focus only on value but not type
// let age = 22;
// console.log(age == '22')

// Strict Equality Operator(===)->Focus on both value and its type
// console.log(age === '22')

// console.log(age != "22")//not equal 
// console.log(age !== "22")//not equal

// ---------Type Conversion-------------
// let stringType = "54";
// console.log(stringType,typeof stringType)

// let numberType = Number(stringType);
// console.log(numberType,typeof numberType)
// // Important note ->In Number method passing String Must be of numeric values
// let numberType1 = 54;
// console.log(numberType1)

// let stringType1 = String(numberType1);
// console.log(stringType1,typeof stringType1)

// ---------Boolean Method true/false---------
// let age = "54";//here in qute some value there then it will give true
// let booleanValueOfAge = Boolean(age)
// console.log("Boolean Value of age is ",booleanValueOfAge)

// let age1 = "";//here in qute nothing is there so it will give false
// let booleanValueOfAge1 = Boolean(age1)
// console.log("Boolean Value of age is ",booleanValueOfAge1)

// ----------Arrays-----------
let dishes = ['Biryani',"chat","Parathay"];

console.log(dishes[1]) //accessing the element from array

dishes[1] = "Chicken curry";//Modifying the array or overriding the array
// console.log(dishes)

//join()
console.log(dishes.join(' '))//join() convert array into string

//indexOf()
console.log(dishes.indexOf("Biryani"))//it will find the element index and it is case sensitive

// concat() method -> it will concat both the arrays
let newDishes = ["sweet-dish","Pani-pori"];
let updatedDish = dishes.concat(newDishes)
console.log(updatedDish)

// Length method -> will return the length of the array
console.log(dishes.length)
console.log(newDishes.length)
console.log(updatedDish.length)

// push() method -> add in the end of the array
console.log(updatedDish.push("Pakhala"))//return new length of the array
console.log(updatedDish)

// pop() method -> removes the element from end of the array
console.log(dishes.pop())

//------------Boolean Values and Comparison Operators----------------
let booleanType = true;
let stringType = "true";

console.log(typeof booleanType,typeof stringType)

// Methods return Boolean Values

let email = "wowcoder@example.com";
let booleanValue = email.includes("@");//Here includes() method will check wheater @ present or not if present will return true else false
console.log(booleanValue)

/**
 * Comparison Operators Always Return Boolean Value
 * ==,===,!==,!=
 * > , >=
 * < , <=
 */
let points = 23;
console.log(points == "23")
console.log(points === "23")
console.log(points != 234)
console.log(points > 10)

/***
 * Javscript is weakly typed language
 * Strongly typed languages are -> c,c++,java etc.
 *---- VAR vs LET vs CONST-----
 VAR -> dont use it it is old style and creates error
 LET -> when you need to re-assign values, may or may not be initialised at declaration
 CONST -> when you never want to re-assign, also always initialised at declaration
 VAR only count functions scope nto if else and all
 Mutating -> changes variable which called it
 Non-Mutating -> doesnot changes the variable which called it
 Immutability of String -> cant change a word of string
 */
