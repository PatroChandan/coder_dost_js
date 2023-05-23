/**
 * -------- 8.1 Date And Time ---------
 * Date Object always carry both "Date" and "Time".
 */

// using Date method

let currentDate = new Date(2023,7,2);//0 to 11 (for month)
console.log(currentDate)

// using timeStamp (integer number represent in "ms" from 1-1-1970)

// 1 day = 24 * 60 * 60 = 86400000ms

// To get time in "ms"

let currentDate1 = new Date().getTime();
console.log(currentDate1)

/**
 * --------8.2 Date And Time Methods----------
 */

let completeDateAndTime = new Date();
console.log(completeDateAndTime)

// Get Full year
console.log(completeDateAndTime.getFullYear());

// Get Month
console.log(completeDateAndTime.getMonth());

// Get Week Day
console.log(completeDateAndTime.getDay());//0 to 6 (days)
// 0 - sunday, 1 - Monday and so on till 6 - Saturday

// Get Month Day
console.log(completeDateAndTime.getDate());

// Get Hours

console.log(completeDateAndTime.getHours());

// Get Minutes
console.log(completeDateAndTime.getMinutes());

// Get seconds
console.log(completeDateAndTime.getSeconds());

// Get Miliseconds
console.log(completeDateAndTime.getMilliseconds());
/**
 * --------8.3 Digital Clock---------
 */

let hourHand = document.querySelector('.hour');
let minHand = document.querySelector('.minute');
let secHand = document.querySelector('.second');

let ticking = ()=>{
    let currentDate2 = new Date();

    let getHour = currentDate2.getHours();
    let getMin = currentDate2.getMinutes();
    let getSec = currentDate2.getSeconds();

    hourHand.textContent = getHour;
    minHand.textContent = getMin;
    secHand.textContent = getSec;
}
setInterval(ticking,1000);