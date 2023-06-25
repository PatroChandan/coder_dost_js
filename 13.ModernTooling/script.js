/**
 * --------13.1 Importing and Exporting ES6 Modules----
 */
/**
 * ------13.2 Top level await ES2022-------
 * Before ES2022 We can Use await only inside async function
 * But in ES2022 introduced top level "await".
 * It means now we can use "await" outside the async function
 */
//starting
console.log("Start using top level await");
let getTodos = async() =>{
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();
    console.log(data);
}
getTodos();
console.log("Finish .....")

//Top level await "block the execuation" of next code part
/**
 * ------13.3 Module pattern--------
 * IIFE-Imediately Invoked Function Expression
 */
let resultIIFE = (function(){
   let orders = [];
   let addToCart = function(product,quantity){
    console.log(`${product} ordered ${quantity}`);
    orders.push({product,quantity})
   } 
   return {
    orders,
    addToCart
   }
})()

resultIIFE.addToCart("Biriyani",5);
resultIIFE.addToCart("Dosa",8)
console.log(resultIIFE.orders)

/**
 * ------13.4 Intro to NPM--------
 * NPM(Node Package Manager)
 */