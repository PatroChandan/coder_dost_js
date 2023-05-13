/**
 * ----------5.1 DOM Introduction------------
 * --------DOM(Document Object Model)--------
 * It is created by browser as the html load into the browser.
 * Browser creat object of html called "document object".
 * In Document object there is model of complete html in tree like structure.
 */

// console.log(document)

//-------5.2 Query Selector---------
//Getting HTML element/s using querySelector/All

// querySelector returns "first element" that match CSS Selector

// To get all matched elements we use querySelectorAll
let resultElement = document.querySelector('p')
let resultElement1 = document.querySelectorAll('p')
console.dir(resultElement)
console.log(resultElement1)

// Access element with class

let resultElement2 = document.querySelector('.coderdost')
console.log(resultElement2)

// Access element with ID

let resultElement3 = document.querySelector('#coders')
console.dir(resultElement3)

// -------5.3 Other Ways to access Elements-------
let quearySelectorElement = document.querySelectorAll('p')
console.log(quearySelectorElement)

quearySelectorElement.forEach(element =>{//using "querySelector/All" we can access all the element through "forEach"
    console.log(element)
})


// Get Elemenets by tagName
let tagNameElement = document.getElementsByTagName('p')
console.log(tagNameElement)

// tagNameElement.forEach(element =>{//with "getElementsByTagName" we cant access the element through "forEach"
//     console.log(element)
// })

// Get Elemenets by className

let classNameElement = document.getElementsByClassName('.coderdost')
console.log(classNameElement)

// Get Elemenets by ID

let elementById = document.getElementById('coders')
console.log(elementById)

/**
 * ----------5.4 innerText Vs innerHTML--------
 * Updating And Changing Content
 */

/**
 * innerText
 * Ignore spaces
 * Retrieve and set content in plain formate
 */

let content1 = document.querySelector('p')
console.log(content1.innerText)

let content = document.querySelector('.content')
console.log(content.innerText)
// content.innerText = "Great coders"

/**
 * innerHTML
 * It doesnot ignore spaces
 * Retrieve and set content in HTML formate
 */
content.innerHTML += "<p>Great coders</p>"
console.log(content.innerHTML)

let content2 = document.querySelector('p')
console.log(content2.innerHTML)

/**
 * --------5.5 Getting And Setting the Attribute--------
 */

let coderDostLink = document.querySelector('a')
// console.log(coderDostLink.getAttribute('href'))

console.log(coderDostLink.setAttribute('href',"https://www.youtube.com/watch?v=Og8RN7AUBBU&ab_channel=LiveHindustan"))
console.log(coderDostLink.getAttribute('href'))
coderDostLink.innerText="Hindustan Times"

/**
 * --------5.6 Adding the style--------
 */

let heading = document.querySelector('h1')
heading.style.color = "blue"

heading.style.backgroundColor = "yellow"

/**
 * ---------5.7 Add, Remove And Replace Class----------
 */

// let heading1 = document.querySelector('h1')

// Add the class

heading.classList.add('newClass')

// Remove the class

// heading.classList.remove("newClass")

// Replace the class

heading.classList.replace("newClass","main")

/**
 * --------5.8 Parent Children and Sibling----------
 */

let parentElement = document.querySelector('.content')

// All Children of Parent

console.log(parentElement)
console.log(parentElement.children)

// We cannot run forEach Method on HTMLCollection so First convert it into array

console.log(Array.from(parentElement.children))

Array.from(parentElement.children).forEach(function(element){
    element.classList.add("coders")
})

// child element

let childElement = document.querySelector('h2')

// find the parent of specific child

console.log(childElement)
console.log(childElement.parentElement)

let childElement1 = document.querySelector('p')

// Find next sibling
console.log(childElement1.nextElementSibling)

// Find previous sibling
console.log(childElement.nextElementSibling)

/**
 * ---------5.9 Event Basics(click Event)----------
 */
let eventElement = document.querySelector('.clickMe')
// console.log(eventElement)
eventElement.addEventListener('click',function(){
    console.log("Clicked Me")
})

let elementsLi = document.querySelectorAll('li');
elementsLi.forEach(function(element){
    // element.addEventListener('click',function(){
    //     console.log("Item Clicked")
    // })
    element.addEventListener('click',e=>{
        console.log(e.target)
        e.target.style.textDecoration = "line-through"
    })
})

/**
 * ------5.10 Creating And Removing Element------
 */
const ul = document.querySelector('ul')
let button = document.querySelector('.clickMe')
//creating
button.addEventListener('click',function(){
    let li = document.createElement('li')
    li.textContent = "Somthing new Added"
    ul.append(li)
})

// Removing 
// elementsLi.forEach(function(element){
//     // element.addEventListener('click',function(){
//     //     console.log("Item Clicked")
//     // })
//     element.addEventListener('click',e=>{
//         // console.log(e.target)
//         // e.target.style.textDecoration = "line-through"
//         e.target.remove();
//     })
// })

/**
 * ----------5.11 Bubbling And Delegation-----------
 */

const ul1 = document.querySelector('ul')
ul1.addEventListener("click",(e)=>{
    // console.log("Inside UL")
    if(e.target.nodeName == "LI"){
        e.target.remove()
    }
})


//-----More Events------

// copy Event

let copyRightElement = document.querySelector('.copy');
copyRightElement.addEventListener('copy',()=>{
    console.log("OOOI! This is Copy Right Content");
})

// Mouse Move Event

let box = document.querySelector('.box');

box.addEventListener('mousemove',(e)=>{
    console.log(e)
    // console.log(e.offsetX,e.offsetY)
})
