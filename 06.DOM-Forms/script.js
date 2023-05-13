// Form Events (Submit Form)
/**
 * -------6.1 Submit Event-------
 */
let form = document.querySelector('.sign-up-form');

//one way of getting data using "id"
let email = document.querySelector('#email');
let password = document.querySelector('#password');
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log(email.value,password.value);
//     //another process of getting element in form event through there name
//     console.log(form.userEmail.value,form.userPassword.value)
// })

/**
 * --------6.2 Regular Expression(Regex)--------
 * It is a pattern of Character used to do pattern matching Or we can say for "Data Validation".
 */

// Implementation of password validation

// Length At least = 8;
// At least Contains one Upper case letter
// At least Contains one Lower case letter
// At least Contains one digit 0 to 9
let passwordPattern = "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$"
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log(email.value,password.value);
//     //another process of getting element in form event through there name
//     console.log(form.userEmail.value,form.userPassword.value)
//     let passwordValue = password.value;
//     console.log(passwordValue)
//     let result = passwordValue.match(passwordPattern);
//     if(result){
//         console.log("Your password is strong");
//     }else{
//         console.log("Try again");
//     }
// })

/**
 * ------6.3 Basic Form Validation-------
 * Basic form validation using Regex
 */

// Implement username Validation
// username can consist of only A-Z or a-z
// Length of username between 6 to 12

let usernamePattern = /^[A-Za-z]{6,12}$/

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let username = email.value;
    console.log(username)
    let result = usernamePattern.test(username);
    if(result){
        console.log("User name is valid");
    }else{
        console.log("Username is Invalid try Again");
    }
})

/**
 * -----6.4 Keyboard Event-----
 */

email.addEventListener('keyup',(e)=>{
    if(usernamePattern.test(e.target.value)){
        // console.log("Passed");
        email.setAttribute('class','success');
    }else{
        // console.log("Failed");
        email.setAttribute('class','error')
    }
})

// BOM :- Browser Object Model