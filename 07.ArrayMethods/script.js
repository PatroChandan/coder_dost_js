/**
 * ------7.0 Array Methods-------
 */

let letters = ["a","b","c","d"];
//Reverse() method (Mutate the original array)-> it will change the original array also
/*
let reverse = letters.reverse();

console.log(reverse);
console.log(letters);*/

// ---concatination-----
let nums = [1,2,3,4];
let concated = nums.concat(letters);
console.log(concated);

// -----join()-------
let joined = letters.join('=');
console.log(joined);

/**
 * ------ 7.1 slice()-----
 * Used to Extract part the array
 * Array.slice(startIndex,lastIndex(excluded))
 * Return new Array of extracted elements
 */

let num = [3,5,7,9,2];
let extractedArray = num.slice(0,3);
console.log("original array = ",num);
console.log("Extracted Array = ",extractedArray);

/**
 * --------7.2 splice()--------
 * Used to add new element/s into the array
 * Array.splice(index,deletevalue,valueToBeAdded)
 * Return deleted items in the form of array
 */

let num1 = [3,5,7,9,2];
let updated = num1.splice(1,0,1,4);
console.log("Original Array = ",num1)//It also mutate the original
console.log("Returned Element Array = ",updated)

/**
 * -----7.3 at()------
 */

let num2 = [23,54,77,85];

console.log(num2[0]);
console.log(num2.at(1))

// Getting last element of the array

console.log(num2[num2.length-1]);
console.log(num2.slice(-1));
console.log(num2.at(-1));

// at() method can also work on strings

let name = "Larry";
console.log(name.at(-3))

// some Higher order functions are map,filter..etc
/**
 * -----7.4 Map()------
 * Creat new array from original array by applying transformation function
 */

let salaries = [3000,5000,8000,6000,9000];
let newSalaries = salaries.map(salary =>{
    let incrementedSalary = salary/2;
    return salary + incrementedSalary;
})

console.log("After 50% Bonus new Salaries are ",newSalaries)

// Length of new array "equal" to the original array

/**
 * -----7.5 Filter()------
 */

let gifts = ["Watch","Ring","Chocolates","Teddy-Bear","Watch","Ring"]
// Now you want to filter only "Watch and Ring" gifts

let filteredArray = gifts.filter(gift=>{
    if(gift === "Watch" || gift === "Ring"){
        return gift;
    }
})

// It return "new" array
console.log(filteredArray)
console.log(gifts)
// IMP Note
// Length of new array may or may not be equal to original array

/**
 * -----7.6 Reduce()------
 * run reducer function for each array element
 * Array.reduce(function(accumulater,currentValue){}initialvalue)
 * It return single value
 */

// sum of all elements using reduce method
let num3 =[1,2,3,4,5,6,8,42];
let sum = num3.reduce(function(accumulater,currentValue){
    return accumulater + currentValue;
},0);
console.log(sum);
// Does not mute original array
console.log(num)

/**
 * -----7.7 find()------
 * It returns the first element we are looking for...
 * if more than one id/name/same kind of things are same than also it will return first one
 */

let students = [{id:1,name:"alex"},{id:2,name:"john"},{id:1,name:"paul"}];
let result1 = students.find(student =>{
    return student.id === 1;
})
console.log(result1)
/**
 * -----7.8 findIndex()-------
 * Excuate function for each array element
 * It return "index" of that array element who "first" pass the test "otherwise" -1
 */

let ages = [11,12,16,7,3];

let result2 = ages.findIndex(age=>{
    return age > 15;
})
console.log(result2)

let result3 = students.findIndex(student=>{
    return student.id === 2;
})

console.log(result3)
/**
 * ------7.9 some() method and every() method-------
 * "some" and "every" method
 * some method return "true" if "any" array element pass the test
 * every method return "true" if "all" elements pass the test
 */
let scores = [25,34,56,67,80,92];

let result4 = scores.some(score =>{
    return score > 95;
})

console.log("some method",result4);

let newScores = [54,65,58,51,81,76];
let newResult = newScores.every(score =>{
    return score > 50;
})

console.log("every method",newResult)

/**
 * -------7.10 flat() Method---------
 * It creates a new array with the elements of the subarrays "concatenated" into it.
 */

let arr = [1,2,3,[4,5,[6,8,[9,4,3]]]];

console.log("Before flat",arr);//no effect on original array

let result5 = arr.flat(3)//by default 1(depth value) value

console.log("After flat",result5)

/**
 * -------7.11 flatMap() Method--------
 * 
 * It is the combination of the "map()" method followed by the "flat()" method of depth "1";
 */

let cart = [{
    name:"Mobile Phone",
    qty:1,
    price:5000
},{
    name:"Tablet",
    qty:1,
    price:4000
}]

let newCart = cart.flatMap(item =>{
    if(item.name === "Mobile Phone"){
        return [item,{
            name:"Screen Protector",
            qty:1,
            price:0
        }]
    }else{
        return [item]
    }
})

console.log(newCart)

/**
 * --------7.12 Sorting arrays---------
 * sorting array using sort method
 * By default sort method is used to sort strings
 * It firstly convert everything into string and then ...
 */

let letters1 = ["d","e","a","b","f"];
console.log(letters1.sort())

let nums1 = [2,5,7,-1,-22,-43];

console.log("Unsorted ",nums1)
// console.log(nums1.sort())//Unexpected

// if a-b < 0 => a < b =>A,B (Keep order same)
// if a-b > 0 => a > b =>B,A (Switch the order)

/*--this same thing we can do in one line check below one
nums1.sort((a,b)=>{
    if(a<b){
        return -1;//Any num less than 0
    }
    if(a>b){
        return 1;
    }
})*/

nums1.sort((a,b)=>{
    return a-b//it is for assending and for descending "b-a"
})
console.log(nums1)
/**
 * --------7.13 Chaining of methods-------
 */

let num4 = [1,2,3,4,5,6];
let result = num4.slice(0,3).splice(2,1,7);
// push method return new length of the array

console.log(result)