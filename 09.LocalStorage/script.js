/**
 * -------9.1 Local Storage intro-------
 */

// It is an api provided by browser to store data inside storage
// using local storage also we can store and retrieve data from local storage
// In previous todo list task when we refresh the browser we loose our current state data

// console.log(localStorage)

/**
 * -------9.2 Set and Get items--------
 */

// set the item in local storage

// localStorage.setItem('passion',"programming");
// localStorage.setItem('age',27)
// console.log(localStorage)

// localStorage.setItem('age',24)


/**
 * --------9.3 Deleting Items---------
 * Using "clear" we can remove all the elements whuch ever stored in the local storage at once 
 * but if you want to delete single element than use "removeItem()". 
 */
localStorage.clear// for single element delete use "removeItem()"
/**
 * ---------9.4 Store Complex data ------------
 * how to store complex data structure like array of objects
 */

// In local storage data store in string formate only

let vehicles = [
    {company:"Honda",model:"2009"},
    {company:"Toyota",model:"2010"}
]

console.log(vehicles);

let stringOfVehicles = JSON.stringify(vehicles)
console.log(typeof stringOfVehicles)

localStorage.setItem("vehicles",stringOfVehicles)

console.log(localStorage)

// Get stored item again in object formate

let storedData = localStorage.getItem("vehicles")

let objectFormate = JSON.parse(storedData)
console.log(typeof objectFormate)